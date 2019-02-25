import "./Home.css";
import React from "react";
import Child from '../Child/Child';
import DDL from '../DDL/DDL';

function template() {
  return (
    <div className="home">
      <h1>Home <Child n={this.state.name}/></h1>
      <DDL data={this.state.heros}/>
      <DDL data={this.state.players} />
    </div>
  );
};

export default template;
