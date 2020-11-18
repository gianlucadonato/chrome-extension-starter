import React from "react";
import ReactDOM from "react-dom";
import Options from "./components/options";

chrome.tabs.query({ active: true, currentWindow: true }, () => {
  ReactDOM.render(<Options />, document.getElementById("options"));
});
