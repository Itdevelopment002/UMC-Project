import React from "react";
import "./EServices.css";

const EServices = () => {
  const eServicesList = [
    "Property Tax",
    "Birth Certificate",
    "Death Certificate",
    "e-Tenders",
    "Aaple Sarkar",
    "Aaple Sarkar Grievance Redressal Portal",
    "Water Tax",
    "Building Plan Management System",
    "Pandal Permission",
  ];

  const informationList = ["Content for Information"];
  const initiativesList = ["Content for Initiatives-Programme"];
  const electionList = ["Content for Election"];

  const newsList = [
    "Electing Members on Hawkers committee",
    "Draw of newly constructed building at Valmiki Nagar UNR-5",
    "Seniority List 2016 for health mukadam",
    "A comprehensive guide regarding Public and Domestic Navratri Festival 2021",
    "Revised - Advertisement inviting candidates for interview for temporary appointment for 06 months on fixed salary for prevention and control of infectious disease caused by Corona Virus",
  ];

  return (
    <div className="container-fluid mt-5 mb-4">
      <div className="row">
        <div className="col-md-8">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button e-service-text"
                  style={{ background: "#FFFAF0" }}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  e-Services
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {eServicesList.map((service, index) => (
                    <span key={index}>
                      {service}
                      {index < eServicesList.length - 1 && " | "}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button accordian-button-color collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Information
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">{informationList[0]}</div>
              </div>
            </div>

            <div className="accordion-item font-class">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button accordian-button-color collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Initiatives-Programme
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">{initiativesList[0]}</div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button accordian-button-color collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Election
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">{electionList[0]}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card card4">
            <div className="card-body">
              <div className="card-head">UMC News</div>
              <hr className="horizontal-line" />
              <div className="scroll-container">
                <ul className="list-unstyled scrolling-list">
                  {newsList.map((news, index) => (
                    <li key={index} className="news-item">
                      {news}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EServices;
