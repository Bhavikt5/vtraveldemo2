import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import {
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { BiMapAlt } from "react-icons/bi";
import { GiAlarmClock } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { MdDone } from "react-icons/md";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Loading from "../components/Loading";
import Collapse from "rc-collapse";
require("rc-collapse/assets/index.css");

const Post = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1000);
  }, []);

  var Panel = Collapse.Panel;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div>
            <div className="tourImg background-tint"></div>

            <div style={{ position: "relative", height: "650px" }}>
              <div className="tourHeading">
                <h1>Switzerland – 5 Days Mountain Hiking Tour</h1>
                <div
                  className="dflex"
                  style={{ justifyContent: "center", marginTop: 20 }}
                >
                  <div className="rating">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <BsStarHalf />
                  </div>
                  <p>(3 review)</p>
                </div>

                <div style={{ margin: "20px 0 10px" }}>
                  <p>
                    From <span>$2,800</span>
                  </p>
                </div>
                <div style={{ marginBottom: "2rem" }}>
                  <p>
                    <span
                      style={{
                        color: "#ff7550",
                        fontSize: "2rem",
                        fontWeight: 600,
                      }}
                    >
                      $2,500
                    </span>
                    / Per Person
                  </p>
                </div>
                <p
                  style={{
                    fontWeight: 400,
                    color: "#545353",
                    fontSize: "1.2rem",
                    fontFamily: "Roboto",
                  }}
                >
                  There’s only 5 spot left. Join 19 others at Travelu’s
                  experience this Saturday.
                </p>

                <hr style={{ margin: "2rem 0" }} />

                <div className="dflex jcsb">
                  <div className="dflex aic" style={{ color: "#545353" }}>
                    <GiAlarmClock size={30} />
                    <p style={{ marginLeft: "10px" }}>12 Days 11 Nights</p>
                  </div>
                  <div className="dflex aic" style={{ color: "#545353" }}>
                    <SlCalender size={30} />
                    <p style={{ marginLeft: "10px" }}>Availability May 12</p>
                  </div>
                  <div className="dflex aic" style={{ color: "#545353" }}>
                    <BiMapAlt size={30} />
                    <p style={{ marginLeft: "10px" }}>San Francisco</p>
                  </div>
                  <div className="dflex aic" style={{ color: "#545353" }}>
                    <CiUser size={30} />
                    <p style={{ marginLeft: "10px" }}>24 People in Group</p>
                  </div>
                </div>

                <hr style={{ margin: "2rem 0" }} />

                <div className="dflex jcsb aic">
                  <img src="/pig.jpg" alt="pigibank" />
                  <div style={{ textAlign: "left" }}>
                    <h3>100% Refundable</h3>
                    <p>
                      Cancel up to 12 days before your trip and get a full
                      refund, including service fees.
                    </p>
                  </div>
                  <div className="dflex" style={{ gap: 5 }}>
                    <div className="dflex aic">
                      <AiOutlineShareAlt />
                      <p style={{ marginLeft: 5 }}>SHARE</p>
                    </div>
                    <div className="dflex aic">
                      <AiOutlineHeart />
                      <p style={{ marginLeft: 5 }}>SAVE TO WISH LIST</p>
                    </div>
                    <div className="dflex aic">
                      <AiOutlineEye />
                      <p style={{ marginLeft: 5 }}>3520</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tabContent">
            <Tabs>
              <TabList>
                <Tab>Overview</Tab>
                <Tab>Itinerary</Tab>
                <Tab>Location</Tab>
                <Tab>Reviews</Tab>
                <Tab>Gallery</Tab>
              </TabList>

              <TabPanel>
                <div className="dflex overview">
                  <div className="left">
                    <div>
                      <h3>About This Listing</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy Etiam porta sem malesuada magna
                        mollis euismod.
                      </p>
                      <p>
                        Maecenas sed diam eget risus varius blandit sit amet non
                        magna. Vivamus sagittis lacus vel augue Sed non mauris
                        vitae;erat consequat auctor eu in elit. Class aptent
                        taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Mauris in erat justo.
                      </p>
                      <p>
                        Nullam ac urna eu felis dapibus condimentum sit amet a
                        augue. Sed non neque elit. Sed ut imperdiet nisi.
                      </p>
                      <p>
                        Proin condimentum fermentum nunc. Etiam pharetra, erat
                        sed fermentum feugiat, velit mauris egestas quam.
                      </p>
                    </div>
                    <div>
                      <h3>Guest Access</h3>
                      <p>
                        Proin condimentum fermentum nunc. Etiam pharetra, erat
                        sed fermentum feugiat, velit mauris egestas quam.
                      </p>

                      <p>
                        Maecenas sed diam eget risus varius blandit sit amet non
                        magna. Vivamus sagittis lacus vel augue Sed non mauris
                        vitae;erat consequat auctor eu in elit. Class aptent
                        taciti sociosqu ad litora torquent per conubia nostra.
                      </p>

                      <ul>
                        <li>
                          <MdDone />
                          Ipsum Amet Mattis Pellentesque
                        </li>
                        <li>
                          <MdDone />
                          Ultricies Vehicula Mollis Vestibulum Fringilla
                        </li>
                        <li>
                          <MdDone />
                          Condimentum Sollicitudin Fusce Vestibulum Ultricies
                        </li>
                        <li>
                          <MdDone />
                          Cursus Pharetra Purus Porta Parturient
                        </li>
                        <li>
                          <MdDone />
                          Cursus Pharetra Purus Porta Parturient
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="right">
                    <div className="dflex">
                      <h4>Amenities</h4>

                      <ul>
                        <li> Pets allowed</li>
                        <li>Internet</li>
                        <li>Gym</li>
                        <li>Hot tub</li>
                        <li>Doorman</li>
                        <li>Wheelchair accessible</li>
                        <li>Pool</li>
                        <li>Kitchen</li>
                        <li>Suitable for events</li>
                        <li>Dryer</li>
                        <li>Family/kid friendly</li>
                        <li>Cable TV</li>
                        <li>Wireless Internet</li>
                      </ul>
                    </div>
                    <div className="dflex">
                      <h4>Price Includes</h4>

                      <ul>
                        <li>Air fares</li>
                        <li>3 Nights Hotel Accomodation</li>
                        <li>Tour Guide</li>
                        <li>Entrance Fees</li>
                        <li>All transportation in destination location</li>
                      </ul>
                    </div>
                    <div className="dflex">
                      <h4>Tour Rules</h4>

                      <p>
                        Maecenas sed diam eget risus varius blandit sit amet non
                        magna. Vivamus sagittis lacus vel augue Sed non mauris
                        vitae;erat consequat auctor eu in elit. Class aptent
                        taciti sociosqu ad litora torquent.
                      </p>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <Collapse accordion={true}>
                  <Panel header="Day 1" headerClass="my-header-class">
                    this is panel content
                  </Panel>
                  <Panel header="Day 2">this is panel content2 or other</Panel>
                </Collapse>
              </TabPanel>
              <TabPanel>
                <h2>Location</h2>
              </TabPanel>
              <TabPanel>
                <h2>Reviews</h2>
              </TabPanel>
              <TabPanel>
                <h2>Gallery</h2>
              </TabPanel>
            </Tabs>
          </div>

          <div className="latest">
            <img src="/patternb.png" alt="pattern" />
            <h2>Latest Articles</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              consectetuer
            </p>

            <div className="deck">
              <div className="card">
                <img src="/paris.jpg" alt="paris" />
                <div className="content">
                  <h5>Bungee Jumping</h5>
                  <p>Feb 22, 2017</p>
                </div>
              </div>
              <div className="card">
                <img src="/paris.jpg" alt="paris" />
                <div className="content">
                  <h5>Bungee Jumping</h5>
                  <p>Feb 22, 2017</p>
                </div>
              </div>
              <div className="card">
                <img src="/paris.jpg" alt="paris" />
                <div className="content">
                  <h5>Bungee Jumping</h5>
                  <p>Feb 22, 2017</p>
                </div>
              </div>
              <div className="card">
                <img src="/paris.jpg" alt="paris" />
                <div className="content">
                  <h5>Bungee Jumping</h5>
                  <p>Feb 22, 2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
