import React from 'react';
import './History.css';
import video1 from "../../assets/images/info/Group 14.png";
import playicon from "../../assets/images/info/Group 15.png";
import BottomSlider from "../BottomSlider/BottomSlider";
const History = () => {
  return (
    <div className='about' id='about-section'>
      <div className="header-image">

      </div>

      <div className="container-fluid mt-5">
        <div className="row mt-4">
          <div className="col-md-4">
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

          <div className="col-md-8">
            <div class="about-container">
              <div class="vertical-line"></div>
              <div>
                <h2 class="section-title">About</h2>
                <h3 class="subtitle">Ulhasnagar Municipal Corporation</h3>
              </div>
            </div>
            <p className='about-description'>
              Ulhasnagar is a municipal town and the headquarters of the Tahsil bearing
              the same name. It is a railway station on the Mumbai-Pune route of the
              Central Railway. Ulhasnagar, a colony of migrants in the aftermath of
              Partition, is 43 years old. Situated 58 Kms from Mumbai, the once-barren
              land has developed into a rich town of Thane district. Originally, known as
              Kalyan Military transit camp, Ulhasnagar was set up especially to
              accommodate 6,000 soldiers and 30,000 others during World War II. There
              were 2,126 barracks and about 1,173 housed personals.
            </p>

          </div>


        </div>

        {/* Additional Content */}
        <div className="row mt-4">
          <div className="col-12">
            <p className='about-description'>
              The majority of barracks had large central halls with rooms attached to
              either end. The camp had a deserted look at the end of the war and served
              as a ready and ideal ground for Partition victims. Sindhis, in particular,
              began life anew in the new land.
            </p>
            <p className='about-description'>
              On August 8, 1949 the first and last Governor-General of India, C.  Rajagopalachari, laid the foundation stone.  The population of the town which was 80,861 as per the Census of 1961  and more than doubled to 1,68,462 as per the Census of 1971.  As per Census of 2011 it is 5,06,098. Included in the functional  category of industry, the town covers an area of 13 square kilometers  and is divided into 20 wards.  It is a centre for the production of rayon silk, dyes, ready-made  garments, electrical / electronic appliances & confectionaries.  The total length of existing Roads & Streets in the town measures  352 kilometers.
            </p>
            <p className='about-description'>
              The town is served by underground & open-surface drainage, night soil being disposed of by septic tank latrines.  The town gets a protected water supply through MIDC.</p>
          </div>
        </div>
      </div>
      <BottomSlider />
    </div>
  );
};

export default History;
