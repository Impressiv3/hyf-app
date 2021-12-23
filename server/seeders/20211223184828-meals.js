"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Meals",
      [
        {
          title: "Pizza",
          description: "A very well made pizza for everyone",
          location: "Copenhagen",
          price: "120",
          available_seats: 12,
          max_seats: 12,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Hamburger",
          description: "A very well made pizza for everyone",
          location: "London",
          price: 110,
          available_seats: 10,
          max_seats: 10,
          date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Meals', null, {});
  },
};


