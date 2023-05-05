import React from "react";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const PopularTourTwo = () => {
  return (
    <div>
      <div className="popularTwo">
        <div className="left">
          <img src="/placeholder-01.png" alt="placeholder" />
        </div>

        <div className="right">
          <div className="dflex">
            <h2>Popular Tours</h2>
            <img src="/patternb.png" alt=" pattern" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            consectetuer adipiscing elit, sed diam nonummy nibh...
          </p>

          <div className="list">
            <div>
              <a href="#">Europe</a>
              <span>(05)</span>
            </div>
            <div>
              <a href="#">Europe</a>
              <span>(05)</span>
            </div>
            <div>
              <a href="#">Europe</a>
              <span>(05)</span>
            </div>
            <div>
              <a href="#">North America</a>
              <span>(05)</span>
            </div>
            <div>
              <a href="#">Europe</a>
              <span>(05)</span>
            </div>
          </div>

          <button>All Destinations</button>
        </div>
      </div>

      <div className="popularPlaces">
        <Swiper
          slidesPerView={2}
          spaceBetween={60}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <a href="/paris">
              <div className="img1 background-tint">
                <div>
                  <h4>Paris</h4>
                  <p>in the street</p>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <a href="/rome" style={{ height: "50%" }}>
              <div className="img2  background-tint">
                <div>
                  <h4>Rome</h4>
                  <p>in the street</p>
                </div>
              </div>
            </a>
            <a href="/rome" style={{ height: "50%" }}>
              <div className="img3  background-tint">
                <div>
                  <h4>Rome</h4>
                  <p>in the street</p>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <div className="img1 background-tint">
                <div>
                  <h4>Paris</h4>
                  <p>in the street</p>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <a href="#" style={{ height: "50%" }}>
              <div className="img2  background-tint">
                <div>
                  <h4>Rome</h4>
                  <p>in the street</p>
                </div>
              </div>
            </a>
            <a href="#" style={{ height: "50%" }}>
              <div className="img3  background-tint">
                <div>
                  <h4>Rome</h4>
                  <p>in the street</p>
                </div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PopularTourTwo;
