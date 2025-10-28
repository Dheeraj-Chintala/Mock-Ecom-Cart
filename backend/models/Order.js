import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      name: String,
      price: Number,
      quantity: Number,
      image: String,
    },
  ],
  total: Number,
  customerName: String,
  customerEmail: String,
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model('Order', orderSchema);
