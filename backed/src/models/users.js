const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 20,
        required: true,
        trim: true
    },
    lastName:{
        type: String,
        minLength: 2,
        maxLength: 20,
        required: true,
        trim: true
    },
    profileImage:{
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true,
        trim: true
    },
    githubUsername:{
        type: String,
        minLength: 2,
        maxLength: 20,
        trim: true
    },
    websiteUrl:{
        type: String,
        minLength: 2,
        maxLength: 50,
        trim: true
    },
    email:{
        type: String,
        required: true,
        match: /.+@.*\..*/
    },
    password:{
        type: String,
        required: true
    },
    created: {
        type: Date, 
        default: Date.now 
    }

})
//
const model = mongoose.model('users', userSchema)
module.exports = model