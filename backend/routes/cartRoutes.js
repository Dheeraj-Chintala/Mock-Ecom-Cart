import express from 'express';
import CartItem from '../models/CartItem.js';
import Product from '../models/Product.js';

const router = express.Router();

const getCartSummary = async () => {
  const items = await CartItem.find();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  return { items, total };
};

// Get all cart items
router.get('/', async (req, res) => {
  const summary = await getCartSummary();
  res.json(summary);
});

// Add to cart
router.post('/', async (req, res) => {
  const { productId, quantity } = req.body;
  const product = await Product.findById(productId);
  if (!product) return res.status(404).json({ error: 'Product not found' });

  let item = await CartItem.findOne({ productId });
  if (item) {
    item.quantity += quantity;
    await item.save();
  } else {
    await CartItem.create({
      productId,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
    });
  }

  const summary = await getCartSummary();
  res.json(summary);
});

// Remove item
router.delete('/:id', async (req, res) => {
  await CartItem.findByIdAndDelete(req.params.id);
  const summary = await getCartSummary();
  res.json(summary);
});

// Update quantity
router.put('/:id', async (req, res) => {
  const { quantity } = req.body;
  const item = await CartItem.findById(req.params.id);
  if (!item) return res.status(404).json({ error: 'Item not found' });

  if (quantity <= 0) {
    await CartItem.findByIdAndDelete(req.params.id);
  } else {
    item.quantity = quantity;
    await item.save();
  }

  const summary = await getCartSummary();
  res.json(summary);
});

export default router;
