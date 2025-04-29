import Layout from "../components/Layout";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { Box } from "@mui/material";

function HomePage() {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          mt: 2,
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Layout>
  );
}

export default HomePage;

