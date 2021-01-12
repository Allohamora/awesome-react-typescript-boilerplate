import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import './lib/i18n';

const root = (
  <React.StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </React.StrictMode>
);

ReactDOM.render(root, document.getElementById('root'));
