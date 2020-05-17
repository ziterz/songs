const { Song } = require('../models')

class SongController {
  
  static findAll (req,res,next) {
    Song.findAll({ where: { userId: req.currentUserId }})
    .then(data => {
      return res.status(200).json(data)
    })
    .catch(err => {
      next(err)
    })
  }

  static add(req,res,next) {
    const newSong = {
      title: req.body.title,
      artist: req.body.artist,
      userId: req.currentUserId
    }
    Song.create(newSong)
    .then(data => {
      return res.status(201).json({data})
    })
    .catch(err => {
      next(err)
    })
  }
  
  static delete (req,res,next) {
    console.log('controller');
    Song.destroy({where: {id: req.params.id}})
    .then(data =>{
      return res.status(201).json(data)
    })
    .catch(err => {
      next(err)
    })
  }
}

module.exports = SongController