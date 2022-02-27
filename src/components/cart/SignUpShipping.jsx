import React from "react";
import styled from "styled-components";
import { Login, Facebook, Google } from "@mui/icons-material";

const Container = styled.div`
  background-color: #f2f2f2;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 50px 30px;
  gap: 20px 0;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 70%;
  padding: 10px 10px;
  border: none;
  border-radius: 2px;
`;
const SignUpButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 8px 35px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
`;

const SignUpWith = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  justify-content: center;
  background-color: ${(props) => props.bg};
  color: #fff;
  padding: 8px 10px;
`;

const SignUpShipping = () => {
  return (
    <Container>
      <Form>
        <Input placeholder="Username or Email"></Input>
        <Input placeholder="Password"></Input>
        <SignUpButton>
          <Login /> Sign Up
        </SignUpButton>
        <div>Or</div>
        <SignUpWith bg="#3b5998">
          <Facebook />
          Sign Up with FaceBook
        </SignUpWith>

        <SignUpWith bg="#b53d2f">
          <Google />
          Sign Up with Google
        </SignUpWith>
      </Form>
    </Container>
  );
};

export default SignUpShipping;
