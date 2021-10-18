import mongoose from 'mongoose';

const CartsSchema = new mongoose.Schema({
  product_id: String,
  user_id: String,
  qty: Number,
  totalAmount: Number,
  timestamp: {
    type: Date,
    default: Date.now()
  }
});

export default mongoose.model('Carts', CartsSchema);
