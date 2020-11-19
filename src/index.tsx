import React from 'react';
import ReactDOM from 'react-dom';
// first => load global styles
import 'styles/global.scss';
// then => components style
import App from 'App';

const root = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(root, document.getElementById('root'));
