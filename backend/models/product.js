'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Invoice}) {
      // define association here
      this.hasOne(Invoice, {foreignKey:'productId'})
    }
  }
  Product.init({
    id:{
      type: DataTypes.UUID,
      allowNull:false,
      unique:true,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4
    },
    name:{
      type: DataTypes.STRING,
      allowNull:false,
      unique:true,
    },
    price:{
      type: DataTypes.DOUBLE,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Product',
    tableName:'products',
    timestamps:true,
    paranoid:true
  });
  return Product;
};