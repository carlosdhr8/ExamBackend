'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('t001_transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NU_ID: {
        type: Sequelize.INTEGER
      },
      VA_DESCRIPTION: {
        type: Sequelize.STRING
      },
      FE_CREATE_ON: {
        type: Sequelize.DATE
      },
      VA_AMOUNT: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('t001_transactions');
  }
};