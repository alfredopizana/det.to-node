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

Get Post By Id

Create Post 

Update Post by Id

Delete Post by Id

Add Comment by Post Id

*/
//Get All Posts
function getAll(){
    return Post.find();
}
function getAllByUserId({userId}){
    return Post.find({userId})
}
module.exports = {
    getAll,
    getAllByUserId
}