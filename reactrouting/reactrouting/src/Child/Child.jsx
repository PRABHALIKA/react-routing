import "./Child.css";
import React from "react";

function template() {
  return (
    <div className="child">
      <h1>Child {this.props.n}</h1>
    </div>
  );
};

export default template;
