import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper";

import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HomeBanner = () => {
  return (
    <>
      <div className="homeBanner">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          effect={"fade"}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Autoplay, Pagination]}
          className="mySwiper "
        >
          <SwiperSlide>
            <img
              src="/vertical-high-angle-shot-white-buildings-santorini-greece.jpg"
              alt="greece"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/paris.jpg" alt="paris" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/rome.jpg" alt="rome" />
          </SwiperSlide>
        </Swiper>
        <div className="bannerContent">
          <h2>Experience The Wonder</h2>
          <p>People Don’t Take Trips, Trips Take People</p>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
