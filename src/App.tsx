import React from "react";
import RootRouter from "routes";
import GlobalFonts from "styles/GlobalFonts";
import GlobalStyle from "styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <GlobalFonts />
      <RootRouter />
    </>
  );
};

export default App;
