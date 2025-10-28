// testApi.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

async function testAPI() {
  try {
    console.log("🧪 Testing API endpoints...\n");

    // 1️⃣ Get all products
    const productsRes = await API.get("/products");
    console.log("✅ GET /products");
    console.log(productsRes.data);
    const firstProductId = productsRes.data[0]?._id;
    if (!firstProductId)
      throw new Error("❌ No products found to test cart APIs.");

    // 2️⃣ Add product to cart
    const addCartRes = await API.post("/cart/", {
      productId: firstProductId,
      quantity: 2,
    });
    console.log("\n✅ POST /cart/");
    console.log(addCartRes.data);

    // 3️⃣ Get cart
    const cartRes = await API.get("/cart");
    console.log("\n✅ GET /cart");
    // console.log(cartRes.data);
    const firstCartItemId = cartRes.data.items?.[0]?._id;
    if (!firstCartItemId) throw new Error("❌ No cart items found.");

    // 4️⃣ Update cart quantity
    const updateRes = await API.put(`/cart/${firstCartItemId}`, {
      quantity: 3,
    });
    console.log("\n✅ PUT /cart/:id");
    console.log(updateRes.data);

    // 5️⃣ Remove item from cart
    const removeRes = await API.delete(`/cart/${firstCartItemId}`);
    console.log("\n✅ DELETE /cart/:id");
    console.log(removeRes.data);

    //  6️⃣ Checkout
    const addItemforCheckout = await API.post("/cart/", {
      productId: firstProductId,
      quantity: 2,
    });
    addItemforCheckout;
    const createOrderRes = await API.post("/orders/checkout/", {
      customerName: "Alice Smith",
      customerEmail: "alice@example.com",
      items: [{ productId: firstProductId, quantity: 1 }],
      total: 499.99,
    });
    console.log(createOrderRes.data);

    console.log("\n🎉 All tests completed successfully!");
  } catch (error) {
    console.error(
      "\n❌ API Test Failed:",
      error.response?.data || error.message
    );
  }
}

testAPI();
