const mongoose = require('mongoose');

const Note = mongoose.model('notes');
const User = mongoose.model('users');

module.exports = app => {

    app.get('/api/notes', async (req, res) => {
      const notes = await Note.find();
      res.send(notes);
    });

    app.post('/api/notes', async (req,res ) => {
        const userIp = req.connection.remoteAddress.substring(7);

        let user = await User.findOne({ ip: userIp })

        if (user) {
            return res.send('yes')
        } else {

            const {title, text, color} = req.body;
        
            const user  = new User({
                ip:userIp
            })
            const note = new Note({
                title,
                text,
                color,
                createdAt: Date.now()
            });
    
            try {
                await note.save();
                await user.save();
                res.send(note);
                res.send(user);
            } catch(err) {
                res.status(422).send(err);
            }
        }


    })

    app.delete('/api/notes/:id', (req,res) => {
       Note.findByIdAndRemove(req.params.id)
       .then(note => res.send(note));
    })

    // app.post('/api/user', async (req,res ) => {
    //     const userIp = req.connection.remoteAddress.substring(7)

    //     const user  = new User({
    //         ip:userIp
    //     })
    //     try {
    //         await note.save();
    //         // await user.save();
    //         res.send(note);
    //         // res.send(user);
    //     } catch(err) {
    //         res.status(422).send(err);
    //     }


    // })
}