import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
// react + redux

const reducer = (state, action) => {
  if (state === undefined) {
    return 0;
  }
  switch (action.type) {
    case 'add':
      console.log('state', state);
      return state + action.payload;
    default:
      return 0;
  }
};

export const store = createStore(reducer);

const render = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <App value={store.getState()} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render(store);

// 监听 state 变化就重新 render
store.subscribe(() => {
  render(store);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
