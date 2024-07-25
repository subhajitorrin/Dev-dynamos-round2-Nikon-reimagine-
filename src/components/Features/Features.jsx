import React, { useEffect, useRef } from 'react'
import './Features.css'
import Tilt from 'react-parallax-tilt';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nikon3d from './Nikon3d';

const Trus1 = "https://res.cloudinary.com/difxhccup/image/upload/v1721924302/trusted1_wdlhk2.webp"

const Trus3 = "https://res.cloudinary.com/difxhccup/image/upload/v1721924303/trusted3_lxdeym.webp"
const Trus4 = "https://res.cloudinary.com/difxhccup/image/upload/v1721924303/trusted4_peb9no.webp"
const Trus5 = "https://res.cloudinary.com/difxhccup/image/upload/v1721924304/trusted5_m5fpkq.webp"
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {

    const FeatureRef = useRef();

    // useEffect(() => {
    //     let timeline = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: FeatureRef.current,
    //             start: '10% 25%',
    //             end: '110% 25%',
    //             scrub: 2,
    //         },
    //     });
    //     timeline.from('.camera-features-container .feu',{
    //         x:-10,
    //         opacity:0,
    //         scale:0,
    //         duration:1
    //     }).from('.trusted_by h1',{
    //         opacity:0,
    //         scale:0,
    //         y:20,
    //         duration:1,
    //         delay:1,
    //     }).from('.trusted_by div img',{
    //         opacity:0,
    //         duration:1,
    //         scale:0,
    //         y:20,
    //         stagger:0.5,
    //         delay:1,
    //     })

    // }, [])





    return (
        <div className='w-full md:h-[125vh] h-[80vh] bg-transparent relative text-white lg:p-[2rem]'>
            <div ref={FeatureRef} className='flex flex-col gap-3 items-center lg:pl-[10rem] lg:pr-[10rem] w-full'>
                <h2 className='text-6xl font-[600] mb-[10px] '>Best Selling Camera</h2>
                <p className='md:w-[70%] text-center opacity-[1] text-[10px] md:text-[15px]'>Elievate your photography game with our range of professionals grade cameras and accessories capture every moment with our high-quality cameras and lenses</p>

                <div className='feature mt-[2rem] relative text-[4rem] lg:text-[10rem] md:text-[6rem] w-full flex items-center justify-center lg:ml-[1.5rem]'>
                    <h1 className='gradiant-feature font-[550] pb-[60px]'>FEATURE</h1>
                </div>
            </div>
            <div className='camera-features-container w-full relative md:h-[60vh] h-full'>
                <div className='absolute top-[-20%]'>
                    <Nikon3d />
                </div>
                <div className='feu absolute lg:top-[20%] lg:left-[30%] md:top-[20%] md:left-[20%] top-[40%] left-[10%]'>
                    <div>FHD</div>
                    <p>180p</p>
                </div>
                <div className='feu absolute lg:top-[45%] lg:left-[25%] md:top-[40%] md:left-[15%] top-[40%] left-[40%]'>
                    <div>Approx</div>
                    <p>24.2mp</p>
                </div>
                <div className='feu absolute lg:top-[70%] lg:left-[22%] md:top-[60%] md:left-[10%] top-[40%] left-[75%]'>
                    <div>Eos r8</div>
                    <p>24-50mm</p>
                </div>
                <div className='feu absolute lg:top-[20%] lg:right-[30%] md:top-[20%] md:right-[20%] top-[55%] right-[72%]'>
                    <div>4k HD</div>
                    <p>60p</p>
                </div>
                <div className='feu absolute lg:top-[45%] lg:right-[25%] md:top-[40%] md:right-[15%] top-[55%] right-[40%]'>
                    <div>Approx</div>
                    <p>24.2mp</p>
                </div>
                <div className='feu absolute lg:top-[70%] lg:right-[22%] md:top-[60%] md:right-[10%] top-[55%] right-[6%]'>
                    <div>Sensor</div>
                    <p>461g</p>
                </div>
            </div>
            <div className='trusted_by hidden md:flex md:flex-col items-center'>
                <h1 className='text-center text-4xl pb-[1rem] font-bold pt-[80px]'>TRUSTED BY</h1>
                <div className='ParentInfinite'>
                    <div className='InfiniteTrust flex items-center justify-around w-full '>
                        <img src={Trus1} alt="" width={"150px"} height={"150px"}/>
                        <img src={Trus5} alt="" width={"150px"} height={"150px"}/>
                        <img src={Trus3} alt="" width={"150px"} height={"150px"}/>
                        <img src={Trus4} alt="" width={"150px"} height={"150px"}/>
                        <img src={Trus5} alt="" width={"150px"} height={"150px"}/>
                    </div>
                    <div className='InfiniteTrust flex items-center justify-around w-full  h-full'>
                        <img src={Trus1} alt="" width={"150px"} height={"150px"}/>
                        <img src={Trus5} alt="" width={"150px"} height={"150px"}/>
                        <img src={Trus3} alt="" width={"150px"} height={"150px"}/>
                        <img src={Trus4} alt="" width={"150px"} height={"150px"}/>
                        <img src={Trus5} alt="" width={"150px"} height={"150px"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
