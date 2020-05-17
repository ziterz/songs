const bcrypt = require('bcrypt')

var salt = bcrypt.genSaltSync(10)

function generatePassword(password) {
    return bcrypt.hashSync(password, salt)
}

function comparePassword(password, hash) {
    return bcrypt.compareSync(password, hash)
}

module.exports = { generatePassword, comparePassword }