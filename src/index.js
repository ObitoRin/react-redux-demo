import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// react-redux

const reducer = (state, action) => {
  if (state === undefined) {
    return { n: 0, text: '一段文字' };
  }
  switch (action.type) {
    case 'add':
      if (state.n + action.payload === 10) {
        return { ...state, n: state.n + action.payload, text: '变更文字' };
      }
      return { ...state, n: state.n + action.payload };
    default:
      return state || { n: 0, text: '一段文字' };
  }
};

export const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
