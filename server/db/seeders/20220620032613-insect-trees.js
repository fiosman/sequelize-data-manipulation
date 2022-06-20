"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("InsectTrees", [
      {
        insectId: 1,
        treeId: 1,
      },
      {
        insectId: 1,
        treeId: 2,
      },
      {
        insectId: 1,
        treeId: 4,
      },
      {
        insectId: 1,
        treeId: 5,
      },
      {
        insectId: 2,
        treeId: 5,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("InsectTrees", null, {});
  },
};
