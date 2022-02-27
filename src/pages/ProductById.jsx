import React from "react";
import ProductId from "../components/productbyid/ProductId";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import styled from "styled-components";
const Container = styled.div`
  padding: 0 15px;
`;
const ProductById = () => {
  return (
    <Container>
      <Header />
      <Navbar />
      <ProductId />
      <Footer />
    </Container>
  );
};

export default ProductById;
