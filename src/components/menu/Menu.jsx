import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./menu.css";

class Menu extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="ul-menu-1">
          <ul className="ul-menu-2">Sign In</ul>
          <ul className="ul-menu-2">Search</ul>
          <ul className="ul-menu-2">Feed</ul>
        </ul>
      </React.Fragment>
    );
  }
}

export default Menu;
