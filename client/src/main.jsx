// client\src\main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '../src/component/icon.js';  // Ensure this line is present
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JavaScript


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
