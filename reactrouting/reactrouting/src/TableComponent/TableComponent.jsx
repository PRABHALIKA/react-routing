import "./TableComponent.css";
import React from "react";

function template() {
  return (
    <div className="table-component">
     <table border="2px">
          <tr>
            {
              this.props.h.length > 0 && this.props.h.map((v)=>{
                 return <th>{v}</th>
              })
            }
            <th>Edit</th>
          </tr>
          {
            this.props.d.length > 0 && this.props.d.map((o)=>{
                   return <tr>
                               {
                                 this.props.k.length > 0 && this.props.k.map((v)=>{
                                     return   <td>{o[v]}</td>
                                 })
                               }
                               <td><input type="button" value='edit' onClick={this.fnEdit.bind(this,o)} /></td>
                          </tr>
            })
          }
     </table>
    </div>
  );
};

export default template;
