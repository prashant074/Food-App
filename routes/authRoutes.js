const express = require('express')
const { registerController } = require('../controllers/authControllers,js')
const { logincontroller } = require('../controllers/authControllers,js')

const router = express.Router()

//route
//register || POST
router.post('/register', registerController)

//login || POST
router.post('/login', logincontroller)
module.exports = router 