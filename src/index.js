import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <div className="row">
        <div className="col">
          <App />
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
