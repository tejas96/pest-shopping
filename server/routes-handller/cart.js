import CartService from '../services/CartService';
const cartService = new CartService();

export default {
  getCartItemHandler: (req, res) => {
    try {
      cartService
        .getAllCartItems()
        .then((result) => {
          res.status(201).json(result);
        })
        .catch((err) => {
          res.status(401).json(err.message);
        });
    } catch (err) {
      res.status(401).json(err.message);
    }
  },
  getSingleCartItemHandler: (req, res) => {
    try {
      const id = req.params.id;
      cartService
        .getCartItem(id)
        .then((result) => {
          res.status(201).json(result);
        })
        .catch((err) => {
          res.status(401).json(err.message);
        });
    } catch (err) {
      res.status(401).json(err.message);
    }
  },
  postCartItemHandler: (req, res) => {
    try {
      const cart = req.body;
      cartService
        .saveCartItem(cart)
        .then((result) => {
          res.status(201).json(result);
        })
        .catch((err) => {
          res.status(401).json(err.message);
        });
    } catch (err) {
      res.status(401).json(err.message);
    }
  },
  updateCartItemHandler: (req, res) => {
    try {
      const cart = req.body;
      cartService
        .updateCartItem(cart)
        .then((result) => {
          res.status(201).json(result);
        })
        .catch((err) => {
          res.status(401).json(err.message);
        });
    } catch (err) {
      res.status(401).json(err.message);
    }
  },
  deleteCartItemHandler: (req, res) => {
    try {
      const id = req.params.id;
      cartService
        .deleteCartItem(id)
        .then((result) => {
          res.status(201).json(result);
        })
        .catch((err) => {
          res.status(401).json(err.message);
        });
    } catch (err) {
      res.status(401).json(err.message);
    }
  }
};
