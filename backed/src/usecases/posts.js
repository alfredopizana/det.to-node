const Post = require("../models/posts")

/*
**Post**

Get All Post 
e.g.
function getAll(){
    return etc..
}

Get All Post by Tag (Opcional)

Get All Post By User Id (Opcional)
*/


//Get All Posts
function getAll(){
    return Post.find();
}
function getAllByUserId({userId}){
    return Post.find({userId})
}

// Get Post By Id

function getById(id){
    return Post.findById(id)
}


// Create Post 

function createPost(post){

    let { title, content, featuredImage , tags , comments , likesCount , likes ,
           summary, userId, created }  = post
           const created = Date.now()
           likesCount = 0
           comments =[]

    return Post.create({ title, content, featuredImage , tags , comments , likesCount , likes ,
        summary, userId, created  })
}

// Update Post by Id

function updateById(id,dataToUpdate){
    return Post.findByIdAndUpdate(id,dataToUpdate);
}

// Delete Post by Id

function deleteById(id){
    return Post.findByIdAndDelete(id)
}
// Add Comment by Post Id


module.exports = {
    getAll,
    getAllByUserId,
    getById,
    updateById,
    createPost,
    deleteById
}