import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{

  /* Colors */
  --c-primary: #5ECE7B;
  --c-white: #FFFFFF;
  --c-primary-dark: #1D1F22;
  --c-gray:  #C4C4C4;

  
  /* Fonts */
  --font-family: 'Raleway', sans-serif;

  /* Fonts: Weight */
  --fonts-weights-body: 400;
  --fonts-weights-heading: 500;
  --fonts-weights-bold: 700;
}

* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

a {
  text-decoration: none !important;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; /*defines what 1rem is */
}

body {
  font-family: var(--font-family);
  font-weight: 400;
  background-color: #ffffff;
  width: 100vw;
   position: relative;
  overflow-x: hidden;

}



.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

`;

export default GlobalStyles;

const size = {
  mobileS: "320px",
  mobileM: "400px",
  mobileL: "600px",
  tablet: "800px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

export const medium_header = css`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: uppercase;
`;
