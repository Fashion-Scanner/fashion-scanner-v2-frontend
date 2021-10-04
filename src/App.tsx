import React from "react";
import RootRouter from "routes";
import GlobalStyle from "styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <RootRouter />
    </>
  );
};

export default App;
