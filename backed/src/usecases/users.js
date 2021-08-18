const User = require("../models/users")
/*
**Users**

Get All User

Get User by Id

Create User

Update User

Delete User by Id

*/

//Get All User
function getAll(){
    return User.find()
}

//Create User
function create(name, lastName, profileImage, githubUsername, websiteUrl, email, password){
    return User.create({name, lastName, profileImage, githubUsername, websiteUrl, email, password})
}

//Update User
function updateById(id, newData){
    return User.findByIdAndUpdate(id, newData)
}


module.exports = {
    getAll,
    create,
    updateById
}