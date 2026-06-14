# Backend Documentation

# Backend Overview

The backend of the LocalFlow project acts as the core processing unit of the application. It is responsible for handling user requests, managing business logic, processing data, maintaining security, storing information, and connecting the frontend with MongoDB Atlas.

The backend ensures smooth communication between customers, riders, and administrators while supporting features such as authentication, order management, store management, product handling, earnings tracking, and real-time location updates using Socket.IO.

---

# Backend Folder Structure

```text
backend/
│
├── APIs/
├── middleware/
├── models/
├── sockets/
├── utils/
├── node_modules/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

---

# Detailed Explanation of Backend Files and Folders

## APIs Folder

The `APIs` folder contains all backend routes and request handling functionality.

### Why It Is Used

- Handles user requests
- Controls application routes
- Processes backend operations
- Connects frontend interactions with database functionality
- Organizes API structure

### Main Responsibilities

- Authentication requests
- Customer operations
- Rider operations
- Admin operations
- Store management
- Product management
- Order management

---

## Middleware Folder

The `middleware` folder contains reusable components responsible for security and request validation.

### Why It Is Used

- Protect secure routes
- Verify users
- Improve security
- Maintain role-based access

### Main Responsibilities

- Authentication
- Authorization
- Request verification

---

## Models Folder

The `models` folder defines the structure of application data.

### Why It Is Used

- Organize application data
- Maintain consistency
- Support database operations

### Main Responsibilities

- User data
- Store information
- Product information
- Order management
- Earnings tracking

---

## Sockets Folder

The `sockets` folder manages real-time communication functionality.

### Why It Is Used

- Support live tracking
- Enable real-time updates
- Improve user experience

### Main Responsibilities

- Rider location updates
- Event communication
- Live map synchronization

---

## Utils Folder

The `utils` folder stores helper functions and reusable utilities.

### Why It Is Used

- Reduce code duplication
- Improve maintainability
- Simplify common operations

---

## node_modules Folder

This folder contains all installed backend packages and dependencies.

### Important Note

Generated automatically after running:

```bash
npm install
```

---

## .env File

The `.env` file stores sensitive configuration values.

### Why It Is Used

- Store MongoDB connection strings
- Store secret keys
- Manage environment configuration
- Improve security

### Common Variables

```env
PORT=
MONGO_URI=
SECRET_KEY=
CLIENT_URL=
```

---

## .gitignore File

The `.gitignore` file prevents unnecessary files from being uploaded to GitHub.

### Why It Is Used

- Ignore node_modules
- Protect environment files
- Keep repository clean

---

## package.json File

The `package.json` file manages backend dependencies and scripts.

### Main Responsibilities

- Store package information
- Manage scripts
- Handle dependency installation

---

## package-lock.json File

Stores exact versions of dependencies.

### Benefits

- Dependency consistency
- Stable installations
- Avoid version conflicts

---

## server.js File

The `server.js` file acts as the main entry point of the backend.

### Why It Is Used

- Start the server
- Configure middleware
- Connect APIs
- Initialize Socket.IO
- Establish database connection

### Main Responsibilities

- Server initialization
- Database connection
- Route registration
- Error handling

---

# API Modules

The backend consists of several API modules.

---

## auth_api.js

Responsible for authentication.

### Features

- User registration
- User login
- Logout
- Profile retrieval
- JWT generation

---

## customer_api.js

Responsible for customer operations.

### Features

- Customer requests
- Order management
- Profile operations

---

## rider_api.js

Responsible for rider functionality.

### Features

- Assigned orders
- Available orders
- Earnings management

---

## admin_api.js

Responsible for administrator operations.

### Features

- Dashboard operations
- Rider management
- Analytics

---

## store_api.js

Responsible for store operations.

### Features

- Create stores
- Retrieve stores
- Manage store details

---

## product_api.js

Responsible for product operations.

### Features

- Create products
- Retrieve products
- Product management

---

## order_api.js

Responsible for order lifecycle.

### Features

- Create orders
- Assign riders
- Update order status
- Order tracking

---

# Database Models

## UserModel

Stores:

- Name
- Email
- Password
- Role

### Roles

- Customer
- Rider
- Admin

---

## StoreModel

Stores:

- Owner
- Name
- Category
- Address
- Logo
- Location
- Ratings
- Open Status

### Categories

- Grocery
- Pharmacy
- Bakery

---

## ProductModel

Stores:

- Name
- Price
- Description
- Image
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

### Status Values

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

# Authentication and Authorization

The backend uses JWT Authentication.

### Features

- Registration
- Login
- Logout
- Password encryption
- Route protection
- Role-based authorization

### Middleware Used

- VerifyToken.js

---

# Socket.IO Integration

Socket.IO provides real-time communication.

### Features

- Live rider tracking
- Order updates
- Event communication
- Admin live map

### Architecture

```text
Rider Device
      ↓
Socket.IO Client
      ↓
Express Server
      ↓
Socket.IO Events
      ↓
Customer Tracking
      ↓
Admin Dashboard
```

---

# Backend Request Flow

```text
Frontend Request
        ↓
Express Server
        ↓
Middleware Execution
        ↓
API Route Handler
        ↓
MongoDB Database
        ↓
Response Returned
```

---

# Installation and Running Commands

## Navigate to Backend Folder

```bash
cd backend
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Backend Server

```bash
node server.js
```

---

# Backend Features

## Authentication

- Registration
- Login
- Logout
- JWT Authentication

---

## Store Management

- Create stores
- Retrieve stores
- Category management

---

## Product Management

- Create products
- Retrieve products

---

## Order Management

- Create orders
- Assign riders
- Track deliveries
- Update statuses

---

## Rider Management

- Available orders
- Assigned orders
- Earnings tracking

---

## Real-Time Tracking

- GPS updates
- Live location sharing
- Admin map synchronization

---

# Backend Deployment Process

The backend can be deployed using cloud hosting platforms such as Render.

---

# Backend Deployment Using Render

## Step 1: Push Backend Project to GitHub

```bash
git add .
git commit -m "Backend deployment setup"
git push origin main
```

---

## Step 2: Create Render Account

- Sign in using GitHub
- Connect repository

---

## Step 3: Create New Web Service

- Select repository
- Configure backend service

---

## Step 4: Configure Deployment Settings

### Root Directory

```text
backend
```

### Build Command

```bash
npm install
```

### Start Command

```bash
node server.js
```

---

## Step 5: Configure Environment Variables

```env
PORT=
MONGO_URI=
SECRET_KEY=
CLIENT_URL=
```

---

## Step 6: Deploy Backend

Deployment includes:

- Dependency installation
- Database connection
- Server initialization
- API setup

---

# Backend Best Practices

## Recommended Practices

- Protect secret keys
- Keep .env private
- Validate requests
- Monitor server logs
- Organize APIs properly
- Handle errors effectively
- Maintain clean code structure

---

# Backend Conclusion

The backend serves as the core functional layer of the LocalFlow project. It manages authentication, business logic, database operations, order processing, rider management, and real-time communication. The backend ensures secure access, efficient processing, and smooth interaction between customers, riders, and administrators while providing a scalable foundation for a modern hyperlocal delivery platform.