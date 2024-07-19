import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import InstagreamCards from "./InstagreamCards";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function InstagramSection() {
  const ref = useRef(null);
  const mainRef = useRef(null);
  useGSAP(
    () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "30% 55%",
          end: "100% 50%",
          scrub: true,
          pin: true,
          // markers: true,
        },
      });
      t1.to(".instaSectionImgCont", {
        y: -400,
      });
      t1.to(".instaSectionImgCont", {
        rotate: 0,
        scale: 2,
      });
    },
    { scope: ref }
  );
  return (
    <div className="" ref={ref}>
      <div
        className="min-h-screen py-[5rem] w-[100%] overflow-y-hidden"
        ref={mainRef}
      >
        <p className="text-[#ffd900] text-center">Nikon Film</p>
        <p className="mt-[40px] text-center text-[5vw] text-white font-bold leading-[80%]">
          Get the best out of <br />
          our unique <br />
          Chemistry
        </p>
        <div className="flex justify-center p-[5rem]">
          <div className="instaSectionImgCont h-[900px] w-[900px] bg-white rotate-[-3deg] relative"></div>
        </div>
        <div className="flex justify-center">
          <p className="text-[2vw] text-white font-bold w-[1000px]">
            The I-2 shoots with next-level clarity and detail on Polaroid’s
            iconic square frame film, meaning you can do things with Polaroid’s
            unique film chemistry that you’ve never done before.
          </p>
        </div>
      </div>
      <div className="my-[10rem] ">
        <p className="text-[#fff018] font-bold text-center">
          Meet I-2 photographers
        </p>
        <p className="text-white text-[3vw] text-center font-bold leading-[90%] mt-[2rem]">
          The <br /> Imperfectionists
        </p>
      </div>
      <InstagreamCards  classn={"instaCard1"}/>
      <InstagreamCards  classn={"instaCard2"}/>
      <InstagreamCards  classn={"instaCard3"}/>
    </div>
  );
}

export default InstagramSection;
