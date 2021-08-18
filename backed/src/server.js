//Definicion de nuestro servidor


const  express = require("express")
const cors = require('cors')
const logger = require("./middlewares/logger")
const usersRouter = require("./routers/users")
const postsRouter = require("./routers/posts")
const server = express()
//middlewars
server.use(cors())
server.use(express.json())
server.use(logger)
server.use("/users",usersRouter)
server.use("/posts",postsRouter)

//agregar routers

module.exports = server
