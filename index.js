const express = require('express')
const app = express()
const routerIndex = require('./routes/index')
const connectDB = require('./db/connection')
const cors = require('cors')
require('dotenv').config()
//middleware
app.use(express.json())
app.use(cors())
//route
app.use('/api/v1/task',routerIndex)

const PORT = 8000

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(8000,()=>{console.log(`server is listening to port ${PORT}...`)})
    } catch (error) {
        console.log(error)
    }
}

start()