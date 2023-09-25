import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Products from "./pages/products/Products";
import Contact from "./pages/contact/Contact";
import SingleProduct from "./pages/singleProducts/SingleProduct";
import Cart from "./pages/cart/Cart";
import ErrorPage from "./pages/error/ErrorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
