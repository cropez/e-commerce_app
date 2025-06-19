import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import GpuImage from '../Assets/GPU_exm.png';

const Mainpage = () => {
  const navigate = useNavigate();

  const handleCategoryFilter = (cat) => {
    // Optional: Save selectedCategory to localStorage, global state, or context if needed
    navigate('/catalog', { state: { category: cat } });
  };

  return (
    <>
      {/* Hero Section */}
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
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleCategoryFilter('Gaming')}
            >
              Shop Gaming GPUs
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleCategoryFilter('')}
            >
              Shop All GPUs
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Mainpage;
