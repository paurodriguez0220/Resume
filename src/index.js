import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import './index.css';
import GoogleSearch from './component/Google/Google';

ReactDOM.render(
  <Router basename={'/resume'}>
    <Route path="/" component={GoogleSearch} />
  </Router>,
  document.getElementById('root')
);