import styled, { createGlobalStyle } from "styled-components";
import { css } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
 *{
   margin: 0;
   padding:0;
   box-sizing: border-box;
	 font-family: 'Roboto', sans-serif;

 }

 body {
	 background-color:#fff;
   color: #828282;
 }
 a{
   text-decoration: none;
   padding:0;
 }
 .custom-btn {
  color: #fff;
  border-radius: 5px 10px;
  padding: 10px 25px;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  font-size: 24px;

}
.btn-1 {
  background-color: #89d8d3;
  background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
  border: none;
  z-index: 1;
}
.btn-1:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  border-radius: 5px;
  background-color: #4dccc6;
  background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
  box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
  transition: all 0.3s ease;
}
.btn-1:hover {
  color: #fff;
}

.btn-1:hover:after {
  top: 0;
  height: 100%;
}

.btn-1:active {
  top: 2px;
}
.btn-2 {
  position: relative;
  right: 20px;
  bottom: 20px;
  border: none;
  box-shadow: none;
  width: 130px;
  height: 40px;
  line-height: 42px;
  -webkit-perspective: 230px;
  perspective: 230px;
}

.btn-2 span {
  background: #00acee;
  background: linear-gradient(90deg, #00acee 0%, #bff073 100%);
  display: block;
  position: absolute;
  width: 130px;
  height: 40px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 0;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.btn-2 span:nth-child(1) {
  box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  transform: rotateX(90deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}

.btn-2 span:nth-child(2) {
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}

.btn-2:hover span:nth-child(1) {
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}

.btn-2:hover span:nth-child(2) {
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  color: transparent;
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
}
.btn-3 {
  border: none;
  transition: all 0.3s ease;
  overflow: hidden;
}

.btn-3:after {
  position: absolute;
  content: " ";
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1fd1f9;
  background-image: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);
  transition: all 0.3s ease;
}

.btn-3:hover {
  background: transparent;
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5), -4px -4px 6px 0 rgba(116, 125, 136, 0.2), inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5), inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
  color: #fff;
}

.btn-3:hover:after {
  -webkit-transform: scale(2) rotate(180deg);
  transform: scale(2) rotate(180deg);
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5), -4px -4px 6px 0 rgba(116, 125, 136, 0.2), inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5), inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
}
.btn-4 {
  background: #f796c0;
  background: radial-gradient(circle, #f796c0 0%, #76aef1 100%);
  line-height: 42px;
  padding: 10px 20px;
  border: none;
}

.btn-4 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.btn-4:before,
.btn-4:after {
  position: absolute;
  content: "";
  height: 0%;
  width: 1px;
  box-shadow: -1px -1px 20px 0px white, -4px -4px 5px 0px white, 7px 7px 20px 0px rgba(0, 0, 0, 0.4), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
}

.btn-4:before {
  right: 0;
  top: 0;
  transition: all 500ms ease;
}

.btn-4:after {
  left: 0;
  bottom: 0;
  transition: all 500ms ease;
}

.btn-4:hover {
  background: transparent;
  color: #76aef1;
  box-shadow: none;
}

.btn-4:hover:before {
  transition: all 500ms ease;
  height: 100%;
}

.btn-4:hover:after {
  transition: all 500ms ease;
  height: 100%;
}

.btn-4 span:before,
.btn-4 span:after {
  position: absolute;
  content: "";
  box-shadow: -1px -1px 20px 0px white, -4px -4px 5px 0px white, 7px 7px 20px 0px rgba(0, 0, 0, 0.4), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
}

.btn-4 span:before {
  left: 0;
  top: 0;
  width: 0%;
  height: 0.5px;
  transition: all 500ms ease;
}

.btn-4 span:after {
  right: 0;
  bottom: 0;
  width: 0%;
  height: 0.5px;
  transition: all 500ms ease;
}

.btn-4 span:hover:before {
  width: 100%;
}

.btn-4 span:hover:after {
  width: 100%;
}



`;

/* max-width: 1300px; */
export const Container = styled.div`
  width: 100%;
  margin: ${({ margin }) => (margin ? margin : "0 auto")};
  /* padding: ${({ padding }) => (padding ? padding : "0 15px")}; */
`;
export const Header = styled.h1`
  color: ${({ color }) => (color ? color : "blue")};
  text-align: center;
  margin: 2rem;
`;

const DEFAULT_DIV = styled.div`
  padding: ${({ padding }) => (padding ? padding : "")};
  padding-bottom: ${({ pb }) => (pb ? pb : "")};
  padding-top: ${({ pt }) => (pt ? pt : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "")};
  height: ${({ height }) => (height ? height : "")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "")};
  background-color: ${({ background }) => (background ? background : "")};
`;

export const Row = styled(DEFAULT_DIV)`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
`;

export const Column = styled(DEFAULT_DIV)`
  display: flex;
  flex-flow: column;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
`;

export const Text = styled.span`
  font-size: ${({ size }) => (size ? size : "")};
  font-weight: ${({ weight }) => (weight ? weight : "")};
  letter-spacing: ${({ spacing }) => (spacing ? spacing : "")};
  text-align: ${({ align }) => (align ? align : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "")};
  height: ${({ height }) => (height ? height : "")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "")};
  color: ${({ color }) => (color ? color : "")};
`;
export const Button = styled.button`
  padding: ${({ padding }) => (padding ? padding : "10px")};
  border: ${({ border }) => (border ? border : "none")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "transparent"};
  font-family: "Roboto", sans-serif;
  color: ${({ color }) => (color ? color : "#bff073")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "600")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "20px")};
  cursor: pointer;
`;

// Small devices (small phones ,less then 576px)
export const Mobile = (props) => {
  return css`
    @media only screen and (max-width: 575px) {
      ${props}
    }
  `;
};
// Small devices (landscape phones, less than 768px)
export const Tablet = (props) => {
  return css`
    @media only screen and (max-width: 767px) {
      ${props}
    }
  `;
};
// Medium devices (tablets,Ipad 768px less than 992px)
export const Ipad = (props) => {
  return css`
    @media only screen and (max-width: 991px) {
      ${props}
    }
  `;
};

// Large devices (desktops less than 1200px)
export const Destop = (props) => {
  return css`
    @media only screen and (max-width: 1199px) {
      ${props}
    }
  `;
};

// Extra large devices (large desktops, 1200px and up)
export const Cpu = (props) => {
  return css`
    @media only screen and (min-width: 1200px) {
      ${props}
    }
  `;
};

export default GlobalStyle;
