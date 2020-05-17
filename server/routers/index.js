const router = require('express').config()
const user = require('./user')
router.get('/', (req,res) => {
  res.send('ok')
})

router.use('/', user)

module.exports = router