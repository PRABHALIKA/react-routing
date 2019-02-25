import React    from "react";
import template from "./About.jsx";

class About extends React.Component {
  constructor(){
    super();
    this.state={
      'headers':['Hero Name',"His Movies"],
      'data':[
        {
          'n':'Ntr',
          'm':26
        },
        {
          'n':'salman',
          'm':76
        }
      ],
      'keys':['n','m']
    }
  }
  render() {
    return template.call(this);
  }
}

export default About;
