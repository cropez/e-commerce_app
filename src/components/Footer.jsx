import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      aria-label="Site Footer"
      sx={{
        width: "100%",
        backgroundColor: "#f5f5f5",
        borderTop: "1px solid #ddd",
        textAlign: "center",
        py: 2,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2025 MyShop. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;