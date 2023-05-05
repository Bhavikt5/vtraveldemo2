import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import { Parallax } from "react-scroll-parallax";

const PopularTourOne = () => {
  return (
    <>
      <div className="popularTourOne background-tint">
        <div className="popHeads">
          <div className="dflex">
            <h2>Popular Tours</h2>
            <img src="/patternw.png" alt=" pattern" />
          </div>
          <p>All Tours</p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper "
        >
          <SwiperSlide className="slidePop">
            <a href="#">
              <img src="/paris.jpg" alt="paris" />
            </a>

            <div className="content">
              <a href="#">
                <h4>City Tour In Europe, Paris</h4>
              </a>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                harum quae porro non explicabo distinctio eum qui doloribus
                animi tempore, architecto, debitis nemo.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slidePop">
            <a href="#">
              <img src="/download.jpeg" alt="paris" />
            </a>

            <div className="content">
              <a href="#">
                <h4>City Tour In Europe, Paris</h4>
              </a>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                harum quae porro non explicabo distinctio eum qui doloribus
                animi tempore, architecto, debitis nemo.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slidePop">
            <a href="#">
              <img src="/rome.jpg" alt="paris" />
            </a>

            <div className="content">
              <a href="#">
                <h4>City Tour In Europe, Paris</h4>
              </a>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                harum quae porro non explicabo distinctio eum qui doloribus
                animi tempore, architecto, debitis nemo.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slidePop">
            <a href="#">
              <img src="/rome.jpg" alt="paris" />
            </a>

            <div className="content">
              <a href="#">
                <h4>City Tour In Europe, Paris</h4>
              </a>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                harum quae porro non explicabo distinctio eum qui doloribus
                animi tempore, architecto, debitis nemo.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slidePop">
            <a href="#">
              <img src="/rome.jpg" alt="paris" />
            </a>

            <div className="content">
              <a href="#">
                <h4>City Tour In Europe, Paris</h4>
              </a>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                harum quae porro non explicabo distinctio eum qui doloribus
                animi tempore, architecto, debitis nemo.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default PopularTourOne;
