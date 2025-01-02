import React, { useState } from "react";
import "./Carousel.css";
import slide1 from "../../assets/images/banner/Slider new.png";
import slide2 from "../../assets/images/banner/Slider new.png";
import slide3 from "../../assets/images/banner/Slider new.png";
import slide4 from "../../assets/images/banner/Slider new.png";
import cmImage1 from "../../assets/images/banner/current-CM.png";
import cmImage2 from "../../assets/images/banner/Prev-CM.png";
import cmImage3 from "../../assets/images/banner/UP_CM.png";

const App = () => {
  const slides = [
    { id: 1, src: slide1, alt: "City View 1" },
    { id: 2, src: slide2, alt: "City View 2" },
    { id: 3, src: slide3, alt: "City View 3" },
    { id: 4, src: slide4, alt: "City View 4" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="container-fluid">
      <div className="row home-carousel-section">
        <div className="col-lg-6 col-md-12 col-xl-3 col-12 custom-profile-card1 ">
          <ProfileCard
            name="Shri. Devendra Fadnavis"
            position="Hon'ble Chief Minister of Maharashtra"
            image={cmImage1}
            bgColor='#E0F8F2'
          />
          <ProfileCard
            name="Shri. Eknath Shinde"
            position="Deputy Chief Minister of Maharashtra"
            image={cmImage2}
            bgColor="#EEECFF"
          />
          <ProfileCard
            name="Shri. Ajit Pawar"
            position="Deputy Chief Minister of Maharashtra"
            image={cmImage3}
            bgColor="#FAEDED"
          />
        </div>

        {/* Right Section */}
        <div className="col-lg-6 col-md-12 col-xl-9 col-12">
          <div className="carousel-image-slider">
            <img
              src={slides[currentSlide].src}
              alt={slides[currentSlide].alt}
              className="img-fluid rounded"
            />
            <div className="dot-container mt-2">
              {slides.map((slide, index) => (
                <span
                  key={slide.id}
                  className={`dot ${currentSlide === index ? "active" : ""}`}
                  onClick={() => handleSlideChange(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileCard = ({ name, position, image, bgColor }) => {
  return (
    <div className='custom-profile-card' style={{ backgroundColor: bgColor }}>
      <div className="d-flex align-items-center">
        <img
          src={image}
          alt={name}
          className="me-3 image"
        />
        <div>
          <h6 className="mb-0">{name}</h6>
          <p className="mb-0 text-muted small">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
