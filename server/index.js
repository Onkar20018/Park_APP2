const express = require('express')
const app=express()
const port = 8000
const cors = require("cors");
require('./mongo');
const User = require('./schema');
const userRouter = require('./routes')

app.use(
    cors({
        origin:" http://localhost:19006",
        methods:["GET","POST","PUT","DELETE"]
}))

app.use(express.json());

app.use(userRouter)

app.listen(port,()=>{
    console.log(`Connected JS at Sever ${port} `)
})