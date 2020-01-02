import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import App from "../src/containers/App.jsx";
import Store from "../src/containers/Store.jsx";

import reloadMagic from "./reload-magic-client.js"; // automatic reload
reloadMagic(); // automatic reload

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
