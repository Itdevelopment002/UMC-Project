import React from "react";
import "./CitizenServices.css";
import img1 from "../../assets/images/citizen-services/service-1.png";
import img2 from "../../assets/images/citizen-services/service-2.png";
import img3 from "../../assets/images/citizen-services/service-3.png";
import img4 from "../../assets/images/citizen-services/service-4.png";
import img5 from "../../assets/images/citizen-services/service-5.png";
import img6 from "../../assets/images/citizen-services/service-6.png";
import img7 from "../../assets/images/citizen-services/service-7.png";
import img8 from "../../assets/images/citizen-services/service-8.png";
import video1 from "../../assets/images/info/Group 14.png";
import playicon from "../../assets/images/citizen-services/youtube.png";
import vector from "../../assets/images/citizen-services/vector-1.png";

const CitizenServices = () => {
  const services = [
    {
      title: "Tenders & Quotation",
      image: img1,
    },
    {
      title: "Property Tax",
      image: img2,
    },
    {
      title: "Water Tax",
      image: img3,
    },
    {
      title: "Right To Information",
      image: img4,
    },
    {
      title: "E-Tenders",
      image: img5,
    },
    {
      title: "Marriage Registration",
      image: img6,
    },
    {
      title: "Pandal Permission",
      image: img7,
    },
    {
      title: "Birth Certificate",
      image: img8,
    },
  ];

  const menuItems = [
    "Pressnote",
    "General Election",
    "Property Tax Department",
    "Quotation / Tenders",
    "Right to Information",
    "Disaster Management",
  ];

  return (
    <div className="background-container" id="citizen-section">
      <div className="container-fluid citigen-section  d-flex flex-wrap justify-content-between">
        <div className="row col-lg-6">
          <div className="citigen mt-1">
            <div className="vertical-line"></div>
            <div className="d-flex ">
              <h2 className="section-title">
                Citizen <span className="subtitle">Services</span>
              </h2>
            </div>
          </div>

          {services.map((service, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <div className="service-card">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image mb-3"
                />
                <h5 className="service-title">{service.title}</h5>
              </div>
            </div>
          ))}
        </div>

        <div className="col-lg-3 px-4 py-4 ">
          <div className="citigen">
            <div className="vertical-line"></div>
            <div className="d-flex">
              <h2 className="section-title">
                Video <span className="subtitle">Services</span>
              </h2>
            </div>
          </div>

          <div className="video-wrapper position-relative">
            <img
              src={video1}
              alt="Ulhasnagar Municipal Corporation"
              className="img-fluid rounded"
            />
            <button className="btn play-button position-absolute">
              <img src={playicon} alt="Play Icon" className="playicon" />
            </button>
          </div>
          <div className="video-wrapper position-relative">
            <img
              src={video1}
              alt="Ulhasnagar Municipal Corporation"
              className="img-fluid rounded"
            />
            <button className="btn play-button position-absolute">
              <img src={playicon} alt="Play Icon" className="playicon" />
            </button>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="menu-list">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="menu-item d-flex align-items-center justify-content-between position-relative mb-3"
              >
                <span className="menu-text">{item}</span>
                <span className="menu-image">
                  <img src={vector} alt="arrow" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenServices;
