import "./Menu.css";
import React from "react";
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
function template() {
  return (
    <div>
       <BrowserRouter>
          <div>
                <div className="menu">
                     <span><Link to="/home">Home</Link></span>
                     <span><Link to="/about">About</Link></span>
                     <span><Link to="/contact">Contact</Link></span>
                </div>
                <Route path="/" exact component={Home} />
                <Route path="/home"  component={Home} />
                <Route path="/about"  component={About} />
                <Route path="/contact"  component={Contact} />
          </div>
       </BrowserRouter>
    </div>
  );
};

export default template;
