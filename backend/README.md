# Hyper-Local Delivery Dispatcher – Backend

## Overview

Hyper-Local Delivery Dispatcher is a real-time delivery management backend designed for local businesses such as pharmacies, grocery stores, bakeries, and neighborhood shops.

The platform solves common local delivery problems:

* Customers place orders through phone calls with no visibility.
* Store owners manually manage deliveries.
* Riders are difficult to track.
* Customers don't know order status or ETA.

This backend provides:

* Authentication with role-based access
* Customer order management
* Store management
* Rider assignment
* Real-time location tracking
* Delivery status updates
* Earnings tracking
* Socket.io integration for live updates

---

## Roles

### Customer

* Register/Login
* Browse stores
* Place orders
* Track deliveries
* View order history

### Admin / Store Owner

* Create and manage stores
* View incoming orders
* Assign riders
* Track live rider locations
* Dashboard analytics

### Rider

* View assigned orders
* Share live location
* Update delivery status
* View earnings

---

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* Socket.io
* Cookie Parser
* CORS

---

## Folder Structure

```text
backend
│
├── APIs
│   ├── admin_api.js
│   ├── auth_api.js
│   ├── customer_api.js
│   ├── order_api.js
│   ├── rider_api.js
│   └── store_api.js
│
├── middleware
│   └── VerifyToken.js
│
├── models
│   ├── CartModel.js
│   ├── EarningsModel.js
│   ├── NotificationModel.js
│   ├── OrderModel.js
│   ├── ProductModel.js
│   ├── RiderLocationModel.js
│   ├── StoreModel.js
│   └── UserModel.js
│
├── server.js
├── request.http
├── .env
└── package.json
```

---

## Authentication

JWT authentication with cookies.

Protected routes use:

```js
verifyToken("admin")
verifyToken("rider")
verifyToken("customer")
verifyToken()
```

---

## Database Models

### User

Stores customer, rider, and admin information.

### Store

Stores pharmacy/grocery/store information.

### Product

Products available in stores.

### Cart

Customer temporary cart.

### Order

Central order tracking model.

### RiderLocation

Stores live coordinates.

### Earnings

Stores rider earnings.

### Notification

Stores user notifications.

---

## API Endpoints

### Auth APIs

```http
POST /auth/register
POST /auth/login
GET /auth/profile
POST /auth/logout
```

### Store APIs

```http
POST /store-api/create
GET /store-api/all
GET /store-api/:id
```

### Order APIs

```http
POST /order-api/create
GET /order-api/all
PUT /order-api/assign/:id
PUT /order-api/status/:id
```

### Rider APIs

```http
GET /rider-api/orders
GET /rider-api/earnings
PUT /rider-api/location
```

### Customer APIs

```http
GET /customer-api/orders
POST /customer-api/cart/add
GET /customer-api/cart
```

### Admin APIs

```http
GET /admin-api/dashboard
GET /admin-api/riders
GET /admin-api/analytics
```

---

## Socket Events

```js
locationUpdate
receiveLocation
newOrder
riderAssigned
orderDelivered
```

---

## Environment Variables

Create a .env file:

```env
MONGO_URI=your_mongodb_uri
SECRET_KEY=your_secret_key
PORT=5002
```

---

## Installation

Install dependencies:

```bash
npm install
```

Start server:

```bash
nodemon server.js
```

---

## Future Improvements

* Google Maps route optimization
* Delivery ETA prediction
* Push notifications
* Payment gateway integration
* OTP delivery verification
* AI dispatch suggestions

---

Built with MERN + Socket.io for real-time hyper-local delivery systems.
