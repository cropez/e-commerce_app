import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { Grid } from "@mui/material";

function HomePage() {
  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={2} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default HomePage;