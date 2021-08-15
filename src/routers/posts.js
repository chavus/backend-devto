const express = require('express')
const posts = require('../usecases/posts')
const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const allPosts = await posts.getAll()
        response.json({
            success: true,
            message: 'Here are all the posts yo',
            data: {
                allPosts
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at getting the posts yo',
            error: error.message
        })
    }
})


router.post('/', async (request, response) => {
    try {
        const somePost = request.body
        const posted = await posts.postOne(somePost)
       
        response.json({
            success: true,
            message: 'There it is, your post',
            data: {
                posted
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at posting yo',
            error: error.message
        })
    }
})

router.patch('/:id', async (request, response) => {
    try {
        const {id} = request.params
        const {body} = request

        const updatePost = await posts.updateId(id, body)
       
        response.json({
            success: true,
            message: 'Post updated',
            data: {
                updatePost
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at updating the post yo',
            error: error.message
        })
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const {id} = request.params
        const deletePost = await posts.eraseById(id)
       
        response.json({
            success: true,
            message: 'Post deleted',
            data: {
                id
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at deleting the post yo',
            error: error.message
        })
    }
})

module.exports = router