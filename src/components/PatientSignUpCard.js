// src/components/PatientSignUpCard.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './MainPage.css';

const PatientSignUpCard = () => {
    return (
        <div>
            <Link to="/patient-sign-up" className="transparent-button">
                <div>
                    <h5>Patient SignUp</h5>
                    {/* Add your patient sign-up form or content here */}
                </div>
            </Link>
        </div>
    );
};

export default PatientSignUpCard;
