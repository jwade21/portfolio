import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
require('normalize-css');

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='header'>
          <div className='headerText'>
            <h1>
              Jordan Wade
            </h1>
            <h2>
              Web Developer
            </h2>
          </div>
        </div>
        <ul className='nav'>
          <li><IndexLink to='/' activeClassName='active'>About Me</IndexLink></li>
          <li><Link to='/projects' activeClassName='active'>Projects</Link></li>
          <li><Link to='/resume' activeClassName='active'>Resume</Link></li>
          <li><Link to='/contact' activeClassName='active'>Contact Me</Link></li>
        </ul>
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
