'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Color.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,  // Disallow NULL values
      validate: {
        notNull: {
          msg: "Name cannot be null"
        },
        notEmpty: {
          msg: "Name cannot be an empty string"
        },
        isString(value) {
          if (typeof value !== 'string') {
            throw new Error("Name must be a string");
          }
        },
        len: {
          args: [2, 255],
          msg: "Name must be between 2 and 255 characters"
        },
        noEndingInY(value) {
          if (value.endsWith('y')) {
            throw new Error("Name must not end in 'y'");
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Color',
  });
  return Color;
};