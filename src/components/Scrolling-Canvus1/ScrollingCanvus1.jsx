import React, { useRef } from "react";
import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./Sequence";
import "./ScrollingCanvus1.css"

function ScrollingCanvus1() {
    const ref = useRef();
  return (
    <div className="App" id="canvusScroller">
      <Controller>
        <Scene duration="500%" triggerHook="onLeave" pin>
          {(progress) => (
            <div style={{ height: "100vh", position: "relative" }}>
              <Sequence ref={ref} progress={progress} />
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
}

export default ScrollingCanvus1;
