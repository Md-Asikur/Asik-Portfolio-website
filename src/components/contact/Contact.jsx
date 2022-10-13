import React, { useState, cssOverride, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.halo.min";
import Aos from 'aos'
import SignIn from "../Register copy/Register";
import './contact.css'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
 import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
 import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";
 import Facebook from "@mui/icons-material/Facebook";
 import YouTube from "@mui/icons-material/YouTube";
import Instagram from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
 import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Footer from "../footer/Footer";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import ScrollToTop from "react-scroll-to-top";
export default function Contact() {
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
    <div>
      <ScrollToTop
        component={
          <KeyboardDoubleArrowUpIcon
            style={{ color: "#6f00ff", height: "35", width: "35" }}
          />
        }
      />
      <section id="Countdownsah" ref={myRef}>
        <div id="ab-text">
          <h1>Contact Me</h1>
          <h4 className="text-center">I AM ACTIVE 24/7 HOURS.</h4>
        </div>
      </section>
      <div className="row">
        <div className="container col-sm mx-4">
          <div
            id="con-reg"
            className="col-sm-12 col-md-6 col-lg-6 col-sm px-4 d-flex flex-sm-wrap"
          >
            <SignIn />
          </div>
        </div>
        <div id="con-text" className="col-sm-12 col-md-6 col-lg-6">
          <h1>Contact</h1>
          <ul>
            <li>
              <p>Phone</p>
              <h4>
                <span className="text-info">
                  <WhatsAppIcon />
                </span>
                01893585782
              </h4>
            </li>
            <li>
              <p>Email</p>
              <h4>
                <span className="text-info">
                  <MarkEmailUnreadOutlinedIcon />
                </span>
                asikur997@gmail.com
              </h4>
            </li>
            <li>
              <p>Instagram</p>
              <h4>
                <span className="text-info">
                  <Instagram />
                </span>
                asikur.997
              </h4>
            </li>
            <li>
              <p>Facebok</p>
              <h4>
                <span className="text-info">
                  <Facebook />
                </span>
                Md Asikur
              </h4>
            </li>
          </ul>
          <div id="footer-col">
            <h4 className="text-white">Follow Us</h4>
            <div class="social-links">
              <a href="#">
                <Facebook />
              </a>
              <a href="#">
                <YouTube />
              </a>
              <a href="#">
                <Instagram />
              </a>
              <a href="#">
                <MarkEmailUnreadOutlinedIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
