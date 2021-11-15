import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Main, BTSMain, LookbookPage, Match, Result, Loading, NotFound } from "pages";
import { Footer } from "components";

const RootRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route exact path="/bts" component={BTSMain} />
        <Route exact path="/bts/lookbook" component={LookbookPage} />
        <Route exact path="/bts/match" component={Match} />
        <Route exact path="/bts/loading" component={Loading} />
        <Route exact path="/bts/result" component={Result} />
        <Route exact path="/bts/notfound" component={NotFound} />
        <Route exact path="/faq" component={Main} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default RootRouter;
