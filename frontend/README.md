# Frontend Documentation

# Frontend Overview

The frontend of the LocalFlow project is responsible for delivering an interactive, responsive, and visually appealing experience for customers, riders, and administrators.

It acts as the communication layer between users and the backend services while providing modern interfaces for order management, store browsing, delivery tracking, analytics, and platform administration.

The frontend is built using React and Vite and integrates state management, routing, API communication, and real-time updates.

---

# Frontend Folder Structure

```text
frontend/
│
├── public/
├── src/
│
├── src/context/
├── src/utils/
├── src/components/
├── src/components/ui/
├── src/components/layout/
├── src/components/cards/
├── src/components/map/
├── src/layouts/
├── src/hooks/
├── src/api/
├── src/assets/
├── src/pages/
│      ├── admin/
│      ├── auth/
│      ├── customer/
│      └── rider/
├── src/routes/
├── src/store/
│
├── node_modules/
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# Detailed Explanation of Frontend Files and Folders

## public Folder

The public folder stores static resources that are directly accessible by the application.

### Why It Is Used

- Store public assets
- Handle icons
- Manage static files

---

## src Folder

The src folder contains the complete frontend source code.

### Why It Is Used

- Store components
- Manage pages
- Handle routing
- Organize application logic

---

## api Folder

The api folder handles communication with backend services.

### Why It Is Used

- Send API requests
- Handle responses
- Centralize backend communication

### Main Responsibilities

- Authentication APIs
- Store APIs
- Product APIs
- Order APIs
- Rider APIs

---

## components Folder

Contains reusable UI elements.

### Why It Is Used

- Promote code reuse
- Improve maintainability
- Build modular interfaces

---

### cards Folder

Responsible for displaying information cards.

Examples:

- StoreCard
- ProductCard

---

### ui Folder

Contains reusable UI components.

Examples:

- Buttons
- Category Pills
- Inputs

---

### layout Folder

Contains layout-related components.

Examples:

- Sidebar
- Bottom Navigation
- Top Navbar

---

### map Folder

Responsible for map-related functionality.

Examples:

- Rider location display
- Live tracking

---

## layouts Folder

Responsible for page structure.

Layouts include:

- DashboardLayout
- CustomerLayout
- RiderLayout

### Why It Is Used

- Maintain consistency
- Improve responsiveness
- Simplify page design

---

## hooks Folder

Contains reusable React hooks.

### Why It Is Used

- Simplify logic
- Reuse functionality

---

## pages Folder

Contains all application pages.

---

# Authentication Pages

Located inside:

```text
src/pages/auth
```

Includes:

- Login
- Register

---

# Customer Pages

Located inside:

```text
src/pages/customer
```

Features:

- Home
- Store Details
- Cart
- Checkout
- Orders
- Order Tracking
- Profile

---

# Rider Pages

Located inside:

```text
src/pages/rider
```

Features:

- Dashboard
- Available Orders
- Assigned Orders
- Earnings
- Profile

---

# Admin Pages

Located inside:

```text
src/pages/admin
```

Features:

- Dashboard
- Orders
- Riders
- Analytics
- Live Map
- Settings

---

## routes Folder

Responsible for protected navigation.

### Components

- ProtectedRoute
- RoleRoute

### Why It Is Used

- Protect secure pages
- Enforce role-based access

---

## store Folder

Responsible for state management.

### Technology Used

Zustand

### Handles

- Authentication state
- User information
- Session persistence

---

## utils Folder

Contains helper functions and reusable utilities.

---

# Frontend Features

## Authentication

- Login
- Registration
- Logout
- Protected Routes

---

## Customer Features

- Browse stores
- View products
- Add items to cart
- Checkout
- Track orders
- Order history
- Profile management

---

## Rider Features

- Dashboard
- Available orders
- Assigned orders
- Earnings
- Live location sharing

---

## Admin Features

- Dashboard
- Orders
- Riders
- Analytics
- Live map
- Settings

---

# Socket.IO Integration

Used for:

- Real-time rider tracking
- Order updates
- Location synchronization

Architecture:

```text
Socket.IO Client
        ↓
Express Backend
        ↓
Socket Events
        ↓
Live Updates
        ↓
User Interface
```

---

# Frontend Request Flow

```text
User Action
      ↓
React Component
      ↓
Axios Request
      ↓
Express Backend
      ↓
MongoDB Database
      ↓
Response
      ↓
UI Updated
```

---

# Responsive Design

The application supports:

- Mobile Devices
- Tablets
- Laptops
- Desktop Systems

Responsive elements include:

- Sidebars
- Bottom Navigation
- Cards
- Dashboards

---

# Frontend Installation and Running Commands

## Navigate to Frontend Folder

```bash
cd frontend
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

---

## Build For Production

```bash
npm run build
```

---

## Preview Production Build

```bash
npm run preview
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

---

# Frontend Deployment Using Vercel

## Step 1: Push Frontend To GitHub

```bash
git add .
git commit -m "Frontend deployment"
git push origin main
```

---

## Step 2: Create Vercel Account

- Sign in using GitHub
- Connect repository

---

## Step 3: Configure Project

### Root Directory

```text
frontend
```

### Build Command

```bash
npm run build
```

### Output Directory

```text
dist
```

---

## Step 4: Configure Environment Variables

```env
VITE_API_URL=
```

---

## Step 5: Deploy Application

Deployment includes:

- Installing dependencies
- Building the project
- Optimizing assets
- Publishing the application

---

# Frontend Advantages

## User Experience Benefits

- Responsive Design
- Smooth Navigation
- Modern Interface
- Faster Performance
- Better Accessibility
- Reusable Components

---

# Frontend Conclusion

The frontend of the LocalFlow project provides an interactive and responsive delivery platform experience for customers, riders, and administrators. It combines modern React development practices, state management, real-time communication, and responsive layouts to deliver a user experience similar to modern delivery applications such as Swiggy, Blinkit, and Instamart.