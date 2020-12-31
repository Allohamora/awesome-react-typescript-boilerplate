/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/global.scss'; // first: load global styles
import App from 'App'; // second: load app with app styles

const root = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(root, document.getElementById('root'));
