const mongoose = require('mongoose');
const {Schema} = mongoose;

const noteSchema = new Schema ({
    title: String,
    text: {type: String, required: true},
    color: String,
    createdAt: Date

})

mongoose.model('notes',noteSchema);