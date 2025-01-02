// import React from "react";
// import "./EServices.css";

// const EServices = () => {
//   const eServicesList = [
//     "Property Tax",
//     "Birth Certificate",
//     "Death Certificate",
//     "e-Tenders",
//     "Aaple Sarkar",
//     "Aaple Sarkar Grievance Redressal Portal",
//     "Water Tax",
//     "Building Plan Management System",
//     "Pandal Permission",
//   ];

//   const informationList = ["Content for Information"];
//   const initiativesList = ["Content for Initiatives-Programme"];
//   const electionList = ["Content for Election"];

//   const newsList = [
//     "Electing Members on Hawkers committee",
//     "Draw of newly constructed building at Valmiki Nagar UNR-5",
//     "Seniority List 2016 for health mukadam",
//     "A comprehensive guide regarding Public and Domestic Navratri Festival 2021",
//     "Revised - Advertisement inviting candidates for interview for temporary appointment for 06 months on fixed salary for prevention and control of infectious disease caused by Corona Virus",
//   ];

//   return (
//     <div className="container-fluid mt-5 mb-4">
//       <div className="row">
//         <div className="col-md-8">
//           <div className="accordion" id="accordionExample">
//             <div className="accordion-item">
//               <h2 className="accordion-header" id="headingOne">
//                 <button
//                   className="accordion-button e-service-text"
//                   style={{ background: "#FFFAF0" }}
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapseOne"
//                   aria-expanded="true"
//                   aria-controls="collapseOne"
//                 >
//                   e-Services
//                 </button>
//               </h2>
//               <div
//                 id="collapseOne"
//                 className="accordion-collapse collapse show"
//                 aria-labelledby="headingOne"
//                 data-bs-parent="#accordionExample"
//               >
//                 <div className="accordion-body">
//                   {eServicesList.map((service, index) => (
//                     <span key={index}>
//                       {service}
//                       {index < eServicesList.length - 1 && " | "}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="accordion-item">
//               <h2 className="accordion-header" id="headingTwo">
//                 <button
//                   className="accordion-button accordian-button-color collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapseTwo"
//                   aria-expanded="false"
//                   aria-controls="collapseTwo"
//                 >
//                   Information
//                 </button>
//               </h2>
//               <div
//                 id="collapseTwo"
//                 className="accordion-collapse collapse"
//                 aria-labelledby="headingTwo"
//                 data-bs-parent="#accordionExample"
//               >
//                 <div className="accordion-body">{informationList[0]}</div>
//               </div>
//             </div>

//             <div className="accordion-item font-class">
//               <h2 className="accordion-header" id="headingThree">
//                 <button
//                   className="accordion-button accordian-button-color collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapseThree"
//                   aria-expanded="false"
//                   aria-controls="collapseThree"
//                 >
//                   Initiatives-Programme
//                 </button>
//               </h2>
//               <div
//                 id="collapseThree"
//                 className="accordion-collapse collapse"
//                 aria-labelledby="headingThree"
//                 data-bs-parent="#accordionExample"
//               >
//                 <div className="accordion-body">{initiativesList[0]}</div>
//               </div>
//             </div>

//             <div className="accordion-item">
//               <h2 className="accordion-header" id="headingFour">
//                 <button
//                   className="accordion-button accordian-button-color collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#collapseFour"
//                   aria-expanded="false"
//                   aria-controls="collapseFour"
//                 >
//                   Election
//                 </button>
//               </h2>
//               <div
//                 id="collapseFour"
//                 className="accordion-collapse collapse"
//                 aria-labelledby="headingFour"
//                 data-bs-parent="#accordionExample"
//               >
//                 <div className="accordion-body">{electionList[0]}</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-4">
//           <div className="card card4">
//             <div className="card-body">
//               <div className="card-head">UMC News</div>
//               <hr className="horizontal-line" />
//               <div className="scroll-container">
//                 <ul className="list-unstyled scrolling-list">
//                   {newsList.map((news, index) => (
//                     <li key={index} className="news-item">
//                       {news}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EServices;

import React, { useState } from "react";
import "./EServices.css";
import { CiCircleCheck } from "react-icons/ci";
import img from "../../assets/images/project/project.png";

const EServices = () => {
  const [activeTab, setActiveTab] = useState("#umc-news");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabData = [
    {
      id: "#umc-news",
      name: "UMC News",
      items: [
        "Electing Members on Hawkers committee",
        "Draw of newly constructed building at Valmiki nagar UNR-5",
        "Seniority List 2016 for health mukadam",
        "A comprehensive guide regarding Public and Domestic Navratri Festival 2021",
        "Eligible bidder for E-tender No-634308_1 dated 8-03-2021",
        "Notification form A-Regulation of unauthorized construction in the city as per act 2006",
        "Committee For Noise Pollution and illegal Tent(Mandap)",
        "Draft List of Eligible Sweepers for Houses Provided by UMC",
        "Notification for Noise Pollution-State Government Gazette",
        "Handicapped Welfare Scheme",
      ],
    },
    {
      id: "#initiatives",
      name: "Initiatives-Programme",
      items: [
        "Initiative 1 description",
        "Initiative 2 description",
        "Initiative 3 description",
      ],
    },
    {
      id: "#information",
      name: "Information",
      items: ["Info 1 details", "Info 2 details", "Info 3 details"],
    },
    {
      id: "#e-services",
      name: "e-Services",
      items: [
        "Service 1 description",
        "Service 2 description",
        "Service 3 description",
      ],
    },
    {
      id: "#election",
      name: "Election",
      items: ["Election 1 details", "Election 2 details", "Election 3 details"],
    },
  ];

  const projects = [
    {
      id: 1,
      heading: "Project Heading 1",
      description: "Draw of newly constructed building at Valmiki nagar UNR-5",
      img: img,
    },
    {
      id: 2,
      heading: "Project Heading 2",
      description: "Draw of newly constructed building at Valmiki nagar UNR-5",
      img: img,
    },
    {
      id: 3,
      heading: "Project Heading 3",
      description: "Draw of newly constructed building at Valmiki nagar UNR-5",
      img: img,
    },
    {
      id: 4,
      heading: "Project Heading 4",
      description: "Draw of newly constructed building at Valmiki nagar UNR-5",
      img: img,
    },
    {
      id: 5,
      heading: "Project Heading 5",
      description: "Draw of newly constructed building at Valmiki nagar UNR-5",
      img: img,
    },
  ];

  return (
    <div className="container-fluid mb-4 mt-4">
      <div className="row">
        <div className="col-xl-9 col-lg-7 col-md-6 col-sm-12">
          <div className="e-services-container bg-white p-2">
            <div className="tabs-container right-section-font">
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
            <div className="news-list p-3 right-section-font">
              <ul className="list-unstyled">
                {tabData
                  .find((tab) => tab.id === activeTab)
                  ?.items.map((item, index) => (
                    <li key={index}>
                      <CiCircleCheck className="me-2 custom-icons" />
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-5 col-md-6 col-sm-12 e-services-margin right-section-font">
          <div className="upcoming-projects bg-white p-2">
            <h5 className="text-white p-2 h5-styling-5">Upcoming Projects</h5>
            <div className="scroll-wrapper">
              <div className="scroll-container">
                {projects.map((project) => (
                  <>
                    <div key={project.id} className="project-item">
                      <img
                        src={project.img}
                        alt="Project"
                        className="e-services-img me-3"
                      />
                      <div>
                        <h6>{project.heading}</h6>
                        <p className="para-style">{project.description}</p>
                      </div>
                    </div>
                    <hr className="mt-1" />
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EServices;
