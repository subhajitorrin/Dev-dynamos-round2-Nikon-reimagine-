import React, { useRef, useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import Img from "../../assets/1.png"
import gsap from "gsap";
import "../Features/Features.css";
import { GradientLight } from "../GradientLight";

const Img =
  "https://res.cloudinary.com/difxhccup/image/upload/v1721888558/1_hfnryb.webp";

import "./Hero.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { RiScrollToBottomLine } from "react-icons/ri";
import { IoPlaySharp } from "react-icons/io5";
import { MdOutlineHomeMax } from "react-icons/md";
import { SiCanvas } from "react-icons/si";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { AiOutlineProduct } from "react-icons/ai";

const Hero = () => {
  let priceInfo = [
    {
      no: 1,
      price: "$70",
      name: "NIKON Z 50",
      info: "Get 1pc of Mount Adaptor FTZ II worth Rs. 22 995.00 at just Rs. 16 000.00",
    },
    {
      no: 2,
      price: "$73",
      name: "nikon2",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    },
    {
      no: 3,
      price: "$80",
      name: "nikon3",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    },
    {
      no: 4,
      price: "$89",
      name: "nikon4",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.update();
    }
    if (swiperRef.current) {
      swiperRef.current.swiper.on("slideChange", () => {
        setActiveIndex(swiperRef.current.swiper.activeIndex);
      });
    }
  }, [swiperRef]);

  const getNumberStyle = (index) => {
    return {
      fontSize: activeIndex === index ? "5rem" : "2rem",
      transition: "font-size 0.3s ease",
      paddingBottom: "2rem",
    };
  };
  useEffect(() => {
    let timeline = gsap.timeline();
    timeline
      .from(".heading", {
        opacity: 0,
        scale: 0,
        duration: 0.8,
      })
      .from(".circle", {
        // opacity:0,
        widht: 0,
        duration: 2,
      })
      .from(
        ".numbaring div",
        {
          x: "-120px",
          stagger: 0.4,
        },
        "-=2"
      )
      .from(".links", {
        opacity: 0,
        stagger: 0.4,
      })
      .from(
        ".price",
        {
          y: "200px",
          opacity: 0,
          scale: 0,
        },
        "a"
      )
      .from(
        ".info",
        {
          y: "200px",
          opacity: 0,
          scale: 0,
        },
        "a"
      );
  }, []);
  return (
    <div className="w-full h-[100vh] bg-transparent relative text-white">
      <div className="absolute top-[27%] right-0 mr-[2rem] p-[1rem] hidden lg:flex flex-col gap-[0.6rem] items-center justify-center z-[100000] timer-slider">
        <div className="relative border border-gray-500 w-[50px] h-[50px] rounded-[50%] bg-transparent flex items-center justify-center timer">
          <div className="absolute bg-[#7e3b95] w-[80%] h-[80%] rounded-full"></div>
          <MdOutlineHomeMax className="w-[60%] h-[80%] z-[100]" />
        </div>
        <div className="relative border border-gray-500 w-[50px] h-[50px] rounded-[50%] bg-transparent flex items-center justify-center timer">
          <SiCanvas className="w-[60%] h-[80%]" />
        </div>
        <div className="relative border border-gray-500 w-[50px] h-[50px] rounded-[50%] bg-transparent flex items-center justify-center timer">
          <MdOutlineFeaturedPlayList className="w-[60%] h-[80%]" />
        </div>
        <div className="relative border border-gray-500 w-[50px] h-[50px] rounded-[50%] bg-transparent flex items-center justify-center timer">
          <AiOutlineProduct className="w-[60%] h-[80%]" />
        </div>
        <div className="relative border border-gray-500 w-[50px] h-[50px] rounded-[50%] bg-transparent flex items-center justify-center timer">
          <PiInstagramLogoDuotone className="w-[60%] h-[80%]" />
        </div>
      </div>
      <div className="hero-upper h-[65vh] relative lg:top-[12%] top-[8%] lg:flex justify-between">
        <div className="numbaring hidden lg:h-full w-[10%] lg:flex flex-col pl-[2rem] pr-[2rem] justify-center">
          <div style={getNumberStyle(0)}>01</div>
          <div style={getNumberStyle(1)}>02</div>
          <div style={getNumberStyle(2)}>03</div>
          <div style={getNumberStyle(3)}>04</div>
        </div>
        <div className="caurosal overflow-hidden relative md:left-[-3%] w-full h-full flex items-center justify-center">
          <div className="absolute z-[1] lg:top-[3rem] top-[0rem]">
            <h1 className="lg:text-[20em] md:text-[10rem] sm:text-[10rem] text-[7rem] font-[700] heading gradiant-feature">
              NIKON
            </h1>
            <div className="circle absolute z-[-1] lg:top-[-2rem] top-[0rem] w-[60%] h-[120%] flex items-center justify-center lg:left-[20%]">
              <div className="relative w-[95%] h-[95%] circle-inner z-[-1]"></div>
            </div>
          </div>

          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            scrollbar={{ draggable: true }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            <SwiperSlide className="01 flex items-center justify-center">
              <div className="w-[18rem] h-[18rem] lg:w-[30rem] lg:h-[30rem] md:w-[20rem] md:h-[20rem] camera-img">
                <img src={Img} alt="" width={"100%"} height={"100px"} />
              </div>
            </SwiperSlide>
            <SwiperSlide className="02 flex items-center justify-center">
              <div className="w-[18rem] h-[18rem] lg:w-[30rem] lg:h-[30rem] md:w-[20rem] md:h-[20rem] camera-img">
                <img src={Img} alt="" width={"100%"} height={"100px"} />
              </div>
            </SwiperSlide>
            <SwiperSlide className="03 flex items-center justify-center">
              <div className="w-[18rem] h-[18rem] lg:w-[30rem] lg:h-[30rem] md:w-[20rem] md:h-[20rem] camera-img">
                <img src={Img} alt="" width={"100%"} height={"100px"} />
              </div>
            </SwiperSlide>
            <SwiperSlide className="04 flex items-center justify-center">
              <div className="w-[18rem] h-[18rem] lg:w-[30rem] lg:h-[30rem] md:w-[20rem] md:h-[20rem] camera-img">
                <img src={Img} alt="" width={"100%"} height={"100px"} />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="custom-swiper-button-prev" ref={prevRef}>
            Next
          </div>
          <div className="custom-swiper-button-next" ref={nextRef}>
            Back
          </div>
        </div>
      </div>
      <div className="hero-footer relative lg:top-[10rem] flex items-center justify-between pl-[2em] pr-[2rem] w-full">
        <div className="links flex">
          <a href="">
            <FaSquareFacebook className="tags" />
          </a>
          <a href="">
            <FaInstagram className="tags" />
          </a>
          <a href="">
            <FaLinkedin className="tags" />
          </a>
          <a href="">
            <IoLogoYoutube className="tags" />
          </a>
          <a href="">
            <BsTwitterX className="tags" />
          </a>
        </div>
        <div className="price-infor flex gap-[1rem] items-center justify-between">
          <div className="price">
            <h1 className="text-4xl font-bold ">
              {priceInfo[activeIndex].price}
            </h1>
          </div>
          <div className="info p-[10px]">
            <h3 className="text-[1.2rem] font-[500]">
              {priceInfo[activeIndex].name}
            </h3>
            <p className="opacity-[0.5]">{priceInfo[activeIndex].info}</p>
          </div>
        </div>
        <div className="scroll-down items-center flex flex-col gap-[5px] border border-gray-500 p-[1rem] timer-slider">
          <div className="">
            <RiScrollToBottomLine className="w-[30px] h-[30px]" />
          </div>
          <h3 className="opacity-[0.7]">Scroll</h3>
          <div>
            <IoPlaySharp className="transform rotate-90" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
