import React    from "react";
import template from "./Contact.jsx";

class Contact extends React.Component {
  constructor(){
    super();
    this.state={
      'headers':['Player Name',"Runs","Loc"],
      'data':[
        {
          'n':'sachin',
          'r':260000,
          'l':"mumbai"
        },
        {
          'n':'dhoini',
          'r':60000,
          'l':"ranchi"
        },
        {
          'n':'kohli',
          'r':10000,
          'l':"delhi"
        }
      ],
      'keys':['n','r','l']
    }
  }
  render() {
    return template.call(this);
  }

  fnRowData(row){
    debugger;
  }
}

export default Contact;
