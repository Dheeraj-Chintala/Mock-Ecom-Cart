import express from 'express';
import CartItem from '../models/CartItem.js';
import Order from '../models/Order.js';
const router = express.Router();

router.post('/checkout', async (req, res) => {
  const { customerName, customerEmail } = req.body;
  const items = await CartItem.find();
  if (items.length === 0) return res.status(400).json({ error: 'Cart is empty' });

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const order = await Order.create({ items, total, customerName, customerEmail });

  await CartItem.deleteMany();
  res.json(order);
});

router.get('/', async (req, res) => {
  const orders = await Order.find().sort({ timestamp: -1 });
  res.json(orders);
});

export default router;
