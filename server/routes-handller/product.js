import ProductService from '../services/productService';

const productService = new ProductService();
export default {
  getAllProductsHandler: (req, res) => {
    productService
      .getAllProducts()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  },
  getProduct: (req, res) => {
    const id = req.params.id;
    productService.getProduct(id).then((result) => {
      res.status(200).json(result);
    });
  },
  getProducts: (req, res) => {
    const ids = req.body.ids;
    console.log(ids);
    productService.getAllProducts(ids).then((result) => {
      res.status(200).json(result);
    });
  },
  getSearchProducts: (req, res) => {
    try {
      const searchCriteria = req.body;
      console.log(searchCriteria);
      productService
        .getSearchProducts(searchCriteria)
        .then((result) => {
          res.status(200).json(result);
        })
        .catch((err) => {
          res.status(500).json(err.message);
        });
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
};
