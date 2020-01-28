'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProductsSchema extends Schema {
  up() {
    this.create('products', table => {
      table
        .uuid('id')
        .primary()
        .unique();
      table
        .string('name', 254)
        .unique()
        .notNullable();
      table.string('description', 254).notNullable();
      table.integer('price', 254).notNullable();
      table.string('category').notNullable();
      table.string('image').notNullable();
      table.string('color').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('products');
  }
}

module.exports = ProductsSchema;
