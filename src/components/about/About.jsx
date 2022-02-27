import React from "react";
import styled from "styled-components";
import fruit1 from "../../asset/images/pruit1.png";
import fruit2 from "../../asset/images/pruit2.png";
import { Button, Mobile, Tablet } from "../../globalStyle";
import { ArrowRightAlt } from "@mui/icons-material";

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  background-color: #ccc;
  transform: translateY(-50%);
  padding: 30px;
  margin-bottom: -100px;
  ${Mobile({ marginBottom: "-140px" })}
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h3`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 20px;
  position: relative;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
  color: transparent;
  &:before {
    content: attr(datatext);
    position: absolute;
    width: 0;
    overflow: hidden;
    color: #bff073;
    border-right: 8px solid #bff073;
    height: 100%;
    transition: 1s;
    left: -15px;
  }
  :hover {
    color: rgb(191, 240, 115);
    -webkit-text-stroke: 1px rgb(191, 240, 115);
    filter: drop-shadow(0 10px 25px green);
    transition: all 2s ease;
    &:before {
      width: calc(100% + 15px);
    }
  }
`;

const Desc = styled.span`
  margin-bottom: 20px;
  text-align: justify;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  ${Mobile({
    display: "none",
  })}
`;
const Image = styled.img`
  width: 200px;
  position: absolute;
  left: ${(props) => (props.direction === "left" ? "30px" : "")};
  right: ${(props) => (props.direction === "right" ? "30px" : "")};
  top: 50%;
  transform: translateY(-50%);
  ${Tablet({ width: "120px" })}
`;

const AboutButton = styled(Button)`
  padding: 0;
  border: 1px solid #bff073;
  background-color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  padding-left: 20px;
  gap: 0 10px;
  border-radius: 5px;
  overflow: hidden;
  :hover {
    color: #fff;
    background-color: #bff073;
  }
`;
const Name = styled.span``;
const Icon = styled.div`
  height: 100%;
  background-color: #bff073;
  padding: 5px;
`;

const About = () => {
  return (
    <Container>
      <Top>
        <Title datatext="ABOUT US">ABOUT US</Title>

        <Desc>
          Sed eleifend, lacus nec bibendum pulvinar, nibh mauris vehicula augue,
          sit amet mattis ligula lorem eu nisl. Integer a egestas mauris. Nam id
          diam blandit, condimentum dolor ut, euismod arcu. Sed eleifend, lacus
          nec bibendum pulvinar, nibh mauris vehicula augue, sit amet mattis
          ligula lorem eu nisl. Integer a egestas mauris. Nam id diam blandit,
          condimentum dolor ut, euismod arcu.
        </Desc>
        <AboutButton>
          <Name>View More</Name>
          <Icon>
            <ArrowRightAlt style={{ color: "#fff", fontSize: "30px" }} />
          </Icon>
        </AboutButton>
      </Top>
      <Bottom>
        <Image src={fruit1} direction="left" />
        <Image src={fruit2} direction="right" />
      </Bottom>
    </Container>
  );
};

export default About;
