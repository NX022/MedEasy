// src/components/DoctorSignUpCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const DoctorSignUpCard = () => {
    return (
        <div>
            <Link to="/doctor-sign-up" className="transparent-link">
                <div>
                    <h5>Doctor SignUp</h5>
                    {/* Add your doctor sign-up form or content here */}
                </div>
            </Link>
        </div>
    );
};

export default DoctorSignUpCard;
