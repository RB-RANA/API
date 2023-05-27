import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from './Context/ProductContext';
import {FilterProvider} from './Context/filter_context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppProvider>
      <FilterProvider>
    <App />
    </FilterProvider>
    </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
