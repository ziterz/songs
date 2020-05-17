const {Song} = require('../models')

class SongController{
    static addSong(req, res, next){
        let {title, genre, singer} = req.body
        let UserId = req.userid
        let newSong = {
            title,
            genre,
            singer,
            UserId
        }
        Song.create(newSong)
            .then(data => {
                res.status(201).json({
                    song: data
                })
            })
            .catch(err => {
                next(err)
            })
    }
    static readSong(req, res, next){
        let UserId = req.userid
        Song.findAll({
            where: {UserId}
        })
            .then(data => {
                res.status(200).json({
                    songs: data
                })
            })
            .catch(err => {
                next(err)
            })
    }
    static deleteSong(req, res, next){
        let {id} = req.params
        Song.destroy({
            where: {id}
        })
            .then(data => {
                if(data){
                    res.status(200).json({
                        message: `success delete song with id ${id}`
                    })
                } else {
                    throw{
                        code: 404,
                        message: `data with id ${id} doesn't exist`
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = SongController