'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert({tableName:'products'}, [{
      name: 'Starter Pack',
      price:99.99,
      createdAt:new Date(),
      updatedAt:new Date(),
    },{
      name: 'Gold Rush',
      price:299.99,
      createdAt:new Date(),
      updatedAt:new Date(),
    },{
      name: 'Diamond Kings',
      price:999.99,
      createdAt:new Date(),
      updatedAt:new Date(),
    }
  ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete({tableName:'products'}, null, {});
  }
};
