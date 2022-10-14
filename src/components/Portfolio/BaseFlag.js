import React from 'react'
import freelance from "../images/freelance.png";
import fiverr from "../images/fiverr.png";
import envato from "../images/envato.png";
import wordpress from "../images/wordpress.png";
import './base.css'
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import Roll from "react-reveal/Roll";
import Slide from "react-reveal/Slide";
export default function BaseFlag() {
  return (
    <div>
      {/* Portflio2 */}
      <div className="container-fluid" id="count-con">
        <div className="row mt-5" id="portfolio">
          <Bounce top>
            <div>
              <h1 className="hire">Hire Me</h1>
            </div>
          </Bounce>
          <Fade left>
            <div className="col-sm-12 col-md-4 col-lg-3">
              <div className="counter">
                <img src={freelance} alt="" />
                <h1>Freelancer.com</h1>
              </div>
            </div>
          </Fade>
          <Bounce top>
            <div className="col-sm-12 col-md-4 col-lg-3">
              <div className="counter">
                <img src={fiverr} alt="" />
                <h1>Fiverr.com</h1>
              </div>
            </div>
          </Bounce>
          <Bounce bottom>
            <div className="col-sm-12 col-md-4 col-lg-3">
              <div className="counter">
                <img src={envato} alt="" />
                <h1>Envato.com</h1>
              </div>
            </div>
          </Bounce>
          <Slide right>
            <div className="col-sm-12 col-md-4 col-lg-3">
              <div className="counter">
                <img src={wordpress} alt="" />
                <h1>Wordpress.com</h1>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}
