import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './store';
import { Provider } from 'react-redux';

// 리덕스 store 생성
const store = createStore(rootReducer);
console.log(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // new Provide().setStore(store); 
  <Provider store={store}>
    <App />
  </Provider>
);

