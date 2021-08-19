const express = require("express")
const users = require('../usecases/users')
//const users = require('../models/users')
const router = express.Router()

router.get("/",async (request,response)=>{
    try{
        const Allusers = await users.getAll()
        response.json({
            success: true,
            message:"All Users",
            data:{
                users: Allusers
            }
        })
    }
    catch(error){
        response.status(400)
        response.json({
            sucess: false,
            message: "Error at get all koders",
            error: error.message
        })
    }
})
router.post("/",async (request,response)=>{
    try {
        const userData = request.body
        const userCreated = await users.create(userData)
        //console.log(userData, typeof userData)
        //console.log(userCreated)
        response.json({
            success: true,
            message: 'User Created',
            data: {
                users: userCreated
            }
        })

    } catch (error){
        response.status(400)
        response.json({
            sucess: false,
            message: 'Error at create User',
            error: error.message
        })
    }
})
router.delete("/:id", async (request,response)=>{
    try{
        const { id } = request.params
        const userDeleted = await users.deleteById(id)
        response.json({
            success: true,
            message: 'User Deleted',
            data:{
                users: userDeleted
            }
        })

    } catch(error){
        response.status(400)
        response.json({
            sucess: false,
            message: "",
            error: error.message
        })
    }
})
router.patch("/:id", async(request,response)=>{
    try{
        const { id } = request.params
        const { body: userData } = request
        console.log(userData)
        const userUpdated = await users.updateById( id, userData)
        response.json({
            success: true,
            message: 'User Updated',
            data:{
                users: userUpdated
            }
        })
    } catch(error){
        response.status(400)
        response.json({
            sucess: false,
            message: 'Error at update User',
            error: error.message
        })
    }
})
router.get("/:id",async (request,response)=>{
    try{
        const { id } = request.params
        const getById = await users.getById(id)

        response.json({
            success: true,
            message:"User get by Id",
            data:{
                users: getById
            }
        })
    }
    catch(error){
        response.status(400)
        response.json({
            sucess: false,
            message: "Error at get all koders",
            error: error.message
        })
    }
})
module.exports = router