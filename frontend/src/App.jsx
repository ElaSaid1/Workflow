import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Navbar/sideb';
import Header from './Components/Navbar/Navbar';
import Dashboard from './pages/dashboard';
import Signin from './Components/login_components/login_form';
import Signup from './Components/login_components/signup_form';
import './Components/login_components/form_style.css';
import './Components/styles/dashboard.css';



function App() {
  return (
    
    <Routes>
    
    
    <Route path="/" element={<Signup />} />
  </Routes>
    
  );
}

export default App;
