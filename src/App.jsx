import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AttractionList from "./pages/AttractionList";
import Products from "./pages/Products";
import SingleProductPage from "./pages/SingleProductPage";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import Checkout from "./pages/Checkout";

import {LoginButton} from "./components/LoginButton";


import './Nav.css';

function App() {

  

  return (
    <BrowserRouter>
      <Navbar/>
      <LoginButton />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/attractions" element={<AttractionList />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<SingleProductPage />} />
        <Route path="/cart/1" element={<Cart />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
