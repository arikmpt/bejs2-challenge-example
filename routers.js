const express = require('express')
const router = express.Router()
const userController = require('./controllers/userControllers')

router.get('/', (req, res) => {
    return res.json({
        message: "Hello World"
    })
})

router.post('/users', userController.registerUser)

module.exports = router