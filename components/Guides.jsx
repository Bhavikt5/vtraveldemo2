import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";

const Guides = () => {
  return (
    <div className="guides">
      <div>
        <div className="dflex">
          <h2>Meet The Guides</h2>
          <img src="/patternb.png" alt=" pattern" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          consectetuer.
        </p>
      </div>

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
        <SwiperSlide style={{ textAlign: "start" }}>
          <img src="/guide1.jpg" alt="guide1" />
          <div className="dflex jcsb" style={{ marginTop: 10 }}>
            <div>
              <h4>Martin Blake</h4>
              <p>Adventure Master</p>
            </div>

            <div className="headSocial">
              <FiFacebook size={30} />
              <BsInstagram size={30} />
              <FiTwitter size={30} />
            </div>
          </div>

          <hr />
          <p style={{ marginTop: 15 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            eos esse nulla similique commodi quas!
          </p>
        </SwiperSlide>
        <SwiperSlide style={{ textAlign: "start" }}>
          <img src="/guide2.jpg" alt="guide1" />
          <div className="dflex jcsb" style={{ marginTop: 10 }}>
            <div>
              <h4>Martin Blake</h4>
              <p>Adventure Master</p>
            </div>

            <div className="headSocial">
              <FiFacebook size={30} />
              <BsInstagram size={30} />
              <FiTwitter size={30} />
            </div>
          </div>

          <hr />
          <p style={{ marginTop: 15 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            eos esse nulla similique commodi quas!
          </p>
        </SwiperSlide>
        <SwiperSlide style={{ textAlign: "start" }}>
          <img src="/guide1.jpg" alt="guide1" />
          <div className="dflex jcsb" style={{ marginTop: 10 }}>
            <div>
              <h4>Martin Blake</h4>
              <p>Adventure Master</p>
            </div>

            <div className="headSocial">
              <FiFacebook size={30} />
              <BsInstagram size={30} />
              <FiTwitter size={30} />
            </div>
          </div>

          <hr />
          <p style={{ marginTop: 15 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            eos esse nulla similique commodi quas!
          </p>
        </SwiperSlide>
        <SwiperSlide style={{ textAlign: "start" }}>
          <img src="/guide2.jpg" alt="guide1" />
          <div className="dflex jcsb" style={{ marginTop: 10 }}>
            <div>
              <h4>Martin Blake</h4>
              <p>Adventure Master</p>
            </div>

            <div className="headSocial">
              <FiFacebook size={30} />
              <BsInstagram size={30} />
              <FiTwitter size={30} />
            </div>
          </div>

          <hr />
          <p style={{ marginTop: 15 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            eos esse nulla similique commodi quas!
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Guides;
