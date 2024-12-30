import React, { useState } from "react";
import "./CurrentUpdate.css";

const CurrentUpdate = () => {
  const [animationState, setAnimationState] = useState({});
  const manualUpdates = [
    { description: "Stay updated with the latest trends!" },
    { description: "Manual News 2: Our services are now expanded globally." },
    { description: "Manual News 3: Big savings on our premium plans." },
    { description: "Manual News 4: Join our upcoming webinar on technology." },
    {
      description:
        "Manual News 5: Exciting offers available for a limited time!",
    },
  ];

  const handleMouseEnter = () => {
    const marquee = document.querySelector(".marquee-content");
    const computedStyle = window.getComputedStyle(marquee);
    const transform = computedStyle.transform;

    let translateX = 0;
    if (transform !== "none") {
      const matrix =
        transform.match(/matrix\((.+)\)/) ||
        transform.match(/matrix3d\((.+)\)/);
      if (matrix) {
        const values = matrix[1].split(", ");
        translateX = parseFloat(values[4]);
      }
    }

    setAnimationState({
      paused: true,
      translateX,
    });
  };

  const handleMouseLeave = () => {
    setAnimationState((prevState) => ({
      ...prevState,
      paused: false,
    }));
  };

  return (
    <section className="update-section">
      <div className="container-fluid">
        <div
          className="marquee"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="marquee-content"
            style={{
              animationPlayState: animationState.paused ? "paused" : "running",
              transform: animationState.paused
                ? `translateX(${animationState.translateX}px)`
                : "",
            }}
          >
            {manualUpdates.concat(manualUpdates).map((item, index) => (
              <div className="marquee-item" key={index}>
                <span style={{ color: "#3EA4ED" }}>
                  {(index % manualUpdates.length) + 1}.{" "}
                </span>
                {item.description}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentUpdate;
