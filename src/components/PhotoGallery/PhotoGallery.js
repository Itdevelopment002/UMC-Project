import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import "./PhotoGallery.css";
import img1 from "../../assets/images/Gallery/Temples/temple1.png";
import img2 from "../../assets/images/Gallery/Temples/temple2.png";
import img3 from "../../assets/images/Gallery/Temples/temple3.png";
import img4 from "../../assets/images/Gallery/Temples/temple4.png";
import img5 from "../../assets/images/Gallery/Temples/temple5.png";
import img6 from "../../assets/images/Gallery/Temples/temple6.png";
import img7 from "../../assets/images/Gallery/Temples/temple7.png";
import img8 from "../../assets/images/Gallery/Temples/temple8.png";
import img9 from "../../assets/images/Gallery/Marathi/lang1.png";
import img10 from "../../assets/images/Gallery/Marathi/lang2.png";
import img11 from "../../assets/images/Gallery/Marathi/lang3.png";
import img12 from "../../assets/images/Gallery/Marathi/lang4.png";
import img13 from "../../assets/images/Gallery/Marathi/lang5.png";
import img14 from "../../assets/images/Gallery/Marathi/lang6.png";
import img15 from "../../assets/images/Gallery/Marathi/lang7.png";
import img16 from "../../assets/images/Gallery/Marathi/lang8.png";

const Gallery = () => {
  const temples = [img1, img2, img3, img4, img5, img6, img7, img8];

  const languages = [img9, img10, img11, img12, img13, img14, img15, img16];

  useEffect(() => {
    GLightbox({ selector: ".glightbox" });
  }, []);

  return (
    <>
      <div className="history-header-image"></div>

      <div className="container-fluid font-location mt-2 mb-5" id="gallery-css">
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-item text-decoration-none">
            Home
          </Link>
          <Link to="#" className="breadcrumb-item text-decoration-none">
            About UMC
          </Link>
          <span className="breadcrumb-item active1">Gallery</span>
        </nav>
        <h2 className="location-title">
          <span className="highlight">Photo</span>
          <span className="highlighted-text"> Gallery</span>
        </h2>
        <div className="mt-4 image-section-div">
          <h3 className="text-orange">
            Temple <span className="text-black">Photos</span>
            <span className="divider"></span>
          </h3>
          <hr />
          <div className="row g-3">
            {temples.map((temple, index) => (
              <div className="col-6 col-sm-6 col-md-4 col-lg-3" key={index}>
                <a href={temple} className="glightbox" data-gallery="temples">
                  <img
                    src={temple}
                    alt={`Temple-${index + 1}`}
                    className="img-styling-photo rounded"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 image-section-div">
          <h3 className="text-orange">
            Marathi <span className="text-black">Language Day</span>
            <span className="divider"></span>
          </h3>
          <hr />
          <div className="row g-3">
            {languages.map((language, index) => (
              <div className="col-6 col-sm-6 col-md-4 col-lg-3" key={index}>
                <a
                  href={language}
                  className="glightbox"
                  data-gallery="languages"
                >
                  <img
                    src={language}
                    alt={`Language-${index + 1}`}
                    className="img-styling-photo rounded"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
