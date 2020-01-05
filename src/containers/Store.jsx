import { createStore } from "redux";

let reducer = (state, action) => {
  if (action.type === "signup-successful") {
    return {
      ...state,
      loggedIn: true,
      userDetails: action.userDetails
    };
  }
  if (action.type === "signin-successful") {
    return {
      ...state,
      loggedIn: true,
      userDetails: action.userDetails
    };
  }
};

let Store = createStore(
  reducer,
  {
    loggedIn: false,
    userDetails: {}
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;
