import React from "react";
import styled from "styled-components";
import { Button, Mobile } from "../../globalStyle";

const Container = styled.div`
  margin: 0 auto;
`;
const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px 0;
  border-top: 1px solid #bff073;
  padding: 50px;

  ${Mobile({
    padding: "10px",
  })}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  ${Mobile({
    width: "100%",
  })}
`;
const Title = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: #383838;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const Label = styled.span`
  min-width: 200px;
  font-size: 20px;
  font-weight: 500;
  color: #383838;
  ${Mobile({ display: "none" })}
`;
const Input = styled.input`
  flex: 1;
  font-size: 14px;
  padding: 5px 20px;
  border: 1px solid #ccc;
  outline: none;
  height: 100%;
  ${Mobile({ width: "100%", padding: "5px" })}
`;
const RequiredIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-30%);
`;

const CreateButton = styled(Button)`
  padding: 10px 40px;
  border: 2px solid #bff073;
  width: fit-content;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  color: #fff;
  :hover {
    background: linear-gradient(
      180deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
  }
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <InputContainer>
            <Label>User name </Label>
            <Input placeholder="Username" />
            <RequiredIcon>*</RequiredIcon>
          </InputContainer>
          <InputContainer>
            <Label>Password </Label>
            <Input placeholder="Password" type="password" />
            <RequiredIcon>*</RequiredIcon>
          </InputContainer>
          <InputContainer>
            <Label>Confirm Password </Label>
            <Input placeholder="Confirm Password" type="password" />
            <RequiredIcon>*</RequiredIcon>
          </InputContainer>
          <CreateButton>LOGIN</CreateButton>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
