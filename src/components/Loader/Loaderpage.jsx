import React, { useState } from "react";
import { useEffect } from "react";
import "./LoaderPage.css";
import CameraSvg from "./DSLR_Camera_REMIX_By_DG-RA.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonComponent from "../AccessoryComponent/spacebutton/ButtonComponent";
function LoaderPage() {
  const [counter, setcounter] = useState(0);
  const [islaoding, setislaoding] = useState(true);
  // const [removeLoaderScreen, setremoveLoaderScreen] = useState(false);

  useEffect(() => {
    if (counter < 50) {
      setTimeout(() => {
        setcounter((prev) => prev + 1);
      }, 30);
    } else if (counter < 70) {
      setTimeout(() => {
        setcounter((prev) => prev + 1);
      }, 60);
    } else if (counter < 100) {
      setTimeout(() => {
        setcounter((prev) => prev + 1);
      }, 40);
    }
    if (counter === 100) {
      setislaoding(false);
    }
  }, [counter]);

  const handleClick = () => {
    return () => {
      gsap.to("#mainloadercontainer", {
        opacity: 0,
        pointerEvents: "none",
        onComplete: () => {
          window.scrollTo({
            top: 300,
            behavior: "smooth",
          });
        },
      });
    };
  };

  return (
    <>
      {true && (
        <div
          id="mainloadercontainer"
          className=" loadCon w-screen h-screen z-[9999999] text-white fixed flex flex-col items-center justify-center bg-[#010413] gap-4"
        >
          <div className="flex items-center justify-center gap-[1rem] relative top-[33px]">
            <span className="golos LoaderNik">NIK</span>
            <img className="LoaderImg" src={CameraSvg} alt=""></img>
            <span className="golos LoaderOn">N</span>
            <div className="space"></div>
          </div>
          <div className="h-[50px] flex flex-col gap-[10px] items-center w-full relative top-[5%] ">
            {islaoding ? (
              <>
                <p>{counter}%</p>
                <div className=" h-[7px] w-[60%] rounded-[5px]">
                  <div
                    className="h-full bg-white transition ease-linear transition-300"
                    style={{ width: `${counter}%` }}
                  ></div>
                </div>
              </>
            ) : (
              <div style={{ opacity: islaoding ? "0" : "1" }} className="">
                <button
                  className="textaniorrin px-[2rem] py-[10px] border border-white rounded-[10px] font-[700]"
                  onClick={() => {
                    gsap.to("#mainloadercontainer", {
                      opacity: 0,
                      pointerEvents: "none",
                    });
                  }}
                >
                  Enter Experience
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default LoaderPage;
