//Definicion de nuestro servidor


const  express = require("express")
const logger = require("./middlewares/logger")
const kodersRouter = require("./routers/koders")
const mentorsRouter = require("./routers/mentors")
const cellRouter = require("./routers/mentors")
const server = express()
//middlewars
server.use(express.json())
server.use(logger)
server.use("/koders",kodersRouter)
server.use("/mentors",mentorsRouter)
server.use("/cells",cellRouter)

//agregar routers

module.exports = server
