import { Navigate } from "react-router-dom";

import useAuthStore from "../store/authStore";

function ProtectedRoute({

  children

}) {

  const user =
    useAuthStore(
      state => state.user
    );

  const loading =
    useAuthStore(
      state => state.loading
    );


  if (loading) {

    return (

      <div
        className="
        min-h-screen
        flex
        items-center
        justify-center
        "
      >

        Loading...

      </div>

    );

  }


  if (!user) {

    return <Navigate to="/login" />;

  }

  return children;

}

export default ProtectedRoute;