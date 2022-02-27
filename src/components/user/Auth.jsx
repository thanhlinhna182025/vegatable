import React from "react";
import styled from "styled-components";
import Login from "./Login";
import Register from "./Register";
import { Mobile } from "../../globalStyle";
import { useState } from "react";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 100px;
  ${Mobile({ padding: "0" })}
`;
const Button = styled.button`
  flex: 1;
  padding: 10px 0;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  :hover {
    background: linear-gradient(
      180deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
  }
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
`;
const Top = styled.div`
  display: flex;
  background-color: red;
`;
const Bottom = styled.div``;

const Auth = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <Container>
      <Wrapper>
        <Top>
          <Button
            onClick={() => {
              setToggle(true);
            }}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              setToggle(false);
            }}
          >
            Register
          </Button>
        </Top>
        <Bottom>{toggle ? <Login /> : <Register />}</Bottom>
      </Wrapper>
    </Container>
  );
};

export default Auth;
