import React, { useEffect, useState } from "react";
import "./popup.scss";

export default function Popup() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    chrome.runtime.sendMessage({ popupMounted: true });
  }, []);

  const countUp = () => {
    chrome.browserAction.setBadgeText({ text: (counter + 1).toString() });
    setCounter(counter + 1);
  };

  const changeBg = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: any) => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      chrome.tabs.sendMessage(tabs[0].id, { color: `#${randomColor}` }, (msg) =>
        console.log("result message:", msg),
      );
    });
  };

  return (
    <div className="popup-container">
      <h3>Extension Starter</h3>
      <div className="buttons">
        <button onClick={() => countUp()}>Count Up</button>
        <button onClick={() => changeBg()}>Change background</button>
      </div>
    </div>
  );
}
