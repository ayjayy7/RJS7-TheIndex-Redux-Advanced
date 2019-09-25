import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";

import store from "./Redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
