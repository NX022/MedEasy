// src/components/MainPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Dropdown } from 'react-bootstrap'; // Import Bootstrap Dropdown component
import './MainPage.css'; // Import custom CSS file
import Footer from './Footer'; // Import custom CSS
import MiddleSection from './MiddleSection'; // Import custom CSS
import PatientLoginCard from './PatientLoginCard'; // Import the PatientLoginCard component
import DoctorLoginCard from './DoctorLoginCard'; // Import the DoctorLoginCard component
import PatientSignUpCard from './PatientSignUpCard'; // Import the PatientSignUpCard component
import DoctorSignUpCard from './DoctorSignUpCard'; // Import the DoctorSignUpCard component

// Import your logo image (replace 'logo.png' with your actual image file)
import logoImg from '../images/logo.png';

const MainPage = () => {
    // State to manage the visibility of login cards
    const [showLoginCards, setShowLoginCards] = useState(false);

    // State to manage the visibility of signup cards
    const [showSignUpCards, setShowSignUpCards] = useState(false);

    // Function to handle login button click
    const handleLoginClick = () => {
        setShowLoginCards(!showLoginCards);
        // Close signup cards when login button is clicked
        setShowSignUpCards(false);
    };

    // Function to handle signup button click
    const handleSignUpClick = () => {
        setShowSignUpCards(!showSignUpCards);
        // Close login cards when signup button is clicked
        setShowLoginCards(false);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    {/* Logo on the left end of the navbar */}
                    <div className="navbar-brand">
                        <img src={logoImg} alt="MedEasy Logo" className="logo-img" />
                        MedEasy
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            {/* Bootstrap Dropdown component for Log In */}
                            <li className="nav-item dropdown">
                                <button
                                    className="btn btn-login dropdown-toggle"
                                    type="button"
                                    id="loginDropdown"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    onClick={handleLoginClick}
                                >
                                    Log In
                                </button>
                                <div
                                    className={`dropdown-menu dropdown-menu-right ${showLoginCards ? 'show' : ''}`}
                                    aria-labelledby="loginDropdown"
                                >
                                    {/* Conditional rendering of login cards based on state */}
                                    {showLoginCards && (
                                        <div className="d-flex flex-row">
                                            <div className="card m-2 patient-card">
                                                <div className="card-body">
                                                    <PatientLoginCard />
                                                </div>
                                            </div>
                                            <div className="card m-2 doctor-card">
                                                <div className="card-body">
                                                    <DoctorLoginCard />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </li>

                            {/* Bootstrap Dropdown component for Sign Up */}
                            <li className="nav-item dropdown">
                                <button
                                    className="btn btn-signup dropdown-toggle"
                                    type="button"
                                    id="signupDropdown"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    onClick={handleSignUpClick}
                                >
                                    Sign Up
                                </button>
                                <div
                                    className={`dropdown-menu dropdown-menu-right ${showSignUpCards ? 'show' : ''}`}
                                    aria-labelledby="signupDropdown"
                                >
                                    {/* Conditional rendering of signup cards based on state */}
                                    {showSignUpCards && (
                                        <div className="d-flex flex-row">
                                            <div className="card m-2 patient-card">
                                                <div className="card-body">
                                                    <PatientSignUpCard />
                                                </div>
                                            </div>
                                            <div className="card m-2 doctor-card">
                                                <div className="card-body">
                                                    <DoctorSignUpCard />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Middle Section component */}
            <MiddleSection />

            {/* Footer component */}
            <Footer />
        </div>
    );
};

export default MainPage;
