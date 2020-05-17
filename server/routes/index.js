const router = require('express').Router()

const users = require('./users')
const songs = require('./songs')

router.use('/', users)
router.use('/songs', songs)

module.exports = router