import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Paper,
} from "@mui/material";
import Layout from "../components/Layout";
import { useState } from "react";

function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Checkout data:", formData);
    setSubmitted(true);
    // TODO: You can clear cart here or show order ID
  };

  return (
    <Layout>
      <Paper sx={{ p: 4, maxWidth: 600, margin: "auto" }}>
        <Typography variant="h4" gutterBottom>
          Checkout
        </Typography>

        {submitted ? (
          <Typography variant="h6" color="green">
            ✅ Order placed successfully!
          </Typography>
        ) : (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Shipping Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Card Number"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                  type="text"
                  inputProps={{ maxLength: 16 }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth variant="contained" color="primary" type="submit">
                  Place Order
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Paper>
    </Layout>
  );
}

export default CheckoutPage;
