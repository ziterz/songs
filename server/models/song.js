'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Song extends Model{}

  Song.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `please fill title field`
        }
      }
    },
    genre: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `please fill genre field`
        }
      }
    },
    singer: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `please fill singer field`
        }
      }
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Song'
  });
  Song.associate = function(models) {
    Song.belongsTo(models.User)
  };
  return Song;
};