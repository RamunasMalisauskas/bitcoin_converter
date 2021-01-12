import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const HomeLazy = lazy(() => import("./pages/Home/Home.jsx"));

function Routes() {
  return (
    <Router>
      <Switch>
        <Suspense fallback="loading">
          <Route exact path="/" component={HomeLazy} />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default Routes;
