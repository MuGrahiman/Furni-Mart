import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.css'
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./Apis/Store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer/>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
