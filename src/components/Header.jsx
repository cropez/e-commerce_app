import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            MyShop
          </Link>
        </Typography>
        <Button color="inherit" component={Link} to="/cart">
          Cart
        </Button>
        <Button color="inherit" component={Link} to="/checkout">
          Checkout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
