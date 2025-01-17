import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM from 'react-dom' instead of 'react-dom/client'
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
