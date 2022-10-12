import React, { useState, cssOverride, useEffect, useRef } from "react";

import Aos from "aos";
import "../../../node_modules/aos/dist/aos.css";

import { NavLink } from "react-router-dom";
import BIRDS from "vanta/dist/vanta.halo.min";
import Footer from "../footer/Footer";

import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import ScrollToTop from "react-scroll-to-top";
import './terms.css'
export default function Terms() {
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
          <h1>Privacy Policy</h1>
        </div>
      </section>
      <div className="container-fluid bg-white">
        <div className="row" id="support">
          <h1 className="text-secondary fs-1">Privacy Policy</h1>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h4>Who I am?What?Why</h4>
            <h5>
              Our website address is:
              <NavLink to="/"> https://asikurpersonalPortfolio.com</NavLink> and it is
              owned by Me
            </h5>
            <h4>What personal data we collect and why we collect it</h4>
            <h4>
              <NavLink to="/">Comments</NavLink>
            </h4>
            <h5>
              When visitors leave comments on the site we collect the data shown in the
              comments form, and also the visitor’s IP address and browser user agent
              string to help spam detection. An anonymized string created from your email
              address (also called a hash) may be provided to the Gravatar service to see
              if you are using it. The Gravatar service privacy policy is available here:
              <NavLink to="/">https://asikurportfolio.com/support/</NavLink>. After
              approval of your comment, your profile picture is visible to the public in
              the context of your comment.
            </h5>
            <h4>Media</h4>
            <h5>
              If you upload images to the website, you should avoid uploading images with
              embedded location data (EXIF GPS) included. Visitors to the website can
              download and extract any location data from images on the website.
            </h5>
            <h4>Contact Forms</h4>
            <h5>
              We use Contact Form 7 plugin for a contact for. Information is received via
              email and stored there for 6 months without giving it for 3rd parties or
              using for marketing purposes. It is only there to provide answers to
              customer inquiries.
            </h5>
            <h4>Cookies</h4>
            <h5>
              If you leave a comment on our site you may opt-in to saving your name, email
              address and website in cookies. These are for your convenience so that you
              do not have to fill in your details again when you leave another comment.
              These cookies will last for one year. If you have an account and you log in
              to this site, we will set a temporary cookie to determine if your browser
              accepts cookies. This cookie contains no personal data and is discarded when
              you close your browser. When you log in, we will also set up several cookies
              to save your login information and your screen display choices. Login
              cookies last for two days, and screen options cookies last for a year. If
              you select “Remember Me”, your login will persist for two weeks. If you log
              out of your account, the login cookies will be removed. If you edit or
              publish an article, an additional cookie will be saved in your browser. This
              cookie includes no personal data and simply indicates the post ID of the
              article you just edited. It expires after 1 day.
            </h5>
            <h4>Who me share your data with</h4>
            <h5>
              The protection of your data is important to us. We may share your data with
              carefully selected and trusted third parties, including other companies in
              the Macat group and providers of services to us. We may share your data with
              law enforcement agencies and/or third parties if we are required, or we
              genuinely believe that we are required, to do so by law. Your data may be
              transferred to another company in the event we sell all or part of our
              business. We take all reasonable steps to ensure that third parties to which
              we share your data with agree to process that data only in ways that we
              permit them to and a way that complies with the law.
            </h5>
            <h4>Additional information</h4>
            <h5>
              We use an SSL certificate in order to encrypt any data sent between you and
              our server. All administrators of this website are required to use strong
              passwords in order to minimise any risk of unauthorised entry.
            </h5>
            <h4>What data breach procedures we have in place</h4>
            <h5>
              In the case of a data breach we will inform the Information Latvian “Datu
              valsts inspekcija” (DVI) within 72 hours of the suspected breach. When we
              know information about a breach, we will provide this to individuals
              affected, together with advice to help them protect themselves from its
              effects.
            </h5>
            <h4>What third parties we receive data from</h4>
            <h5>We don't receive any data from third parties.</h5>
            <h4>Industry regulatory disclosure requirements</h4>
            <h5>
              You have the right to lodge a complaint with theLatvian “Datu valsts
              inspekcija” (DVI) if you believe your personal information has been
              processed in a way that does not comply with the GDPR. You can do so by
              calling the DVI helpline on 67 22 31 31 or via their website
              http://www.dvi.gov.lv/lv/.
            </h5>
            <h4>What data breach procedures we have in place</h4>
            <h5>
              In the case of a data breach we will inform the Information Latvian “Datu
              valsts inspekcija” (DVI) within 72 hours of the suspected breach. When we
              know information about a breach, we will provide this to individuals
              affected, together with advice to help them protect themselves from its
              effects.
            </h5>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
