import { AccessTime } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import fruit1 from "../../asset/images/1.jpg";
import fruit4 from "../../asset/images/4.jpg";
import { Button, Tablet } from "../../globalStyle";
import { ArrowRightAlt } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  background-color: #ccc;
  ${Tablet({ padding: "0", marginBottom: "30px" })}
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px 0;
  margin-bottom: 20px;
`;
const Title = styled.h5`
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
    color: #828282;
    border-right: 8px solid #28abe3;
    height: 100%;
    transition: 1s;
    left: -15px;
  }
  :hover {
    color: #28abe3;
    -webkit-text-stroke: 1px #28abe3;
    filter: drop-shadow(0 10px 25px red);
    transition: all 2s ease;
    &:before {
      width: calc(100% + 15px);
    }
  }
`;
const Desc = styled.span`
  font-size: 16px;
`;
const Bottom = styled.div`
  display: flex;
  gap: 0 30px;
  ${Tablet({ flexDirection: "column", gap: "20px 0" })}
`;
const BlogItem = styled.div`
  flex: 1;
  padding: 10px;
  border: 3px solid #bff073;
  box-shadow: -20px 10px 30px rgba(0, 0, 0, 0.5);
`;
const DateContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Time = styled.span``;
const ImageContainer = styled.div`
  padding: 10px;
  :hover {
    transform: scale(1.05);
    transition: all 0.5 ease;
  }
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  gap: 15px 0;
  align-items: center;
`;
const BlogTitle = styled.h5`
  font-size: 25px;
  font-weight: 500;
`;
const BlogContent = styled.span``;
const Icon = styled.div`
  height: 100%;
  background-color: #bff073;
  padding: 5px;
`;
const Name = styled.span``;
const ButtonViewMore = styled(Button)`
  padding: 0;
  border: 1px solid #bff073;
  background-color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  padding-left: 20px;
  gap: 0 10px;
  border-radius: 10px;
  overflow: hidden;
`;

const Blog = () => {
  return (
    <Container>
      <Top>
        <Title>LASTEST FROM BLOG</Title>
        <Desc>
          Get started on your healthy adventure. Find out latest recipe
          inspiration and diet tips to have a happy and healthier way to eat.
        </Desc>
      </Top>
      <Bottom>
        <BlogItem>
          <ImageContainer>
            <Image src={fruit1} alt="image" />
          </ImageContainer>
          <DateContainer>
            <AccessTime style={{ fontSize: "18px" }} />
            <Time>14:46 - 29/06/2018</Time>
          </DateContainer>
          <InfoContainer>
            <BlogTitle>Vegetarian Protein Powders</BlogTitle>
            <BlogContent>
              It’s important to include healthy sources of protein in your diet
              each day. Protein helps your body with a number of important
              functions and helps you maintain muscle mass. When you think of
              protein, steak or chicken might come to mind. But if you’re not a
              big meat eater, you have other options to make sure you get the
              recommended amount of protein that your body needs.
            </BlogContent>
            <ButtonViewMore>
              <Name>View More</Name>
              <Icon>
                <ArrowRightAlt style={{ color: "#fff", fontSize: "30px" }} />
              </Icon>
            </ButtonViewMore>
          </InfoContainer>
        </BlogItem>
        <BlogItem>
          <ImageContainer>
            <Image src={fruit4} alt="image" />
          </ImageContainer>
          <DateContainer>
            <AccessTime style={{ fontSize: "18px" }} />
            <Time>14:46 - 29/06/2018</Time>
          </DateContainer>
          <InfoContainer>
            <BlogTitle>
              Eat Well For Less - Food Education - Reduce Food Waste
            </BlogTitle>
            <BlogContent>
              Help the environment and reduce your food waste. NourishEd -
              Together We Can End Food Waste. View Events. Donate Online. Sign
              Up For Newsletter. Highlights: Volunteering Option Available,
              Donation Option Available, Newsletter Available.
            </BlogContent>
            <ButtonViewMore>
              <Name>View More</Name>

              <Icon>
                <ArrowRightAlt style={{ color: "#fff", fontSize: "30px" }} />
              </Icon>
            </ButtonViewMore>
          </InfoContainer>
        </BlogItem>
      </Bottom>
    </Container>
  );
};

export default Blog;
