const router = require('express').Router()
const Controller = require('../controllers/controller.js')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.post('/', Controller.create)
router.get('/', Controller.findAll)
router.delete('/:songId', Controller.delete)

module.exports = router