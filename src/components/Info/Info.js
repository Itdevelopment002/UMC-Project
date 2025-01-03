

import React, { useState } from "react";
import "./Info.css";
import { Link } from "react-router-dom";
import video1 from "../../assets/images/info/commisioner1.jpg";
import info1 from "../../assets/images/info/vector1.png";
import info2 from "../../assets/images/info/vector2.png";
import info3 from "../../assets/images/info/vector3.png";
import info4 from "../../assets/images/info/vector4.png";
import info5 from "../../assets/images/info/vector5.png";




const App = () => {
  const [activeButton, setActiveButton] = useState("e-Tender");

  const buttons = [
    {
      id: 1,
      label: "e-Tender",
      icon: info1, // Replace with your icon URL
      color: "#42B8F9",
    },
    {
      id: 2,
      label: "Complaint Portal",
      icon: info2, // Replace with your icon URL
      color: "#F8D05C",
    },
    {
      id: 3,
      label: "Complaint Portal",
      icon: info3, // Replace with your icon URL
      color: "#5FD35F",
    },
    {
      id: 4,
      label: "RTS 2015",
      icon: info4, // Replace with your icon URL
      color: "#F5507A",
    },
    {
      id: 5,
      label: "Solid Waste Management",
      icon: info5, // Replace with your icon URL
      color: "#A57BF6",
    },
    // Add more buttons as needed
  ];

  // const buttons = [
  //   { id: "e-Tender", label: "e-Tender", icon: info1 },
  //   { id: "Complaint Portal", label: "Complaint Portal", icon: info2 },
  //   { id: "Online Payment", label: "Online Payment", icon: info3 },
  //   { id: "RTS 2015", label: "RTS 2015", icon: info4 },
  //   { id: "Solid Waste Management", label: "Solid Waste Management", icon: info5 },
  // ];

  return (
    <div className="container-fluid mt-5">
      <div className="row align-items-center">
        {/* Profile Section */}
        <div className="col-lg-3 col-md-12 profile-div">
          <div className="profile-card">
            <img
              src={video1}
              alt="Commissioner"
              className="profile-image"
            />
            <h5 className="custom-name">Mr. Vikas Dhakane</h5>
            <p className="custom-title">Commissioner</p>
            <p className="organization">Ulhasnagar Municipal Corporation</p>
          </div>
        </div>



        {/* Welcome Section */}
        <div className=" col-lg-6 col-md-12 welcome-section">
          {/* <div className="blue-line mb-3"></div> */}
          <div className="heading">
            <h1 className="info-heading1">Welcome to <span className="info-heading2 fw-bold">Ulhasnagar Municipal Corporation</span></h1>
          </div>
          {/* <h2 className="info-heading2 fw-bold">
            Ulhasnagar Municipal Corporation
          </h2> */}
          <p className="description">
            Ulhasnagar is a municipal town and the headquarters of the Tahsil bearing the same name.  It is a railway station on the Mumbai-Pune route of the Central Railway.  Ulhasnagar, a colony of migrants in the aftermath of Partition, is 43 years old.  Situated 58 Kms from Mumbai, the once-barren land has developed into a rich town of Thane district. Originally, known as Kalyan Military transit camp, Ulhasnagar was set up especially to accommodate 6,000 soldiers and 30,000 others during World War II.  There were 2,126 barracks and about 1,173 housed personals.          </p>
          <Link to="/history" className="see-more-btn">
            Read More...
          </Link>
        </div>

        {/* Buttons Section */}
        <div className="col-lg-3 col-md-12" id="info-section">
          {buttons.map((button) => (
            <button
              key={button.id}
              className={`custom-btn ${activeButton === button.id ? "active" : ""}`}
              onClick={() => setActiveButton(button.id)}
            >
              {/* Icon Section */}
              <div
                className="button-icon-section"
                style={{ backgroundColor: button.color }}
              >
                <img
                  src={button.icon}
                  alt={button.label}
                  className="btn-icon"
                />
              </div>

              {/* Vertical Line */}
              <div className="vertical-line"></div>

              {/* Button Label */}
              <div
                className="button-label"
                style={{ color: 'black', fontFamily: 'Roboto' }}
              >
                {button.label}
              </div>
            </button>
          ))}
        </div>
      </div>

    </div>



  );
};

export default App;
