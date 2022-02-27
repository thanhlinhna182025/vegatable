import React from "react";
import styled from "styled-components";
import { ShoppingCartCheckout } from "@mui/icons-material";
import { useLocation, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { productslist } from "../../data";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import { Mobile, Tablet } from "../../globalStyle";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  background: url("https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-tree-background-green-background-colortreegreennatureleaf-image_55906.jpg");
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h5`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
`;
const Bottom = styled.div`
  display: flex;
  padding: 50px 100px;
  ${Tablet({ padding: "10px" })}
`;
const Left = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  align-items: center;
`;
const ImageContainer = styled.div`
  flex: 1;
  padding: 10px;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  cursor: crosshair;
  :hover {
    transform: scale(1.2);
    transition: all 0.5 ease;
  }
`;
const InfoContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 15px 0;
`;
const ProductItem = styled.div`
  display: flex;
  padding: 5px 15px;
  ${Tablet({ flexDirection: "column", gap: "20px 0" })}
`;
const Name = styled.span`
  font-size: 30px;
  font-weight: 500;
  text-transform: uppercase;
`;
const ProductIdContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 5px;
`;
const Label = styled.span`
  font-size: 14px;
`;
const Id = styled.span`
  font-weight: 600;
`;
const Price = styled.span`
  color: #fe7e29;
  font-weight: 500;
  font-size: 24px;
`;
const Desc = styled.p`
  font-size: 14px;
`;
const AddTocartContainer = styled.span`
  display: flex;
  gap: 0 10px;
  ${Mobile({ flexDirection: "column", gap: "20px 0" })}
`;
const QuantityContainer = styled.span`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  width: fit-content;
`;
const Remove = styled.button`
  font-size: 24px;
  font-weight: 500;
  padding: 3px 15px;
  border: none;
  cursor: pointer;
`;
const Quantity = styled.span`
  font-size: 24px;
  font-weight: 500;
  padding: 3px 12px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
`;
const Add = styled.button`
  font-size: 24px;
  font-weight: 500;
  padding: 3px 12px;
  border: none;
  cursor: pointer;
`;
const AddToCartButton = styled.button`
  padding: 5px 10px;
  font-size: 18px;
  font-weight: 700;
  background-color: #fff;
  color: #bff073;
  border: 1px solid #bff073;
  cursor: pointer;
  :hover {
    background-color: #bff073;
    color: #fff;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  gap: 15px 0;
  flex-direction: column;
`;
const CategoryName = styled.h6`
  font-size: 24px;
  font-weight: 500;
`;
const Categories = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px 0;
`;
const Category = styled.li`
  list-style: none;
  cursor: pointer;
  :hover {
    transform: translateX(2px);
  }
`;

const ProductId = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [totalMoney, setTotalMoney] = useState(0);
  const [quantityProduct, setQuantityProduct] = useState(1);
  const dispath = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const getProduct = () => {
      const product = productslist.find((item) => item.id.toString() === id);
      setProduct(product);
    };
    getProduct();
  });

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantityProduct > 0 && setQuantityProduct(quantityProduct - 1);
    } else {
      setQuantityProduct(quantityProduct + 1);
    }
  };
  useEffect(() => {
    setTotalMoney(quantityProduct * product.newprice);
  });

  const handleClick = () => {
    dispath(addProduct({ ...product, quantityProduct, totalMoney }));
    history.push("/");
  };

  return (
    <Container>
      <Wrapper>
        <Top>
          <Title>Product Detail</Title>
        </Top>
        <Bottom>
          <Left>
            <ProductItem>
              <ImageContainer>
                <Image src={product.image} alt={product.name} />
              </ImageContainer>
              <InfoContainer>
                <Name>{product.name}</Name>
                <ProductIdContainer>
                  <Label>Product ID :</Label>
                  <Id>{product.id}</Id>
                </ProductIdContainer>
                <Price>{product.newprice}.00 $</Price>
                <Desc>{product.desc}</Desc>
                <AddTocartContainer>
                  <QuantityContainer>
                    <Remove onClick={() => handleQuantity("dec")}>-</Remove>
                    <Quantity>{quantityProduct}</Quantity>
                    <Add onClick={() => handleQuantity("inc")}>+</Add>
                  </QuantityContainer>
                  <AddToCartButton onClick={handleClick}>
                    <ShoppingCartCheckout
                      style={{ fontSize: "14px", color: "#fff" }}
                    />
                    ADD TO CART
                  </AddToCartButton>
                </AddTocartContainer>
              </InfoContainer>
            </ProductItem>
          </Left>
          <Right>
            <CategoryName>Categories</CategoryName>
            <Categories>
              <Category>Vegatable</Category>
              <Category>Fresh Meat</Category>
              <Category>Fish</Category>
            </Categories>
          </Right>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default ProductId;
