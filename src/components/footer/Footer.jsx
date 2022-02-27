import React from "react";
import styled from "styled-components";
import logo from "../../asset/images/logo.png";
import {
  CottageOutlined,
  PhoneInTalkOutlined,
  MailOutlineOutlined,
  Facebook,
  Twitter,
  Instagram,
  Pinterest,
} from "@mui/icons-material";
import { Mobile, Ipad } from "../../globalStyle";

const Container = styled.div`
  background: rgb(60, 65, 76);
  display: grid;
  grid-template-columns: repeat(4, minmax(260px, 1fr));
  padding: 10px;
  ${Ipad({ gridTemplateColumns: "repeat(2, minmax(160px, 1fr))" })}
  ${Mobile({ gridTemplateColumns: "repeat(1, minmax(160px, 1fr))" })}
`;
const Column = styled.div``;
const Logo = styled.img`
  width: 250px;
  ${Mobile({ width: "120px" })}
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
`;
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ItemLink = styled.a`
  font-size: 14px;
  text-transform: capitalize;
  cursor: pointer;
  color: #fff;
  :hover {
    transform: translateX(5px);
    transition: all 0.3s ease-in;
  }
`;

const ColumnItem = styled.div``;
const Title = styled.h6`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 15px;
  color: #fff;
  background: -webkit-linear-gradient(
    rgba(34, 193, 195, 1),
    rgba(253, 187, 45, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const PaymentImage = styled.img`
  width: 80%;
  height: 50px;
`;

const Footer = () => {
  return (
    <Container>
      <Column>
        <ColumnItem>
          <Title>FRESH FOOD GOOD HEATH</Title>
          <Logo src={logo} />
        </ColumnItem>
      </Column>
      <Column>
        <Title>Service</Title>
        <ColumnItem>
          <List>
            <ItemLink>introduce </ItemLink>
            <ItemLink>recruitment</ItemLink>
            <ItemLink>document</ItemLink>
            <ItemLink>picture</ItemLink>
          </List>
        </ColumnItem>
      </Column>
      <Column>
        <Title>News</Title>
        <ColumnItem>
          <List>
            <ItemLink>products</ItemLink>
            <ItemLink>skill choice food</ItemLink>
            <ItemLink>food preservation</ItemLink>
            <ItemLink>cooking</ItemLink>
          </List>
        </ColumnItem>
      </Column>
      <Column>
        <Title>Contact us</Title>
        <ColumnItem>
          <List>
            <ItemContainer>
              <CottageOutlined style={{ color: "#fff" }} />
              <ItemLink>998 Nguyễn Hữu Cảnh, F22, HCM City</ItemLink>
            </ItemContainer>
            <ItemContainer>
              <PhoneInTalkOutlined style={{ color: "#fff" }} />
              <ItemLink>+083 0080 0080</ItemLink>
            </ItemContainer>
            <ItemContainer>
              <MailOutlineOutlined style={{ color: "#fff" }} />
              <ItemLink>thanhlinhna182025@gmail.com</ItemLink>
            </ItemContainer>
            <ItemContainer>
              <Facebook style={{ fontSize: "30px", color: "#3b5999" }} />
              <Twitter style={{ fontSize: "30px", color: "#55acef" }} />
              <Instagram style={{ fontSize: "30px", color: "#de4b39" }} />
              <Pinterest style={{ fontSize: "30px", color: "#bd081c" }} />
            </ItemContainer>
            <ItemContainer>
              <PaymentImage src="data:image/png;base64,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" />
            </ItemContainer>
          </List>
        </ColumnItem>
      </Column>
    </Container>
  );
};

export default Footer;
