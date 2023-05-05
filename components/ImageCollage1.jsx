import React from "react";

const ImageCollage = () => {
  return (
    <>
      <div>
        <div className="imgCollage">
          <div className="imgdiv1">
            <img src="/img-01.jpg" alt="img2" />
            <div className="content">
              <h3>Ice Adventure Vacations</h3>
              <img src="/patternw.png" alt="pattern" />
              <p>your best vacations</p>
            </div>
          </div>
          <div className="imgdiv2">
            <div className="inner1">
              <img src="/img-02.jpg" alt="img2" />
              <div className="content">
                <h3>National Park</h3>
                <img src="/patternw.png" alt="pattern" />
              </div>
            </div>
            <div className="inner2">
              <img src="/img-03.jpg" alt="img2" />
              <div className="content">
                <h3>Adult Vacations</h3>
                <img src="/patternw.png" alt="pattern" />
              </div>
            </div>
          </div>
        </div>

        <div className="imgCollageDeck">
          <div className="card">
            <h2>
              <span>01</span> Luxury Hotels
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh tempor cum soluta nobis consectetuer nihil imperdiet
              doming..
            </p>
          </div>
          <div className="card">
            <h2>
              <span>02</span> Tourist Guide
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh tempor cum soluta nobis consectetuer nihil imperdiet
              doming..
            </p>
          </div>
          <div className="card">
            <h2>
              <span>03</span> Flights Tickets
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh tempor cum soluta nobis consectetuer nihil imperdiet
              doming..
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCollage;
