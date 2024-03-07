// Imports
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//importing components into App
import Home from './components/Home';
import Login from './components/Login';
import Account from './components/Account';
import Photography from './components/Photography';
import AboutUs from './components/AboutUs';

import Navbar from './components/Navbar';


import MainProducts from './components/MainProducts';
import Cart from './components/Cart';
import Book from './components/Book';
//List styling
import "./List.css";

// App component
function App() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  }

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter(i => i.id !== item.id));
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} onAdd={addToCart} onRemove={removeFromCart} />
          } />
        <Route path="/mainproducts" element={<MainProducts/>} />
        <Route path="/book" element={<Book/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
