import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './component/Resume/Resume';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

ReactDOM.render(
  <Router basename={'/Resume/'}>
    <Route path="/" component={Resume} />
  </Router>,
  document.getElementById('root')
);