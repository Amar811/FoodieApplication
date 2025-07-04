import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Register from './pages/Register';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Checkout from './pages/Checkout';
import MyOrders from './pages/MyOrders';
import ThankYou from './pages/ThankYou';

const App = () => {
  return (
    <BrowserRouter> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login"  element={<Login/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/my-order" element={<MyOrders/>}/>
        <Route path="/thank-you" element={<ThankYou/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
