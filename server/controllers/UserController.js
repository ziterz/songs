const { User } = require('../models')
const { generateToken } = require('../helpers/jwt')
const { comparePassword } = require('../helpers/bcrypt')

class UserController {
  static register (req,res,next) {
    let newUser = {
      email: req.body.email,
      password: req.body.password
    }
    User.create(newUser)
    .then(data => {
      const access_token = generateToken(newUser)
      return res.status(201).json({access_token})
    })
    .catch(err => {
        next(err)
      })
  }

  static login(req, res, next) {
    let { email, password } = req.body

    User.findOne({ where: { email: email } })
      .then(data => {
        if (data) {
          let decrypted = comparePassword(password, data.password)
          if (decrypted) {
            let payload = { id: data.id, email: data.email }
            let access_token = generateToken(payload)
            return res.status(200).json({
              'access_token': access_token
            })
          } else next({
            name: 'BadRequest',
            errors: [{ msg: 'Invalid Email/Password' }]
          })

        } else next({
          name: 'BadRequest',
          errors: [{ msg: 'Invalid Email/Password' }]
        })
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = UserController