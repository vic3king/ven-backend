'use strict';

const Validator = use('./Validator');

class CreateEvent extends Validator {
  get rules() {
    return {
      name: 'required|unique:products,name',
      description: 'required',
      price: 'required|integer',
      category: 'required',
      image: 'required',
      color: 'required',
    };
  }

  get messages() {
    return {
      'name.required': 'Name of product is required',
      'name.unique': 'Name of product is already being used.',
      'description.required': 'Description of product is required',
      'price.required': 'Price of product is required',
      'price.integer': 'Price has to be a number',
      'category.required': 'Category of product is required',
      'image.required': 'Image of product is required',
      'color.required': 'Color of product is required',
    };
  }
}

module.exports = CreateEvent;
