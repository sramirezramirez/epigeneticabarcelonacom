import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Detect base path from current location
const getBasePath = () => {
  // Use the base from vite config or default to '/'
  const base = import.meta.env.BASE_URL || '/';
  return base === '/' ? undefined : base.replace(/\/$/, '');
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={getBasePath()}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
