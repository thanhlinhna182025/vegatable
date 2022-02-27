import React from "react";
import styled from "styled-components";
import { Mobile, Tablet } from "../../globalStyle";

const Wrapper = styled.div`
  width: 100vw;
  height: 70vh;

  position: relative;
`;
const Image = styled.img`
  width: 100%;
`;
const InfoContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h2`
  color: #fff;
  margin-bottom: 30px;
  font-size: 50px;
  ${Mobile({ display: "none" })}
`;
const Desc = styled.span`
  color: #fff;
  font-size: 30px;
  text-align: center;
  ${Tablet({ display: "none" })}
`;

const SliderItem = ({ item }) => {
  return (
    <Wrapper>
      <Image src={item.url} />
      <InfoContainer>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
      </InfoContainer>
    </Wrapper>
  );
};

export default SliderItem;
