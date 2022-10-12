import React, { useState, useRef, useEffect, useCallback } from "react";
import "./home.css";
import hero from "../images/hero3.png";
import Typewriter from "typewriter-effect";
import { NavLink } from "react-router-dom";
import BIRDS from "vanta/dist/vanta.birds.min";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../../../node_modules/aos/dist/aos.css";
import SkillsBar from "../Progress skill bar/Skillbar"; //Nessesary
import Aos from "aos";
import Footer from "../footer/Footer";
import ServComponents from "../services copy/ServComponents";
import AboutComponents from "../about/AboutComponents";
import PortComponents from "../Portfolio/PortComponents";

export default function Home() {
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

  //aos
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      
      <section className="Countdown" id="#Countdown" ref={myRef}>
        <section className="container-fluids"></section>
        <div className="hero-inner-img">
          <img src={hero} alt="" />
        </div>
        <div className="hero-content">
          <h6>Hi Welcome</h6>
          <h1>
            <span>I</span>’m <span>Asikur</span>
          </h1>
          <div>
            <h4>
              <Typewriter
                options={{
                  strings: ["Success Freelancer", "Web Designer", "Web Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
            <h5 className="text-uppercase">
              I <span>Create</span> Thousands of <span>Website</span>
            </h5>
          </div>

          <nav>
            <NavLink>
              <FacebookIcon id="material" />
            </NavLink>
            <NavLink>
              <TwitterIcon id="material" />
            </NavLink>
            <NavLink>
              <InstagramIcon id="material" />
            </NavLink>
          </nav>
        </div>
      </section>
      {/* About Section */}
      <AboutComponents />
      {/* Services */}
      <ServComponents />
      {/* Portfolio */}
      <PortComponents />
      {/* footer */}
      <Footer />
    </>
  );
}
