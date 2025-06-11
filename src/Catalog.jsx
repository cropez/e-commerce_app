import React from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import GpuImage from './Assets/GPU_exm.png';

const categories = [
  {
    title: 'Gaming GPUs',
    image: GpuImage,
    description: 'High-performance graphics cards for gamers.',
  },
  {
    title: 'Workstation GPUs',
    image: GpuImage,
    description: 'Reliable power for design, AI, and 3D rendering.',
  },
  {
    title: 'Mining GPUs',
    image: GpuImage,
    description: 'Efficient mining-focused graphic processors.',
  },
  {
    title: 'Budget GPUs',
    image: GpuImage,
    description: 'Affordable options for casual users and students.',
  },
];

const Catalog = ({ addToCart }) => {
  return (
    <>
      <Box
        sx={{
          height: '80vh',
          backgroundImage: `url(${GpuImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          px: 2,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
        />

        <Box sx={{ zIndex: 1 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
            CUSTOM IS JUST BETTER
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button variant="contained" color="primary">
              Shop Gaming GPUs
            </Button>
            <Button variant="contained" color="secondary">
              Shop All GPUs
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ px: 4, py: 6 }}>
        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="160"
                  image={category.image}
                  alt={category.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {category.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View More</Button>
                  <Button size="small" onClick={() => addToCart(category)}>
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Catalog;
