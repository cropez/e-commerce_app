import { Container } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>{children}</Container>
      <Footer />
    </>
  );
}

export default Layout;
