import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "../user/SignIn.jsx";
import SignUp from "../user/SignUp.jsx";
import Cover from "./create-lookbook/Cover.jsx";

export class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact={true} path="/" />
          <Route exact={true} path="/signin" component={SignIn} />
          <Route exact={true} path="/signup" component={SignUp} />
          <Route exact={true} path="/search" />
          <Route exact={true} path="/feed" />
          <Route exact={true} path="/archives" />
          <Route exact={true} path="/create-lookbook" component={Cover} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Content;
