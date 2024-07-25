import React, { useEffect, useRef, useState } from "react";
import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./Sequence";
import "./ScrollingCanvus1.css";
import { BsTranslate } from "react-icons/bs";
import gsap from "gsap";

function ScrollingCanvus1() {
  const ref = useRef();
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [overlayOpacity2nd, setOverlayOpacity2nd] = useState(0);

  const updateOverlays = (progress) => {
    if (progress > 0.1 && progress < 0.3) {
      setOverlayOpacity(1);
    } else {
      setOverlayOpacity(0);
    }

    if (progress > 0.7 && progress < 0.8) {
      setOverlayOpacity2nd(1);
    } else {
      setOverlayOpacity2nd(0);
    }
  };

  return (
    <div className="App" id="canvusScroller">
      <Controller>
        <Scene duration="500%" triggerHook="onLeave" pin>
          {(progress) => (
            <div style={{ height: "100vh", position: "relative" }}>
              <Sequence ref={ref} progress={progress} />
              <div
                className="text-overlay absolute md:top-[20%] top-[10%] md:left-[10%] left-[7%] md:max-w-md w-full text-white flex flex-col items-start justify-start "
                style={{
                  opacity: overlayOpacity,
                  transition: "opacity 0.5s ease",
                  textShadow: "2px 2px 0 #000, 4px 4px 0 #000, 6px 6px 0 #000, 8px 8px 0 #000",
                }}
              >
                <p className="text-3d text-[18px] text-[#59c3ff] font-bold mb-2">Built-in manual controls</p>
                <h1 className="text-3d md:text-[5rem] text-[3.5rem] font-bold uppercase flex flex-wrap md:leading-[5.5rem] leading-[3.7rem]">
                  <span>Every</span> <span>angle</span> <span>Covered</span>
                </h1>
              </div>
              <div
                className="text-overlay absolute top-[45%] left-[0%] w-full text-gray-300"
                style={{
                  opacity: overlayOpacity2nd,
                  transition: "opacity 0.5s ease",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                }}
              >
                <h1 className="md:text-[8rem] text-[3.3rem] font-bold uppercase leading-[3.7rem]">Ignite your passion
                </h1>
              </div>
              {updateOverlays(progress)}
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
}

export default ScrollingCanvus1;
