import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {BrowserRouter as Router} from 'react-router-dom'
import { UseContextProvider } from './Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseContextProvider>
      <Router>
        <App />
      </Router>
    </UseContextProvider>
  </React.StrictMode>
);
