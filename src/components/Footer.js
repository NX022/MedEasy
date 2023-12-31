// src/components/Footer.js
import React from 'react';
import logoImg from '../images/logo.png';
import './MainPage.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>
                            <span>About Us</span>
                            <span>|</span>
                            <span>Contact Us </span>
                            <span>|</span>
                            <span>Privacy Policy & Terms of Use </span>
                            <span>|</span>
                            <span>More</span>
                        </p>
                    </div>
                    <div className="col-md-12 text-center">
                        <img src={logoImg} alt="MedEasy Logo" className="footer-logo" />
                        <h3>MedEasy</h3>
                    </div>
                    <div className="col-md-12 text-center">
                        <p>&copy; 2023 MedEasy. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
