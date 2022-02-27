import styled from "styled-components";
import { Button } from "../../globalStyle";
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
`;
const ImageContainer = styled.div`
  flex: 1;
  margin-bottom: 20px;
  max-height: 229px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;
const Title = styled.h5`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #bff073;
`;
const Desc = styled.span`
  margin-bottom: 10px;
`;
const CheckOutButton = styled.button``;
const Category = ({ item }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={item.image} alt="image" />
      </ImageContainer>
      <InfoContainer>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
        <CheckOutButton className="custom-btn btn-2">
          <span>
            <Link to={`/products/${item.cat}`}>Click!</Link>
          </span>
          <span>Read More</span>
        </CheckOutButton>
      </InfoContainer>
    </Container>
  );
};

export default Category;
