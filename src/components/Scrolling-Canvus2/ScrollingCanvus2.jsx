import React, { useRef , useState } from "react";
import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./Sequence";
import "./ScrollingCanvus2.css"

function ScrollingCanvus2() {
    const ref = useRef();
    const [overlayOpacity, setOverlayOpacity] = useState(0);
    const [overlayOpacity2nd, setOverlayOpacity2nd] = useState(0);

    const updateOverlays = (progress) => {
      if (progress > 0 && progress < 0.2) {
        setOverlayOpacity(1);
      } else {
        setOverlayOpacity(0);
      }
  
      if (progress > 0.3 && progress < 0.6) {
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
              <Sequence ref={ref} progress={progress}  />
              <div
                className="text-overlay absolute md:top-[50%] top-[10%] md:left-[7%] left-[7%] md:max-w-[40%] h-screen w-full text-white flex flex-col items-start justify-start z-[-1]"
                style={{
                  opacity: overlayOpacity,
                  transition: "opacity 0.5s ease",
                  textShadow: "2px 2px 0 #000, 4px 4px 0 #000, 6px 6px 0 #000, 8px 8px 0 #000",
                }}
              >
                <h1 className="md:text-[4rem] text-[3.5rem] font-bold uppercase flex flex-wrap md:leading-[5rem] leading-[3rem]">
                  FAST DATA READ /
                  <span>WRITE SPEEDS</span>
                </h1>
                <p className="text-[18px] text-[#59c3ff] font-bold mb-2">COMPATIBLE WITH UHS-II SD AND XQD MEMORY CARDS</p>
              </div>
              <div
                className="text-overlay absolute top-[25%] right-[10%] md:max-w-[40%] w-full text-gray-300  flex flex-col  items-start justify-start z-[-1]"
                style={{
                  opacity: overlayOpacity2nd,
                  transition: "opacity 0.5s ease",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                }}
              >
                <h1 className="text-3d md:text-[3rem] font-bold text-[3.3rem] uppercase leading-[3.7rem]">
                  SMOOTH AND COMFORTABLE OPERATION
                </h1>
                <p className="text-3d text-2xl font-[600] ml-[5%] opacity-[0.6]">TOUCH-OPERABLE, TILTING, 8-CM/3.2-IN.,</p>
                <p className="text-3d text-2xl font-[600] ml-[8%] opacity-[0.6]">2359K-DOT MONITOR</p>
              </div>
              {updateOverlays(progress)}
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
}

export default ScrollingCanvus2;
