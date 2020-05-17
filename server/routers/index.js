const router = require('express').Router()
const userController = require('../controllers/userController')
const songRouter = require('./songRouter')

router.post('/login', userController.login)
router.post('/register', userController.register)
router.use('/song', songRouter)

module.exports = router