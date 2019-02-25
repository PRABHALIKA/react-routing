import React    from "react";
import template from "./Home.jsx";

class Home extends React.Component {
  constructor(){
    super();
    console.log('constructor');
    this.state={
      'name':'sacihn',
      'heros':["NTR",'SalMan'],
      "players":["SAchin","Dhoni","kohli"]
    }
    setTimeout(function(){
        this.setState({
          'name':'dhoni'
        })
    }.bind(this),3000);
  }

  componentDidCatch(){
    debugger;
  }

  componentWillUnmount(){
    console.log('will unmount');
  }
  componentWillUpdate(){
    console.log('will update');
  }
  shouldComponentUpdate(){
    console.log('should update');
    return true;
  }
  componentDidUpdate(){
    console.log('did update');
  }
  componentWillMount(){
    console.log('will mount');
  }
  componentDidMount(){
    console.log('did mount');
  }
  render() {
    console.log('render');
    return template.call(this);
  }
}

export default Home;
