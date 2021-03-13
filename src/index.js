import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from "./context/products";
import { CartProvider } from './context/cart';

import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";

import App from './App';

ReactDOM.render(
  <ProductProvider>
    <CartProvider>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </CartProvider>
  </ProductProvider>,
  document.getElementById('root')
);
