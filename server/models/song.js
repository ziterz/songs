'use strict';
module.exports = (sequelize, DataTypes) => {

  class Song extends sequelize.Sequelize.Model { }

  Song.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'name required'
        },
      }
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'artist required'
        },
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'UserId required'
        },
      }
    },
  },
  {
    sequelize,
    modelName: 'Song'
  })
  Song.associate = function(models) {
    Song.belongsTo(models.User)
  };
  return Song;
};