import React from "react";
import styled from "styled-components";
import { DeleteSweepOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../redux/cartSlice";
import { useState, useEffect } from "react";

const ProductItemInfo = styled.div`
  display: flex;
  gap: 0 10px;
  padding: 10px 20px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
`;
const InfoContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const PriceContainer = styled.div`
  display: flex;
  gap: 0 20px;
  position: relative;
`;

const OldPrice = styled.div`
  font-size: 14px;
  color: #ccc;
  position: relative;
  &:before {
    content: "";
    width: 100%;
    height: 2px;
    background-color: #ccc;
    top: 50%;
    left: 0;
    position: absolute;
    transform: translateY(-50%);
  }
`;
const CancelContainer = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
  cursor: pointer;
`;
const Name = styled.span`
  color: #383838;
`;
const Money = styled.span`
  color: #0070c9;
`;
const QuantityContainer = styled.div`
  display: flex;
  gap: 0 20px;
`;
const Label = styled.div``;
const Quantity = styled.span`
  color: #0070c9;
`;
const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
`;
const Total = styled.span``;
const ProductItem = ({ item }) => {
  const disPatch = useDispatch();
  const handleRemove = (id, money) => {
    if (item.id === id) {
      disPatch(removeProduct({ id, money }));
    }
  };

  return (
    <ProductItemInfo>
      <ImageContainer>
        <Image src={item.image} />
      </ImageContainer>
      <InfoContainer>
        <PriceContainer>
          <Money>{item.newprice}.00$</Money>
          <OldPrice>{item.oldprice}.00$</OldPrice>
          <CancelContainer
            onClick={() =>
              handleRemove(item.id, item.newprice * item.quantityProduct)
            }
          >
            <DeleteSweepOutlined />
          </CancelContainer>
        </PriceContainer>
        <Name>{item.name}</Name>
        <QuantityContainer>
          <Label>Quantity :</Label>
          <Quantity>{item.quantityProduct}</Quantity>
        </QuantityContainer>
        <TotalContainer>
          <Label>Total :</Label>
          <Total>$ {item.totalMoney}.00</Total>
        </TotalContainer>
      </InfoContainer>
    </ProductItemInfo>
  );
};

export default ProductItem;
