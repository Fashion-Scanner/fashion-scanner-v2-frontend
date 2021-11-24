import React from "react";
import { useTranslation } from "react-i18next";
import { IconContext } from "react-icons/lib";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Main, BTSMain, LookbookPage, Match, Result, Loading, NotFound } from "pages";

const RootRouter: React.FC = () => {
  useTranslation();
  return (
    <IconContext.Provider value={{ style: { verticalAlign: "top" }, className: "icon" }}>
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
          <Redirect from="*" to="/bts/notfound" />
        </Switch>
      </BrowserRouter>
    </IconContext.Provider>
  );
};

export default RootRouter;
