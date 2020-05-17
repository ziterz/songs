'use strict';
const { generate_password } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {

  class User extends sequelize.Sequelize.Model { }

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'email required'
        },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'password required'
        },
      }
    },
  },
  {
    hooks: {
      beforeCreate (user) {
        user.password = generate_password(user.password)
      }
    },
    sequelize,
    modelName: 'User'
  })
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};