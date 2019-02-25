import React    from "react";
import template from "./Child.jsx";

class Child extends React.Component {
  render() {
    return template.call(this);
  }
  componentWillReceiveProps(p,s){
    debugger;
  }
}

export default Child;
