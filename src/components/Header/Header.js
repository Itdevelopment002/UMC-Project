import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import phoneicon from "../../assets/images/header-img/telephone.png";
import flag1 from "../../assets/images/header-img/united-states.png";
import flag2 from "../../assets/images/header-img/india.png";
import flag3 from "../../assets/images/header-img/hindu.png";
import Mainlogo from "../../assets/images/header-img/logo 1.png";
import Headlogo1 from "../../assets/images/header-img/headerlogo1.png";
import Headlogo2 from "../../assets/images/header-img/aaple-sarkar.jpg";
import Headlogo3 from "../../assets/images/header-img/Hindi_logo 1.png";
import Headlogo4 from "../../assets/images/header-img/promotion (1).png";
// import headicon1 from "../../assets/images/header-img/Symbol (1).png";
// import headicon2 from "../../assets/images/header-img/Symbol (2).png";
// import headicon3 from "../../assets/images/header-img/Symbol (3).png";
// import headicon4 from "../../assets/images/header-img/Symbol.png";
import twitter from '../../assets/images/header-img/twitter.png';
import facebook from '../../assets/images/header-img/facebook.png';
import instagram from '../../assets/images/header-img/instagram (2).png';
import youtube from '../../assets/images/header-img/Youtube.png';
import AdministrativeStructurePDF from '../../assets/pdfs/Administrative_Structure.pdf';
import AdministrativeWardsPDF from '../../assets/pdfs/Administrative_Wards.pdf';
// import CommissionerOfficePDF from '../../assets/pdfs/Commissioner_Office.pdf';

