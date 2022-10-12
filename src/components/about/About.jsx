import React, { useState,useEffect,useRef } from "react";
import "./about.css";
import man2 from "../images/hero3.png";
import SkillsBar from "../Progress skill bar/Skillbar";
import Aos from "aos";
import "../../../node_modules/aos/dist/aos.css";
import Footer from "../footer/Footer";

import BIRDS from "vanta/dist/vanta.halo.min";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import ScrollToTop from "react-scroll-to-top";
const About = (props) => {
  
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
// vanta
   const [vantaEffect, setVantaEffect] = useState(0);
   const myRef = useRef(!null);
   useEffect(() => {
     if (!vantaEffect) {
       setVantaEffect(
         BIRDS({
           el: myRef.current,
         })
       );
     }
     return () => {
       if (vantaEffect) vantaEffect.destroy();
     };
   }, [vantaEffect]);
  return (
    <>
      <ScrollToTop
        component={
          <KeyboardDoubleArrowUpIcon
            style={{ color: "#6f00ff", height: "35", width: "35" }}
          />
        }
      />
      <section id="Countdownsah" ref={myRef}>
        <div id="ab-text">
          <h1>About Me</h1>
          <h4>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</h4>
        </div>
      </section>
      <div id="about" className="row">
        <div
          className="col-sm-12 col-md-6 col-lg-6"
          id="abouts"
          data-aos="fade-up-left"
          data-aos-easing="ease-in-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="left-center"
        >
          <img src={man2} alt="" height="690px" />
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-6 "
          id="abouts"
          style={{ marginTop: "100px" }}
          data-aos="fade-out-left"
          data-aos-easing="ease-in-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="left-center"
        >
          <h2>PERSONAL DETAILS</h2>

          <p
            data-aos="fade-up-right"
            data-aos-easing="ease-in-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="left-center"
          >
            <ul>
              <li>
                <b>Name</b>
                <span>Md Asikur</span>
              </li>

              <li>
                <b>Date of Birth</b>
                <span>05/06/1987</span>
              </li>
              <li>
                <b>Address</b>
                <span>Dhaka,Bangladesh</span>
              </li>
              <li>
                <b>Nationality</b>
                <span>Bangladeshi</span>
              </li>
              <li>
                <b>Experience</b>
                <span>5 years+</span>
              </li>
              <li>
                <b>Freelance</b>
                <span>Available</span>
              </li>
              <li>
                <b>Languages</b>
                <span>English,Hindi,French.</span>
              </li>
              <li>
                <b>Phone</b>
                <span>01893585782</span>
              </li>
              <li>
                <b>Email</b>
                <span>asikurrahaman997@gmail.com</span>
              </li>
            </ul>
          </p>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-6 "
          id="abouts"
          style={{ marginTop: "100px" }}
          data-aos="fade-down"
          data-aos-easing="ease-in-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="left-center"
        >
          <h2>Experience</h2>
          <div id="ab-sec" data-aos="fade-left">
            <p>2023 - 2025</p>
            <h4>
              SOFTWARE ENGINEER-<span>GOOGLE</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet diam nonummy.
            </p>
          </div>
          <div id="ab-sec" data-aos="fade-right">
            <p>2021 - 2023</p>
            <h4>
              WEB DEVELOPER -<span>ENVATO</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet diam nonummy.
            </p>
          </div>
          <div id="ab-sec" data-aos="fade-left">
            <p>2019 - 2021</p>
            <h4>
              WEB DESIGNER -<span>FACEBOOK</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet diam nonummy.
            </p>
          </div>
          <div id="ab-sec" data-aos="fade-right">
            <p>2017 - 2019</p>
            <h4>
              CONSULANT -<span>INSTRAGRAM</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet diam nonummy.
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-6 "
          id="abouts"
          style={{ marginTop: "100px" }}
          data-aos="fade-up"
          data-aos-easing="ease-in-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="left-center"
        >
          <h2>Education</h2>
          <div id="ab-sec" data-aos="fade-right">
            <p>2022 - 2025</p>
            <h4>
              ENGINEERING DEGREE -<span>SINGAPORE UNIVERSITY</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet diam nonummy.
            </p>
          </div>
          <div id="ab-sec" data-aos="fade-left">
            <p>2020- 2022</p>
            <h4>
              MASTERS DEGREE -<span>CHINA UNIVERSITY</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet diam nonummy.
            </p>
          </div>
          <div id="ab-sec" data-aos="fade-right">
            <p>2018 - 2020</p>
            <h4>
              BACHELOR DEGREE -<span>DHAKA UNIVERSITY</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet diam nonummy.
            </p>
          </div>
          <div id="ab-sec" data-aos="fade-left">
            <p>2014 -2018</p>
            <h4>
              DIPLOMA IN COMPUTER -<span>JHENAIDAH POLYTECHNIC INS.</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet diam nonummy.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-12 " id="aboutss">
        <div id="ab-skill">
          <SkillsBar />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About;
