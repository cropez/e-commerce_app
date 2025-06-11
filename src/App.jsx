import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Authorization from "./Authorization";
import Registration from "./registration"; 
import ShoppingCart from "./ShoppingCart";
import Profile from "./Profile";
import Catalog from "./Catalog";
import Footer from './components/Footer';
import { Box } from "@mui/material";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [cart, setCart] = useState({});

  const addToCart = (product) => {
    setCart((prevCart) => {
      const newQuantity = prevCart[product.title] ? prevCart[product.title].quantity + 1 : 1;
      return { ...prevCart, [product.title]: { ...product, quantity: newQuantity } };
    });
  };

  const removeFromCart = (productName) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[productName].quantity > 1) {
        newCart[productName].quantity -= 1;
      } else {
        delete newCart[productName];
      }
      return newCart;
    });
  };

  const login = () => setIsAuth(true);
  const logout = () => {
    setIsAuth(false);
    setCart({});
  };

  return (
    <Box sx={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }}>
      <Header isAuth={isAuth} logout={logout} cartSize={Object.keys(cart).length} />
      <Box sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={isAuth ? <Navigate to="/catalog" /> : <Authorization login={login} />} />
          <Route path="/sign-up" element={isAuth ? <Navigate to="/catalog" /> : <Registration />} />
          <Route path="/catalog" element={<Catalog addToCart={addToCart} />} />
          <Route path="/cart" element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Box>
      <Footer/>
    </Box>
  );
}

export default App;
