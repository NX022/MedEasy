
import React, { useState } from 'react';
import './PatientSignUpForm.css';

const PatientSignUpForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Patient SignUp submitted:', { name, email, phoneNumber, dob, gender, password });
    };

    return (
        <div className="patient-signup-form-body container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="signup-card">
                        <div className="card-body">
                            <h2 className="card-title">Patient Sign Up</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number:</label>
                                    <input type="tel" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label>Date of Birth:</label>
                                    <input type="date" className="form-control" value={dob} onChange={(e) => setDob(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label>Gender:</label>
                                    <div className="gender-radio-group">
                                        <label className={`radio-label ${gender === 'Male' && 'selected'}`}>
                                            <input
                                                type="radio"
                                                value="Male"
                                                checked={gender === 'Male'}
                                                onChange={() => setGender('Male')}
                                            />
                                            <span className="radio-dot"></span> Male
                                        </label>
                                        <label className={`radio-label ${gender === 'Female' && 'selected'}`}>
                                            <input
                                                type="radio"
                                                value="Female"
                                                checked={gender === 'Female'}
                                                onChange={() => setGender('Female')}
                                            />
                                            <span className="radio-dot"></span> Female
                                        </label>
                                        <label className={`radio-label ${gender === 'Other' && 'selected'}`}>
                                            <input
                                                type="radio"
                                                value="Other"
                                                checked={gender === 'Other'}
                                                onChange={() => setGender('Other')}
                                            />
                                            <span className="radio-dot"></span> Other
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Password:</label>
                                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientSignUpForm;
