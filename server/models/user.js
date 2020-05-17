'use strict';
const {generatePassword} = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model{}

  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `please fill this field`
        },
        isEmail: {
          args: true,
          msg: `this is not an email`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `please fill this field`
        },
        len: {
          args: [6,30],
          msg: `password length must between 6-30`
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (user) => {
        user.password = generatePassword(user.password)
      }
    },
    sequelize,
    modelName: 'User'
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};