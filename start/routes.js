'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.on('/').render('welcome');

Route.group(() => {
  Route.get('/', () => {
    return { message: 'Welcome to Ven10 assessment API (Version 1)' };
  });
}).prefix('v1');

// Products
Route.group(() => {
  Route.post('product', 'ProductController.create').validator('CreateProduct');

  Route.get('/', 'ProductController.getAll');

  Route.get('/:productId', 'ProductController.getOne');
}).prefix('v1/products');
