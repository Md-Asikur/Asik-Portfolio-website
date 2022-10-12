import React, { useState, cssOverride, useEffect, useRef } from "react";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "../../../node_modules/aos/dist/aos.css";
import BIRDS from "vanta/dist/vanta.halo.min";
import Footer from "../footer/Footer";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import ScrollToTop from "react-scroll-to-top";
const Login1 = (props) => {
  // VAnta
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
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const loginUser = async (e) => {
    e.preventDefault();
    setError(true);

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,

        password,
      }),
    });
    const data = await res.json();
    if (data.status === 400 || !data) {
      window.alert("Invalid SignIn");
      console.log("Invalid SignIn");
    } else if (data.status === 200) {
      //   window.alert("Successfully SignIn");
      console.log("Successfully SignIn");
      navigate("/");
    }
  };
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
          <h1>SIGN IN</h1>
          <h4 className="text-center fs-1">Stay With Me</h4>
        </div>
      </section>

      <div id="log" className="mt-5">
        <form method="POST" action="/">
          <h2 className="text-white">Signin Now</h2>
          <label> Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            className="btn btn-outline-danger text-white fs-5"
          />
          {error && !email && <span className="sp">Enter Valid Email</span>}
          <label> Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            className="btn btn-outline-warning text-white fs-5"
          />
          {error && !password && <span className="sp">Enter Valid Password</span>}
          <input
            type="submit"
            name="signin"
            value="Login"
            onClick={loginUser}
            className="btn btn-outline-warning text-white d-block mx-auto mt-3"
          />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login1;
