import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Container } from "@mui/material";

export default function TechShopStory() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Tech Store
      </Typography>
      <Typography variant="body1" paragraph>
        At Tech Store, we specialize in high-end computer components. Whether you're a gamer,
        a developer, or a creator, you'll find the right gear here. From cutting-edge GPUs to the
        latest CPUs, we bring you performance that powers the future.
      </Typography>
    </Container>
  );
}
