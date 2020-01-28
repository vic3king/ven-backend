'use strict';

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Product = use('App/Models/Product');

class ProductSeeder {
  async run() {
    await Product.createMany([
      {
        id: '19c8c94e-0fc1-4619-9f7b-d985b41e84f1',
        name: 'UA Curry 3',
        description: 'latest curry sneaker design',
        price: 100,
        category: 'footwears',
        image: 'https://loremflickr.com/320/240',
        color: 'white',
      },
      {
        id: 'd9967caa-5020-4cde-9f67-99a4dd43678a',
        name: 'UA Curry 2',
        description: 'latest curry sneaker design',
        price: 90,
        category: 'footwears',
        image: 'https://loremflickr.com/320/240',
        color: 'paid',
      },
      {
        id: 'f49ba1fe-94a7-4293-8144-f442906dbb33',
        name: 'UA Curry 1',
        description: 'latest curry sneaker design',
        price: 80,
        category: 'footwears',
        image: 'https://loremflickr.com/320/240',
        color: 'paid',
      },
    ]);
  }
}

module.exports = ProductSeeder;
