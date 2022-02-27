import styled from "styled-components";
import Cart from "../components/cart/Cart";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Container = styled.div`
  padding: 0 15px;
`;

const CartProduct = () => {
  return (
    <Container>
      <Header />
      <Navbar />
      <Cart />
      <Footer />
    </Container>
  );
};

export default CartProduct;
