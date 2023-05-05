import React, { useEffect, useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsHandbag, BsInstagram } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { FiFacebook, FiTwitter } from "react-icons/fi";

const Header = () => {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };

  return (
    <>
      <header>
        <div className="headTop">
          <div className="leftH">
            <div>
              <BiPhoneCall size={25} />
              <p> 1-800-321-6543</p>
            </div>
            <div>
              <FaMapMarkedAlt size={25} />
              <p>
                CHOOSE YOUR EXPERIENCE <span>DISCOVER MORE</span>
              </p>
            </div>
          </div>

          <div className="rightH">
            <div>
              <a href="/about">ABOUT</a>
              <a href="/contact">CONTACT</a>
            </div>
            <div>
              <BsHandbag size={25} />
              <GoSearch size={25} />
            </div>
          </div>
        </div>

        <div className={`headBottom ${stickyClass}`}>
          <div className="logodiv">
            <img src="/logo.png" alt="logo" />
          </div>

          <nav>
            <a href="/" className="active">
              home
            </a>
            <a href="#">destinations</a>
            <a href="#">listings</a>
            <a href="##">pages</a>
            <a href="#">shop</a>
            <a href="#">blog</a>
          </nav>

          <div className="bottomH">
            <div className="headSocial">
              <FiFacebook size={30} />
              <BsInstagram size={30} />
              <FiTwitter size={30} />
            </div>
            <button>SIGN IN</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
