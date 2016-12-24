import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './App';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import NotFound from './NotFound';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='projects' component={Projects} />
      <Route path='resume' component={Resume} />
      <Route path='contact' component={Contact} />
    </Route>
    <Route path='*' component={NotFound} />
  </Router>,
  document.getElementById('root')
);
