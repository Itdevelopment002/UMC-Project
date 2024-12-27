import React, { useRef } from "react";
import Slider from "react-slick";
import { GrPrevious, GrNext } from "react-icons/gr";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import image1 from "../../assets/images/banner/baner1.png";
import image2 from "../../assets/images/banner/baner1.png";
import image3 from "../../assets/images/banner/baner1.png";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
};

const Corousel = () => {
  // Local image data
  const sliders = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
  ];

  const sliderRef = useRef(null);

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section className="banner-section">
      <div className="banner-carousel">
        <Slider ref={sliderRef} {...settings}>
          {sliders.map((slider) => (
            <div key={slider.id} className="slide-item">
              <div
                className="image-layer"
                style={{
                  backgroundImage: `url(${slider.image})`,
                }}
              ></div>
            </div>
          ))}
        </Slider>
        <div className="owl-nav">
          <button type="button" className="owl-prev" onClick={goToPrev}>
            <GrPrevious className="nav-icon" size={16} />
          </button>
          <button type="button" className="owl-next" onClick={goToNext}>
            <GrNext className="nav-icon" size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Corousel;
