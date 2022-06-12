'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('invoices', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        // defaultValue: Sequelize.fn('gen_random_uuid')//for postgres
        defaultValue: Sequelize.fn('UUID')//for mysql
      },
      userId:{
        type:Sequelize.UUID,
        allowNull:false,
        references:{
          model:{
            tableName:'users'
          },
          key:'id'
        }
      },
      productId:{
        type:Sequelize.UUID,
        allowNull:false,
        references:{
          model:{
            tableName:'products'
          },
          key:'id'
        }
      },
      expiredDate:{
        type:Sequelize.DATE,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('invoices');
  }
};