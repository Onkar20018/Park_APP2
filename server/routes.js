const express = require('express')
const router = express.Router();
const {CreateUser} = require("./controllerR")
const {SignIn} = require("./controllerSI")

router.get('/home',(req,res)=>{
    res.send('Hello World')
})
router.post('/posted',CreateUser)
router.post('/signIn',SignIn)


module.exports= router