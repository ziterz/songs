'use strict';
const { generatePassword } = require('../helpers/bcrypt.js')

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {}

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Valid email address is required'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8],
          msg: 'Password must be longer than 8 characters'
        }
      }
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user) => {
        user.password = generatePassword(user.password)
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};