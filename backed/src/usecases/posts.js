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


// Get Post By Id

function getById(id){
    return Posts.findById(id)
}


// Create Post 

// Update Post by Id

function updateById(id,dataToUpdate){
    return Posts.findByIdAndUpdate(id,dataToUpdate);
}

// Delete Post by Id

// Add Comment by Post Id

module.exports = {
    getById,
    updateById
}