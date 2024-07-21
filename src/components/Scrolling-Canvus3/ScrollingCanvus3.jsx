import React, { useEffect, useRef, useState } from "react";
import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./Sequence";
import "./ScrollingCanvus3.css";

function ScrollingCanvus3() {
  const ref = useRef();
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [overlayOpacity2nd, setOverlayOpacity2nd] = useState(0);

  const updateOverlays = (progress) => {
    if (progress > 0 && progress < 0.2) {
      setOverlayOpacity(1);
    } else {
      setOverlayOpacity(0);
    }
  };

  return (
    <div className="App" id="canvusScroller">
      <Controller>
        <Scene duration="500%" triggerHook="onLeave" pin>
          {(progress) => (
            <div style={{ height: "100vh", position: "relative",width:"100vw" }}>
              <Sequence ref={ref} progress={progress} />
              <div
                className="text-overlay w-[60%] absolute top-[10%] left-0 text-white flex flex-col items-center ml-[22%] leading-[3.5rem]"
                style={{
                  opacity: overlayOpacity,
                  transition: "opacity 0.5s ease",
                  textShadow: "2px 2px 0 #000, 4px 4px 0 #000, 6px 6px 0 #000, 8px 8px 0 #000",
                }}
              >
                <h1 className="text-[3rem] font-bold uppercase flex flex-wrap gap-[0.5rem]">
                The Pinnacle of Professional Photography
                </h1>
                <p className="text-[18px] text-[#59c3ff] font-bold"> Capture stunning detail with high-resolution images.</p>
              </div>
              {updateOverlays(progress)}
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
}

export default ScrollingCanvus3;
