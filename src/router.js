import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";

import {App, Home, NotFound} from "./components";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };