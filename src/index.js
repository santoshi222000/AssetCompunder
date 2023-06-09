import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

import { Provider } from "react-redux";
import store from './Store'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider store={store}> */}
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);
