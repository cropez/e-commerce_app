import React from 'react';
import { Container, Grid, Typography, Button, Card, CardContent, Divider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
});

export default function Profile() {
  const profileData = {
    firstName: 'test',
    lastName: 'test',
    role: 'Admin',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Grid container justifyContent="center" mt={10}>
          <Typography variant="h4" gutterBottom>
            Profile
          </Typography>
        </Grid>
        <Divider sx={{ marginY: 3 }} />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Personal information</Typography>
                <Typography variant="body1">Username {profileData.firstName}</Typography>
                <Typography variant="body1">surname {profileData.lastName}</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={8}>
            <Card>
              <CardContent>
                <Typography variant="body1">{profileData.bio}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid container spacing={2} mt={3}>
            <Grid item xs={12} sm={4} md={2}>
              <Button variant="contained" color="secondary" fullWidth>
              Edit profile
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}