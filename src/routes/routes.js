import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "../App";
import EnglishPage from "../components/EnglishPage";
import HindiPage from "../components/HindiPage";
import TeluguPage from "../components/TeluguPage";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/english" exact component={EnglishPage} />
      <Route path="/hindi" exact component={HindiPage} />
      <Route path="/telugu" exact component={TeluguPage} />
    </Switch>
  );
}

export default Routes;
