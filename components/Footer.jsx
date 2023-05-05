import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import { AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer1">
          <h5>About Travlu</h5>
          <p>
            Nunc cursus liero purs ac cogue arcu cursus ut sed vitae pulvinar
            massaidp nequetiam lore elerisque
          </p>
          <div className="content">
            <p>1-800-321-6543</p>
            <a href="#">info@travlu.com</a>
          </div>

          <div className="footerSocial">
            <FiFacebook />
            <BsInstagram />
            <FiTwitter />
          </div>
        </div>
        <div className="footer2">
          <h5>Travelu News</h5>

          <div>
            <img src="/img-01 (1).jpg" alt="footerimg" />
            <p>
              Bungee Jumping Trip <br />
              Nunc cursus libero purus congue arcu vitae pulvinar <br />
              Feb 22, 2017
            </p>
          </div>

          <div>
            <img src="/img-02 (1).jpg" alt="footerimg" />
            <p>
              Trip To White Castle <br />
              Nunc cursus libero purus congue arcu vitae pulvinar <br />
              Feb 22, 2017
            </p>
          </div>
        </div>
        <div className="footer3">
          <h5>Top Destinations</h5>

          <ul>
            <li>
              <ImLocation size={15} />
              Bayonne, Melbourne
            </li>
            <li>
              <ImLocation size={15} />
              Bayonne, Melbourne
            </li>
            <li>
              <ImLocation size={15} />
              Bayonne, Melbourne
            </li>
            <li>
              <ImLocation size={15} />
              Bayonne, Melbourne
            </li>
            <li>
              <ImLocation size={15} />
              Bayonne, Melbourne
            </li>
          </ul>
        </div>
        <div className="footer4">
          <h5>Newsletter</h5>
          <p>Sign up for our mailing list to get latest updates and offers</p>

          <div>
            <input type="text" placeholder="Your Email" />
            <button>
              <AiFillMail size={20} />
            </button>
          </div>

          <p>We respect your privacy</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
