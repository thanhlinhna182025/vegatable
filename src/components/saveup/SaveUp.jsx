import styled from "styled-components";
import { Tablet } from "../../globalStyle";
import fruit4 from "../../asset/images/fruit4.png";
import fruit5 from "../../asset/images/fruit5.png";
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  ${Tablet({ flexDirection: "column", gap: "20px 0" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(244, 238, 222, 0.7);
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  :hover {
    transform: scale(1.08);
    transition: all 0.5 ease;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h5`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Desc = styled.p`
  margin-bottom: 20px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(212, 224, 171, 0.7);
`;

const ButtonRounded = styled.button``;

const SaveUp = () => {
  return (
    <Container>
      <Left>
        <ImageContainer>
          <Image src={fruit4} alt="fruit4" />
        </ImageContainer>

        <InfoContainer>
          <Title>Save up to 50%</Title>
          <Desc>on your first purchase</Desc>
          <ButtonRounded className="custom-btn btn-1">
            <Link to="/products/meat">Track Now</Link>
          </ButtonRounded>
        </InfoContainer>
      </Left>
      <Right>
        <InfoContainer>
          <Title>Free Shipping</Title>
          <Desc>On order over $99</Desc>
          <ButtonRounded className="custom-btn btn-1">
            <Link to="/products/meat">Track Now</Link>
          </ButtonRounded>
        </InfoContainer>
        <ImageContainer>
          <Image src={fruit5} alt="fruit5" />
        </ImageContainer>
      </Right>
    </Container>
  );
};

export default SaveUp;
