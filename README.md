# 🛒 Mock E-Commerce Cart — Vibe Commerce Assignment

A full-stack shopping cart web app built for the **Vibe Commerce** screening test.  
Implements a simple e-commerce flow: browse products, add/remove from cart, view totals, and perform a mock checkout — all with REST API integration.

---

## 🚀 Tech Stack

- **Frontend:** React (Vite )  
- **Backend:** Node.js + Express  
- **Database:** MongoDB   
- **API Architecture:** REST  
- **Deployment:** GitHub repo (no live hosting)

---

## 📂 Project Structure
mock-ecom-cart/
├── backend/
│   ├── server.js
│   ├── routes/
│   │   ├── products.js
│   │   └── cart.js
│   ├── models/
│   │   ├── Product.js
│   │   └── CartItem.js
│   ├── controllers/
│   └── db/
│       └── connection.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductList.jsx
│   │   │   ├── Cart.jsx
│   │   │   └── CheckoutModal.jsx
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── api.js
│   ├── public/
│   └── package.json
│
└── README.md


---

## 🧩 Features

### **Backend APIs**

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/api/products` | Fetches 5–10 mock products (id, name, price). |
| `POST` | `/api/cart` | Add item `{ productId, qty }` to cart. |
| `DELETE` | `/api/cart/:id` | Remove item from cart. |
| `GET` | `/api/cart` | Get all cart items + total price. |
| `POST` | `/api/orders/checkout` | Mock checkout; returns receipt `{ total, timestamp }`. |

**Optional:**  
- Persistent DB cart (mock user-based).  
- Integration with **Fake Store API** for real product data.  
- Error handling (invalid IDs, stock unavailable, etc.).

---

### **Frontend (React)**

- Product grid with **“Add to Cart”** buttons  
- **Cart View**: Shows items, quantity, subtotal, and total  
- **Update / Remove** items  
- **Checkout Form** (name, email)  
- On submission → Displays a **Receipt Modal** (mock confirmation)  
- Responsive design for mobile and desktop  

---

## 🛠️ Setup Instructions

### 1 Clone Repository
```bash
git clone https://github.com//mock-ecom-cart.git
cd mock-ecom-cart
```
### 2 Backend Setup
```bash
node createEnv.js
npm install
npm start
```
#### optional test backend
```bash
node test.js
```

### 3 Frotend Setup

```bash
cd ../frontend
npm install
npm run dev
```


