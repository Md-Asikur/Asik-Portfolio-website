import React, { useState, useRef, useEffect, useCallback } from "react";
import "./portC.css";
import Happy from "../images/happiness.png";
import code from "../images/coding.png";
import tea from "../images/tea.png";
import reveiws from "../images/rate.png";

import Aos from "aos";
import CountUp from "react-countup";
import Trigger from "react-scroll-trigger";

import Filter from "../Filter Method 2/Filter";

import AutoPlayMethods from "../Slider/Slider";
import SignIn from "../Register copy/Register";

import BaseFlag from "./BaseFlag";
export default function PortComponents() {
  const [counter, setCounter] = useState(false);
  
  //aos
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Portflio */}
      <div className="container-fluid" id="count-con">
        <div className="row mt-5" id="portfolio">
          <div
            className="col-sm-12 col-md-4 col-lg-3"
            
            
          >
            <div className="counter">
              <img src={Happy} alt="" />
              <Trigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                <h1>
                  {counter && <CountUp start={0} end={2500} duration={3} delay={0} />}
                </h1>
                <h2> Happy Clients</h2>
              </Trigger>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-4 col-lg-3"
           
           
          >
            <div className="counter">
              <img src={tea} alt="" />
              <Trigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                <h1>
                  {counter && <CountUp start={0} end={10000} duration={4} delay={0} />}
                </h1>
                <h2> Cup Of Coffee</h2>
              </Trigger>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-4 col-lg-3"
           
          >
            <div className="counter">
              <img src={reveiws} alt="" />
              <Trigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                <h1>
                  {counter && <CountUp start={0} end={5000} duration={3} delay={0} />}
                </h1>
                <h2>Client Review</h2>
              </Trigger>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-4 col-lg-3"
           
          >
            <div className="counter">
              <img src={code} alt="" />
              <Trigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                <h1>
                  {counter && <CountUp start={0} end={50000} duration={5} delay={0} />}
                </h1>
                <h2> Line of Codes</h2>
              </Trigger>
            </div>
          </div>
        </div>
      </div>
      <div className="row" id="port">
        <div id="Portfolio">
          <h1>Portfolio</h1>
        </div>
        <div id="Portfolio2">
          <Filter />
        </div>
      </div>
      <div id="testimonials" className="row">
        <div id="testi-text" className="col-sm-12 col-md-12 col-lg-12">
          <h3>Testimonials</h3>
          <h1>
            <span>Reviews</span> <span>By</span>
            <span>Clients</span>
          </h1>
        </div>
        <div id="sliders" className="col-sm-12 col-md-12 col-lg-12 mt-5 p-5">
          <AutoPlayMethods />
        </div>
      </div>
      {/* Portflio2 */}
      <BaseFlag/>
      <div className="row" id="cont">
        <div id="Contact">
          <h1>Contact</h1>
        </div>
        <div id="Contact2">
          <SignIn />
        </div>
      </div>
    </>
  );
}
