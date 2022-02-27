import React from "react";
import styled from "styled-components";
import logo from "../../asset/images/logo.png";
import { Container, Mobile, Tablet, Ipad } from "../../globalStyle";
import { Link } from "react-router-dom";
import { Menu, Clear, ExitToApp } from "@mui/icons-material";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  width: 100px;
  ${Mobile({
    width: "50px",
  })}
  ${Tablet({
    width: "50px",
  })}
  ${Ipad({
    width: "70px",
  })}
`;
const Slogan = styled.span`
  font-size: 30px;
  font-weight: 600;
  background: -webkit-linear-gradient(
    rgba(34, 193, 195, 1),
    rgba(253, 187, 45, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${Mobile({
    fontSize: "20px",
    fontWeight: "400",
  })}
  ${Tablet({
    fontSize: "20px",
    fontWeight: "400",
  })}
`;
const WrapperDropdown = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
`;
const NavbarMenuContainer = styled.button`
  display: none;
  position: relative;
  background-color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  ${Tablet({
    display: "block",
  })}
`;
const DropDownNavbarContainer = styled.div`
  z-index: 100;
  position: absolute;
  top: 100%;
  right: -2px;
  width: 70vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DropdownItem = styled.a`
  font-size: 20px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  padding: 10px 0;
`;
const ExitButton = styled.button`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 5px 30px;
  margin-top: 10px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  & span {
    color: #fff;
  }
`;
const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  ${Mobile({
    display: "none",
  })}
  ${Tablet({
    display: "none",
  })}
`;
const DropdownButton = styled.div`
  opacity: 0.5;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;
const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  & a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  ${Dropdown}:hover & {
    display: block;
  }
`;
const Striangle = styled.div`
  width: 0;
  height: 0;
  border-top: 0;
  border: 10px solid transparent;
  border-bottom: 20px solid #f1f1f1;
  position: absolute;
  top: 50%;
  left: 30%;
  display: none;
  ${Dropdown}:hover & {
    display: block;
  }
`;
const ItemLink = styled.a`
  :hover {
    background-color: #fff;
  }
`;

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src={logo} alt="logo" />
          <Slogan>Fresh Food Good Heath</Slogan>
        </Left>
        <WrapperDropdown>
          <NavbarMenuContainer onClick={() => setToggleMenu(!toggleMenu)}>
            {toggleMenu ? (
              <WrapperDropdown>
                <Clear />
                <DropDownNavbarContainer>
                  <DropdownItem>Home</DropdownItem>
                  <DropdownItem>Products</DropdownItem>
                  <DropdownItem>News</DropdownItem>
                  <DropdownItem>About</DropdownItem>
                  <DropdownItem>Sign In</DropdownItem>
                  <DropdownItem>Sign Up</DropdownItem>
                  <ExitButton>
                    <ExitToApp />
                    <span>Exit</span>
                  </ExitButton>
                </DropDownNavbarContainer>
              </WrapperDropdown>
            ) : (
              <Menu />
            )}
          </NavbarMenuContainer>
          <Dropdown>
            <DropdownButton>
              <Link to="/">Home</Link>
            </DropdownButton>
          </Dropdown>
          <Dropdown>
            <DropdownButton>Products</DropdownButton>
            <Striangle></Striangle>
            <DropdownContent className="content">
              <ItemLink href="#">Vegatables</ItemLink>
              <ItemLink href="#">Fruits</ItemLink>
              <ItemLink href="#">Mushroom</ItemLink>
              <ItemLink href="#">Meat</ItemLink>
              <ItemLink href="#">Sea food</ItemLink>
            </DropdownContent>
          </Dropdown>
          <Dropdown>
            <DropdownButton>News</DropdownButton>
            <Striangle></Striangle>
            <DropdownContent>
              <ItemLink href="#">Experience choose food</ItemLink>
              <ItemLink href="#">Kitchen together</ItemLink>
              <ItemLink href="#">Food preservation tips </ItemLink>
              <ItemLink href="#">Promotion Information </ItemLink>
            </DropdownContent>
          </Dropdown>
          <Dropdown>
            <DropdownButton>Contacts</DropdownButton>
          </Dropdown>
          <Dropdown>
            <DropdownButton>About</DropdownButton>
          </Dropdown>
        </WrapperDropdown>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
