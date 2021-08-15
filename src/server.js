// definición del servidor
const express = require('express')
const usersRouter = require('./routers/users')
const commentsRouter = require('./routers/comments')
const postsRouter = require('./routers/posts')
const server = express()


//middlewares
server.use(express.json())


//routers
server.use('/users', usersRouter)
server.use('/comments', commentsRouter)
server.use('/posts', postsRouter)



module.exports = server





