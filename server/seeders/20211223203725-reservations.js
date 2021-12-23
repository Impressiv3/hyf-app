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
      "Reservations",
      [
        {
          mealId: 1,
          reserved_seats: 6,
          first_name: "Balint",
          last_name: "Szabad",
          email: "whatever@hotmail.com",
          phone: "222555666",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          mealId: 11,
          reserved_seats: 4,
          first_name: "John",
          last_name: "Doe",
          email: "johndoe@hotmail.com",
          phone: "666555444",
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
    await queryInterface.bulkDelete("Reservations", null, {});
  },
};
