'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Product}) {
      // define association here
      this.belongsTo(User, {foreignKey:'userId'})
      this.belongsTo(Product, {foreignKey:'productId'})
    }
  }
  Invoice.init({
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      allowNull:false,
      defaultValue:DataTypes.UUIDV4
    },
    userId:{
      type:DataTypes.UUID,
      allowNull:false,
      references:{
        model:{
          tableName:'users'
        },
        key:'id'
      }
    },
    productId:{
      type:DataTypes.UUID,
      allowNull:false,
      references:{
        model:{
          tableName:'products'
        },
        key:'id'
      }
    },
    expiredDate:{
      type:DataTypes.DATE,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Invoice',
    tableName:'invoices',
    timestamps:true,
    updatedAt:false,
    paranoid:false
  });
  return Invoice;
};