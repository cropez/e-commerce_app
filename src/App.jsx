import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import SignUp from "./pages/SignUP";
import ShoppingCart from "./ShoppingCart";
import Profile from "./pages/Profilepage";
import MainPage from "./pages/Mainpage";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import Catalog from "./pages/catalog";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [cart, setCart] = useState({});

  const addToCart = (product) => {
    setCart((prevCart) => {
      const newQuantity = prevCart[product.title]
        ? prevCart[product.title].quantity + 1
        : 1;
      return {
        ...prevCart,
        [product.title]: { ...product, quantity: newQuantity },
      };
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
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header
        isAuth={isAuth}
        logout={logout}
        cartSize={Object.keys(cart).length}
      />
      <Box sx={{ flex: 1 }}>
        <Routes>
          <Route
            path="/"
            element={
              isAuth ? <Navigate to="/MainPage" /> : <Login login={login} />
            }
          />
          <Route
            path="/sign-up"
            element={isAuth ? <Navigate to="/MainPage" /> : <SignUp />}
          />
          <Route path="/catalog" element={<Catalog addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/MainPage" element={<MainPage />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
