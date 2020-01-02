import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

export class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/">
              404
            </Route>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default Content;
