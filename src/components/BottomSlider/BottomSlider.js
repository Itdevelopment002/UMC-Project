// import React, { useState, useEffect, useRef } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import "./BottomSlider.css";

// import image1 from "../../assets/images/bottom-slider/logo1.png";
// import image2 from "../../assets/images/bottom-slider/logo2.png";
// import image3 from "../../assets/images/bottom-slider/logo3.png";
// import image4 from "../../assets/images/bottom-slider/logo4.png";
// import image5 from "../../assets/images/bottom-slider/logo5.png";
// import image6 from "../../assets/images/bottom-slider/logo5.png";

// const BottomSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const sliderRef = useRef(null);

//   const cards = [
//     { id: 1, imgSrc: image1, alt: "Card 1" },
//     { id: 2, imgSrc: image2, alt: "Card 2" },
//     { id: 3, imgSrc: image3, alt: "Card 3" },
//     { id: 4, imgSrc: image4, alt: "Card 4" },
//     { id: 5, imgSrc: image5, alt: "Card 5" },
//     { id: 6, imgSrc: image6, alt: "Card 6" },
//     { id: 7, imgSrc: image1, alt: "Card 7" },
//     { id: 8, imgSrc: image2, alt: "Card 8" },
//     { id: 9, imgSrc: image3, alt: "Card 9" },
//     { id: 10, imgSrc: image4, alt: "Card 10" },
//     { id: 11, imgSrc: image5, alt: "Card 11" },
//     { id: 12, imgSrc: image6, alt: "Card 12" },
//   ];

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? cards.length - 1 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     const slider = sliderRef.current;

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => {
//         const nextIndex = (prevIndex + 1) % cards.length;
//         slider.style.transform = `translateX(-${nextIndex * 220}px)`;
//         return nextIndex;
//       });
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [cards.length]);

//   return (
//     <div className="container">
//       <button className="slider-button" onClick={handlePrev}>
//         <FaArrowLeft />
//       </button>
//       <div className="slider" ref={sliderRef}>
//         {cards.map((card) => (
//           <div className="slider-card" key={card.id}>
//             <img src={card.imgSrc} alt={card.alt} />
//           </div>
//         ))}
//       </div>
//       <button className="slider-button" onClick={handleNext}>
//         <FaArrowRight />
//       </button>
//     </div>
//   );
// };

// export default BottomSlider;
