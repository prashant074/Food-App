const express = require('express')
const { registerController } = require('../controllers/authControllers,js')

const router = express.Router()

//route
//register || POST
router.post('/register', registerController)
module.exports = router 