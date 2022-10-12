import React from 'react'
import freelance from "../images/freelance.png";
import fiverr from "../images/fiverr.png";
import envato from "../images/envato.png";
import wordpress from "../images/wordpress.png";
import './base.css'
export default function BaseFlag() {
  return (
    <div>
      {/* Portflio2 */}
      <div className="container-fluid" id="count-con">
        <div className="row mt-5" id="portfolio">
          <div>
            <h1 className='hire'>Hire Me</h1>
          </div>
          <div
            className="col-sm-12 col-md-4 col-lg-3"
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center"
          >
            <div className="counter">
              <img src={freelance} alt="" />
              <h1>Freelancer.com</h1>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-4 col-lg-3"
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center"
          >
            <div className="counter">
              <img src={fiverr} alt="" />
              <h1>Fiverr.com</h1>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-4 col-lg-3"
            data-aos="zoom-out-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center"
          >
            <div className="counter">
              <img src={envato} alt="" />
              <h1>Envato.com</h1>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-4 col-lg-3"
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center"
          >
            <div className="counter">
              <img src={wordpress} alt="" />
              <h1>Wordpress.com</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
