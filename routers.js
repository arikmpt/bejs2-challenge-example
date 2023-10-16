const express = require('express')
const router = express.Router()
const userController = require('./controllers/userControllers')
const checkToken = require('./middleware/checkToken')

router.get('/', (req, res) => {
    return res.json({
        message: "Hello World"
    })
})

router.post('/auth/register', userController.registerUser)
router.post('/auth/login', userController.loginUser)
router.get('/auth/authenticate', checkToken, userController.getProfile)

module.exports = router