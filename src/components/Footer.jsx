import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 5,
        py: 3,
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="body2">© 2025 MyShop. All rights reserved.</Typography>
    </Box>
  );
}

export default Footer;
