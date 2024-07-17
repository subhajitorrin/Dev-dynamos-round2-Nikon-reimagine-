import React, { useEffect, useRef } from 'react'
import './Features.css'
import Fimg from '../../assets/featureImg1.png'
import Tilt from 'react-parallax-tilt';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {

    const FeatureRef = useRef();

    useEffect(() => {
        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: FeatureRef.current,
                start: '10% 35%',
                end: '100% 35%',
                scrub: true,
                markers: true,
            },
        });
        timeline.from('.camera-features-container .feu',{
            x:-10,
            opacity:0,
            scale:0,
            duration:1
        })

    }, [])





    return (
        <div className='w-full h-[120vh] bg-[#00040c] relative text-white lg:p-[2rem]'>
            <div ref={FeatureRef} className='flex flex-col items-center lg:pl-[10rem] lg:pr-[10rem] w-full'>
                <h2 className='text-4xl font-[600] mb-[10px]'>Best Selling Camera</h2>
                <p className='w-[70%] text-center opacity-[0.7]'>Elievate your photography game with our range of professionals grade cameras and accessories capture every moment with our high-quality cameras and lenses</p>

                <div className='feature mt-[2rem] relative lg:text-[10rem] md:text-[6rem] w-full flex items-center justify-center lg:ml-[1.5rem]'>
                    <h1 className='gradiant-feature font-[550]'>FEATURE</h1>
                </div>
            </div>
            <div className='camera-features-container w-full relative h-[60vh] '>
                <div className='absolute top-[-30%] left-[39%] m-auto w-[22rem] h-[65vh] '>
                    <Tilt><img src={Fimg} alt="" width={"100px"} height={"100px"} className='object-cover w-full h-full ' /></Tilt>
                </div>
                <div className='feu absolute top-[20%] left-[30%]'>
                    <div>FHD</div>
                    <p>180p</p>
                </div>
                <div className='feu absolute top-[45%] left-[25%] '>
                    <div>Approx</div>
                    <p>24.2mp</p>
                </div>
                <div className='feu absolute top-[70%] left-[22%]'>
                    <div>Eos r8</div>
                    <p>24-50mm</p>
                </div>
                <div className='feu absolute top-[20%] right-[30%]'>
                    <div>4k HD</div>
                    <p>60p</p>
                </div>
                <div className='feu absolute top-[45%] right-[25%]'>
                    <div>Approx</div>
                    <p>24.2mp</p>
                </div>
                <div className='feu absolute top-[70%] right-[22%]'>
                    <div>Sensor</div>
                    <p>461g</p>
                </div>
            </div>
            <div className='trusted_by'>
                <h1>TRUSTED BY</h1>
            </div>
        </div>
    )
}

export default Features
