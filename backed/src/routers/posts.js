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
// Get posts by id
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
//Post
router.post("/",async (request,response)=>{
    try {
        const somePost = request.body
        const posted = await posts.createPost(somePost)
        response.json({ 
            success: true,
            message: 'Post successfully created',
            data: {
                posts: posted            
            }
        })
    } catch (error){
        response.status(400)
        response.json({
            sucess: false,
            message: 'Error at creating post',
            error: error.message
        })
    }
})
// Delete
router.delete("/:id", async (request,response)=>{
    try{
        const {id} = request.params
        const deletePost = await posts.deleteById(id)
        response.json({ 
            success: true,
            message: 'The post has been deleted',
            data: {
                posts: deletePost            
            }
        })
    } catch(error){
        response.status(400)
        response.json({
            sucess: false,
            message: 'Error, try again',
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
            message: 'Error at updating post',
            error:  error.message
            
        })
    }
})


module.exports = router