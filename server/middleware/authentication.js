const {User} = require('../models')
const {verifyToken} = require('../helpers/jwt')

function authentication(req, res, next){
    let {access_token} = req.headers
    try {
        var decoded = verifyToken(access_token)
        let {id} = decoded
        User.findByPk(id)
            .then(data => {
                if(data){
                    req.userid = id
                    next()
                } else {
                    throw{
                        code: 401,
                        message: `not authenticated`
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    } catch(err) {
        next(err)
    }
}

module.exports = authentication