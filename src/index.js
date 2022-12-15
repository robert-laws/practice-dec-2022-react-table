import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './custom.css';
import App from './App';
import PublicationsState from './context/publications/PublicationState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PublicationsState>
      <App />
    </PublicationsState>
  </React.StrictMode>
);
