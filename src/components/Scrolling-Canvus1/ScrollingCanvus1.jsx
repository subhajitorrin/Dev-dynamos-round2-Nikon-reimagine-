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

    if (progress > 0.7 && progress < 1.0) {
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
                className="text-overlay absolute top-[20%] left-[10%] max-w-md text-white flex flex-col items-start justify-start"
                style={{
                  opacity: overlayOpacity,
                  transition: "opacity 0.5s ease",
                  textShadow: "2px 2px 0 #000, 4px 4px 0 #000, 6px 6px 0 #000, 8px 8px 0 #000",
                }}
              >
                <p className="text-3d text-[18px] text-[#59c3ff] font-bold">Built-in manual controls</p>
                <h1 className="text-3d text-[5rem] font-bold uppercase flex flex-wrap leading-[5.5rem]">
                  <span>Every</span> <span>angle</span> <span>Covered</span>
                </h1>
              </div>
              <div
                className="text-overlay absolute bottom-[20%] right-[10%] max-w-md text-white text-right"
                style={{
                  opacity: overlayOpacity2nd,
                  transition: "opacity 0.5s ease",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                }}
              >
                <h1 className="text-[5rem] font-bold uppercase leading-[5.5rem] mb-4">Ignite your passion.
                </h1>
                <p className="text-lg text-[#1e7ed8] overlay2">Enter a new dimension of Nikon Imaging with Z Series mirrorless cameras,
                created from decades of refining camera design and performance.</p>
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