import React, { useEffect, useState, useRef } from "react";
import { Navigation, Pagination, A11y, Mousewheel } from "swiper/modules";
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
  let abhra = 0;
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
            abhra = 0;
          } else {
            slide.style.transform = "translateY(-15px) scale(1)";
            backslide[i].style.scale = 1;
            swiperInstance.update();
            abhra = 1;
          }
        });
      });
    }
    return () => {};
  }, [windowWidth]);

  function handleSlide() {
    let active = document.querySelectorAll(".slide");
    let backslide = document.querySelectorAll(".back_slide");

    active.forEach((item) => {
      item.style.transform = "translateY(0)";
    });
    backslide.forEach((item) => {
      item.style.scale = 0;
    });
  }
  if (windowWidth > 768) {
    return (
      <div className="SwipperMain">
        <Swiper
          ref={SwiperIns}
          id="mainswipper"
          modules={[Navigation, Pagination, A11y, Mousewheel]}
          spaceBetween={0}
          mousewheel={{
            enabled: true,
            sensitivity: 1,
            releaseOnEdges: true,
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
            <div className="slide1 slide">
              <div className="NewsDate">23 March , 2024</div>
            </div>
            <div className="back_slide">
              <div className="BackSlideProductInformation">
                <div className="NewsProduct">
                  {/* <p>New Delhi, May 23, 2024 </p> */}
                  Nikon India announces that NIKKOR lenses' production has
                  reached 120 million as of April 2024. This milestone
                  highlights Nikon's commitment to quality and innovation,
                  reinforcing its position as a leading manufacturer in the
                  photography industry, beginning its process from raw
                  materials. <a href="">{/* <u>See More</u> */}</a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="mainslide">
            <div className="slide2 slide scale-[.7]">
              <div className="NewsDate">23 March , 2024</div>
            </div>
            <div className="back_slide">
              <div className="BackSlideProductInformation">
                <div className="NewsProduct">
                  {/* <p>New Delhi, May 23, 2024 </p> */}
                  The Nikkor Z 28-75mm lens offers a versatile zoom range, sharp
                  optics, fast autofocus, and lightweight design, perfect for
                  diverse photography. Its advanced features and exceptional
                  performance make it an ideal choice for both amateur and
                  professional photographers, ensuring high-quality images in
                  various conditions. <a href="">{/* <u>See More</u> */}</a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="mainslide">
            <div className="slide3 slide">
              <div className="NewsDate">23 March , 2024</div>
            </div>
            <div className="back_slide">
              <div className="BackSlideProductInformation">
                <div className="NewsProduct">
                  {/* <p>New Delhi, May 23, 2024 </p> */}
                  Nikon cameras offer exceptional image quality, advanced
                  features, durable build, and user-friendly controls. They
                  cater to both professionals and enthusiasts, ensuring high
                  performance and reliability in various shooting conditions.
                  Whether for everyday use or professional projects, Nikon
                  delivers impressive results.{" "}
                  <a href="">{/* <u>See More</u> */}</a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="mainslide">
            <div className="slide4 slide">
              <div className="NewsDate">23 March , 2024</div>
            </div>
            <div className="back_slide">
              <div className="BackSlideProductInformation">
                <div className="NewsProduct">
                  {/* <p>New Delhi, May 23, 2024 </p> */}
                  The Nikon Zf is a retro-styled mirrorless camera that combines
                  classic design with modern technology. It features a
                  high-resolution sensor, advanced autofocus, and intuitive
                  controls. With its stylish aesthetic and powerful performance,
                  the Zf appeals to both professional photographers and
                  enthusiasts seeking a vintage feel with contemporary
                  capabilities. <a href="">{/* <u>See More</u> */}</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <button className="SeeMoreNews -z-1">See More</button> */}
        </Swiper>
      </div>
    );
  } else {
    const items = [
      {
        link: "https://res.cloudinary.com/difxhccup/image/upload/v1721903978/441515604_1032382011568932_9098687211715979792_n_atkv2h.jpg",
        text: "Nikon's large lenses provide exceptional image quality, featuring advanced optics and coatings, ideal for professional photographers seeking superior performance.",
      },
      {
        link: "https://res.cloudinary.com/difxhccup/image/upload/v1721904120/442496411_1025738628899937_385786479782151304_n_y1pcvr.webp",
        text: "The Nikkor Z 28-75mm lens offers versatile zoom range, sharp optics, fast autofocus, and lightweight design, perfect for diverse photography.",
      },
      {
        link: "https://res.cloudinary.com/difxhccup/image/upload/v1721889766/feature-nikkor-z-28-400mm-nikon-cameras-lenses-accessories_1_kymae2.webp",
        text: "Nikon cameras deliver outstanding image quality, advanced features, robust build, and intuitive controls, catering to professionals and enthusiasts alike.",
      },
    ];
    return (
      <div className="w-full mt-[2rem]">
        {items.map((item, index) => {
          return (
            <div className="p-[2rem] min-w-full" key={index}>
              <img src={item.link} alt="" className="rounded-[10px]" />
              <p className="text-white text-center py-[1rem]">{item.text}</p>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Myswipper;
