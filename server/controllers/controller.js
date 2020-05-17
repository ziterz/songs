const { User, Song } = require('../models')
const { compare_password } = require('../helpers/bcrypt')
const { generate_token } = require('../helpers/jwt')

class Controller {
    static register(req, res, next) { 
        console.log(req.body)
        const { email, password } = req.body
        
        User.create({ email, password })
          .then(new_user => {
              if (new_user) {
                let user = { id: new_user.id, email: new_user.email }
                  res
                    .status(201)
                    .json({ user })
              } else {
                  next(err)
              }
          })
          .catch(err => next(err))
    }

    static login(req, res, next) { 
        const { email, password } = req.body

        User.findOne({ where: { email } })
          .then(user => {
              if (user) {
                  let validate = compare_password(password, user.password)
                  if (validate) {
                      let token = {
                          id: user.id, email: user.email
                      }
                      let access_token = generate_token(token)
                      res
                        .status(200)
                        .json({ access_token })
                  } else {
                      next(err)
                  }
              } else {
                  next(err)
              }
          })
          .catch(err => {
              next(err)
          })
    }

    static create(req, res, next) { 
        const { name, artist } = req.body
        const { UserId } = req

        Song.create({ name, artist, UserId })
          .then(new_song => {
              if (new_song) {
                  res
                    .status(201)
                    .json({ new_song })
              } else {
                  next(err)
              }
          })
          .catch(err => { next(err) })
    }

    static findAll(req, res, next) { 
        const { UserId } = req

        Song.findAll({ where: { UserId } })
          .then(songs => {
              if (songs) {
                  res
                    .status(200)
                    .json({ songs })
                } else {
                    next(err)
                }
          })
          .catch(err => { next(err) })
    }

    static delete(req, res, next) {
        const { songId } = req.params

        Song.destroy({ where: { id: songId } })
          .then(deleted => {
              if(deleted) {
                  res
                    .status(204)
                    .json({ deleted })
              } else {
                  next(err)
              }
          })
          .catch(err => { next(err) })
    }

}

module.exports = Controller