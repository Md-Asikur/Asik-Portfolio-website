import React from 'react'
import node from "../images/node.png";
import webdesign from "../images/responsive.png";
import uiux from "../images/apps.png";
import database from "../images/database.png";
import { NavLink } from 'react-router-dom';
import reacticon from "../images/react.png";
import timely from "../images/timelywork.png";
export default function ServComponents() {
  return (
    <div>
      <div className="row" id="servicess">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <h1>Services</h1>
          <h3>What I Do?</h3>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="center"
        >
          <div id="serv-card">
            <div className="serv-logo">
              <img src={reacticon} alt="" />
            </div>
            <div className="serv-body">
              <h2 className="text-white fs-3">Front-end React</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                suscipit nisi vitae feugiat vestibulum.
                <NavLink
                  to="/about"
                  className="text-warning text-decoration-none fs-5 p-2"
                >
                  Read More...
                </NavLink>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="center"
        >
          <div id="serv-card">
            <div className="serv-logo">
              <img src={node} alt="" />
            </div>
            <div className="serv-body">
              <h2 className="text-white fs-3">Expert Node And Express</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                suscipit nisi vitae feugiat vestibulum.
                <NavLink
                  to="/about"
                  className="text-warning text-decoration-none fs-5 p-2"
                >
                  Read More...
                </NavLink>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-4"
         
        >
          <div id="serv-card">
            <div className="serv-logo">
              <img src={webdesign} alt="" />
            </div>
            <div className="serv-body">
              <h2 className="text-white fs-3">Design With Responsive</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                suscipit nisi vitae feugiat vestibulum.
                <NavLink
                  to="/about"
                  className="text-warning text-decoration-none fs-5 p-2"
                >
                  Read More...
                </NavLink>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="center"
        >
          <div id="serv-card">
            <div className="serv-logo">
              <img src={timely} alt="" />
            </div>
            <div className="serv-body">
              <h2 className="text-white fs-3">Delivery Ontime</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                suscipit nisi vitae feugiat vestibulum.
                <NavLink
                  to="/about"
                  className="text-warning text-decoration-none fs-5 p-2"
                >
                  Read More...
                </NavLink>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-anchor-placement="center"
        >
          <div id="serv-card">
            <div className="serv-logo">
              <img src={database} alt="" />
            </div>
            <div className="serv-body">
              <h2 className="text-white fs-3">Expert In Mongodb</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                suscipit nisi vitae feugiat vestibulum.
                <NavLink
                  to="/about"
                  className="text-warning text-decoration-none fs-5 p-2"
                >
                  Read More...
                </NavLink>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-4"
         
        >
          <div id="serv-card">
            <div className="serv-logo">
              <img src={uiux} alt="" />
            </div>
            <div className="serv-body">
              <h2 className="text-white fs-3">Ui/Ux Designer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                suscipit nisi vitae feugiat vestibulum.
                <NavLink
                  to="/about"
                  className="text-warning text-decoration-none fs-5 p-2"
                >
                  Read More...
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
