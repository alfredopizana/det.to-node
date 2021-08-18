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
// get posts by id
router.get('/:id', async (request,response)=>{
    try{
        const { id } = request.params
        const postById = await posts.getById(id)
        response.json({ 
            success: true,
            message: 'Post Found',
            data: {
                posts: postById            
            }
        })

    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Error at found post',
            error:  error.message
            
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

//update post by id
router.patch('/:id', async (request, response)=>{
    try{
        const updatedPost = await posts.updateById(request.params.id, request.body)
        response.json({ 
            success: true,
            message: 'Post updated ',
            data: {
                koders: updatedPost
            }
        })
    } catch (error) {
        response.status(400)
        response.json({ 
            success: false,
            message: 'Error at post update',
            error:  error.message
            
        })
    }
})


module.exports = router