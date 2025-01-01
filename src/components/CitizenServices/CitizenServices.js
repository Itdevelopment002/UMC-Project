import React from "react";
import "./CitizenServices.css";
import img1 from "../../assets/images/citizen-services/service-1.png";
import img2 from "../../assets/images/citizen-services/service-2.png";
import img3 from "../../assets/images/citizen-services/service-3.png";
import img4 from "../../assets/images/citizen-services/service-4.png";
import img5 from "../../assets/images/citizen-services/service-5.png";
import img6 from "../../assets/images/citizen-services/service-6.png";

const CitizenServices = () => {
  const services = [
    {
      title: "Tenders & Quotation",
      image: img1,
      color: "#333333",
    },
    {
      title: "Property Tax",
      image: img2,
      color: "#333333",
    },
    {
      title: "Water Tax",
      image: img3,
      color: "#333333",
    },
    {
      title: "Right To Information",
      image: img4,
      color: "#333333",
    },
    {
      title: "E-Tenders",
      image: img5,
      color: "#333333",
    },
    {
      title: "Marriage Registration",
      image: img6,
      color: "#333333",
    },
  ];

  return (
    <div className="background-container">
      <div className="container-fluid py-4">
        <h2 className="mb-4 heading-2">Citizen Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div className=" col-6 col-lg-2 col-md-4 col-sm-6 my-2" key={index}>
              <div className="card card1 h-100 text-center border-0 rounded">
                <div className="card-body">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="mb-3 img-style"
                    style={{ objectFit: "fill" }}
                  />
                  <h5
                    className="card-title card-title1"
                    style={{ color: service.color }}
                  >
                    {service.title}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CitizenServices;
