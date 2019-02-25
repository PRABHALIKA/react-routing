import "./DDL.css";
import React from "react";

function template() {
  return (
    <div className="ddl">
      <select>
        {
          this.props.data.length > 0 && this.props.data.map((v)=>{
            return <option>{v}</option>
          })
        }
      </select>
    </div>
  );
};

export default template;
