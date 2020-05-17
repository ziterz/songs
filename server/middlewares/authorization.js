const { Song } = require('../models')

function authorization(req, res, next) {
    Song.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            if (result) {
                if (result.userId == req.currentUserId) {
                    return next()
                }
            } else {
                next({ name: 'Unauthorized' })
            }
        })
        .catch(err => {
            next({ name: 'Unauthorized' })
        })

}

module.exports = authorization