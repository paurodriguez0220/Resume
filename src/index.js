import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import rootReducer from './redux/reducers/index';
import GoogleSearch from './component/Google/Google';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router basename={'/resume'}>
      <Route path="/" component={GoogleSearch} />
    </Router>
  </Provider>,
  document.getElementById('root')
);