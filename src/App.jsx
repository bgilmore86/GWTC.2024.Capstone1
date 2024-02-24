import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importing app styling
import './Nav.css';
import './App.css';



//import components
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Account from './components/Account';
import Navbar from './components/Navbar';
import ApparelList from './components/ApparelList';
import NavbarB from './components/NavbarB';



function App() {
  return (
  <div>
  <Navbar />
  <NavbarB /> 
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/apparellist" element={<ApparelList />} />
      </Routes>
      </BrowserRouter>
  </div>
  )
}

export default App
