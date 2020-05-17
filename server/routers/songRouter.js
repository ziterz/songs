const router = require('express').Router()
const songController = require('../controllers/songController')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

router.use(authentication)
router.get('/', songController.readSong)
router.post('/', songController.addSong),
router.delete('/:id', authorization, songController.deleteSong)

module.exports = router