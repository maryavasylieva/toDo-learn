import React, { lazy, Suspense, Component } from "react";
import Navigation from "../Navigation/Navigation";
import { Route, Redirect, Switch } from "react-router-dom";

const AsyncHome = lazy(() => import("../../Pages/Home"));
// // const AsyncAbout = lazy(() => import('./Pages/About'));
const AsyncList = lazy(() => import("../../Pages/ListPages"));

class Root extends Component {



  render() {
    return (
      <div className="Root">
        <Navigation></Navigation>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={AsyncHome} />
            {/* <Route path='/about' component={AsyncAbout} /> */}
            <Route path="/list" component={AsyncList} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}


export default Root;
