import React, { useEffect } from "react";
import "./GalleryAndCommunication.css";
import img1 from "../../assets/images/Gallery/gallery-1.png";
import img2 from "../../assets/images/Gallery/gallery-2.png";
import img3 from "../../assets/images/Gallery/gallery-3.png";
import img4 from "../../assets/images/Gallery/gallery-4.png";
import img5 from "../../assets/images/Gallery/gallery-5.png";
import img6 from "../../assets/images/Gallery/gallery-6.png";
import img7 from "../../assets/images/Gallery/communication-1.png";
import img8 from "../../assets/images/Gallery/communication-2.png";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

const GalleryAndCommunication = () => {
  const galleryImages = [img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    // Initialize GLightbox
    GLightbox({
      selector: ".glightbox",
    });
  }, []);

  return (
    <div className="container-fluid font-fam mt-4 mb-4">
      <div className="row ">
        {/* Gallery Section */}
        <div className="col-lg-8 ">
          <h4 className="h4-styling">Gallery</h4>
          <div className="row gallary-border">
            {galleryImages.map((image, index) => (
              <div className="col-6 col-sm-6 col-md-4 mb-3" key={index}>
                <div className="card border-0">
                  <a
                    href={image}
                    className="glightbox"
                  >
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="image-style-2 rounded-2"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-4">
          <h4 className="h4-styling">Citizens Communication</h4>
          <div className="card card-2 px-3 py-3 border-0" style={{ background: "#EAFCFF" }}>
            <div className="mb-3">
              <div className="d-flex align-items-center py-3 px-2">
                <img
                  src={img7}
                  alt="Government of India"
                  className="image-style-com-2 me-4"
                />
                <div>
                  <h6 className="mb-0 h6-styling-gallery">
                    Government of India
                  </h6>
                  <small className="text-styling-small">PG Portal</small>
                </div>
              </div>
            </div>
            <hr
              style={{
                backgroundColor: "#0855A1",
                height: "2px",
                border: "none",
              }}
            />
            <div>
              <div className="d-flex align-items-center py-3 px-2">
                <img
                  src={img8}
                  alt="Maharashtra State"
                  className="image-style-com-2 me-4"
                />
                <div>
                  <h6 className="mb-0 h6-styling-gallery">Maharashtra State</h6>
                  <small className="text-styling-small">
                    Grievance Registration
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryAndCommunication;
