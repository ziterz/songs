'use strict';
module.exports = (sequelize, DataTypes) => {
    const { Model } = sequelize.Sequelize

  class Song extends Model {}

  Song.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Title cannot be empty"
        },
        notNull: {
          args: true,
          msg: "Title cannot be null"
        }
      }
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "artist cannot be empty"
        },
        notNull: {
          args: true,
          msg: "artist cannot be null"
        }
      }
    },
    userId: DataTypes.INTEGER
  }, {sequelize});
  Song.associate = function(models) {
    Song.belongsTo(models.User, { foreignKey: "userId", targetKey: "id" });
  };
  return Song;
};