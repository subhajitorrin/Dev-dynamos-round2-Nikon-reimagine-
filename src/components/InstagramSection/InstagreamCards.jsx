import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function InstagreamCards({ src }) {
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
  const boxRefs = useRef([]);

  if (width > 768) {
    useEffect(() => {
      boxRefs.current.forEach((element) => {
        gsap.from(element, {
          rotate: 0,
          left: 0,
          scrollTrigger: {
            trigger: element,
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
            // markers: true,
          },
        });
      });
    }, []);

    return (
      <div className="" ref={ref}>
        <div className="h-screen flex px-[5vw] " ref={mainRef}>
          <div className="w-[50%] flex items-center justify-center ">
            <div className="relative w-[650px] h-[800px]">
              <div
                ref={(el) => (boxRefs.current[0] = el)}
                className={`absolute h-[550px] w-[400px]  bg-[red] z-[100] `}
                style={{boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)'}}
              >
                <img
                  src={src}
                  alt=""
                  width={"100%"}
                  height={"100%"}
                  className="object-cover w-full h-full "
                />
              </div>
              <div
                ref={(el) => (boxRefs.current[1] = el)}
                className={`absolute h-[520px] top-[20px] w-[400px] rotate-[3deg] left-[70px] bg-[blue] z-[99]`}
              >
                <img
                  src={src}
                  alt=""
                  width={"100%"}
                  height={"100%"}
                  className="object-cover w-full h-full "
                />
              </div>
              <div
                ref={(el) => (boxRefs.current[2] = el)}
                className={`absolute h-[520px] top-[20px] w-[400px]  rotate-[-3deg] left-[-70px] bg-[yellow] z-[98]`}
              >
                <img
                  src={src}
                  alt=""
                  width={"100%"}
                  height={"100%"}
                  className="object-cover w-full h-full "
                />
              </div>
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
  } else {
    useEffect(() => {
      boxRefs.current.forEach((element) => {
        gsap.from(element, {
          rotate: 0,
          left: 0,
          top: 0,
          scrollTrigger: {
            trigger: element,
            start: "top 50%",
            end: "80% 50%",
            scrub: true,
            // markers: true,
          },
        });
      });
    }, []);

    return (
      <div className="" ref={ref}>
        <div
          className="h-screen flex px-[5vw] flex-col  justify-center  gap-[5rem]"
          ref={mainRef}
        >
          <div className="flex items-center justify-center w-[100%]">
            <div className="text-white text-center flex flex-col gap-[1.5rem]">
              <p className="text-[blue] text-[1vw]">In Focus</p>
              <p className="font-bold text-[4vw] leading-[90%]">
                A breaker of forms, Coco Capitán’s <br />
                craft is moored in <br /> chaos and unexpected beauty.
              </p>
              <p className="text-[3vw]">See her I-2 story</p>
            </div>
          </div>
          <div className="w-[100%] flex items-center justify-center ">
            <div className="relative w-[100%] h-[600px]">
              <div
                ref={(el) => (boxRefs.current[0] = el)}
                className={`absolute h-[500px] w-[300px]  bg-[red] z-[100] left-[50px]`}
              >
                <img
                  src={src}
                  alt=""
                  width={"100%"}
                  height={"100%"}
                  className="object-cover w-full h-full "
                />
              </div>
              <div
                ref={(el) => (boxRefs.current[1] = el)}
                className={`absolute h-[500px] w-[300px] top-[-30px] rotate-[3deg] left-[70px] bg-[blue] z-[99]`}
              >
                <img
                  src={src}
                  alt=""
                  width={"100%"}
                  height={"100%"}
                  className="object-cover w-full h-full "
                />
              </div>
              <div
                ref={(el) => (boxRefs.current[2] = el)}
                className={`absolute h-[500px] w-[300px] top-[40px]  rotate-[-3deg] left-[10px] bg-[yellow] z-[98]`}
              >
                <img
                  src={src}
                  alt=""
                  width={"100%"}
                  height={"100%"}
                  className="object-cover w-full h-full "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InstagreamCards;
