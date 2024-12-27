import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/logo 1.png";
import Phone from "../../assets/images/Call.png";
import Email from "../../assets/images/Message.png";
import Location from "../../assets/images/Location.png"

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-lg-5 col-md-6 mb-4">
                        <div className="footer-logo-section">
                            <img src={Logo} alt="Ulhasnagar Logo" className="footer-logo" />
                            <div>
                                <h2 className="footer-title text-uppercase">Ulhasnagar</h2>
                                <p className="footer-subtitle">Municipal Corporation</p>
                            </div>
                        </div>
                        <ul className="contact-list">
                            <li>
                                <div className="d-flex align-items-center">
                                    <img src={Phone} alt="Phone Icon" className="icon-img" width="29" height="24"  />
                                    <div className="contact-text">
                                        <p className="contact-title">Phone</p>
                                        <span className="contact-detail">(0251) 2720150</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center">
                                    <img src={Email} alt="Email Icon" className="icon-img"  width="29" height="24"/>
                                    <div className="contact-text">
                                        <p className="contact-title">Email</p>
                                        <span className="contact-detail">cfcumc@gmail.com</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-start">
                                    <img src={Location} alt="Location Icon" className="icon-img"  width="29" height="24" />
                                    <div className="contact-text">
                                        <p className="contact-title">Address</p>
                                        <span className="contact-detail">
                                            Ulhasnagar Municipal Corporation, Near Chopda Court, <br />
                                            Ulhasnagar-3, Maharashtra, INDIA.
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#">Pay Property Tax</a></li>
                            <li><a href="#">Register Complaint</a></li>
                            <li><a href="#">PMAY</a></li>
                            <li><a href="#">Swachh Bharat</a></li>
                            <li><a href="#">NCAP</a></li>
                            <li><a href="#">DAY-NULM</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mx-auto">
                        <h4 className="footer-heading">Help</h4>
                        <ul className="footer-links">
                            <li><a href="#">Customer Support</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Hyperlink Policy</a></li>
                            <li><a href="#">Accessibility Statement</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h4 className="footer-heading">Online Services</h4>
                        <ul className="footer-links">
                            <li><a href="#">Property Tax</a></li>
                            <li><a href="#">Birth Certificate</a></li>
                            <li><a href="#">Death Certificate</a></li>
                            <li><a href="#">e-Tender</a></li>
                            <li><a href="#">Water Tax</a></li>
                        </ul>
                    </div>
                </div>
                <hr className="footer-divider" />
                <div className="footer-bottom">
                    <span>&copy; 2024 Ulhasnagar Municipal Corporation. All Rights Reserved.</span>
                    <span className="fw-bold">Total Visitors: 18243</span>
                    <span>Design & Developed by Infoigy</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;