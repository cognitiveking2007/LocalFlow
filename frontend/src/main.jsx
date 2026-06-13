import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import App from "./App";
import "./index.css";

import useAuthStore from "./store/authStore";
import "leaflet/dist/leaflet.css";

function Root() {

  const getProfile =
    useAuthStore(
      state => state.getProfile
    );

  useEffect(() => {

    getProfile();

  }, []);

  return (

    <BrowserRouter>

      <App />

    </BrowserRouter>

  );

}

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <Root />

);