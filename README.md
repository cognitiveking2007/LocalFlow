# LocalFlow Project Documentation

# Project Overview

LocalFlow is a full-stack MERN Hyperlocal Delivery Platform inspired by applications such as Swiggy, Zomato, Blinkit, and Instamart.

The platform enables customers to browse nearby stores, place orders, and track deliveries. Riders can accept orders and deliver them using real-time location updates, while administrators manage the entire platform through dedicated dashboards.

The project integrates React, Node.js, Express.js, MongoDB Atlas, JWT Authentication, Socket.IO, and Zustand to provide a modern, scalable, and responsive delivery ecosystem.

---

# Project Architecture

```text
Customer / Rider / Admin
            ↓
React Frontend
            ↓
Axios Requests + Socket.IO
            ↓
Express Backend
            ↓
Authentication Middleware
            ↓
MongoDB Atlas Database
            ↓
Response Returned
            ↓
Frontend Updated
```

---

# Main Folder Structure

```text
LocalFlow/
│
├── frontend/
│
├── backend/
│
├── README.md
│
└── .gitignore
```

---

# Core Modules

The project is divided into two major parts:

### Frontend

Responsible for:

- User Interface
- Routing
- State Management
- API Communication
- Real-Time Updates
- Responsive Design

---

### Backend

Responsible for:

- Business Logic
- Authentication
- Authorization
- Database Operations
- API Handling
- Socket.IO Communication

---

# User Roles

The system supports three user roles.

## Customer

Customers can:

- Browse nearby stores
- View products
- Add items to cart
- Place orders
- Track deliveries
- View order history
- Manage profile

---

## Rider

Riders can:

- View available orders
- Accept deliveries
- Manage assigned orders
- Share location in real time
- Track earnings
- Manage profile

---

## Admin

Administrators can:

- Access dashboard
- Manage orders
- Manage riders
- Monitor analytics
- View live map
- Manage stores
- Configure platform settings

---

# Customer Workflow

```text
Register
↓
Login
↓
Browse Stores
↓
View Products
↓
Add To Cart
↓
Checkout
↓
Place Order
↓
Track Order
↓
Receive Delivery
```

---

# Rider Workflow

```text
Register
↓
Login
↓
View Available Orders
↓
Accept Order
↓
Navigate To Store
↓
Deliver Order
↓
Receive Earnings
```

---

# Admin Workflow

```text
Login
↓
Dashboard
↓
Orders
↓
Riders
↓
Analytics
↓
Live Map
↓
Settings
```

---

# Real-Time Communication

Socket.IO is used to provide:

- Rider location updates
- Live order tracking
- Admin map updates
- Event communication

Architecture:

```text
Rider Device
      ↓
Socket.IO Client
      ↓
Express + Socket.IO Server
      ↓
Live Location Events
      ↓
Customer Tracking Page
      ↓
Admin Dashboard
```

---

# Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Zustand
- React Icons
- Framer Motion
- Recharts
- React Leaflet
- Socket.IO Client

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- BcryptJS
- Socket.IO
- Cookie Parser
- CORS
- Dotenv

---

## Deployment

### Frontend

- Vercel

### Backend

- Render

### Database

- MongoDB Atlas

---

# Installation

## Clone Repository

```bash
git clone https://github.com/cognitiveking2007/LocalFlow.git
```

---

## Backend Setup

```bash
cd backend

npm install

node server.js
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# Environment Variables

## Backend

```env
PORT=

MONGO_URI=

SECRET_KEY=

CLIENT_URL=
```

---

## Frontend

```env
VITE_API_URL=
```

---

# Deployment Flow

```text
React Frontend (Vercel)
           ↓
Axios Requests
           ↓
Express Backend (Render)
           ↓
MongoDB Atlas Database
           ↓
Response Returned
           ↓
UI Updated
```

---
# Live Deployment

## Frontend Deployment

Vercel:

https://local-flow-tau.vercel.app

---

## Backend Deployment

Render:

https://localflow-dhfb.onrender.com

# Features

## Authentication

- User Registration
- Login
- Logout
- JWT Authentication
- Password Encryption
- Role-Based Access Control

---

## Store Management

- Store Creation
- Store Listing
- Category Filtering
- Search Stores
- Ratings
- Open Status

---

## Product Management

- Product Listing
- Store Products
- Product Details

---

## Order Management

- Create Orders
- Assign Riders
- Update Order Status
- Track Orders
- View Order History

---

## Rider Management

- Available Orders
- Assigned Orders
- Earnings Dashboard
- Live GPS Tracking

---

## Admin Features

- Dashboard
- Orders
- Riders
- Analytics
- Live Map
- Settings

---

# Database Models

## UserModel

Stores:

- Name
- Email
- Password
- Role

Roles:

- Customer
- Rider
- Admin

---

## StoreModel

Stores:

- Owner
- Name
- Category
- Logo
- Address
- Location
- Ratings
- Open Status

Categories:

- Pharmacy
- Grocery
- Bakery

---

## ProductModel

Stores:

- Name
- Price
- Image
- Description
- Store Reference

---

## OrderModel

Stores:

- Customer
- Rider
- Store
- Products
- Total Amount
- Status

Statuses:

- Placed
- Assigned
- Picked Up
- Out For Delivery
- Delivered

---

## EarningsModel

Stores:

- Rider
- Amount
- Date

---

# Learning Outcomes

This project helped in understanding:

- Full-Stack MERN Development
- Authentication and Authorization
- Role-Based Access Control
- Protected Routes
- State Management using Zustand
- API Design
- MongoDB Atlas Integration
- Socket.IO Real-Time Communication
- Responsive Design
- Deployment using Vercel and Render
- Handling Production Issues
- CORS and Cookies
- Environment Variables
- Session Management

---

# Future Improvements

- Payment Gateway Integration
- Push Notifications
- Store Owner Dashboard
- Rating and Reviews
- Coupon System
- Chat System
- ETA Predictions
- AI-Based Recommendations
- Order History Analytics

---

# Conclusion

LocalFlow is a production-ready MERN Hyperlocal Delivery Platform that demonstrates complete full-stack development principles. The project combines authentication, role-based authorization, state management, real-time communication, responsive UI design, API development, and cloud deployment to create an experience similar to modern delivery platforms such as Swiggy, Zomato, Blinkit, and Instamart.