import React, { useState, useRef, useEffect, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { NavLink } from "react-router-dom";
import SkillsBar from "../Progress skill bar/Skillbar";
import './aboC.css'


import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import Roll from "react-reveal/Roll";

import Slide from "react-reveal/Slide";
export default function AboutComponents() {
  // Partticles
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      {/* About Section */}
      <div className="row" id="About">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 4,
                },
              },
            },
            particles: {
              color: {
                value: "#6d04c9",
              },
              links: {
                color: "#cc2b5e",
                distance: 100,
                enable: false,
                opacity: 0.2,
                width: 2,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "top",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 4,
                straight: true,
              },
              number: {
                density: {
                  enable: true,
                  area: 3500,
                },
                value: 80,
              },
              opacity: {
                value: 0.6,
              },
              shape: {
                type: "triangle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <div className="col-sm-12 col-md-6 col-lg-6" id="about-1">
          <div>
            <h1>
              {/* <span className="fs-4">About Me</span> */}
              <div className="row" id="abo">
                <Slide top>
                  <div id="abo-1">
                    <h1>About Me</h1>
                  </div>
                </Slide>
              </div>
              <Slide right>
                <span>I'm a Full Stack</span>

                <span className="sp-2">
                  web developer
                  <br />
                </span>
                <span>working from home</span>
              </Slide>
            </h1>
            <NavLink to="/about" className="btn btn-outline-info">
              Learn More
            </NavLink>
          </div>
        </div>
        <Bounce top>
          <div className="col-sm-12 col-md-6 col-lg-6" id="about-2">
            <SkillsBar />
          </div>
        </Bounce>
      </div>
    </>
  );
}
