import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import "./popup.scss";

export default function Popup() {
  const [counter, setCounter] = useState(0);
  const clickCounter = useSelector((state) => state.count);
  const dispatch = useDispatch();

  useEffect(() => {
    chrome.runtime.sendMessage({ popupMounted: true });
  }, []);

  const clickCount = () => {
    dispatch({ type: "ADD_COUNT" });
  };

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
      <div>{clickCounter} clicks</div>
      <div className="buttons">
        <Button onClick={() => clickCount()}>Click Count</Button>
        <Button onClick={() => countUp()}>Count Up</Button>
        <Button onClick={() => changeBg()}>Change background</Button>
      </div>
    </div>
  );
}
