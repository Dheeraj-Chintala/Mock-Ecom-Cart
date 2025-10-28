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
```
Mock-Ecom-Cart/
├─ backend/
│  ├─ models/
│  │  ├─ CartItem.js
│  │  ├─ Order.js
│  │  └─ Product.js
│  ├─ routes/
│  │  ├─ cartRoutes.js
│  │  ├─ orderRoutes.js
│  │  └─ productRoutes.js
│  ├─ server.js
│  └─ test.js
├─ frontend/
│  ├─ public/
│  ├─ src/
│  │  ├─ api/
│  │  │  ├─ api.ts
│  │  │  └─ types.ts
│  │  ├─ components/
│  │  │  ├─ CartSidebar.tsx
│  │  │  ├─ CheckoutModal.tsx
│  │  │  └─ ProductCard.tsx
│  │  ├─ contexts/
│  │  │  └─ CartContext.tsx
│  │  ├─ pages/
│  │  │  ├─ Index.tsx
│  │  ├─ api.js
│  │  ├─ index.css
│  │  ├─ main.tsx
│  ├─ tsconfig.node.json
│  └─ vite.config.ts
└─ README.md

```



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
git clone https://github.com/Dheeraj-Chintala/Mock-Ecom-Cart.git
cd Mock-Ecom-Cart
```
### 2 Backend Setup
```bash
cd backend
node createEnv.js
npm install
npm start
```
#### optional test backend
```bash
# in new terminal
node test.js
```

### 3 Frotend Setup

```bash
# in new terminal
cd  Mock-Ecom-Cart/frontend
npm install
npm run dev
```





