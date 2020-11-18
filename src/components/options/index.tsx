import React from "react";
import "./options.scss";

export default function Options() {
  return (
    <div className="options">
      Favorite color:
      <select id="color">
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
        <option value="yellow">yellow</option>
      </select>
      <label>
        <input type="checkbox" id="like" /> I like colors.
      </label>
      <div id="status"></div>
      <button id="save">Save</button>
    </div>
  );
}
