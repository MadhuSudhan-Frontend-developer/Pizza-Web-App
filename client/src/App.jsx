// client\src\App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Signup from './Signup';
import Login from './Login';
import Home from "./component/Home";
import ProfilePage from './ProfilePage';
import EmailOTPPage from './EmailOTPPage'; // Import EmailOTPPage component
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu/menu'; // Import the Menu component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} /> {/* Render the Home component for the root path */}
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/EmailOTPPage" element={<EmailOTPPage />} /> 
        <Route path="/menu" element={<Menu />} /> 

      </Routes>
    </Router>
  );
}

export default App;
