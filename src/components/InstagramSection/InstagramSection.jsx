import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import InstagreamCards from "./InstagreamCards";
import "./InstagramSection.css";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function InstagramSection() {
  const text = `The I-2 shoots with next-level clarity and detail on Polaroid’s
  iconic square frame film, meaning you can do things with
  Polaroid’s unique film chemistry that you’ve never d one before.`.split(" ");
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const ref = useRef(null);
  const mainRef = useRef(null);

  if (width < 768) {
    useEffect(() => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "0% 0%",
          end: "150% 50%",
          scrub: true,
          pin: true,
          // markers: true,
        },
      });
      t1.to(".instaSectionImgCont", {
        rotate: 0,
        scale: 1,
      });
      t1.from(".instasectionanimationtext", {
        opacity: 0,
        stagger:.1
      });
    }, []);
    return (
      <div className=" bg-transparent " ref={ref}>
        <div
          className="min-h-screen w-[100%]  pt-[4rem]"
          ref={mainRef}
        >
          <p className="text-[#ffd900] text-center  ">Nikon Film</p>
          <p className="mt-[40px] text-center text-[5vw] text-white font-bold leading-[80%] ">
            Get the best out of <br />
            our unique <br />
            Chemistry
          </p>
          <div className="flex justify-center p-[3rem]  w-[100vw]  overflow-x-hidden">
            <div className="z-[500] scale-[.7] instaSectionImgCont h-[500px] rotate-[-3deg] relative  flex flex-col items-center justify-center">
              <span className="InstaVideoHeading text-[5vw] font-extrabold text-white">
                The Beauty Of Varanasi
              </span>
              <video className="InstaVideo" autoPlay muted>
                <source
                  className="VideoSource"
                  src="src\assets\instavideo.mp4"
                  type="video/mp4"
                />
              </video>
              <span className="InstaVideoFooter text-[4vw] p-[1rem]">
                (vivid nuances of Varanasi as captured by #NikonCreator Kumar
                Gautam @kumaarphotography)
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="text-[3vw] text-white font-bold w-[90vw] ">
              {text.map((item, index) => {
                return <span className="instasectionanimationtext">{item} </span>;
              })}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    useEffect(() => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "30% 55%",
          end: "150% 50%",
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
    }, []);
    return (
      <div className=" bg-transparent" ref={ref}>
        <div
          className="min-h-screen py-[5rem] w-[100%] overflow-y-hidden"
          ref={mainRef}
        >
          <p className="text-[#ffd900] text-center  ">Nikon Film</p>
          <p className="mt-[40px] text-center text-[5vw] text-white font-bold leading-[80%] ">
            Get the best out of <br />
            our unique <br />
            Chemistry
          </p>
          <div className="flex justify-center p-[5rem]">
            <div className="instaSectionImgCont h-[900px] w-[900px] rotate-[-3deg] relative  flex flex-col items-center justify-center">
              {/* <span className="InstaVideoHeading">The Beauty Of Varanasi</span> */}
              <video className="InstaVideo" autoPlay muted>
                <source
                  className="VideoSource"
                  src="src\assets\instavideo.mp4"
                  type="video/mp4"
                />
              </video>
              {/* <span className="InstaVideoFooter">
              The Beauty Of Varanasi
                (vivid nuances of Varanasi as captured by #NikonCreator Kumar
                Gautam @kumaarphotography)
              </span> */}
            </div>
          </div>
          <div className="flex justify-center">
            <p className="text-[2vw] text-white font-bold w-[1000px] ">
              The I-2 shoots with next-level clarity and detail on Polaroid’s
              iconic square frame film, meaning you can do things with
              Polaroid’s unique film chemistry that you’ve never done before.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default InstagramSection;
