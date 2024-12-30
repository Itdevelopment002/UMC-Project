import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./BottomSlider.css";
import { Link } from "react-router-dom";

import logo1 from "../../assets/images/bottom-slider/logo1.png";
import logo2 from "../../assets/images/bottom-slider/logo2.png";
import logo3 from "../../assets/images/bottom-slider/logo3.png";
import logo4 from "../../assets/images/bottom-slider/logo4.png";
import logo5 from "../../assets/images/bottom-slider/logo5.png";
import logo6 from "../../assets/images/bottom-slider/logo6.png";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-next-arrow" onClick={onClick}>
      <FaChevronRight size={15} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-prev-arrow" onClick={onClick}>
      <FaChevronLeft size={15} />
    </div>
  );
};

const BottomSlider = () => {
  const logos = [
    { src: logo1, alt: "Logo 1", link: "https://example1.com" },
    { src: logo2, alt: "Logo 2", link: "https://example2.com" },
    { src: logo3, alt: "Logo 3", link: "https://example3.com" },
    { src: logo4, alt: "Logo 4", link: "https://example4.com" },
    { src: logo5, alt: "Logo 5", link: "https://example5.com" },
    { src: logo6, alt: "Logo 6", link: "https://example6.com" },
    { src: logo1, alt: "Logo 1", link: "https://example1.com" },
    { src: logo2, alt: "Logo 2", link: "https://example2.com" },
    { src: logo3, alt: "Logo 3", link: "https://example3.com" },
    { src: logo4, alt: "Logo 4", link: "https://example4.com" },
    { src: logo5, alt: "Logo 5", link: "https://example5.com" },
    { src: logo6, alt: "Logo 6", link: "https://example6.com" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          className: "slider-padding",
        },
      },
    ],
  };

  return (
    <section className="client-logo-slider my-3 mx-5">
      <div className="content-box">
        <div className="inner-box">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="logo-slide">
                <Link to={logo.link} target="_blank" rel="noopener noreferrer">
                  <img src={logo.src} alt={logo.alt} />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BottomSlider;
