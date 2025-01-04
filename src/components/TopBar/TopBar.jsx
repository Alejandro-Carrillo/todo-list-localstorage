import React from "react";
import "./TopBar.css";

const TopBar = ({ setShowComplite, isChecked }) => {
  return (
    <div className="top-bar">
      <h3>To-do list</h3>
      <div className="check-container">
        <h5>Ver realizados</h5>
        <input
          className="input-check"
          id="check"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowComplite(e.target.checked)}
        />{" "}
        <label className="label-check" htmlFor="check"></label>
      </div>
    </div>
  );
};

export default TopBar;
