import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect  } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import rootReducer from './redux/reducers/index';
import GogglesSearch from './component/Goggles/GogglesSearch/GogglesSearch';
import GogglesResult from './component/Goggles/GogglesResult/GogglesResult';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router basename={'/resume'}>
      <Route exact path="/">
          <Redirect to="/gogglesearch" />
      </Route>
      <Route path="/gogglesearch" component={GogglesSearch} />
      <Route path="/gogglesresult" component={GogglesResult} />
    </Router>
  </Provider>,
  document.getElementById('root')
);