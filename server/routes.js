const express = require('express')
const router = express.Router();
const { CreateUser } = require("../controllers/controllerR")
const { SignIn } = require("../controllers/controllerSI")
const {ParkData} = require("../controllers/controllerH")
const {Name} = require("../controllers/controllerHN")
const {Nameget} = require("../controllers/Name")
router.get('/home',ParkData)
router.post('/posted', CreateUser)
router.post('/signIn', SignIn)
router.get('/name',Name)
router.get('/names',Nameget)


module.exports = router