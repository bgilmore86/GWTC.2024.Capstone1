import React from "react";
import { useState } from "react";

//importing browser router for route endpoints
import { BrowserRouter, Routes, Route } from "react-router-dom";

//importing app styling
import "./Nav.css";
import "./App.css";

import "./ProductList.css";

//import components
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Account from "./components/Account";

import AttractionList from "./components/AttractionList";
import Cart from "./components/Cart";
import AboutUs from "./components/AboutUs";

import ProductList from "./components/ProductList";


import Navbar from "./components/Navbar";
import NavbarB from "./components/NavbarB";


//import photos?


function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Stonehenge",
      price: 29.99,
      image: "stonehenge.jpg",
      description:"description goes here",
    },
    //add more products here...
  ]);
//define functions for main app
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  //route paths to elements & nest navbar a/b to show diff routes/endpoints :: rough draft
  return (
    <div className="app">
      <NavbarB />
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/attractionlist" element={<AttractionList />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/productlist" element={<ProductList products={products} addToCart={addToCart} />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
