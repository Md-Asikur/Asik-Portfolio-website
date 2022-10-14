import React from 'react'
import node from "../images/node.png";
import webdesign from "../images/responsive.png";
import uiux from "../images/apps.png";
import database from "../images/database.png";
import { NavLink } from 'react-router-dom';
import reacticon from "../images/react.png";
import timely from "../images/timelywork.png";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import Roll from "react-reveal/Roll";
import Slide from "react-reveal/Slide";
export default function ServComponents() {
  return (
    <div>
      <div className="row" id="servicess">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <Slide bottom>
            <h1>Services</h1>
            <h3>What I Do?</h3>
          </Slide>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          <Slide left>
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
          </Slide>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          <Bounce bottom>
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
          </Bounce>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          <Slide right>
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
          </Slide>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          <Bounce left>
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
          </Bounce>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          <Roll top>
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
          </Roll>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          <Slide right>
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
          </Slide>
        </div>
      </div>
    </div>
  );
}
