import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
      {AOS.init()}
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();