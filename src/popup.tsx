import React from "react";
import ReactDOM from "react-dom";
import Popup from "./components/popup";

chrome.tabs.query({ active: true, currentWindow: true }, () => {
  ReactDOM.render(<Popup />, document.getElementById("popup"));
});
