import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
//some links add index.html
import "./index.css";
import logo from "./font.png";

const Countdown = () => {
  

  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
           backgroundColor: 0x031d26
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section className="Countdown" id="#Countdown" ref={myRef}>
      <section className="container">
       
          <div>
            <h1 style={{fontSize:"6em"}}>I Am Asikur</h1>
          </div>
         
       
      </section>
    </section>
  );
};

export default Countdown;
