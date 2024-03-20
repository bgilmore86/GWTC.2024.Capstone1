import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importing components into App
import { LoginButton } from './components/LoginButton';
import Home from './components/Home';
import Login from './components/Login';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';

import Products from './components/Products';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';

//styling
import "./Nav.css";

  
  function App() {
    return (
    <BrowserRouter>
      <Navbar />
      <LoginButton />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  
  );
    }

export default App;
