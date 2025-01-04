import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./OnlineServices.css";
import tick from "../../assets/images/info/tick.png";

const OnlineServices = () => {
  const [activeTab, setActiveTab] = useState("#property-tax-payment");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabData = [
    {
      id: "#property-tax-payment",
      name: "Property Tax Payment",
      items: [],
    },
    {
      id: "#birth-certificate",
      name: "Birth Certificate",
      items: [],
    },
    {
      id: "#death-certificate",
      name: "Death Certificate",
      items: [],
    },
    {
      id: "#e-tender",
      name: "e-Tender",
      items: [],
    },
  ];

  const menuItems = [
    "Citizens' Charters",
    "Corporators",
    "Submit Tenders",
    "Quotations",
    "Budget",
    "Department",
    "Ward Offices",
    "Circulars",
  ];

  return (
    <>
      <div className="history-header-image"></div>
      <div
        className="container-fluid font-location mt-4 mb-5"
        id="online-services-css"
      >
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-item text-decoration-none">
            Home
          </Link>
          <Link to="#" className="breadcrumb-item text-decoration-none">
            About UMC
          </Link>
          <span className="breadcrumb-item active1">Online Services</span>
        </nav>
        <h2 className="location-title">
          <span className="highlight">Online</span>
          <span className="highlighted-text"> Services</span>
        </h2>
        <div className="row mt-4 row-styling-3">
          <div className="col-xl-3 col-lg-4 col-md-5 col-sm-12">
            <ul className="list-group list-group-styling">
              {menuItems.map((item, index) => (
                <li className="list-group-item custom-list-item" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-xl-9 col-lg-8 col-md-7 col-sm-12">
            <div className="e-services-container bg-white p-2">
              <div className="tabs-container roboto-font">
                <ul className="nav nav-tabs custom-nav-border">
                  {tabData.map((tab) => (
                    <li className="nav-item" key={tab.id}>
                      <a
                        className={`nav-link ${
                          activeTab === tab.id ? "active" : ""
                        }`}
                        href={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                      >
                        {tab.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="news-list p-3 roboto-font">
                <ul className="list-unstyled">
                  {tabData
                    .find((tab) => tab.id === activeTab)
                    ?.items.map((item, index) => (
                      <li key={index}>
                        <img src={tick} className="custom-icons" alt="" />
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineServices;
