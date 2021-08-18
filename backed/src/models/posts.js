const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        minLength: 2,
        maxLength: 300,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    featuredImage: {
        type: String,
        required: true
    },
    tags:[{
        type:String
    }],
    comments: [{
        type: String,
        user:{
            type: "ObjectId",
            ref: "comments"
        }
    }],
    likesCount:{
        type: Number,
        default:0
        
    },
    likes:[{
        type: Number,
        default:0
    }],
    summary:{
        type: String,
        required: true
    },
    userId:{
        type: "ObjectId",
        ref: 'users'
    }
})
//
const model = mongoose.model('posts', postSchema)
module.exports = model