const { User } = require('../models/index.js')
const { verifyPassword } = require('../helpers/bcrypt.js')
const { generateToken } = require('../helpers/jwt.js')

class UserController {
    static register(req, res) {
        let { email, password } = req.body
        User.create({ email, password })
            .then(user => {
                // console.log(user);
                const { id, email } = user
                let msg = 'You have been successfully registered'
                res.status(201).json({ id, email, msg })
            })
            .catch(err => console.log(err))
    }

    static login(req, res) {
        let { email, password } = req.body
        User.findOne({ where: { email } })
            .then(user => {
                if (user) {
                    let { id, email } = user
                    let hash = user.password
                    if (verifyPassword(password, hash)) {
                        let access_token = generateToken({
                            id, email
                        })
                        res.status(200).json({ access_token })
                    } else {
                        throw {
                            msg: 'Wrong email or password'
                        }
                    }
                } else {
                    throw {
                        msg:'Looks like you have not registered'
                    }
                } 
            })
            .catch(err => console.log(err))
    }
}

module.exports = UserController