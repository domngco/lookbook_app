import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

let MenuSignedIn = () => {
  return (
    <React.Fragment>
      <ul className="ul-menu-1">
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
        <ul>
          <Link className="ul-menu-2" to="/archives">
            Archives
          </Link>
        </ul>
        <ul>
          <Link className="ul-menu-2" to="/create-lookbook">
            +
          </Link>
        </ul>
      </ul>
    </React.Fragment>
  );
};

export default MenuSignedIn;
