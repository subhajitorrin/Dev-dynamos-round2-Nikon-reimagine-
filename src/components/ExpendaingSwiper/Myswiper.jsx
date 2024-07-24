import React, { useEffect, useState ,useRef} from "react";
import { Navigation, Pagination, A11y ,Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./Myswipper.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Myswipper = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [abhra, setAbhra] = useState(0);
  const SwiperIns = useRef();
  let abhra = 0
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    

    if (windowWidth <= 768) {
      let backslide = document.querySelectorAll(".back_slide");
      backslide.forEach((item) => {
        item.style.scale = 1;
      });
    } else {
      let active = document.querySelectorAll(".slide");
      let backslide = document.querySelectorAll(".back_slide");

      active.forEach((slide, i) => {
        slide.addEventListener("click", (e) => {
          console.log(e);
          console.log(abhra);
          if (abhra) {
            slide.style.transform = "translateY(0) scale(1)";
            backslide[i].style.scale = 0;
            swiperInstance.update();
            abhra = 0
            
          } else {
            slide.style.transform = "translateY(-60px) scale(0.65)";
            backslide[i].style.scale = 1;
            swiperInstance.update();
            abhra = 1
          }
        });
      });
    };
    return () => {
     timeline.scrollTrigger.kill(true);
    };
  }, [windowWidth]);

  function handleSlide() {
    let active = document.querySelectorAll(".slide");
    let backslide = document.querySelectorAll(".back_slide");

    active.forEach((item) => {
      item.style.transform = "translateY(0)";
    });
    backslide.forEach((item) => {
      item.style.scale= 0;
    });
  }
  return (
    <div className="SwipperMain">
 
      <Swiper
        ref={SwiperIns}
        id="mainswipper"
        modules={[Navigation, Pagination, A11y , Mousewheel]}
        spaceBetween={0}
        mousewheel={{
          enabled:true,
          sensitivity: 1,
          releaseOnEdges:true,
        }}
        slidesPerView={3}
        pagination={{ clickable: false }}
        scrollbar={false}
        onSlideChange={handleSlide}
        slidesOffsetBefore={100}
        slidesOffsetAfter={600}
        direction="vertical"
        centeredSlides={false}
        breakpoints={{
          956: {
            slidesOffsetBefore: 600,
            direction: "horizontal",
          },
          768: {
            direction: "horizontal",
          },
        }}
      >
        
        <SwiperSlide className="mainslide">
          <div className="slide1 slide"><div className="NewsDate">23 March , 2024</div></div>
          <div className="back_slide">
            <div className="BackSlideProductInformation">
            <div className="NewsProduct"><p>New Delhi, May 23, 2024 </p>Nikon India Private Ltd. is pleased to announce that the total production of NIKKOR lenses for Nikon interchangeable lens cameras reached 120 million1 as of April, 2024.
              As one of the world’s few manufacturers that begins its manufacturing process from the <a href=""><u>See More</u></a></div>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="mainslide">
          <div className="slide2 slide"><div className="NewsDate">23 March , 2024</div></div>
          <div className="back_slide">
            <div className="BackSlideProductInformation">
            <div className="NewsProduct"><p>New Delhi, May 23, 2024 </p>Nikon India Private Ltd. is pleased to announce that the total production of NIKKOR lenses for Nikon interchangeable lens cameras reached 120 million1 as of April, 2024.
              As one of the world’s few manufacturers that begins its manufacturing process from the <a href=""><u>See More</u></a></div>
             
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="mainslide">
          <div className="slide3 slide"><div className="NewsDate">23 March , 2024</div></div>
          <div className="back_slide">
            <div className="BackSlideProductInformation">
            <div className="NewsProduct"><p>New Delhi, May 23, 2024 </p>Nikon India Private Ltd. is pleased to announce that the total production of NIKKOR lenses for Nikon interchangeable lens cameras reached 120 million1 as of April, 2024.
              As one of the world’s few manufacturers that begins its manufacturing process from the <a href=""><u>See More</u></a></div>
             
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="mainslide">
          <div className="slide4 slide"><div className="NewsDate">23 March , 2024</div></div>
          <div className="back_slide">
            <div className="BackSlideProductInformation">
              <div className="NewsProduct"><p>New Delhi, May 23, 2024 </p>Nikon India Private Ltd. is pleased to announce that the total production of NIKKOR lenses for Nikon interchangeable lens cameras reached 120 million1 as of April, 2024.
              As one of the world’s few manufacturers that begins its manufacturing process from the <a href=""><u>See More</u></a></div>
             
            </div>
          </div>
        </SwiperSlide>
      {/* <button className="SeeMoreNews -z-1">See More</button> */}

      </Swiper>
    </div>
  );
};

export default Myswipper;
