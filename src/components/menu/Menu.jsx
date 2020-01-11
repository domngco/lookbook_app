import React, { Component } from "react";
import { connect } from "react-redux";
import "./menu.css";
import MenuSignedOut from "./MenuSignedOut.jsx";
import MenuSignedIn from "./MenuSignedIn.jsx";

class UnconnectedMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
  }

  render() {
    return (
      <React.Fragment>
        {!this.props.loggedIn ? <MenuSignedOut /> : <MenuSignedIn />}
      </React.Fragment>
    );
  }
}

let mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  };
};

let Menu = connect(mapStateToProps)(UnconnectedMenu);
export default Menu;
