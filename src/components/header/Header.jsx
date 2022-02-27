import {
  MailOutlined,
  PhoneOutlined,
  ShoppingCartOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import { Mobile, Tablet } from "../../globalStyle";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #b7dc46;
  height: 60px;
  padding: 0 10px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 40px;
  ${Tablet({
    flex: 2,
  })}
`;

const LeftItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0 5px;
  ${Mobile({ display: "none" })}
`;
const Phone = styled.span`
  color: #fff;
  font-size: 14px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 13px;
    background-color: #fff;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
  }
`;
const Mail = styled.span`
  color: #fff;
  font-size: 14px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0 40px;
  position: relative;
`;
const RightItem = styled.div`
  cursor: pointer;
  position: relative;
  &:first-child ::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 13px;
    background-color: #fff;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
  }
`;

const Header = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <LeftItem>
            <PhoneOutlined style={{ color: "white" }} />
            <Phone>+ 08 3676 0987</Phone>
          </LeftItem>
          <LeftItem>
            <MailOutlined style={{ color: "white" }} />
            <Mail>thanhlinhna@gmail.com</Mail>
          </LeftItem>
        </Left>
        <Right>
          <RightItem>
            <Link to="/user">
              <PersonOutlineOutlined style={{ color: "white" }} />
            </Link>
          </RightItem>
          <RightItem>
            <Badge badgeContent={quantity} color="primary">
              <Link to="/cart">
                <ShoppingCartOutlined style={{ color: "white" }} />
              </Link>
            </Badge>
          </RightItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
