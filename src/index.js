// 2 classes, react and react dom
import React from 'react';
// reactDom is the virtual dom and will update elements that have changed state
import ReactDOM from 'react-dom';
//our app componentn
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

//this function will render our app component on the virutal dom
//and this function has 2 argurments: the component itself, and where it is going to be rendered, which is the root
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
