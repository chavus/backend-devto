// definición del servidor
const express = require('express')
const usersRouter = require('./routers/users')
const commentsRouter = require('./routers/comments')
const postsRouter = require('./routers/posts')
const authRouter = require('./routers/auth')
const server = express()
const cors = require('cors')


//middlewares
server.use(express.json())
server.use(cors())


//routers
server.use('/auth', authRouter)
server.use('/users', usersRouter)
server.use('/comments', commentsRouter)
server.use('/posts', postsRouter)



module.exports = server





