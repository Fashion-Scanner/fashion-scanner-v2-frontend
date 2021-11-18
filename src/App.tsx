import React from "react";
import RootRouter from "routes";
import GlobalFonts from "styles/GlobalFonts";
import GlobalStyle from "styles/GlobalStyles";
import { theme } from "styles/Theme";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle theme={theme} />
      <GlobalFonts />
      <RootRouter />
    </>
  );
};

export default App;
