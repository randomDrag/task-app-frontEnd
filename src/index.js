import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {ADD_NEW_TRIP} from './actions/const';

import reducers from './reducer';

/* used for @REDUX DEV TOOLS for debug */
const store = createStore(reducers, {}, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

//const store = createStore(reducers, {}, applyMiddleware(thunk));

// function loadFromLocalStorage() {
//   try {
//     const serialisedState = localStorage.getItem(ADD_NEW_TRIP);
//     let formData = {}
//     return formData = {...JSON.parse(serialisedState)};
//   } catch (e) {
//     console.warn(e);
//     return undefined;
//   }
// }


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
   </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
