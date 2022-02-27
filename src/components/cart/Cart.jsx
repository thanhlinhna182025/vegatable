import styled from "styled-components";
import AdddressShipping from "./AdddressShipping";
import SignUpShipping from "./SignUpShipping";
import { useState } from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import { Mobile, Tablet } from "../../globalStyle";

const Container = styled.div`
  background-color: #fff;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
`;
const Top = styled.div`
  max-height: 70px;
  display: flex;
  padding: 15px 200px;
  width: 100%;
  ${Tablet({ padding: "0" })}
  ${Mobile({ display: "none" })}
  justify-content: space-between;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0.1) 10%,
    rgba(9, 121, 108, 0.2) 50%,
    rgba(0, 255, 115, 1) 100%
  );
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
`;
const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0 15px;
  ${Mobile({ gap: "0 5px" })}
`;
const Cirle = styled.div`
  border-radius: 50%;
  border: 1px solid #fff;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;
const InfoTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Bottom = styled.div`
  display: flex;
  padding: 50px 90px;
  background-color: #fff;
  gap: 0 30px;
  ${Tablet({ flexDirection: "column", gap: "20px 0", padding: "0" })}
`;
const Left = styled.div`
  flex: 2;
`;
const TopLeft = styled.div`
  display: flex;
`;
const AddressButton = styled.button`
  flex: 1;
  padding: 10px 50px;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  background: linear-gradient(
    270deg,
    rgba(36, 0, 35, 0.3) 5%,
    rgba(94, 121, 9, 0.1) 30%,
    rgba(0, 255, 115, 1) 100%
  );
  :hover {
    background: linear-gradient(
      90deg,
      rgba(36, 0, 35, 0.3) 5%,
      rgba(94, 121, 9, 0.1) 30%,
      rgba(0, 255, 115, 1) 100%
    );
  }
`;
const SignUpButton = styled.button`
  flex: 1;
  padding: 10px 50px;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  background: linear-gradient(
    90deg,
    rgba(36, 0, 35, 0.3) 5%,
    rgba(94, 121, 9, 0.1) 30%,
    rgba(0, 255, 115, 1) 100%
  );
  :hover {
    background: linear-gradient(
      270deg,
      rgba(36, 0, 35, 0.3) 5%,
      rgba(94, 121, 9, 0.1) 30%,
      rgba(0, 255, 115, 1) 100%
    );
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  height: 80vh;
  padding: 0 10px;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  padding: 10px 20px;
`;
const InfomationLine = styled.div`
  height: 50%;
  width: 100%;
  padding: 5px;
  overflow-y: auto;
  margin-bottom: 20px;
  scroll-snap-type: y;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #bff073;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
const Name = styled.span`
  color: #383838;
`;
const Money = styled.span`
  color: #0070c9;
`;

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  padding: 20px 30px;
  border: 4px solid #bff073;
`;
const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ShipContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShipItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TotalPaymentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Cart = () => {
  const [toggle, setToggle] = useState(true);
  const cart = useSelector((state) => state.cart);
  const shipFee = 3;
  const discountFee = 1;

  return (
    <Container>
      <Wrapper>
        <Top>
          <InfoItem>
            <Cirle>1</Cirle>
            <InfoTitle>Infomation cart</InfoTitle>
          </InfoItem>
          <InfoItem>
            <Cirle>2</Cirle>
            <InfoTitle>Payment</InfoTitle>
          </InfoItem>
          <InfoItem>
            <Cirle>3</Cirle>
            <InfoTitle>Finish</InfoTitle>
          </InfoItem>
        </Top>
        <Bottom>
          <Left>
            <TopLeft>
              <AddressButton onClick={() => setToggle(true)}>
                ADDRESS SHIPPING
              </AddressButton>
              <SignUpButton onClick={() => setToggle(false)}>
                SIGN UP
              </SignUpButton>
            </TopLeft>
            {toggle && <AdddressShipping />}
            {!toggle && <SignUpShipping />}
          </Left>
          <Right>
            <Title>Shopping Line</Title>
            <InfomationLine>
              {cart.products.map((item) => (
                <ProductItem item={item} key={item.id} />
              ))}
            </InfomationLine>
            {cart.summary > 0 ? (
              <SummaryContainer>
                <TotalContainer>
                  <Name>Total :</Name>
                  <Money>$ {cart.summary}.00</Money>
                </TotalContainer>
                <ShipContainer>
                  <ShipItem>
                    <Name>Ship fee :</Name>
                    <Money>$ {cart.summary > 0 ? shipFee : 0}.00</Money>
                  </ShipItem>
                  <ShipItem>
                    <Name>Discount fee :</Name>
                    <Money>$ - {cart.summary > 0 ? discountFee : 0}.00</Money>
                  </ShipItem>
                  <ShipItem>
                    <Name>Total fee</Name>
                    <Money>
                      $ {cart.summary > 0 ? shipFee - discountFee : 0}.00
                    </Money>
                  </ShipItem>
                </ShipContainer>

                <TotalPaymentContainer>
                  <Name>Summary :</Name>
                  <Money>$ {cart.summary + shipFee - discountFee}.00</Money>
                </TotalPaymentContainer>
              </SummaryContainer>
            ) : (
              ""
            )}
          </Right>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
