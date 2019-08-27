import React from "react";
import ReactDOM from "react-dom";
import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './react-bootstrap-table.css';
import StockDisplay from "./StockDisplay.jsx";

ReactDOM.render(
   <StockDisplay />, 
  document.getElementById("root")
);