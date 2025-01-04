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
import video1 from "../../assets/images/citizen-services/image.png";
import video2 from "../../assets/images/citizen-services/image 3.png";
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
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="citigen mt-1">
              <div className="vertical-line"></div>
              <div className="d-flex">
                <h2 className="section-title">
                  Citizen <span className="subtitle">Services</span>
                </h2>
              </div>
            </div>

            <div className="row">
              {services.map((service, index) => (
                <div className="col-6 col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                  <div className="service-card text-center">
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
          </div>


          <div className="col-lg-2 col-md-4 col-sm-5">
            <div className="citigen">
              <div className="vertical-line"></div>
              <div className="d-flex">
                <h2 className="section-title">
                  Video <span className="subtitle">Gallery</span>
                </h2>
              </div>
            </div>

            <div className="row">
              <div className="col-6 col-lg-12 col-md-12 col-sm-12 video-wrapper position-relative ">
                <img
                  src={video1}
                  alt="Ulhasnagar Municipal Corporation"
                  className="custom-video-gallary"
                />
                <button className="btn play-button position-absolute">
                  <img src={playicon} alt="Play Icon" className="playicon" />
                </button>
              </div>
              <div className="col-6 col-lg-12 col-md-12 col-sm-12 video-wrapper position-relative">
                <img
                  src={video2}
                  alt="Ulhasnagar Municipal Corporation"
                  className="custom-video-gallary"
                />
                <button className="btn play-button position-absolute">
                  <img src={playicon} alt="Play Icon" className="playicon" />
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-8 col-sm-7">
            <div className="menu-list">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="menu-item mb-3"
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
    </div>
  );
};

export default CitizenServices;
