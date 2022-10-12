

import React, { useState, cssOverride, useEffect, useRef } from "react";
import "./blog.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Aos from "aos";
import "../../../node_modules/aos/dist/aos.css";

import post from './Post.json'
import { NavLink } from "react-router-dom";
import BIRDS from "vanta/dist/vanta.halo.min";
import Footer from "../footer/Footer";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import ScrollToTop from "react-scroll-to-top";
export default function Blog() {
 

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
          <h1>My Latest Post</h1>
          <h4>TIPS, INSIGHTS, AND BEST PRACTICES ABOUT WEB DESIGN AND DEVELOPPMENT</h4>
        </div>
      </section>

      {/* <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
                 
        </div>
      </div> */}
      <div className="galleryContainers">
        {post.map((item) => (
          <div
            key={item.id}
            className="galleryItems"
            data-aos="zoom-in"
            data-aos-easing="ease-in-cubic"
            data-aos-duration="2000"
            data-aos-anchor-placement="center"
          >
            <Card key={item.id} style={{ backgroundColor: "white" }}>
              <Card.Img variant="top" src={item.IMAGE} />
              <Card.Body>
                <Card.Title>
                  <NavLink to="/">{item.title}</NavLink>
                </Card.Title>
                <Card.Text className="text-black" id="text-p">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
                <Button variant="info">{item.BTN}</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

