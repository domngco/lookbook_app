import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

export class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact={true} path="/">
            404
          </Route>
          <Route exact={true} path="/signin">
            Sign In
          </Route>
          <Route exact={true} path="/search">
            Search
          </Route>
          <Route exact={true} path="/feed">
            Feed
          </Route>
          <Route exact={true} path="/archives">
            Archives
          </Route>
          <Route exact={true} path="/create-lookbook">
            Create A Look Book
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default Content;
