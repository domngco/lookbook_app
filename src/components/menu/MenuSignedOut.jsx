import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

let MenuSignedOut = () => {
  return (
    <React.Fragment>
      <ul className="ul-menu-1">
        <ul>
          <Link className="ul-menu-2" to="/signin">
            Sign In
          </Link>
        </ul>
        <ul>
          <Link className="ul-menu-2" to="/search">
            Search
          </Link>
        </ul>
        <ul>
          <Link className="ul-menu-2" to="/feed">
            Feed
          </Link>
        </ul>
      </ul>
    </React.Fragment>
  );
};

export default MenuSignedOut;
