import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { MovieProvider } from './context/MovieContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieProvider>
      <App />
    </MovieProvider>
  </React.StrictMode>
);
