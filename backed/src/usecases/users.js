const User = require('../models/users')
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
function create(object){
    return User.create(object)
}

//Update User
function updateById(id, newData){
    return User.findByIdAndUpdate(id, newData)
}

//Delete by Id

function deleteById(id){
    return User.findByIdAndDelete(id)
}

//Get User by Id
function getById(id){
    return User.findById(id)
}

module.exports = {
    getAll,
    create,
    updateById,
    deleteById,
    getById
}