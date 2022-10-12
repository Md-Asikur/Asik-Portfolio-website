import React, { Component } from "react";
import Slider from "react-slick";
import man from '../images/man2.jpg'
import man1 from "../images/man1.jpg";
import ma2 from "../images/man3.jpg";
import hero1 from "../images/hero.png";
import hero2 from "../images/hero2.png";
import hero3 from "../images/hero3.png";
import './slider.css'
import Facebook from "@mui/icons-material/Facebook";
import YouTube from "@mui/icons-material/YouTube";
import Instagram from "@mui/icons-material/Instagram";

export default class AutoPlayMethods extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3 className="text-white">Great Service</h3>
            <p className="text-white">
              Deserunt sint voluptate minim aliquip elit exercitation proident voluptate.
              Et amet in ad eu laborum. Nostrud irure sit est deserunt cupidatat amet eu
              cillum ea nostrud. Enim minim sint fugiat excepteur consectetur cillum
              labore excepteur. Do eu et labore nulla aute laboris eu. Lorem est Lorem
              veniam adipisicing consectetur nostrud commodo deserunt.
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src={hero1}
                alt=""
                style={{
                  height: "80px",
                  width: "80px",
                  borderRadius: "50%",
                  display: "block",
                  margin: "auto",
                }}
              />
              <h4 className="text-white">
                Hussain Ali
                <br />
                <span className="career">
                  <Facebook id="svg" />
                  software engineer google
                </span>
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-white">Nice Work</h3>
            <p className="text-white">
              Deserunt sint voluptate minim aliquip elit exercitation proident voluptate.
              Et amet in ad eu laborum. Nostrud irure sit est deserunt cupidatat amet eu
              cillum ea nostrud. Enim minim sint fugiat excepteur consectetur cillum
              labore excepteur. Do eu et labore nulla aute laboris eu. Lorem est Lorem
              veniam adipisicing consectetur nostrud commodo deserunt.
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src={hero2}
                alt=""
                style={{
                  height: "80px",
                  width: "80px",
                  borderRadius: "50%",
                  display: "block",
                  margin: "auto",
                }}
              />
              <h4 className="text-white">
                Rahman
                <br />
                <span className="career">
                  <YouTube id="svg" />
                  software engineer Twitter
                </span>
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-white">Fastest Delivery</h3>
            <p className="text-white">
              Deserunt sint voluptate minim aliquip elit exercitation proident voluptate.
              Et amet in ad eu laborum. Nostrud irure sit est deserunt cupidatat amet eu
              cillum ea nostrud. Enim minim sint fugiat excepteur consectetur cillum
              labore excepteur. Do eu et labore nulla aute laboris eu. Lorem est Lorem
              veniam adipisicing consectetur nostrud commodo deserunt.
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src={hero3}
                alt=""
                style={{
                  height: "80px",
                  width: "80px",
                  borderRadius: "50%",
                  display: "block",
                  margin: "auto",
                }}
              />
              <h4 className="text-white">
                Ali Raihan
                <br />
                <span className="career">
                  <Instagram id="svg" />
                  software engineer facebook
                </span>
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-white">Clean Work</h3>
            <p className="text-white">
              Deserunt sint voluptate minim aliquip elit exercitation proident voluptate.
              Et amet in ad eu laborum. Nostrud irure sit est deserunt cupidatat amet eu
              cillum ea nostrud. Enim minim sint fugiat excepteur consectetur cillum
              labore excepteur. Do eu et labore nulla aute laboris eu. Lorem est Lorem
              veniam adipisicing consectetur nostrud commodo deserunt.
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src={hero1}
                alt=""
                style={{
                  height: "80px",
                  width: "80px",
                  borderRadius: "50%",
                  display: "block",
                  margin: "auto",
                }}
              />
              <h4 className="text-white">
                Muhammad Ismail
                <br />
                <span className="career">
                  <Facebook id="svg" />
                  software engineer youtube
                </span>
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-white">Good Present</h3>
            <p className="text-white">
              Deserunt sint voluptate minim aliquip elit exercitation proident voluptate.
              Et amet in ad eu laborum. Nostrud irure sit est deserunt cupidatat amet eu
              cillum ea nostrud. Enim minim sint fugiat excepteur consectetur cillum
              labore excepteur. Do eu et labore nulla aute laboris eu. Lorem est Lorem
              veniam adipisicing consectetur nostrud commodo deserunt.
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src={hero2}
                alt=""
                style={{
                  height: "80px",
                  width: "80px",
                  borderRadius: "50%",
                  display: "block",
                  margin: "auto",
                }}
              />
              <h4 className="text-white">
                Zinia Afrin
                <br />
                <span className="career">
                  <Facebook id="svg" />
                  software engineer Netfilix
                </span>
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-white">Best Work</h3>
            <p className="text-white">
              Deserunt sint voluptate minim aliquip elit exercitation proident voluptate.
              Et amet in ad eu laborum. Nostrud irure sit est deserunt cupidatat amet eu
              cillum ea nostrud. Enim minim sint fugiat excepteur consectetur cillum
              labore excepteur. Do eu et labore nulla aute laboris eu. Lorem est Lorem
              veniam adipisicing consectetur nostrud commodo deserunt.
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src={hero3}
                alt=""
                style={{
                  height: "80px",
                  width: "80px",
                  borderRadius: "50%",
                  display: "block",
                  margin: "auto",
                }}
              />
              <h4 className="text-white">
                Md Sagor
                <br />
                <span className="career">
                  <Instagram id="svg" />
                  software engineer Instragram
                </span>
              </h4>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}