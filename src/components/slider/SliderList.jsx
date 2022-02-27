import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "./sliderList.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { sliderdata } from "../../data";
import SliderItem from "./SliderItem";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://cdn.pixabay.com/photo/2013/02/21/19/10/grass-84622_960_720.jpg");
`;

const SliderList = () => {
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

  const settings = {
    infinite: true,
    lazyLoad: true,
    slidesToShow: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Container>
      <Slider {...settings}>
        {sliderdata.map((item) => (
          <SliderItem item={item} key={item.id} />
        ))}
      </Slider>
    </Container>
  );
};

export default SliderList;
