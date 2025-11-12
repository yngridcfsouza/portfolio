import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Basename para publicação em GitHub Pages (username.github.io/portfolio) */}
    <BrowserRouter basename="/portfolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
