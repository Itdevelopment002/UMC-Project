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
    const [activeLink, setActiveLink] = useState("Home");

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
                    <Link to="/rts-act-2015">
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

                            <li className={`nav-item dropdown ${activeLink === "About UMC" ? "active" : ""}`}>
                                <Link
                                    to="#"
                                    className={`nav-link dropdown-toggle d-flex align-items-center ${activeLink === "About UMC" ? "active" : ""
                                        }`}
                                    onClick={() => handleNavClick("About UMC")}
                                    id="aboutUMCDropdown"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <span className="me-1">About UMC</span>
                                    <i className="dropdown-icon"></i>
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="aboutUMCDropdown">
                                    <li>
                                        <Link
                                            to="/location"
                                            className={`dropdown-item ${activeLink === "Location" ? "active" : ""}`}
                                            onClick={() => handleNavClick("Location")}
                                        >
                                            Location
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/commissioner"
                                            className={`dropdown-item ${activeLink === "Commissioner" ? "active" : ""}`}
                                            onClick={() => handleNavClick("Commissioner")}
                                        >
                                            Commissioner
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/history"
                                            className={`dropdown-item ${activeLink === "History" ? "active" : ""}`}
                                            onClick={() => handleNavClick("History")}
                                        >
                                            History
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#Recruitment"
                                            className={`dropdown-item ${activeLink === "Recruitment" ? "active" : ""}`}
                                            onClick={() => handleNavClick("Recruitment")}
                                        >
                                            Recruitment
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#Tourism"
                                            className={`dropdown-item ${activeLink === "Tourism" ? "active" : ""}`}
                                            onClick={() => handleNavClick("Tourism")}
                                        >
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
                                            className={`dropdown-item ${activeLink === "Administrative Structure" ? "active" : ""}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNavClick("Administrative Structure");
                                                openPDF(AdministrativeStructurePDF);
                                            }}
                                        >
                                            Administrative Structure
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className={`dropdown-item ${activeLink === "Administrative Ward" ? "active" : ""}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNavClick("Administrative Ward");
                                                openPDF(AdministrativeWardsPDF);
                                            }}
                                        >
                                            Administrative Ward
                                        </Link>
                                    </li>
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
                                        <Link to="#UMC Authorities"
                                            className={`dropdown-item ${activeLink === "UMC Authorities" ? "active" : ""}`}
                                            onClick={() => handleNavClick("UMC Authorities")}
                                        >
                                            UMC Authorities
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Mayor Office"
                                            className={`dropdown-item ${activeLink === "Mayor Office" ? "active" : ""}`}
                                            onClick={() => handleNavClick("Mayor Office")}
                                        >
                                            Mayor Office
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Dy. Mayor Office"
                                            className={`dropdown-item ${activeLink === "Dy. Mayor Office" ? "active" : ""}`}
                                            onClick={() => handleNavClick("Dy. Mayor Office")}                                        >
                                            Dy. Mayor Office
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Standing Committee"
                                            className={`dropdown-item ${activeLink === "Standing Committee" ? "active" : ""}`}
                                            onClick={() => handleNavClick("Standing Committee")}
                                        >
                                            Standing Committee
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Ward Committee"
                                            className={`dropdown-item ${activeLink === "Ward Committee" ? "active" : ""}`}
                                            onClick={() => handleNavClick("Ward Committee")}
                                        >
                                            Ward Committee
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Subject Committee"
                                            className={`dropdown-item ${activeLink === "Subject Committee" ? "active" : ""}`}
                                            onClick={() => handleNavClick("Subject Committee")}
                                        >
                                            Subject Committee
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Quotations"
                                            className={`dropdown-item ${activeLink === "Quotations" ? "active" : ""}`}
                                            onClick={() => handleNavClick("Quotations")}                                        >
                                            Quotations
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Municipal Meetings"
                                            className={`dropdown-item ${activeLink === "Municipal Meetings" ? "active" : ""}`}
                                            onClick={() => handleNavClick("Municipal Meetings")}
                                        >
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
                                        <Link to="Computer / IT"
                                            className={`dropdown-item ${activeLink === "Computer / IT" ? "active" : ""}`}
                                            onClick={() => handleNavClick("Computer / IT")}
                                        >
                                            Computer / IT
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Accounts Department"
                                            className={`dropdown-item ${activeLink === "Accounts Department" ? "active" : ""}`}
                                            onClick={() => handleNavClick("Accounts Department")}
                                        >
                                            Accounts Department
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Audit Department"
                                            className={`dropdown-item ${activeLink === "Audit Department" ? "active" : ""}`}
                                            onClick={() => handleNavClick("Audit Department")}
                                        >
                                            Audit Department
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Vehicle Department"
                                            className={`dropdown-item ${activeLink === "Vehicle Department" ? "active" : ""}`}
                                            onClick={() => handleNavClick("Vehicle Department")}
                                        >
                                            Vehicle Department
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#NULM"
                                            className={`dropdown-item ${activeLink === "NULM" ? "active" : ""}`}
                                            onClick={() => handleNavClick("NULM")}
                                        >
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
                                        <Link to="#Property Tax"
                                            className={`dropdown-item ${activeLink === "Property Tax" ? "active" : ""}`}
                                            onClick={() => handleNavClick("Property Tax")}
                                        >
                                            Property Tax
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Birth Certificate"
                                            className={`dropdown-item ${activeLink === "Birth Certificate" ? "active" : ""}`}
                                            onClick={() => handleNavClick("Birth Certificate")}
                                        >
                                            Birth Certificate
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#Death Certificate"
                                            className={`dropdown-item ${activeLink === "Death Certificate" ? "active" : ""}`}
                                            onClick={() => handleNavClick("Death Certificate")}
                                        >
                                            Death Certificate
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#e-Tender"
                                            className={`dropdown-item ${activeLink === "e-Tender" ? "active" : ""}`}
                                            onClick={() => handleNavClick("e-Tender")}                                        >
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
                                className={`nav-item dropdown ${activeLink === "Gallery" ? "active" : ""}`}
                            >
                                <Link
                                    to="#"
                                    className={`nav-link dropdown-toggle d-flex align-items-center ${activeLink === "Gallery" ? "active" : ""}`}
                                    onClick={() => handleNavClick("Gallery")}
                                    id="galleryDropdown"
                                    role="button"
                                    aria-expanded="false"
                                >
                                    <span className="me-1">Gallery</span>
                                    <i className="dropdown-icon"></i>
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="galleryDropdown">
                                    <li>
                                        <Link
                                            to="/photo-gallary"
                                            className={`dropdown-item ${activeLink === "Photo Gallery" ? "active" : ""}`}
                                            onClick={(e) => {
                                                handleNavClick("Photo Gallery");
                                            }}
                                        >
                                            Photo Gallery
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className={`dropdown-item ${activeLink === "Video Gallery" ? "active" : ""}`}
                                            onClick={(e) => {
                                                handleNavClick("Video Gallery");
                                            }}
                                        >
                                            Video Gallery
                                        </Link>
                                    </li>
                                </ul>
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
