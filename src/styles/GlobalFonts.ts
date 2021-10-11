import { createGlobalStyle } from "styled-components";
import PrimeTimeWoff from "styles/fonts/primetime.woff";
import PrimeTimeWoff2 from "styles/fonts/primetime.woff2";

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Primetime';
    src: url(${PrimeTimeWoff}) format('woff'), url(${PrimeTimeWoff2}) format('woff2');
    font-style: normal;
    font-weight: 400;
    font-display: fallback; /* <- this can be added to each @font-face definition */
  }
`;

export default GlobalFonts;
