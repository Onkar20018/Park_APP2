const express = require('express')
const router = express.Router();
const { CreateUser } = require("../controllers/controllerR")
const { SignIn } = require("../controllers/controllerSI")
const {ParkData} = require("../controllers/controllerH")

router.get('/home',ParkData)
router.post('/posted', CreateUser)
router.post('/signIn', SignIn)


module.exports = router