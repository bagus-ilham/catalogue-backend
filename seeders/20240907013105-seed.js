'use strict';
const category = require('../data/category.json');
const product = require('../data/hijabs.json');
// const product2 = require('../data/hijabs2.json')
const color = require('../data/colors.json')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const dataCategory = category.map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el;
    })
    await queryInterface.bulkInsert('Categories', dataCategory, {});

    const dataProduct = product.map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el;
    })
    await queryInterface.bulkInsert('Products', dataProduct, {});
    
    const dataColor = color.map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el;
    })
    await queryInterface.bulkInsert('Colors', dataColor, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
    await queryInterface.bulkDelete("Products", null, {});
    await queryInterface.bulkDelete("Colors", null, {});
  }
};
