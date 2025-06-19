import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import GpuImage from '../Assets/GPU_exm.png';

const allProducts = [
  {
    title: 'RTX 4090',
    image: GpuImage,
    description: 'Ultimate Gaming GPU',
    category: 'Gaming',
    price: 2500,
  },
  {
    title: 'GTX 1660',
    image: GpuImage,
    description: 'Budget GPU for light gaming',
    category: 'Budget',
    price: 400,
  },
  {
    title: 'RTX A6000',
    image: GpuImage,
    description: 'For heavy workstation tasks',
    category: 'Workstation',
    price: 4800,
  },
  {
    title: 'RX 580',
    image: GpuImage,
    description: 'Popular for mining rigs',
    category: 'Mining',
    price: 300,
  },
  {
    title: 'RTX 4070',
    image: GpuImage,
    description: 'Solid choice for gamers',
    category: 'Gaming',
    price: 800,
  },
];

const Catalog = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const filtered = allProducts
    .filter((gpu) => !selectedCategory || gpu.category === selectedCategory)
    .sort((a, b) => {
      if (sortOrder === 'price-asc') return a.price - b.price;
      if (sortOrder === 'price-desc') return b.price - a.price;
      if (sortOrder === 'alpha') return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <Box sx={{ px: 4, py: 4 }}>
      {/* Filters */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              displayEmpty
              MenuProps={{
                PaperProps: {
                  sx: {
                    maxHeight: 300,
                    width: 250,
                  },
                },
              }}
              sx={{
                '.MuiSelect-select': {
                  whiteSpace: 'normal',
                  overflowWrap: 'break-word',
                },
              }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Gaming">Gaming</MenuItem>
              <MenuItem value="Budget">Budget</MenuItem>
              <MenuItem value="Workstation">Workstation</MenuItem>
              <MenuItem value="Mining">Mining</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <Select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              displayEmpty
              MenuProps={{
                PaperProps: {
                  sx: {
                    maxHeight: 300,
                    width: 250,
                  },
                },
              }}
              sx={{
                '.MuiSelect-select': {
                  whiteSpace: 'normal',
                  overflowWrap: 'break-word',
                },
              }}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="price-asc">Price: Low to High</MenuItem>
              <MenuItem value="price-desc">Price: High to Low</MenuItem>
              <MenuItem value="alpha">Alphabetical</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Product Cards */}
      <Grid container spacing={4}>
        {filtered.map((gpu, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="160"
                image={gpu.image}
                alt={gpu.title}
              />
              <CardContent>
                <Typography variant="h6">{gpu.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {gpu.description}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Price: ${gpu.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View More</Button>
                <Button size="small" onClick={() => addToCart(gpu)}>
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Catalog;
