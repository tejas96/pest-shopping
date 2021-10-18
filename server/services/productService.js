import Product from '../models/product';

class ProductService {
  constructor() {}

  async getAllProducts() {
    return Product.find();
  }
  async getProduct(id) {
    return Product.find({ _id: id });
  }
  async getSearchProducts({ title, category, type, ids }) {
    if (ids) {
      return Product.find({ _id: { $in: ids } });
    }
    return Product.find({ title: { $regex: `.*${title}.*` } });
  }
}

export default ProductService;
