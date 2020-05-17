const {User} = require('../models')
const {comparePassword} = require('../helpers/bcrypt')
const {generateToken} = require('../helpers/jwt')

class UserController{
    static register(req, res, next){
        let {email, password} = req.body
        User.create({
            email,
            password
        })
            .then(data => {
                res.status(201).json({
                    id, 
                    email,
                    password
                })
            })
            .catch(err => {
                next(err)
            })
    }
    static login(req, res, next){
        let {email, password} = req.body
        User.findOne({
            where: {email}
        })
            .then(data => {
                if(data){
                    let compare = comparePassword(password, data.password)
                    if(compare){
                        let {id, email} = data
                        let access_token = generateToken({
                            id,
                            email
                        })
                        res.status(200).json({
                            access_token
                        })
                    } else {
                        throw{
                            code: 400,
                            message: `password not match`
                        }
                    }
                } else {
                    throw{
                        code: 400,
                        message: `data not found`
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = UserController