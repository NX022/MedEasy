// src/components/DoctorSignUpForm.js
import React, { useState } from 'react';
import './PatientSignUpForm.css'; // Use the same CSS file


const DoctorSignUpForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [doctorIn, setDoctorIn] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();


        // Fetching data from the form and storing it in a variable
        const formData = {
            name,
            email,
            phoneNumber,
            age,
            gender,
            password,
            specialization,
            doctorIn
        };

        // Print the data in the console for confirmation
        console.log('Form Data:', formData);




        // Now, you can send this data to your server for further processing and database storage
    };

    return (
        <div className="patient-signup-form-body container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="signup-card">
                        <div className="card-body">
                            <h2 className="card-title">Doctor Sign Up</h2>
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
                                    <label>Age:</label>
                                    <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} required />
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
                                    <label>Specialization:</label>
                                    <input type="text" className="form-control" value={specialization} onChange={(e) => setSpecialization(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label>Doctor In:</label>
                                    <input type="text" className="form-control" value={doctorIn} onChange={(e) => setDoctorIn(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label>Password:</label>
                                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                {/* Include other form fields as needed */}
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorSignUpForm;
