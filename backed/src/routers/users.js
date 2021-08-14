const express = require("express")
const router = express.Router()
const koders =  require("../usecases/users")
router.get("/",async (request,response)=>{
    try{
        //Code here
    }
    catch(error){
        response.status(400)
        response.json({
            sucess: false,
            message: "",
            error: error.message
        })
    }
})
router.post("/",async (request,response)=>{
    try {
        //Code here
    } catch (error){
        response.status(400)
        response.json({
            sucess: false,
            message: "",
            error: error.message
        })
    }
})
router.delete("/:id", async (request,response)=>{
    try{
        //Code here

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
        //Code here
    } catch(error){
        response.status(400)
        response.json({
            sucess: false,
            message: "",
            error: error.message
        })
    }
})
module.exports = router