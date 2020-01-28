'use strict';

const Product = use('App/Models/Product');

class ProductController {
  async create({ request }) {
    const { name, description, price, category, image, color } = request.all();

    const product = new Product();

    product.name = name;
    product.description = description;
    product.price = price;
    product.category = category;
    product.image = image;
    product.color = color;

    await product.save();

    return {
      status: 'success',
      message: 'Product created successfully',
      product,
    };
  }

  async getOne({ request, params, response }) {
    const product = await Product.query()
      .where('id', params.productId)
      .fetch();

    const { rows } = product;

    return response.status(200).json({
      status: 'success',
      product: rows,
    });
  }

  async getAll({ request, response }) {
    const { page = 1, per_page = 10 } = request.all();

    const products = await Product.query().paginate(page, per_page);
    const { rows, ...meta } = products;

    return response.status(200).json({
      status: 'success',
      data: {
        products: rows,
        meta: {
          totalItems: meta.pages.total,
          itemsPerPage: meta.pages.perPage,
          currentPage: meta.pages.page,
          totalPages: meta.pages.lastPage,
        },
      },
    });
  }
}

module.exports = ProductController;
