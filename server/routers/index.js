const router = require('express').Router()
const user = require('./user')
const song = require('./song')
router.get('/', (req,res) => {
  res.send('ok')
})

router.use('/', user)
router.use('/songs', song)

module.exports = router