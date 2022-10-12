import React, { useEffect,useState,useRef } from "react";
import "./services.css";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import AppSettingsAltOutlinedIcon from "@mui/icons-material/AppSettingsAltOutlined";
import DeveloperBoard from "@mui/icons-material/DeveloperBoard";
import Aos from "aos";
import "../../../node_modules/aos/dist/aos.css";
import CountUp from "react-countup";
import Trigger from "react-scroll-trigger";
import Footer from "../footer/Footer";
import BIRDS from "vanta/dist/vanta.halo.min";
import ServComponents from "./ServComponents";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import ScrollToTop from "react-scroll-to-top";
import BaseFlag from "../Portfolio/BaseFlag";
const Services = (props) => {
  const[counter,setCounter]=useState(false)
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
          <h1>Services</h1>
          <h4>
            At about this time of year, some months after New Year’s resolutions have been
            made and kept, or made and neglected.
          </h4>
        </div>
      </section>
      {/* main services */}
      <ServComponents />
     
      <BaseFlag />
      <div id="services" className="row">
        <div
          className="col-sm-12 col-md-12 col-lg-12 text-center"
          data-aos="zoom-in-right"
        >
          <h1 className="text-white">My Offered Services</h1>
          <p>
            At about this time of year, some months after New Year’s resolutions have been
            made and kept,
            <br /> or made and neglected.
          </p>
        </div>

        <div
          className="col-sm-12 col-md-6 col-lg-4"
          id="serv-mt"
          data-aos="zoom-out-left"
        >
          <div>
            <h1>
              <DesignServicesIcon id="icon" />
            </h1>
          </div>
          <div id="serv-body">
            <a href="#">
              <h1>Web Design</h1>
            </a>
            <p>
              “It is not because things are difficult that we do not dare; it is because
              we do not dare that they are difficult.”
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          id="serv-mt"
          data-aos="zoom-in-right"
        >
          <div>
            <h1>
              <DeveloperBoard id="icon" />
            </h1>
          </div>
          <div id="serv-body">
            <a href="#">
              <h1>Web Development</h1>
            </a>
            <p>
              “It is not because things are difficult that we do not dare; it is because
              we do not dare that they are difficult.”
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4" id="serv-mt" data-aos="zoom-in-left">
          <div>
            <h1>
              <CameraAltOutlinedIcon id="icon" />
            </h1>
          </div>
          <div id="serv-body">
            <a href="#">
              <h1>Photography</h1>
            </a>
            <p>
              “It is not because things are difficult that we do not dare; it is because
              we do not dare that they are difficult.”
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          id="serv-mt"
          data-aos="zoom-in-right"
        >
          <div>
            <h1>
              <NoteAltOutlinedIcon id="icon" />
            </h1>
          </div>
          <div id="serv-body">
            <a href="#">
              <h1>Cliping Path</h1>
            </a>
            <p>
              “It is not because things are difficult that we do not dare; it is because
              we do not dare that they are difficult.”
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          id="serv-mt"
          data-aos="zoom-in-right"
        >
          <div>
            <h1>
              <AppSettingsAltOutlinedIcon id="icon" />
            </h1>
          </div>
          <div id="serv-body">
            <a href="#">
              <h1>Apps Builder</h1>
            </a>
            <p>
              “It is not because things are difficult that we do not dare; it is because
              we do not dare that they are difficult.”
            </p>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          id="serv-mt"
          data-aos="zoom-out-left"
        >
          <div>
            <h1>
              <RocketLaunchOutlinedIcon id="icon" />
            </h1>
          </div>
          <div id="serv-body">
            <a href="#">
              <h1>Graphics Design</h1>
            </a>
            <p>
              “It is not because things are difficult that we do not dare; it is because
              we do not dare that they are difficult.”
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}; 
export default Services;
