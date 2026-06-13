import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/admin/Dashboard";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes(){

return(

<Routes>

<Route
path="/"
element={
<Navigate to="/login"/>
}
/>

<Route
path="/login"
element={<Login/>}
/>

<Route
path="/admin"
element={
<ProtectedRoute>
<Dashboard/>
</ProtectedRoute>
}
/>

</Routes>

)

}

export default AppRoutes;