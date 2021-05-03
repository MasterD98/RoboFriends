import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App.js'
import reportWebVitals from './reportWebVitals';
import {searchRobots,requestRobots} from './reducers.js'
import 'tachyons';

console.log(1);
const logger=createLogger();
console.log(2);
const rootReducer=combineReducers({searchRobots,requestRobots});
console.log(3);
const store=createStore(rootReducer,applyMiddleware(thunkMiddleware,logger));
console.log(4);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
console.log(5);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
