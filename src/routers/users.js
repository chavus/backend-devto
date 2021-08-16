const express = require('express')
const users = require('../usecases/users')
const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const allUsers = await users.getAll()
        response.json({
            success: true,
            message: 'Get all users',
            data: {
                allUsers
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error getting all users',
            error: error.message
        })
    }
})

router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params
        const getSingleUser = await users.getOneById(id)

        response.json({
            success: true,
            message: 'Here is the user',
            data: {
                getSingleUser
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error getting the user',
            error: error.message
        })
    }
})

router.post('/', async (request, response) => {
    try {
        const userData = request.body
        const newUser = await users.postOne(userData)
    
        response.json({
            success: true,
            message: 'New user Created',
            data: {
                newUser
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error creating user',
            error: error.message
        })
    }
})

router.patch('/:id', async (request, response) => {
    try {
        const {id} = request.params
        const {body} = request

        const updatePost = await users.updateId(id, body)
       
        response.json({
            success: true,
            message: 'User updated',
            data: {
                updatePost
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error updating user',
            error: error.message
        })
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const {id} = request.params
        const deletePost = await users.eraseById(id)
       
        response.json({
            success: true,
            message: 'User deleted',
            data: {
                id
            }
        })
    }catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error deleting user',
            error: error.message
        })
    }
})

module.exports = router