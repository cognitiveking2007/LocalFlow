import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

function RoleRoute({

  role,

  children

}) {

  const user = useAuthStore(
    state => state.user
  );

  if (!user) {

    return <Navigate to="/login" />;

  }

  if (user.role !== role) {

    return <Navigate to="/" />;

  }

  return children;

}

export default RoleRoute;