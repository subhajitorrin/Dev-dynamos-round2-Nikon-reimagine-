import React from "react";
import "./ButtonComponent.css";

const ButtonComponent = () => {
  return (
    <button className="btn" type="button">
      <strong >See more</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>
      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </button>
  );
};

export default ButtonComponent;
