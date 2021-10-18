import Carts from '../models/Carts';

class CartService {
  constructor() {}

  async getAllCartItems() {
    return Carts.find();
  }

  async getCartItem(userId) {
    return Carts.find({ user_id: userId });
  }

  async saveCartItem({ product_id, user_id, qty, totalAmount, timestamp }) {
    const cart = new Carts({
      product_id,
      user_id,
      qty,
      totalAmount,
      timestamp
    });
    return cart.save();
  }

  async updateCartItem({
    _id,
    product_id,
    user_id,
    qty,
    totalAmount,
    timestamp
  }) {
    return Carts.updateOne(
      { _id },
      { $set: { product_id, user_id, qty, totalAmount, timestamp } },
      { upsert: true },
      (s, e) => {
        console.log(e);
      }
    );
  }
  async deleteCartItem(id) {
    return Carts.deleteOne({ _id: id });
  }
}

export default CartService;
