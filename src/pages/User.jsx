import Auth from "../components/user/Auth";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import styled from "styled-components";
const Container = styled.div`
  padding: 0 15px;
`;
const User = () => {
  return (
    <Container>
      <Header />
      <Navbar />
      <Auth />
      <Footer />
    </Container>
  );
};

export default User;
