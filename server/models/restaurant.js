'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Restaurant.hasMany(models.Review, {foreignKey: 'restaurant_id'}),
      models.Restaurant.belongsTo(models.User, {foreignKey: "user_id"})
    }
  }
  Restaurant.init({
    restaurant_name: DataTypes.STRING,
    restaurant_address_1: DataTypes.STRING,
    restaurant_address_2: DataTypes.STRING,
    restaurant_rating: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Restaurant',
  });
  return Restaurant;
};