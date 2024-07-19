import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function InstagreamCards({classn}) {
    // console.log(classn);
  const ref = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "40% 80%",
        end: "100% 50%",
        scrub: true,
        // markers: true,
      },
    });
    t1.from(`.${classn}`, {
      rotate: 0,
      left: 0,
    });

    return () => {
      t1.kill();
    };
  }, []);
  return (
    <div className="" ref={ref}>
      <div className="h-screen flex px-[5vw]" ref={mainRef}>
        <div className="w-[50%] flex items-center justify-center ">
          <div className="relative w-[650px] h-[800px]">
            <div
              className={`${classn} absolute h-[750px] w-[600px]  bg-[red] z-[100]`}
            ></div>
            <div
              className={`${classn} absolute h-[720px] top-[20px] w-[600px] rotate-[3deg] left-[70px] bg-[blue] z-[99]`}
            ></div>
            <div
              className={`${classn} absolute h-[720px] top-[20px] w-[600px]  rotate-[-3deg] left-[-70px] bg-[yellow] z-[98]`}
            ></div>
          </div>
        </div>
        <div className="flex items-center justify-center w-[50%]">
          <div className="text-white text-center flex flex-col gap-[1.5rem]">
            <p className="text-[blue] text-[1vw]">In Focus</p>
            <p className="font-bold text-[1.5vw] leading-[90%]">
              A breaker of forms, Coco Capitán’s <br />
              craft is moored in <br /> chaos and unexpected beauty.
            </p>
            <p className="text-[1vw]">See her I-2 story</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstagreamCards;
