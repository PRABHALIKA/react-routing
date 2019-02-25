import "./About.css";
import React from "react";
import TableComponent from '../TableComponent/TableComponent';
function template() {
  return (
    <div className="about">
      <h1>Heros</h1>
      <TableComponent h={this.state.headers}   k={this.state.keys}   d={this.state.data} />
    </div>
  );
};

export default template;
