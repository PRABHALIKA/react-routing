import "./Contact.css";
import React from "react";
import TableComponent from '../TableComponent/TableComponent'
function template() {
  return (
    <div className="contact">
      <h1>Players</h1>
      <TableComponent h={this.state.headers}   k={this.state.keys}   d={this.state.data} fe={this.fnRowData} />

    </div>
  );
};

export default template;
