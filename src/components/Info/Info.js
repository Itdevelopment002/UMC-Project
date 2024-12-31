// import React from "react";
// import { Link } from "react-router-dom";
// import "./Info.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import video1 from "../../assets/images/info/Group 14.png";
// import playicon from "../../assets/images/info/Group 15.png";

// function Info() {
//   return (
//     <div className="container-fluid my-5">
//       <div className="row align-items-center">
//         <div className="col-md-8 info-card1">
//           <div className="blue-line mb-3"></div>
//           <h1 className="info-heading1">Welcome to</h1>
//           <h2 className="info-heading2 fw-bold">
//             Ulhasnagar Municipal Corporation
//           </h2>
//           <p className="description">
//             Ulhasnagar is a municipal town and the headquarters of the Tahsil
//             bearing the same name. It is a railway station on the Mumbai-Pune
//             route of the Central Railway. Ulhasnagar, a colony of migrants in
//             the aftermath of Partition, is 43 years old.
//           </p>
//           <Link to="#." className="see-more-btn">
//             See more Informations &rarr;
//           </Link>
//         </div>
//         <div className="col-md-4">
//           <div className="position-relative">
//             <img
//               src={video1}
//               alt="Ulhasnagar Municipal Corporation"
//               className="img-fluid rounded"
//             />
//             <button className="btn play-button position-absolute top-50 start-50 translate-middle">
//               <img src={playicon} alt="Play Icon" className="playicon" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Info;

import React from "react";
import "./Info.css";
import { Link } from "react-router-dom";
import video1 from "../../assets/images/info/imgpsh_fullsize_anim.jpg";
import info1 from "../../assets/images/info/folder 1.png";
import info2 from "../../assets/images/info/bad-review 1.png";
import info3 from "../../assets/images/info/ewallet 1.png";
import info4 from "../../assets/images/info/presentation 1.png";
import info5 from "../../assets/images/info/waste-management 1.png";




const App = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row align-items-center">
        {/* Profile Section */}
        <div className="col-lg-3 col-md-6 profile-div">
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
        <div className=" col-lg-6 col-md-6 welcome-section">
          <div className="blue-line mb-3"></div>
          <h1 className="info-heading1">Welcome to</h1>
          <h2 className="info-heading2 fw-bold">
            Ulhasnagar Municipal Corporation
          </h2>
          <p className="description">
            Ulhasnagar is a municipal town and the headquarters of the Tahsil bearing the same name.  It is a railway station on the Mumbai-Pune route of the Central Railway.  Ulhasnagar, a colony of migrants in the aftermath of Partition, is 43 years old.  Situated 58 Kms from Mumbai, the once-barren land has developed into a rich town of Thane district.
          </p>
          <Link to="#." className="see-more-btn">
            Read More...
          </Link>
        </div>

        {/* Buttons Section */}
        <div className=" col-lg-3 col-md-12">
          <div className="button-group">
            <div className="button-item">
              <button className="custom-btn">
                <img
                  src={info1}
                  alt="Icon"
                  className="btn-icon"
                />
                <div className="vertical-line"></div>
                e-Tender
              </button>
            </div>
            <div className="button-item">
              <button className="custom-btn">
                <img
                  src={info2}
                  alt="Icon"
                  className="btn-icon"
                />
                <div className="vertical-line"></div>
                Complaint Portal
              </button>
            </div>
            <div className="button-item">
              <button className="custom-btn">
                <img
                  src={info3}
                  alt="Icon"
                  className="btn-icon"
                />
                <div className="vertical-line"></div>
                Online Payment
              </button>
            </div>
            <div className="button-item">
              <button className="custom-btn">
                <img
                  src={info4}
                  alt="Icon"
                  className="btn-icon"
                />
                <div className="vertical-line"></div>
                RTS 2015
              </button>
            </div>
            <div className="button-item">
              <button className="custom-btn">
                <img
                  src={info5}
                  alt="Icon"
                  className="btn-icon"
                />
                <div className="vertical-line"></div>
                Solid Waste Management
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>


  );
};

export default App;
