import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html,
  body {
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
`;

export default GlobalStyle;
