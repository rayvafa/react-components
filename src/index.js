import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {NavigationProvider} from "./context/navigation";
import App from './App';

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
