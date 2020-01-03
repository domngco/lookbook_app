import React, { Component } from "react";
import "./app.css";
import Content from "../components/content/Content.jsx";
import Menu from "../components/menu/Menu.jsx";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render = () => {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div className="container-1">
            <div className="container-2">
              <div className="header">Header</div>
              <div className="menu">
                <Menu />
              </div>
              <div className="content">
                <Content />
              </div>
              <div className="footer">Footer</div>
            </div>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  };
}

export default App;
