import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const EMAIL = 'test';
const PASSWORD = 'test';

export default function Authorization() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [remember, setRemember] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const [passwordErr, setPasswordErr] = React.useState('');
  const [emailErr, setEmailErr] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) return setEmailErr('Enter email');
    if (!password) return setPasswordErr('Enter password');

    setLoading(true);

    await new Promise((res) => {
      setTimeout(() => {
        res();
      }, 1000);
    });

    let isErr = false;

    if (email !== EMAIL) {
      isErr = true;
      setEmailErr('Email is invalid');
    }

    if (password !== PASSWORD) {
      isErr = true;
      setPasswordErr('Password is invalid');
    }

    if (!isErr) {
      if (remember) {
        window.localStorage.setItem('auth', '1');
      }
      navigate('/catalog');
    } else {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <CssBaseline />
        <Grid container mt={25} justifyContent="center">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Authorization
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1, width: '100%' }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Username or Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailErr) setEmailErr('');
                }}
                error={!!emailErr}
                helperText={emailErr}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Parole"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (passwordErr) setPasswordErr('');
                }}
                error={!!passwordErr}
                helperText={passwordErr}
              />
              <FormControlLabel
                control={<Checkbox checked={remember} onChange={(e) => setRemember(e.target.checked)} color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={loading}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}