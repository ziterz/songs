const router = require('express').Router()
const SongController = require('../controllers/SongController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)

router.get('/', SongController.findAll)
router.post('/', SongController.add)
router.delete('/:id', authorization, SongController.delete)

module.exports = router