import React from "react";
import { Parallax } from "react-scroll-parallax";

const ParallaxBanner = () => {
  return (
    <div className="parallaxBanner background-tint">
      <Parallax translateX={(-40, 40)} style={{ textAlign: "center" }}>
        <img src="/patternw.png" alt="pattern" />
        <h2>Get 10% Off On Your Next Travel</h2>
        <p>
          Travel between 22 April to 21 May and get existing offers along with a
          sure 10% cash discount
        </p>
        <button className="onclick">EXPLORE TOUR</button>
      </Parallax>
    </div>
  );
};

export default ParallaxBanner;
