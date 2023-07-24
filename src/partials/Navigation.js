import React from "react";
import { Route, Switch } from "react-router-dom";
import { DashBoard } from "../pages/DashBoard/DashBoard";
import PageNotFound from "../pages/NotFound/PageNotFound";
import { DashBoardChart } from "../pages/Chart/DashBoardChart";

const Navigation = () => {
  return (
    <Switch>
      <Route path="/" exact component={DashBoard} />
      <Route path="/chart" exact component={DashBoardChart} />
      <Route component={PageNotFound} />
    </Switch>
  );
};
export default Navigation;
