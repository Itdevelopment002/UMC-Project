import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import phoneicon from '../../assets/images/header-img/Rectangle 41106.png'
import flag1 from '../../assets/images/header-img/united-states.png'
import flag2 from '../../assets/images/header-img/india.png'
import Mainlogo from '../../assets/images/header-img/logo 1.png'
import Headlogo1 from '../../assets/images/header-img/headerlogo1.png'
import Headlogo2 from '../../assets/images/header-img/Hindi_logo 1.png'
import Headlogo3 from '../../assets/images/header-img/promotion (1).png'
import headicon1 from '../../assets/images/header-img/Symbol (1).png'
import headicon2 from '../../assets/images/header-img/Symbol (2).png'
import headicon3 from '../../assets/images/header-img/Symbol (3).png'
import headicon4 from '../../assets/images/header-img/Symbol.png'





const Navbar = () => {

    const [selectedLanguage, setSelectedLanguage] = useState('eng');
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const toggleNav = () => {
        setIsNavCollapsed(!isNavCollapsed);
    };

    const handleLanguageChange = (value) => {
        setSelectedLanguage(value);
        // Add logic here if you want to perform actions on language change
    };

    return (
        <div className="navbar-container">
            {/* Top Bar */}
            <div className="top-bar">
                <div className="helpline">
                    <img
                        src={phoneicon}
                        alt="Phone Icon"
                        className="helpline-icon"
                    />
                    Helpline No: 0251 2720150
                </div>
                <div className="accessibility ">
                    <span>Skip to main content</span>
                    <span className="divider">|</span>
                    <span>Screen Reader Access</span>
                    <span className="divider">|</span>
                    <span className="text-size">A- | A+</span>
                    <span className="divider">|</span>
                    <div className="custom-dropdown">
                        <div className="selected-language">
                            {selectedLanguage === 'eng' ? (
                                <img src={flag1} alt="English" className="flag-icon" />
                            ) : (
                                <img src={flag2} alt="Hindi" className="flag-icon" />
                            )}
                            {selectedLanguage === 'eng' ? 'English' : 'हिंदी'}
                        </div>
                        <div className="dropdown-options">
                            <div
                                className="dropdown-option"
                                onClick={() => handleLanguageChange('eng')}
                            >
                                <img src={flag1} alt="English" className="flag-icon" />
                                English
                            </div>
                            <div
                                className="dropdown-option"
                                onClick={() => handleLanguageChange('hin')}
                            >
                                <img src={flag2} alt="Hindi" className="flag-icon" />
                                हिंदी
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logo and Banner */}
            <div className="banner d-flex justify-content-between py-2">
                <div className="logo d-flex">
                    <img
                        src={Mainlogo}
                        alt="Logo"
                        className="logo-img"
                    />
                    <div className="mt-2">
                        <h1 className="brand-name m-0">ULHASNAGAR</h1>
                        <p className="brand-subtitle">Municipal Corporation</p>
                    </div>
                </div>
                <div className="banner-image">
                    <img
                        src={Headlogo1}
                        alt="Image1"
                        className="banner-img1"
                    />
                    <img
                        src={Headlogo2}
                        alt="Image2"
                        className="banner-img2"
                    />
                    <img
                        src={Headlogo3}
                        alt="Image3"
                        className="banner-img3"
                    />
                </div>

            </div>

            {/* Navigation Menu */}
            <header className="header-container">
                <div className="nav-menu d-flex justify-content-between align-items-center">
                    {/* Toggle Button (only visible on small screens) */}
                    <button
                        className="toggle-btn"
                        aria-label="Toggle navigation"
                        onClick={toggleNav}
                    >
                        &#9776; {/* Hamburger Icon */}
                    </button>

                    {/* Navigation Menu */}
                    <nav className={`custom-nav ${isNavCollapsed ? 'nav-hidden' : 'nav-visible'}`}>
                        <ul className="nav-list mb-0 px-4">
                            <li className="nav-item">
                                <Link to="#." className="nav-link active">Home</Link>
                            </li>
                            <span className="nav-divider"></span>

                            <li className="nav-item">
                                <Link to="#." className="nav-link">About UMC</Link>
                            </li>
                            <span className="nav-divider"></span>
                            <li className="nav-item">
                                <Link to="#." className="nav-link">Administrative Wings</Link>
                            </li>
                            <span className="nav-divider"></span>
                            <li className="nav-item">
                                <Link to="#." className="nav-link">Corporation</Link>
                            </li>
                            <span className="nav-divider"></span>
                            <li className="nav-item">
                                <Link to="#." className="nav-link">Departments</Link>
                            </li>
                            <span className="nav-divider"></span>
                            <li className="nav-item">
                                <Link to="#." className="nav-link">Circulars</Link>
                            </li>
                            <span className="nav-divider"></span>
                            <li className="nav-item">
                                <Link to="#." className="nav-link">Online Services</Link>
                            </li>
                            <span className="nav-divider"></span>
                            <li className="nav-item">
                                <Link to="#." className="nav-link">RTS Act 2015</Link>
                            </li>
                            <span className="nav-divider"></span>
                            <li className="nav-item">
                                <Link to="#." className="nav-link px-3">Gallery</Link>
                            </li>
                            <span className="nav-divider"></span>
                            <li className="nav-item">
                                <Link to="#." className="nav-link">Contact Us</Link>
                            </li>   
                            
                        </ul>
                    </nav>

                    {/* Social Icons (Always Visible) */}
                    <div className="social-icons d-flex">
                        <Link to="/" className="social-link">
                            <img src={headicon1} alt="Twitter" className="twitter-icon" />
                        </Link>
                        <Link to="/" className="social-link">
                            <img src={headicon2} alt="Facebook" className="facebook-icon" />
                        </Link>
                        <Link to="/" className="social-link">
                            <img src={headicon3} alt="Instagram" className="insta-icon" />
                        </Link>
                        <Link to="/" className="social-link">
                            <img src={headicon4} alt="YouTube" className="youtube-icon" />
                        </Link>
                    </div>
                </div>
            </header>



        </div >
    );
};

export default Navbar;
