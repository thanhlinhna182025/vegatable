import React from "react";
import styled from "styled-components";
import {Mobile} from "../../globalStyle";
const Container = styled.div`
  background: url("https://img.thuthuat123.com/uploads/2019/10/17/anh-background-dong-cute_111049511.gif")
    center no-repeat;
  background-size: cover;
  height: 230px;
  padding: 50px 100px;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  box-shadow: 0 20px 30px rgba(252, 130, 134, 0.5);
  border: 10px solid #bff073;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  ${Mobile({ flexDirection: "column", gap: "20px 0" })}

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h6`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
`;
const Desc = styled.span``;

const Right = styled.div`
  flex: 1;
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0 5px;
  background-color: #fff;
`;
const Input = styled.input`
  flex: 4;
  padding: 10px;
  border: none;
  outline: none;
`;
const Button = styled.button`
  flex: 2;
  text-align: center;
  background-color: #bff073;
  height: 100%;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  :hover {
    background-color: #ccc;
  }
`;

const Sibcribe = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>SUBSCRIBE TO US!</Title>
          <Desc>
            Enter Your email address for our mailing list to keep yourself
            update.
          </Desc>
        </Left>
        <Right>
          <InputContainer>
            <Input placeholder="inter your email"></Input>
            <Button>SUBCRIBE ME</Button>
          </InputContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Sibcribe;
