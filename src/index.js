import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * Initializes the React root and renders the application.
 * 
 * This file acts as the entry point for the React application. 
 * It uses ReactDOM to attach the app to a root element in the HTML,
 * and also includes optional web vital reporting.
 */

// Create a React root for Concurrent Mode
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * Web Vitals Reporting
 * 
 * Uncomment the following line to start measuring performance 
 * in your app, based on the Web Vitals API.
 * Learn more: https://bit.ly/CRA-vitals
 */
reportWebVitals();
