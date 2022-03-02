import styled from "styled-components";
import { Button } from "../../globalStyle";
import {
  StarRateOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  HelpCenterOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #ccc;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 10px 10px rgba(204, 204, 204, 0.253);

  :hover {
    transform: scale(1.02);
    transition: all 0.5 ease;
  }
`;
const Status = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px 10px;
  background-color: #bff073;
  min-width: 100px;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  text-transform: uppercase;
`;
const ImageContainer = styled.div``;
const Image = styled.img`
  width: 100%;
  object-fit: center;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Name = styled.span`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const NewPrice = styled.span``;
const OldPrice = styled.span`
  position: relative;
  font-size: 14px;
  &::before {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    color: inherit;
    background-color: #828282;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`;
const ProductCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 0%;
  transform: scale(0);
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px 0;
  opacity: 0;
  ${Container}:hover & {
    width: 100%;
    height: 100%;
    opacity: 1;
    transform: scale(1);
  }
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
  }
`;
const Top = styled.div``;
const StarContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 10px;
`;
const Icon = styled.div`
  cursor: pointer;
  padding: 10px;
  border: 1px solid #fff;
  :hover {
    background-color: #bff073;
  }
`;
const Bottom = styled.div``;
const AddCartButton = styled(Button)`
  color: #fff;
  border: 1px solid #fff;
  :hover {
    background-color: #bff073;
  }
`;

const Product = ({ product }) => {
  return (
    <Container>
      <Status>{product.sale}</Status>
      <ImageContainer>
        <Image src={product.image} />
      </ImageContainer>
      <InfoContainer>
        <Name>{product.name}</Name>
        <PriceContainer>
          <NewPrice>{product.newprice}.00$</NewPrice>
          <OldPrice>{product.oldprice}.00$</OldPrice>
        </PriceContainer>
      </InfoContainer>
      <ProductCover>
        <Top>
          <StarContainer>
            <StarRateOutlined style={{ color: "white" }} />
            <StarRateOutlined style={{ color: "white" }} />
            <StarRateOutlined style={{ color: "white" }} />
            <StarRateOutlined style={{ color: "white" }} />
            <StarRateOutlined style={{ color: "white" }} />
          </StarContainer>
        </Top>
        <Center>
          <Icon>
            <Link to={`/product/${product.id}`}>
              <SearchOutlined style={{ color: "white" }} />
            </Link>
          </Icon>
          <Icon>
            <Link to={`/product/${product.id}`}>
              <ShoppingCartOutlined style={{ color: "white" }} />
            </Link>
          </Icon>
          <Icon>
            <HelpCenterOutlined style={{ color: "white" }} />
          </Icon>
        </Center>
        <Bottom>
          <Link to={`/product/${product.id}`}>
            <AddCartButton>ADD TO CART</AddCartButton>
          </Link>
        </Bottom>
      </ProductCover>
    </Container>
  );
};

export default Product;
