import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import App from "../src/containers/App.jsx";
import store from "../src/containers/store.jsx";

import reloadMagic from "./reload-magic-client.js"; // automatic reload
reloadMagic(); // automatic reload

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
