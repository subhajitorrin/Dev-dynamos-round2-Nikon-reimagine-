import React, { useEffect } from "react";
import "./Hero.css";
// import HeroSwiper from ".././Hero Section/Hero";
import Img from "../../assets/1.png"
 const Img1 = "https://res.cloudinary.com/difxhccup/image/upload/v1721918564/nikon_product_angles_1380x1380_1_2-removebg-preview_qbzbva.png"
  const Img2 = "https://res.cloudinary.com/difxhccup/image/upload/v1721918564/white_hero_2_1_3_2-removebg-preview_prabla.png"
  const Img3 = "https://res.cloudinary.com/difxhccup/image/upload/v1721919218/img1_t7bgza.png"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CameraSvg from "./DSLR_Camera_REMIX_By_DG-RA.svg"
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


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
import { BsArrowDownRight } from "react-icons/bs";
import { TbArrowRightCircle } from "react-icons/tb";
import { TbArrowLeftCircle } from "react-icons/tb";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
function Hero() {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".mainHero",
        start: "0.1% 0%",
        end: "90% 0%",
        scrub: 2,
        markers: true,
        scroller: "body",
        pin: ".wrapDiv",
        pinSpacing: false,
      },
    });
    timeline.to(".mainHero",{
     gap:"5rem",
    },[0])
    .to(".NIK",{
      perspective:100,
      transform:"translateZ(79px)",
      color:"#ffdd00",
      webkitTextStroke: "0px #ffdd00",
    },[0])
    .to(".ON",{
      perspective:100,
      transform:"translateZ(65px)",
      color:"#ffdd00",
      webkitTextStroke: "0px #ffdd00",
    },[0]).to(".CameraSvg",{
      perspective:100,
      transform:"translateZ(65px)"
    },[0])
    .to(".zoomingdiv",{
      transform: "translateX(0%) translateY(0%)",
      display:"flex",
      width:"80vw",
      height:"90vh",
      borderRadius:2,
    },[0])
    .to(".innerdiv",{
      height:"96%",
      display:"flex",
      width:"98%",
      borderRadius:2,
    },[0.1])
    .to(".timer-slider",{
      left:"3%",
    },[0])
    .to(".NIK",{
      fontSize:"20rem",
    },[0.5]).to(".ON",{
      fontSize:"20rem",
    },[0.5]).to(".CameraSvg",{
      width:450,
    },[0.5])
    .to(".delay",{
      opacity:1,
    },[2])
    
    return () => {
      timeline.scrollTrigger.kill(true);
    };
  }, []);


  return (
    <>
        <div className=" wrapDiv w-full h-full bg-transparent z-40">
      <div className="mainHero">
        <div className="delay"></div>
        <span className="NIK golos">NIK</span>
        <img className="CameraSvg" src={CameraSvg} alt=""></img>
        <span className="ON golos">N</span>
        <div className="space"></div>
        <div className="zoomingdiv">
          <div className="innerdiv">
            <Swiper
            className="InnerSwiper relative"
            modules={[Navigation, Pagination, Scrollbar, A11y,Mousewheel]}
          //   mousewheel={{
          // enabled:true,
          // sensitivity: 1,
          // releaseOnEdges:true,
          //   }}
            navigation={{
              nextEl:".nextArr",
              prevEl:".prevArr",
            }}
            oneWayMovement={false}
            slidesPerView={1}
            spaceBetween={0}
            centeredSlides={true}
            >
              <div className='scroll-down items-center flex flex-col gap-[0px] border  p-[1rem] absolute'>
                    <div className=''><RiScrollToBottomLine className='w-[30px] h-[30px]' /></div>
                    <h3 className='opacity-[0.7]'>Scroll</h3>
                    <div><IoPlaySharp className='transform rotate-90' /></div>
                </div>
               <TbArrowRightCircle className=" nextArr absolute z-40 top-[15%] left-[25%] scale-[10]"/>
               <TbArrowLeftCircle  className=" prevArr absolute z-40 top-[25%] left-[20%] scale-[10]"/>
              <SwiperSlide className="Slide">
                <div className="w-[70%] h-[80%] SwiperDiv flex items-center justify-center relative ">
                  <img className="SwiperCamera" src={Img} alt="" />
                  <span className="absolute model text-2xl">Z 6III + NIKKOR Z 24-70MM F/4 S<span className=" text-6xl ml-1 mr-1">|</span>MRP Rs. 2 92 990.00</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="Slide">
              <div className="w-[70%] h-[80%] SwiperDiv flex items-center justify-center relative overflow-hidden">
                  <img className="SwiperCamera" src={Img1} alt="" />
                  <span className="absolute model text-2xl">Z 6III BODY ONLY<span className=" text-6xl ml-1 mr-1">|</span>MRP Rs. 2 47 990.00</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="Slide">
              <div className="w-[70%] h-[80%] SwiperDiv flex items-center justify-center relative overflow-hidden">
                  <img className="SwiperCamera" src={Img2} alt="" />
                  <span className="absolute  text-2xl model">Z 8 + NIKKOR Z 28-75MM F/2.8 LENS<span className=" text-6xl ml-1 mr-1">|</span>MRP Rs. 4 08 995.00</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="Slide relative">
              <div className="w-[70%] h-[80%] SwiperDiv flex items-center justify-center relative overflow-hidden">
                  <img className="SwiperCamera" src={Img3} alt="" />
                  <span className="absolute model text-2xl">Z 6II + NIKKOR Z 28-75MM F/2.8 LENS<span className=" text-6xl ml-1 mr-1">|</span>MRP Rs. 2 24 995.00</span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className='absolute  left-[-50%] mr-[2rem]  hidden lg:flex flex-col gap-[1rem] items-center justify-center z-[100000] timer-slider'>
                <div className='relative border border-gray-500 w-[50px] h-[50px] rounded-[50%] bg-transparent flex items-center justify-center timer'>
                    <div className='absolute bg-transparent w-[80%] h-[80%] rounded-full '></div><MdOutlineHomeMax className='w-[60%] h-[80%] z-[100]' />
                </div>
                <div className='relative border border-gray-500 w-[50px] h-[50px] rounded-[50%] bg-transparent flex items-center justify-center timer'>
                <SiCanvas className='w-[60%] h-[80%]' />
                </div>
                <div className='relative border border-gray-500 w-[50px] h-[50px] rounded-[50%] bg-transparent flex items-center justify-center timer'>
                <MdOutlineFeaturedPlayList className='w-[60%] h-[80%]' />
                </div>
                <div className='relative border border-gray-500 w-[50px] h-[50px] rounded-[50%] bg-transparent flex items-center justify-center timer'>
                <AiOutlineProduct className='w-[60%] h-[80%]' />
                </div>
                <div className='relative border border-gray-500 w-[50px] h-[50px] rounded-[50%] bg-transparent flex items-center justify-center timer'>
                <PiInstagramLogoDuotone className='w-[60%] h-[80%]' />
                </div>
            </div>
      </div>
      </div>
    </>
  );
}

export default Hero;
