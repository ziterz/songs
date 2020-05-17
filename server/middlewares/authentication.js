const { verify_token } = require('../helpers/jwt')
const { User } = require('../models')

function authentication (req, res, next) {
    const { access_token } = req.headers
    let decode = verify_token(access_token)

    User.findOne({ where: { email: decode.email } })
      .then(user => {
          if (user) {
              req.UserId = user.id
              next()
          } else {
              next(err)
          }
      })
      .catch(err => { next(err) })
}

module.exports = authentication