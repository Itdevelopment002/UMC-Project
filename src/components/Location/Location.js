import React from "react";
import { Link } from "react-router-dom";
import "./Location.css";

const Location = () => {
  return (
    <div className="container-fluid font-location mt-4 mb-5">
      <nav className="breadcrumb">
        <Link to="/" className="breadcrumb-item text-decoration-none">
          Home
        </Link>
        <Link to="#" className="breadcrumb-item text-decoration-none">
          About UMC
        </Link>
        <span className="breadcrumb-item active">Location</span>
      </nav>
      <h2 className="location-title">
        <span className="highlight">Location</span>
        <span className="highlighted-text"> of UMC</span>
      </h2>
      <span className="circle"></span>
      <div className="row mt-4">
        <div className="col-lg-3 col-sm-12">
          <ul
            className="list-group"
            style={{ border: "4px solid #C6CAB2", borderRadius: "4px" }}
          >
            <li className="list-group-item">
              <span className="circle"></span> Citizens' Charters
            </li>
            <li className="list-group-item">
              <span className="circle"></span>Corporators
            </li>
            <li className="list-group-item">
              <span className="circle"></span>Submit Tenders
            </li>
            <li className="list-group-item">
              <span className="circle"></span>Quotations
            </li>
            <li className="list-group-item">
              <span className="circle"></span>Budget
            </li>
            <li className="list-group-item">
              <span className="circle"></span>Department
            </li>
            <li className="list-group-item">
              <span className="circle"></span>Ward Offices
            </li>
            <li className="list-group-item">
              <span className="circle"></span>Circulars
            </li>
          </ul>
        </div>
        <div
          className="col-lg-9 col-sm-12"
          style={{
            border: "5px solid #C6CAB2",
            borderRadius: "4px",
            padding: "0",
          }}
        >
          <iframe
            title="UMC Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57828.41779303888!2d73.16582725457208!3d19.227109041239448!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79442948bba51%3A0x28d43fde3c21dbf7!2sUlhasnagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1735840024338!5m2!1sen!2sin"
            width="100%"
            height="377"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
