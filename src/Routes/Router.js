import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import ProductDetails from "../Pages/ProductDetails";
import Shop from "../Pages/Shop";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import ProtectRouter from "./Protect-Router";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"home"} />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route
        path="checkout"
        element={
          <ProtectRouter>
            <Checkout />
          </ProtectRouter>
        }
      />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
}

export default Router;
