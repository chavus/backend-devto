const express = require('express')
const comments = require('../usecases/comments')
const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const allComments = await comments.getAll()
        response.json({
            success: true,
            message: 'Here are all the comments yo',
            data: {
                allComments
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at getting the comments yo',
            error: error.message
        })
    }
})


router.post('/', async (request, response) => {
    try {
        const someComment = request.body
        const postedComment = await comments.postOne(someComment)
       
        response.json({
            success: true,
            message: 'There it is, your comment',
            data: {
                postedComment
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at posting the comment yo',
            error: error.message
        })
    }
})

router.patch('/:id', async (request, response) => {
    try {
        const {id} = request.params
        const {body} = request

        const updateComment = await comments.updateId(id, body)
       
        response.json({
            success: true,
            message: 'Post updated',
            data: {
                updateComment
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at updating the comment yo',
            error: error.message
        })
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const {id} = request.params
        const deleteComment = await comments.eraseById(id)
       
        response.json({
            success: true,
            message: 'Comment deleted',
            data: {
                id
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at deleting the comment yo',
            error: error.message
        })
    }
})

module.exports = router