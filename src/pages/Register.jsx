import styled from "styled-components";
import RegisterForm from "../components/auth/RegisterForm";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Container = styled.div`
  padding: 0 15px;
`;

const Register = () => {
  return (
    <Container>
      <Header />
      <Navbar />
      <RegisterForm />
      <Footer/>
    </Container>
  );
};
export default Register;
