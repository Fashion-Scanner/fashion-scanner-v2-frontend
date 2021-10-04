import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { MainPage } from "pages";

const RootRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route exact path="/bts" component={MainPage} />
        <Route exact path="/bts/lookbook" component={MainPage} />
        <Route exact path="/bts/match" component={MainPage} />
        <Route exact path="/faq" component={MainPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default RootRouter;
