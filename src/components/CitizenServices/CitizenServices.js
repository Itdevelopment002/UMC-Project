import React from "react";
import "./CitizenServices.css"; // Custom CSS for additional styling.

const CitizenServices = () => {
  const services = [
    {
      title: "Tenders & Quotation",
      icon: "fa-clipboard-list",
      color: "text-danger",
    },
    {
      title: "Property Tax",
      icon: "fa-chart-line",
      color: "text-primary",
    },
    {
      title: "Water Tax",
      icon: "fa-calculator",
      color: "text-warning",
    },
    {
      title: "Right To Information",
      icon: "fa-info-circle",
      color: "text-danger",
    },
    {
      title: "E-Tenders",
      icon: "fa-file-alt",
      color: "text-primary",
    },
    {
      title: "Marriage Registration",
      icon: "fa-heart",
      color: "text-purple",
    },
  ];

  return (
    <div className="container py-4">
      <h2 className="text-primary mb-4">Citizen Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-lg-2 col-md-4 col-sm-6" key={index}>
            <div className="card h-100 text-center border-0 shadow-sm rounded">
              <div className="card-body">
                <i className={`fas ${service.icon} fa-3x ${service.color} mb-3`}></i>
                <h5 className="card-title">{service.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitizenServices;
