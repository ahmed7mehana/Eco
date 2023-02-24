import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Store } from './rtk/Store.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={Store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>
  </React.StrictMode>
);

