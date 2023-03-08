import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'flowbite';
import App from './App';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux';
import store from './store.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
   <Provider store={store}>
      
      <App className=" [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"/>
   </Provider>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
