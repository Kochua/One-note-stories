const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema ({
    ip:String,
})


mongoose.model('users',userSchema);