import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
// import nikonimg from "../../assets/navcamera1.png";
import { FiInstagram } from "react-icons/fi";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";

const nikonimg =
  "https://res.cloudinary.com/difxhccup/image/upload/v1721900190/navcamera1_wpirdv.webp";

function Navbar({ scroll }) {
  const [isNavActive, setIsNavActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleresize() {
      setWidth(window.innerWidth);
    }
    document.addEventListener("resize", handleresize);
    return () => {
      document.removeEventListener("resize", handleresize);
    };
  }, []);

  useEffect(() => {
    handleNavAnimation();
  }, [isNavActive]);

  function handleNavAnimation() {
    if (isNavActive) {
      gsap.to(".navslides", {
        top: "0%",
        duration: 0.5,
        stagger: 0.1,
      });
      gsap.to(".navinner", {
        opacity: 1,
        delay: 0.5,
        pointerEvents: "auto",
      });
    } else {
      gsap.to(".navslides", {
        top: "-100%",
        duration: 0.5,
        stagger: 0.1,
      });
      gsap.to(".navinner", {
        opacity: 0,
        delay: 0,
        pointerEvents: "none",
      });
    }
  }

  if (width > 768) {
    return (
      <>
        {isNavActive ? (
          <div
            onClick={() => setIsNavActive(false)}
            className="fixed top-[20px] right-[20px] z-[99999999] text-white cursor-pointer text-[30px] navicon"
          >
            <RxCross1 />
          </div>
        ) : (
          <div
            onClick={() => setIsNavActive(true)}
            style={{ opacity: scroll > 200 ? "1" : "0" }}
            className="transition-all duration-300 ease-linear fixed top-[20px] right-[20px] z-[99999999] text-white cursor-pointer text-[30px] navicon"
          >
            <CiMenuFries />
          </div>
        )}
        <div className="navinner h-screen w-full bg-transparent fixed z-[999999] pointer-events-none text-white opacity-0 flex flex-col justify-evenly">
          <div className="flex justify-between">
            <div className="">
              <div className="w-[300px] h-[70px] select-none text-[30px] flex items-center justify-center alfa ">
                Products
              </div>
              <div className="w-[300px] h-[70px] select-none text-[30px] flex items-center justify-center alfa">
                Learn & Explore
              </div>
              <div className="w-[300px] h-[70px] select-none text-[30px] flex items-center justify-center alfa">
                Nikon School
              </div>
              <div className="w-[300px] h-[70px] select-none text-[30px] flex items-center justify-center alfa">
                Where to buy
              </div>
            </div>
            <div className="">
              <p className="w-[400px] relative top-[30%] right-[30%] text-[18px] select-none">
                Discover the world of Nikon, where cutting-edge technology meets
                unparalleled craftsmanship. From professional DSLRs and
                mirrorless cameras to versatile lenses and accessories, Nikon
                empowers photographers to capture breathtaking moments with
                precision and creativity.
              </p>
            </div>
          </div>
          <div className="flex flex-col  ">
            <span className="font-bold text-[7vw] text-center select-none  mb-[-20px]">
              NIKON
            </span>
            <div className="flex justify-center">
              <img
                src={nikonimg}
                alt=""
                className="invert opacity-[.1] h-[400px]"
              />
            </div>
          </div>
          <div className="flex justify-between px-[3rem] absolute w-full bottom-[3%] select-none">
            <div className="">
              <p>Nikon Imaging | India | Asia Pacific</p>
            </div>
            <div className="flex gap-[1rem] items-center">
              <div className="text-[22px] cursor-pointer">
                <FiInstagram />{" "}
              </div>
              <div className="text-[22px] cursor-pointer">
                <FaSquareFacebook />{" "}
              </div>
              <div className="text-[30px] cursor-pointer">
                <AiOutlineYoutube />{" "}
              </div>
              <div className="text-[22px] cursor-pointer">
                <RiTwitterXLine />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen w-full bg-transparent fixed z-[99999] text-white flex pointer-events-none">
          <div className="h-screen w-[20%] bg-black relative top-[-100%] navslides"></div>
          <div className="h-screen w-[20%] bg-black relative top-[-100%] navslides"></div>
          <div className="h-screen w-[20%] bg-black relative top-[-100%] navslides"></div>
          <div className="h-screen w-[20%] bg-black relative top-[-100%] navslides"></div>
          <div className="h-screen w-[20%] bg-black relative top-[-100%] navslides"></div>
        </div>
      </>
    );
  } else {
    return (
      <>
        {isNavActive ? (
          <div
            onClick={() => setIsNavActive(false)}
            className="fixed top-[20px] right-[20px] z-[99999999] text-white cursor-pointer text-[25px] navicon"
          >
            <RxCross1 />
          </div>
        ) : (
          <div
            onClick={() => setIsNavActive(true)}
            className="fixed top-[20px] right-[20px] z-[99999999] text-white cursor-pointer text-[25px] navicon"
          >
            <CiMenuFries />
          </div>
        )}
        <div className="py-[3rem] navinner h-screen w-full bg-transparent fixed z-[999999] pointer-events-none text-white opacity-0 flex flex-col justify-between">
          <div className="text-[30px] flex flex-col gap-[1rem] items-center mt-[12rem]">
            <p>Products</p>
            <p>Learn & Explore</p>
            <p>Nikon School</p>
            <p>Where to buy</p>
            <p>Promotions</p>
            <p>Support</p>
          </div>
          <p className="flex justify-center">
            Nikon Imaging | India | Asia Pacific
          </p>
        </div>
        <div className="h-screen w-full bg-transparent fixed z-[99999] text-white flex pointer-events-none">
          <div className="h-screen w-[20%] bg-black relative top-[-100%] navslides"></div>
          <div className="h-screen w-[20%] bg-black relative top-[-100%] navslides"></div>
          <div className="h-screen w-[20%] bg-black relative top-[-100%] navslides"></div>
          <div className="h-screen w-[20%] bg-black relative top-[-100%] navslides"></div>
          <div className="h-screen w-[20%] bg-black relative top-[-100%] navslides"></div>
        </div>
      </>
    );
  }
}

export default Navbar;
