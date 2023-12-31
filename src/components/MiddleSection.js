// src/components/MiddleSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../images/doctor.png';
import './MainPage.css';

const MiddleSection = () => {
    return (
        <div className="middle-section">

            <div className="right-section">
                <h1>Welcome to MedEasy</h1>
                <p>
                    MedEasy, a secure blockchain platform, facilitates the storage and sharing of highly sensitive patient data among multiple facilities and agencies. This innovative system ensures the security of critical medical information, fostering collaboration for effective diagnoses and treatments while adhering to the highest standards of confidentiality and compliance in healthcare data management.</p>
                <Link to="/login">
                    <button className="btn btn-primary">Sign In</button>
                </Link>
            </div>
            <div className="left-section">
                <img src={logoImg} alt="Healthcare Image" />
            </div>
        </div>
    );
};

export default MiddleSection;
