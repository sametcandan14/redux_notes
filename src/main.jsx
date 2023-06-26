import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
/*
provider:
store da tutulan verilerin uygulama tarafında eişilmesini sağlar.
*/

import { Provider } from "react-redux";
import store from "./redux/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
