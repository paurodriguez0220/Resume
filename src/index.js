import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './component/Resume/Resume';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router basename={'/resume'}>
    <Resume />
  </Router>,
  document.getElementById('root')
);