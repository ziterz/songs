'use strict';

const {generatePassword} = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize

  class User extends Model {}

  User.init({
    email: {type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notNull: {
          args: true,
          msg: 'Email Required.'
        },
        isEmail: {
          args: true,
          msg: "Must be an email"
        }
      }
    },
    password: {type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
          args: true,
          msg: 'Password Required.'
        },
      len: {
          args: [4, 18],
          msg: 'Password length must between 4 or 18 Characters.'
        }
      }
    }
  }, { hooks: {
      beforeCreate(User, options) {
        User.password = generatePassword(User.password)
      }
    },sequelize });
  User.associate = function(models) {
    User.hasMany(models.Song, { foreignKey: 'userId' })
  };
  return User;
};