import React from "react";
import { Parallax } from "react-scroll-parallax";

const ParallaxBannerTwo = () => {
  return (
    <>
      <div className="parallaxBannerTwo background-tint">
        <Parallax translateX={(-40, 40)} style={{ textAlign: "center" }}>
          <img src="/patternw.png" alt="pattern" />
          <h2>Our Partners</h2>

          <div className="partners">
            <img src="/img-01.png" alt="logo" />
            <img src="/img-02.png" alt="logo" />
            <img src="/img-03.png" alt="logo" />
            <img src="/img-04.png" alt="logo" />
            <img src="/img-05.png" alt="logo" />
          </div>
        </Parallax>
      </div>
    </>
  );
};

export default ParallaxBannerTwo;
