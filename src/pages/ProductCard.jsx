import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
  } from "@mui/material";
  import { useCart } from "../context/CartContext"; // ✅ Import context
  
  function ProductCard({ product }) {
    const { addToCart } = useCart(); // ✅ Use the hook
  
    const handleClick = () => {
      console.log("Clicked Add to Cart for:", product); // ✅ Verify it works
      addToCart(product); // ✅ Actually call it
    };
  
    return (
      <Card sx={{ maxWidth: 300, m: 2 }}>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
          <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleClick}>
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    );
  }
  
  export default ProductCard;
  