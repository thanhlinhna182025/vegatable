import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Image = styled.img`
  width: 100%;
`;

const PopularProduct = ({ product }) => {
  return (
    <Container>
      <Image src={product.image} />
    </Container>
  );
};

export default PopularProduct;
