# Mock E-Commerce Cart 

A full-stack shopping cart web app built for the **Vibe Commerce** screening test.  
Implements a simple e-commerce flow: browse products, add/remove from cart, view totals, and perform a mock checkout. All with REST API integration.

<div align="center">

![React](https://img.shields.io/badge/Frontend-React-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-darkgreen)
  
</div>

---



### Demo 
<img src="frontend/public/screenshots/demo.gif" alt="Demo is loading please wait!" height="500px"/>


### Screenshots

  <img src="frontend/public/screenshots/Screenshot (286).png" height="350px"/>
<img src="frontend/public/screenshots/Screenshot (288).png" height="350px"/>

  <details>
    <summary>More Screenshots</summary>
      <img src="frontend/public/screenshots/Screenshot (287).png" height="350px"/>

  <img src="frontend/public/screenshots/Screenshot (290).png" height="350px"/>
  <img src="frontend/public/screenshots/Screenshot (291).png" height="350px"/>
  </details>


##  Tech Stack

| **Component**       | **Technology**       |
|----------------------|----------------------|
|  **Frontend**      | React (Vite)         |
|  **Backend**       | Node.js + Express    |
|  **Database**      | MongoDB              |
|  **API Architecture** | REST              |

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
| `POST` | `/api/orders/checkout` | Mock checkout; returns receipt. |

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

<details>
  <summary>Optional Backend Tests</summary>

```bash
# in new terminal
node test.js
```
</details>



### 3 Frontend Setup

```bash
# in new terminal
cd  Mock-Ecom-Cart/frontend
npm install
npm run dev
```

##  Credits
Built by [Dheeraj Chintala](https://github.com/Dheeraj-Chintala)  
for the **Nexora**  assignment.






