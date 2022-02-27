import Slider from "react-slick";
import styled from "styled-components";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { popularproducts } from "../../data";
import { Mobile, Ipad } from "../../globalStyle";

import { useState } from "react";
import "./PopularProducts.css";
const Container = styled.div`
  width: 100%;
  height: 50vh;
  background-color: rgba(137, 202, 39, 0.2);
  padding: 20px;
  margin: 0 auto;
  position: relative;
  ${Ipad({ height: "30vh", marginBottom: "30px" })};
  ${Mobile({ height: "20vh" })};
`;

const PopularProducts = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <ArrowRightIcon />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <ArrowLeftIcon />
      </div>
    );
  };
  const [productIndex, setProductIndex] = useState();

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setProductIndex(next),
  };
  return (
    <Container>
      <Slider {...settings}>
        {popularproducts.map((product, index) => (
          <div
            key={product.id}
            className={index === productIndex ? "slide activeSlide" : "slide"}
          >
            <img src={product.image} alt="imageproduct" />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default PopularProducts;
