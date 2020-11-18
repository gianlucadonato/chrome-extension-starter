import React from "react";
import ReactDOM from "react-dom";
import Popup from "./components/popup";
import "./app.scss";

chrome.tabs.query({ active: true, currentWindow: true }, () => {
  ReactDOM.render(<Popup />, document.getElementById("popup"));
});
