import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html,
  body {
    // overflow: hidden;
    margin: 0px;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }

  * {
    box-sizing: border-box;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
`;

export default GlobalStyle;
