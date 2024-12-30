import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import phoneicon from '../../assets/images/header-img/Rectangle 41106.png'
import flag1 from '../../assets/images/header-img/united-states.png'
import flag2 from '../../assets/images/header-img/india.png'
import flag3 from '../../assets/images/header-img/hindu.png'
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

    useEffect(() => {
        if (
            !document.querySelector(
                'script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]'
            )
        ) {
            const googleTranslateScript = document.createElement('script');
            googleTranslateScript.src =
                '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            document.body.appendChild(googleTranslateScript);
        }

        window.googleTranslateElementInit = () => {
            if (!document.getElementById('google_translate_element').childNodes.length) {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: 'en',
                        includedLanguages: 'en,hi,mr', // Include Hindi and Marathi
                        layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
                    },
                    'google_translate_element'
                );
            }
        };
    }, []);

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        const googleTranslateDropdown = document.querySelector('.goog-te-combo');
        if (googleTranslateDropdown) {
            googleTranslateDropdown.value = language === 'eng' ? 'en' : language === 'hin' ? 'hi' : 'mr'; // English, Hindi, Marathi
            googleTranslateDropdown.dispatchEvent(new Event('change'));
        }
    };

    const [activeLink, setActiveLink] = useState("Home");

    const handleNavClick = (linkName) => {
        setActiveLink(linkName);
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
                            ) : selectedLanguage === 'hin' ? (
                                <img src={flag2} alt="Hindi" className="flag-icon" />
                            ) : (
                                <img src={flag3} alt="Marathi" className="flag-icon" />
                            )}
                            {selectedLanguage === 'eng' ? 'English' : selectedLanguage === 'hin' ? 'हिंदी' : 'मराठी'}
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
                            <div
                                className="dropdown-option"
                                onClick={() => handleLanguageChange('mar')}
                            >
                                <img src={flag3} alt="Marathi" className="flag-icon" />
                                मराठी
                            </div>
                        </div>
                    </div>
                    <div
                      id="google_translate_element"
                      style={{ display: "none" }}
                    ></div>
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
                            <li className={`nav-item ${activeLink === "Home" ? "active" : ""}`}>
                                <Link
                                    to="#."
                                    className={`nav-link ${activeLink === "Home" ? "active" : ""}`}
                                    onClick={() => handleNavClick("Home")}
                                >
                                    Home
                                </Link>
                            </li>

                            <span className="nav-divider"></span>

                            <li className={`nav-item ${activeLink === "About UMC" ? "active" : ""}`}>
                                <Link
                                    to="#."
                                    className={`nav-link ${activeLink === "About UMC" ? "active" : ""}`}
                                    onClick={() => handleNavClick("About UMC")}
                                >
                                    About UMC
                                </Link>
                            </li>

                            <span className="nav-divider"></span>

                            <li className={`nav-item ${activeLink === "Administrative Wings" ? "active" : ""}`}>
                                <Link
                                    to="#."
                                    className={`nav-link ${activeLink === "Administrative Wings" ? "active" : ""}`}
                                    onClick={() => handleNavClick("Administrative Wings")}
                                >
                                    Administrative Wings
                                </Link>
                            </li>

                            <span className="nav-divider"></span>

                            <li className={`nav-item ${activeLink === "Corporation" ? "active" : ""}`}>
                                <Link
                                    to="#."
                                    className={`nav-link ${activeLink === "Corporation" ? "active" : ""}`}
                                    onClick={() => handleNavClick("Corporation")}
                                >
                                    Corporation
                                </Link>
                            </li>
                            <span className="nav-divider"></span>

                            <li className={`nav-item ${activeLink === "Departments" ? "active" : ""}`}>
                                <Link
                                    to="#."
                                    className={`nav-link ${activeLink === "Departments" ? "active" : ""}`}
                                    onClick={() => handleNavClick("Departments")}
                                >
                                    Departments
                                </Link>
                            </li>

                            <span className="nav-divider"></span>

                            <li className={`nav-item ${activeLink === "Circulars" ? "active" : ""}`}>
                                <Link
                                    to="#."
                                    className={`nav-link ${activeLink === "Circulars" ? "active" : ""}`}
                                    onClick={() => handleNavClick("Circulars")}
                                >
                                    Circulars
                                </Link>
                            </li>

                            <span className="nav-divider"></span>

                            <li className={`nav-item ${activeLink === "Online Services" ? "active" : ""}`}>
                                <Link
                                    to="#."
                                    className={`nav-link ${activeLink === "Online Services" ? "active" : ""}`}
                                    onClick={() => handleNavClick("Online Services")}
                                >
                                    Online Services
                                </Link>
                            </li>

                            <span className="nav-divider"></span>

                            <li className={`nav-item ${activeLink === "RTS Act 2015" ? "active" : ""}`}>
                                <Link
                                    to="#."
                                    className={`nav-link ${activeLink === "RTS Act 2015" ? "active" : ""}`}
                                    onClick={() => handleNavClick("RTS Act 2015")}
                                >
                                    RTS Act 2015
                                </Link>
                            </li>

                            <span className="nav-divider"></span>

                            <li className={`nav-item ${activeLink === "Gallery" ? "active" : ""}`}>
                                <Link
                                    to="#."
                                    className={`nav-link ${activeLink === "Gallery" ? "active" : ""}`}
                                    onClick={() => handleNavClick("Gallery")}
                                >
                                    Gallery
                                </Link>
                            </li>

                            <span className="nav-divider"></span>

                            <li className={`nav-item ${activeLink === "Contact Us" ? "active" : ""}`}>
                                <Link
                                    to="#."
                                    className={`nav-link ${activeLink === "Contact Us" ? "active" : ""}`}
                                    onClick={() => handleNavClick("Contact Us")}
                                >
                                    Contact Us
                                </Link>
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
