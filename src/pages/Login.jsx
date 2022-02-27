import LoginForm from "../components/auth/LoginForm";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import styled from "styled-components";
const Container = styled.div`
  padding: 0 15px;
`;
const Login = () => {
  return (
    <Container>
      <Header />
      <Navbar />
      <LoginForm />
      <Footer />
    </Container>
  );
};
export default Login;
