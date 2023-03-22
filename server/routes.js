const express = require('express')
const router = express.Router();
const { CreateUser } = require("../controllers/controllerR")
const { SignIn } = require("../controllers/controllerSI")
const {ParkData} = require("../controllers/controllerH")
const {ParkData2} = require("../controllers/controllerH2")
const {ParkData3} = require("../controllers/controllerH3")
const {Name} = require("../controllers/controllerHN")
const {Nameget} = require("../controllers/Name")
router.get('/home',ParkData)
router.get('/home2',ParkData2)
router.get('/home3',ParkData3)
router.post('/posted', CreateUser)
router.post('/signIn', SignIn)
router.get('/name',Name)
router.get('/names',Nameget)


module.exports = router