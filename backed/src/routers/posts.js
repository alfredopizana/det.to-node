const express = require("express")
const router = express.Router()
const posts =  require("../usecases/posts")
router.get("/",async (request,response)=>{
    try{
        const allPosts = await posts.getAll()
        response.json({
            sucess: true,
            message: "All Posts",
            data: {
                posts: allPosts
            }
        })
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
//Get All Post By User Id
router.get("/userId/:id",async (request,response)=>{
    try{
        const {id} = request.params
        const postsByUserId = await posts.getAllByUserId(id)
        response.json({
            succes: true,
            message: "Posts by UserId",
            data: {
                posts: postsByUserId
            }
        })
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