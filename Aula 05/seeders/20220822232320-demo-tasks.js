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

    await queryInterface.bulkInsert('Tasks', [
      {name: 'Karen',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {name: 'Anyela',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {name: 'Pierre',
       createdAt: new Date(),
       updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