const Navbar = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("eng");
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const toggleNav = () => {
        setIsNavCollapsed(!isNavCollapsed);
    };
    const openPDF = (pdfURL) => {
        window.open(pdfURL, '_blank');
    };
    useEffect(() => {
        if (
            !document.querySelector(
                'script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]'
            )
        ) {
            const googleTranslateScript = document.createElement("script");
            googleTranslateScript.src =
                "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            document.body.appendChild(googleTranslateScript);
        }

        window.googleTranslateElementInit = () => {
            if (
                !document.getElementById("google_translate_element").childNodes.length
            ) {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: "en",
                        includedLanguages: "en,hi,mr", // Include Hindi and Marathi
                        layout:
                            window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
                    },
                    "google_translate_element"
                );
            }
        };
    }, []);

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        const googleTranslateDropdown = document.querySelector(".goog-te-combo");
        if (googleTranslateDropdown) {
            googleTranslateDropdown.value =
                language === "eng" ? "en" : language === "hin" ? "hi" : "mr"; // English, Hindi, Marathi
            googleTranslateDropdown.dispatchEvent(new Event("change"));
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
                    <img src={phoneicon} alt="Phone Icon" className="helpline-icon" />
                    Helpline No: 0251 2720150
                </div>
                <div className="accessibility ">
                    <Link to="/desired-page">
                        <button className="rts-act-button">RTS Act 2015</button>
                    </Link>
                    <span>Skip to main content</span>
                    <span className="divider">|</span>
                    <span>Screen Reader Access</span>
                    <span className="divider">|</span>
                    <span className="text-size">A-</span>
                    <span className="divider">|</span>
                    <span className="text-size">A+</span>
                    <span className="divider">|</span>
                    <div className="custom-dropdown">
                        <div className="selected-language">
                            {selectedLanguage === "eng" ? (
                                <img src={flag1} alt="English" className="flag-icon" />
                            ) : selectedLanguage === "hin" ? (
                                <img src={flag2} alt="Hindi" className="flag-icon" />
                            ) : (
                                <img src={flag3} alt="Marathi" className="flag-icon" />
                            )}
                            {selectedLanguage === "eng"
                                ? "English"
                                : selectedLanguage === "hin"
                                    ? "हिंदी"
                                    : "मराठी"}
                        </div>
                        <div className="dropdown-options">
                            <div
                                className="dropdown-option"
                                onClick={() => handleLanguageChange("eng")}
                            >
                                <img src={flag1} alt="English" className="flag-icon" />
                                English
                            </div>
                            <div
                                className="dropdown-option"
                                onClick={() => handleLanguageChange("hin")}
                            >
                                <img src={flag2} alt="Hindi" className="flag-icon" />
                                हिंदी
                            </div>
                            <div
                                className="dropdown-option"
                                onClick={() => handleLanguageChange("mar")}
                            >
                                <img src={flag3} alt="Marathi" className="flag-icon" />
                                मराठी
                            </div>
                        </div>
                    </div>
                    <div id="google_translate_element" style={{ display: "none" }}></div>

                    <div className="social-icons top-bar-social-media d-flex">
                        <Link to="/" className="social-link">
                            <img src={twitter} alt="Twitter" className="twitter-icon" />
                        </Link>
                        <span className="divider">|</span>
                        <Link to="/" className="social-link">
                            <img src={facebook} alt="Facebook" className="facebook-icon" />
                        </Link>
                        <span className="divider">|</span>
                        <Link to="/" className="social-link">
                            <img src={instagram} alt="Instagram" className="insta-icon" />
                        </Link>
                        <span className="divider">|</span>
                        <Link to="/" className="social-link">
                            <img src={youtube} alt="YouTube" className="youtube-icon" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Logo and Banner */}
            <div className="banner d-flex justify-content-between py-2">
                <Link to="/">
                    <div className="logo d-flex">
                        <img src={Mainlogo} alt="Logo" className="logo-img" />
                        <div className="mt-2">
                            <h1 className="brand-name">ULHASNAGAR MUNICIPAL CORPORATION</h1>
                            {/* <p className="brand-subtitle">Municipal Corporation</p> */}
                        </div>
                    </div>
                </Link>
                <div className="banner-image">
                    <img src={Headlogo1} alt="Image1" className="banner-img1" />
                    <Link
                        to="https://aaplesarkar.mahaonline.gov.in/en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                    >
                        <img src={Headlogo2} alt="Image2" className="banner-img2" />
                    </Link>
                    <img src={Headlogo3} alt="Image3" className="banner-img3" />
                    <img src={Headlogo4} alt="Image4" className="banner-img4" />
                </div>
            </div>

            {/* Navigation Menu */}
            <header className="header-container">
                <div className="nav-menu">
                    {/* Toggle Button (only visible on small screens) */}
                    <button
                        className="toggle-btn"
                        aria-label="Toggle navigation"
                        onClick={toggleNav}
                    >
                        &#9776; {/* Hamburger Icon */}
                    </button>

                    {/* Navigation Menu */}
                    <nav
                        className={`custom-nav ${isNavCollapsed ? "nav-hidden" : "nav-visible"
                            }`}
                    >
                        <ul className="nav-list mb-0 px-4">
                            <li
                                className={`nav-item ${activeLink === "Home" ? "active" : ""}`}
                            >
                                <Link
                                    to="/"
                                    className={`nav-link ${activeLink === "Home" ? "active" : ""
                                        }`}
                                    onClick={() => handleNavClick("Home")}
                                >
                                    Home
                                </Link>
                            </li>

                            <span className="nav-divider"></span>
                            <li
                                className={`nav-item dropdown ${activeLink === "About UMC" ? "active" : ""}`}
                            >
                                <Link
                                    to="#"
                                    className={`nav-link dropdown-toggle d-flex align-items-center ${activeLink === "About UMC" ? "active" : ""}`}
                                    onClick={() => handleNavClick("About UMC")}
                                    id="aboutUMCDropdown"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <span className="me-1">About UMC</span> {/* Add margin space */}
                                    <i className="dropdown-icon"></i> {/* Optional icon */}
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="aboutUMCDropdown">
                                    <li>
                                        <Link to="/location" className="dropdown-item">
                                            Location
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/commissioner" className="dropdown-item">
                                            Commissioner
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/history" className="dropdown-item">
                                            History
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Recruitment" className="dropdown-item">
                                            Recruitment
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Tourism" className="dropdown-item">
                                            Tourism
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <span className="nav-divider"></span>

                            <li
                                className={`nav-item dropdown ${activeLink === "Administrative Wings" ? "active" : ""}`}
                            >
                                <Link
                                    to="#"
                                    className={`nav-link dropdown-toggle d-flex align-items-center ${activeLink === "Administrative Wings" ? "active" : ""}`}
                                    onClick={() => handleNavClick("Administrative Wings")}
                                    id="administrativeWingsDropdown"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <span className="me-1">Administrative Wings</span>
                                    <i className="dropdown-icon"></i> 
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="administrativeWingsDropdown">
                                    <li>
                                        <Link
                                            to="#"
                                            className="dropdown-item"
                                            onClick={(e) => {
                                                e.preventDefault(); 
                                                openPDF(AdministrativeStructurePDF);
                                            }}
                                        >
                                            Administrative Structure
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="dropdown-item"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                openPDF(AdministrativeWardsPDF);
                                            }}
                                        >
                                            Administrative Ward
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link
                                            to="#"
                                            className="dropdown-item"
                                        // onClick={(e) => {
                                        //     e.preventDefault();
                                        //     openPDF(CommissionerOfficePDF);
                                        // }}
                                        >
                                            Commissioner Office
                                        </Link>
                                    </li> */}
                                </ul>
                            </li>

                            <span className="nav-divider"></span>


                            <li
                                className={`nav-item dropdown ${activeLink === "Corporation" ? "active" : ""}`}
                            >
                                <Link
                                    to="#"
                                    className={`nav-link dropdown-toggle d-flex align-items-center ${activeLink === "Corporation" ? "active" : ""}`}
                                    onClick={() => handleNavClick("Corporation")}
                                    id="CorporationDropdown"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <span className="me-1">Corporation</span> {/* Add margin space */}
                                    <i className="dropdown-icon"></i> {/* Optional icon */}
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="CorporationDropdown">
                                    <li>
                                        <Link to="#UMC Authorities" className="dropdown-item">
                                            UMC Authorities
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Mayor Office" className="dropdown-item">
                                            Mayor Office
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Dy. Mayor Office" className="dropdown-item">
                                            Dy. Mayor Office
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Standing Committee" className="dropdown-item">
                                            Standing Committee
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Ward Committee" className="dropdown-item">
                                            Ward Committee
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Subject Committee" className="dropdown-item">
                                            Subject Committee
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Quotations" className="dropdown-item">
                                            Quotations
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Municipal Meetings" className="dropdown-item">
                                            Municipal Meetings
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <span className="nav-divider"></span>

                            <li
                                className={`nav-item dropdown ${activeLink === "Departments" ? "active" : ""}`}
                            >
                                <Link
                                    to="#"
                                    className={`nav-link dropdown-toggle d-flex align-items-center ${activeLink === "Departments" ? "active" : ""}`}
                                    onClick={() => handleNavClick("Departments")}
                                    id="DepartmentsDropdown"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <span className="me-1">Departments</span> {/* Add margin space */}
                                    <i className="dropdown-icon"></i> {/* Optional icon */}
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="DepartmentsDropdown">
                                    <li>
                                        <Link to="Computer / IT" className="dropdown-item">
                                            Computer / IT
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Accounts Department" className="dropdown-item">
                                            Accounts Department
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Audit Department" className="dropdown-item">
                                            Audit Department
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Vehicle Department" className="dropdown-item">
                                            Vehicle Department
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#NULM" className="dropdown-item">
                                            NULM
                                        </Link>
                                    </li>
                                </ul>
                            </li>


                            <span className="nav-divider"></span>

                            <li
                                className={`nav-item ${activeLink === "Circulars" ? "active" : ""
                                    }`}
                            >
                                <Link
                                    to="#."
                                    className={`nav-link ${activeLink === "Circulars" ? "active" : ""
                                        }`}
                                    onClick={() => handleNavClick("Circulars")}
                                >
                                    Circulars
                                </Link>
                            </li>

                            <span className="nav-divider"></span>

                            <li
                                className={`nav-item dropdown ${activeLink === "Online Services" ? "active" : ""}`}
                            >
                                <Link
                                    to="#"
                                    className={`nav-link dropdown-toggle d-flex align-items-center ${activeLink === "Online Services" ? "active" : ""}`}
                                    onClick={() => handleNavClick("Online Services")}
                                    id="OnlineServicesDropdown"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <span className="me-1">Online Services</span> {/* Add margin space */}
                                    <i className="dropdown-icon"></i> {/* Optional icon */}
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="OnlineServicesDropdown">
                                    <li>
                                        <Link to="#Property Tax" className="dropdown-item">
                                            Property Tax
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Birth Certificate" className="dropdown-item">
                                            Birth Certificate
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Death Certificate" className="dropdown-item">
                                            Death Certificate
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#e-Tender" className="dropdown-item">
                                            e-Tender
                                        </Link>
                                    </li>
                                </ul>
                            </li>


                            <span className="nav-divider"></span>

                            <li
                                className={`nav-item ${activeLink === "Citizen Charter" ? "active" : ""
                                    }`}
                            >
                                <Link
                                    to="#."
                                    className={`nav-link ${activeLink === "Citizen Charter" ? "active" : ""
                                        }`}
                                    onClick={() => handleNavClick("Citizen Charter")}
                                >
                                    Citizen Charter
                                </Link>
                            </li>

                            <span className="nav-divider"></span>

                            <li
                                className={`nav-item ${activeLink === "Gallery" ? "active" : ""
                                    }`}
                            >
                                <Link
                                    to="#."
                                    className={`nav-link px-3 ${activeLink === "Gallery" ? "active" : ""
                                        }`}
                                    onClick={() => handleNavClick("Gallery")}
                                >
                                    Gallery
                                </Link>
                            </li>

                            <span className="nav-divider"></span>

                            <li
                                className={`nav-item ${activeLink === "Recruitment" ? "active" : ""
                                    }`}
                            >
                                <Link
                                    to="#."
                                    className={`nav-link ${activeLink === "Recruitment" ? "active" : ""
                                        }`}
                                    onClick={() => handleNavClick("Recruitment")}
                                >
                                    Recruitment
                                </Link>
                            </li>

                            <span className="nav-divider"></span>

                            <li
                                className={`nav-item ${activeLink === "Contact Us" ? "active" : ""
                                    }`}
                            >
                                <Link
                                    to="#."
                                    className={`nav-link ${activeLink === "Contact Us" ? "active" : ""
                                        }`}
                                    onClick={() => handleNavClick("Contact Us")}
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Social Icons (Always Visible) */}
                    {/* <div className="social-icons  d-flex">
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
                    </div> */}
                </div>
            </header>
        </div>
    );
};

export default Navbar;
