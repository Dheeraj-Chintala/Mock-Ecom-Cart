import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

const mockProducts = [
{
  id: "1",
  name: "Premium Wireless Headphones",
  price: 25499,
  image:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
  description: "High-quality wireless headphones with noise cancellation",
},
{
  id: "2",
  name: "Smart Watch Pro",
  price: 33999,
  image:
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
  description: "Advanced fitness tracking and notifications",
},
{
  id: "3",
  name: "Minimalist Backpack",
  price: 7650,
  image:
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
  description: "Sleek design with multiple compartments",
},
{
  id: "4",
  name: "Portable Bluetooth Speaker",
  price: 12750,
  image:
    "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
  description: "Waterproof speaker with 360° sound",
},
{
  id: "5",
  name: "Designer Sunglasses",
  price: 15300,
  image:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
  description: "UV protection with premium frames",
},
{
  id: "6",
  name: "Leather Wallet",
  price: 5100,
  image:
    "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
  description: "Genuine leather with RFID protection",
},
{
  id: "7",
  name: "Fitness Yoga Mat",
  price: 4250,
  image:
    "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&q=80",
  description: "Non-slip surface, eco-friendly material",
},
{
  id: "8",
  name: "Coffee Maker Deluxe",
  price: 21250,
  image:
    "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&q=80",
  description: "Programmable with built-in grinder",
},
{
  id: "9",
  name: "Desk Organizer Set",
  price: 2975,
  image:
    "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&q=80",
  description: "Bamboo construction, multiple compartments",
},
{
  id: "10",
  name: "LED Desk Lamp",
  price: 6800,
  image:
    "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80",
  description: "Adjustable brightness and color temperature",
},

];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany();
    await Product.insertMany(mockProducts);
    console.log("✅ Products Seeded!");
    process.exit();
  })
  .catch((err) => console.error(err));
