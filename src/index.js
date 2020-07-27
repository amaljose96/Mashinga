import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Mashinga from "./Mashinga";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "./Mashinga/Store";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Router>
        <Mashinga/>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
