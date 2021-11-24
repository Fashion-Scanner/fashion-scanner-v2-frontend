import React, { Suspense } from "react";
import RootRouter from "routes";
import GlobalFonts from "styles/GlobalFonts";
import GlobalStyle from "styles/GlobalStyles";
import { theme } from "styles/Theme";
import "i18n";

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <GlobalStyle theme={theme} />
      <GlobalFonts />
      <RootRouter />
    </Suspense>
  );
};

export default App;
