import Layout from "../components/Layout";
import { useCart } from "../context/CartContext";
import { Typography, List, ListItem, Button } from "@mui/material";

function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <List>
          {cartItems.map((item) => (
            <ListItem
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {item.name} (${item.price}) × {item.quantity}
              <Button
                variant="outlined"
                color="error"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </Layout>
  );
}

export default CartPage;
