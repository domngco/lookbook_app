import React, { Component } from "react";
import { connect } from "react-redux";
import "./menu.css";
import MenuSignedOut from "./MenuSignedOut.jsx";
import MenuSignedIn from "./MenuSignedIn.jsx";

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  render() {
    return (
      <React.Fragment>
        {!this.state.loggedIn ? <MenuSignedOut /> : <MenuSignedIn />}
      </React.Fragment>
    );
  }
}

export default Menu;
