import { css } from "styled-components";

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
