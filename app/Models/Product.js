'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');
const uuid = use('uuid');

class Product extends Model {
  static boot() {
    super.boot();

    this.addHook('beforeSave', async product => {
      if (!product.id) {
        product.id = uuid.v4();
      }
    });
  }

  static get incrementing() {
    return false;
  }
}

module.exports = Product;
