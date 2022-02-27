import styled from "styled-components";
import { Button, Mobile } from "../../globalStyle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  gap: 30px 0;
  ${Mobile({
    width: "100%",
  })}
`;
const Title = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: #383838;
  text-align: center;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const MessageError = styled.span`
  font-size: 12px;
  color: red;
  position: absolute;
  top: 100%;
  left: 210px;
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
`;
const RequiredIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-30%);
`;
const Select = styled.select`
  width: 100%;
  font-size: 14px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  outline: none;
  color: #828282;
`;
const Option = styled.option`
  color: #828282;
`;

const Agreement = styled.span``;
const CreateButton = styled(Button)`
  padding: 10px 40px;
  border: 2px solid #bff073;
  width: fit-content;
  color: #fff;
  background-color: #bff073;
  :hover {
    background-color: #fff;
    color: #bff073;
  }
`;

const schema = yup.object({
  fullName: yup.string().required(),
  userName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  password: yup.string().min(6).max(15).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit(submitForm)}>
          <InputContainer>
            <Label>FullName </Label>
            <Input
              placeholder="Fullname"
              name="fullName"
              id="fullName"
              {...register("fullName")}
            />
            <RequiredIcon>*</RequiredIcon>
            <MessageError>{errors.fullName?.message}</MessageError>
          </InputContainer>

          <InputContainer>
            <Label>User name </Label>
            <Input
              placeholder="Username"
              name="userName"
              id="userName"
              {...register("userName")}
            />
            <RequiredIcon>*</RequiredIcon>
            <MessageError>{errors.userName?.message}</MessageError>
          </InputContainer>
          <InputContainer>
            <Label>Password </Label>
            <Input
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              {...register("password")}
            />
            <RequiredIcon>*</RequiredIcon>
            <MessageError>{errors.password?.message}</MessageError>
          </InputContainer>
          <InputContainer>
            <Label>Confirm Password </Label>
            <Input
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              {...register("confirmPassword")}
            />
            <RequiredIcon>*</RequiredIcon>
            <MessageError>
              {errors.confirmPassword && "Password Should Match !"}
            </MessageError>
          </InputContainer>
          <InputContainer>
            <Label>Email </Label>
            <Input
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              {...register("email")}
            />
            <RequiredIcon>*</RequiredIcon>
            <MessageError>{errors.mail?.message}</MessageError>
          </InputContainer>
          <InputContainer>
            <Label>Phone </Label>
            <Input
              placeholder="Phone"
              type="phone"
              name="phone"
              id="phone"
              {...register("phone")}
            />
            <RequiredIcon>*</RequiredIcon>
            <MessageError>{errors.phone?.message}</MessageError>
          </InputContainer>
          <InputContainer>
            <Label>Province </Label>
            <Select name="province" id="province">
              <Option disabled>-- Provice --</Option>
              <Option value="Provice 1">Provice 1</Option>
              <Option value="Provice 2">Provice 2</Option>
              <Option value="Provice 3">Provice 3</Option>
              <Option value="Provice 4">Provice 4</Option>
              <Option value="Provice 5">Provice 5</Option>
              <Option value="Provice 6">Provice 6</Option>
            </Select>
          </InputContainer>
          <InputContainer>
            <Label>District </Label>
            <Select name="district" id="district">
              <Option disabled>-- District --</Option>
              <Option value="District 1">District 1</Option>
              <Option value="District 2">District 2</Option>
              <Option value="District 3">District 3</Option>
              <Option value="District 4">District 4</Option>
              <Option value="District 5">District 5</Option>
              <Option value="District 6">District 6</Option>
            </Select>
          </InputContainer>
          <InputContainer>
            <Label>Address </Label>
            <Input placeholder="local" name="local" id="local" />
            <RequiredIcon>*</RequiredIcon>
          </InputContainer>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <CreateButton type="submit">CREATE</CreateButton>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
