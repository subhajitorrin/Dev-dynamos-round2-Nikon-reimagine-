import React, { useEffect, useState } from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./Myswipper.css";

const Myswipper = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [abhra, setAbhra] = useState(0);

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
            slide.style.transform = "translateY(0)";
            backslide[i].style.scale = 0;
            abhra = 0
          } else {
            slide.style.transform = "translateY(-25px)";
            backslide[i].style.scale = 1;
            abhra = 1
          }
        });
      });
    }
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
    <div className="main">
      <Swiper
        id="mainswipper"
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        pagination={{ clickable: false }}
        scrollbar={false}
        onSlideChange={handleSlide}
        slidesOffsetBefore={30}
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
          <div className="slide1 slide"></div>
          <div className="back_slide">
            <div className="BackSlideProductInformation">
              <div className="">Shaoo lawra</div>
              <div className="">Abhra Lawra</div>
              <div className="">Orrin machu</div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="mainslide">
          <div className="slide2 slide"></div>
          <div className="back_slide">
            <div className="BackSlideProductInformation">
              <div className="">Shaoo lawra</div>
              <div className="">Abhra Lawra</div>
              <div className="">Orrin machu</div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="mainslide">
          <div className="slide3 slide"></div>
          <div className="back_slide">
            <div className="BackSlideProductInformation">
              <div className="">Shaoo lawra</div>
              <div className="">Abhra Lawra</div>
              <div className="">Orrin machu</div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="mainslide">
          <div className="slide4 slide"></div>
          <div className="back_slide">
            <div className="BackSlideProductInformation">
              <div className="">Shaoo lawra</div>
              <div className="">Abhra Lawra</div>
              <div className="">Orrin machu</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Myswipper;
