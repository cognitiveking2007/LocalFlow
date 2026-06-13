import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/admin/Dashboard";
import Orders from "./pages/admin/Orders";
import Analytics from "./pages/admin/Analytics";
import Riders from "./pages/admin/Riders";
import MapDashboard from "./pages/admin/MapDashboard";
import Settings from "./pages/admin/Settings";
import Stores from "./pages/admin/Stores";
import AddStore from "./pages/admin/AddStore";

import Home from "./pages/customer/Home";
import StoreDetails from "./pages/customer/StoreDetails";
import Cart from "./pages/customer/Cart";
import Checkout from "./pages/customer/Checkout";
import OrderTracking from "./pages/customer/OrderTracking";
import CustomerProfile from "./pages/customer/Profile";

import RiderDashboard from "./pages/rider/Dashboard";
import AssignedOrders from "./pages/rider/AssignedOrders";
import Earnings from "./pages/rider/Earnings";
import RiderProfile from "./pages/rider/Profile";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import ProtectedRoute from "./routes/ProtectedRoute";
import RoleRoute from "./routes/RoleRoute";
import AvailableOrders from "./pages/rider/AvailableOrders";
import CustomerOrders from "./pages/customer/Orders";



function App() {

  return (

    <Routes>

      {/* Auth */}

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />


      {/* Admin */}

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <RoleRoute role="admin">
              <Dashboard />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/orders"
        element={
          <ProtectedRoute>
            <RoleRoute role="admin">
              <Orders />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/analytics"
        element={
          <ProtectedRoute>
            <RoleRoute role="admin">
              <Analytics />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/riders"
        element={
          <ProtectedRoute>
            <RoleRoute role="admin">
              <Riders />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/stores"
        element={
        <ProtectedRoute>
        <RoleRoute role="admin">
        <Stores/>
        </RoleRoute>
        </ProtectedRoute>
        }
        />
        
        <Route

         path="/admin/add-store"

         element={

         <ProtectedRoute>

         <RoleRoute role="admin">

         <AddStore/>

          </RoleRoute>

        </ProtectedRoute>

         }

         />

      <Route
        path="/admin/map"
        element={
          <ProtectedRoute>
            <RoleRoute role="admin">
              <MapDashboard />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/settings"
        element={
          <ProtectedRoute>
            <RoleRoute role="admin">
              <Settings />
            </RoleRoute>
          </ProtectedRoute>
        }
      />


      {/* Customer */}

      <Route
        path="/customer"
        element={
          <ProtectedRoute>
            <RoleRoute role="customer">
              <Home />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/customer/store/:id"
        element={
          <ProtectedRoute>
            <RoleRoute role="customer">
              <StoreDetails />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/customer/cart"
        element={
          <ProtectedRoute>
            <RoleRoute role="customer">
              <Cart />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/customer/checkout"
        element={
          <ProtectedRoute>
            <RoleRoute role="customer">
              <Checkout />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route

        path="/customer/orders"

       element={

       <ProtectedRoute>

       <RoleRoute role="customer">

       <CustomerOrders/>

       </RoleRoute>

        </ProtectedRoute>

       }

        />

      <Route
        path="/customer/order/:id"
        element={
          <ProtectedRoute>
            <RoleRoute role="customer">
              <OrderTracking />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/customer/profile"
        element={
          <ProtectedRoute>
            <RoleRoute role="customer">
              <CustomerProfile />
            </RoleRoute>
          </ProtectedRoute>
        }
      />


      {/* Rider */}

      <Route
        path="/rider"
        element={
          <ProtectedRoute>
            <RoleRoute role="rider">
              <RiderDashboard />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/rider/orders"
        element={
          <ProtectedRoute>
            <RoleRoute role="rider">
              <AssignedOrders />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/rider/earnings"
        element={
          <ProtectedRoute>
            <RoleRoute role="rider">
              <Earnings />
            </RoleRoute>
          </ProtectedRoute>
        }
      />
      <Route
          path="/rider/available"
          element={
          <ProtectedRoute>
          <RoleRoute role="rider">
          <AvailableOrders/>
          </RoleRoute>
          </ProtectedRoute>
          }
      />

      <Route
        path="/rider/profile"
        element={
          <ProtectedRoute>
            <RoleRoute role="rider">
              <RiderProfile />
            </RoleRoute>
          </ProtectedRoute>
        }
      />

    </Routes>

  );

}

export default App;