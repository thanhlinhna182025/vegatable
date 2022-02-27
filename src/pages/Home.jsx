import React from "react";
import styled from "styled-components";
import SliderList from "../components/slider/SliderList";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import BigSale from "../components/bigsale/BigSale";
import SaveUp from "../components/saveup/SaveUp";
import Products from "../components/products/Products";
import Categories from "../components/categories/Categories";
import PopularProducts from "../components/popular/PopularProducts";
import Blog from "../components/blog/Blog";
import Subcribe from "../components/subcribe/Sibcribe";
import Footer from "../components/footer/Footer";

const Container = styled.div`
  padding: 0 15px;
`;

const Home = () => {
  return (
    <Container>
      <Header />
      <Navbar />
      <SliderList />
      <About />
      <BigSale />
      <SaveUp />
      <Categories />
      <Products />
      <PopularProducts />
      <Blog />
      <Subcribe />
      <Footer />
    </Container>
  );
};

export default Home;
