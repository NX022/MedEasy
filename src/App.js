// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './components/MainPage';
import PatientSignUpForm from './components/PatientSignUpForm';
import DoctorSignUpForm from './components/DoctorSignUpForm'; // Import DoctorSignUpForm

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/patient-sign-up" element={<PatientSignUpForm />} />
          <Route path="/doctor-sign-up" element={<DoctorSignUpForm />} /> {/* Add route for DoctorSignUpForm */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
