import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Page1 from './Page1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page1">page1</Link></li>
          </ul>
        </nav>

        <Route path="/" exact component={Home}/>
        <Route path="/page1" component={Page1}/>
      </div>
    );
  }
}

export default App;
