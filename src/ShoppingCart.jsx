import React from 'react';
import { Grid, Typography, Button, Card, CardContent } from '@mui/material';

const ShoppingCart = ({ cart, removeFromCart }) => {
  const handleRemove = (productName) => {
    removeFromCart(productName);
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Shopping cart
      </Typography>
      <Grid container spacing={2}>
        {Object.keys(cart).length === 0 ? (
          <Typography>Your cart is empty</Typography>
        ) : (
          Object.entries(cart).map(([productName, productDetails]) => (
            <Grid item xs={12} md={6} key={productName}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{productName}</Typography>
                  <Typography variant="body1">Quantity: {productDetails.quantity}</Typography>
                  <Button onClick={() => handleRemove(productName)} color="secondary">
                    Delete
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default ShoppingCart;