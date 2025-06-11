import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Box, InputBase } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header({ isAuth, logout, cartSize }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ mr: 4 }}>
          <Link to="/" style={{ color: "black", textDecoration: "none", fontWeight: "bold" }}>
            MyShop
          </Link>
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          {["GPU", "CPU", "New Arrivals", "Sale", "Our Story"].map((text) => (
            <Button
              key={text}
              component={Link}
              to={`/${text.toLowerCase().replace(" ", "-")}`}
              sx={{ color: "black", textTransform: "none" }}
            >
              {text}
            </Button>
          ))}
        </Box>

        {/* Right Side Icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            {isAuth ? (
              <>
                <Button
                  component={Link}
                  to="/profile"
                  sx={{ color: "black", textTransform: "none" }}
                >
                  Profile
                </Button>
                <Button
                  onClick={handleLogout}
                  sx={{ color: "black", textTransform: "none" }}
                >
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Button
                  component={Link}
                  to="/"
                  sx={{ color: "black", textTransform: "none" }}
                >
                  Log In
                </Button>
                <Button
                  component={Link}
                  to="/sign-up"
                  sx={{ color: "black", textTransform: "none" }}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Box>
          
          {/* Search */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: 2,
              px: 1,
              height: 30,
            }}
          >
            <SearchIcon fontSize="small" sx={{ color: "#999", mr: 1 }} />
            <InputBase placeholder="Search" sx={{ fontSize: 14, width: 120 }} />
          </Box>

          {/* Account Icon */}
          <IconButton component={Link} to={isAuth ? "/profile" : "/"}>
            <AccountCircleIcon />
          </IconButton>

          {/* Cart Icon */}
          <IconButton component={Link} to="/cart">
            <ShoppingCartIcon />
            {cartSize > 0 && (
              <span style={{
                position: 'absolute',
                top: -5,
                right: -5,
                backgroundColor: 'red',
                color: 'white',
                borderRadius: '50%',
                width: 16,
                height: 16,
                fontSize: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {cartSize}
              </span>
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;