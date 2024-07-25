import React, { useEffect, useState } from "react";
import "./Product.css";
import Card from "./card";
import "../Features/Features.css";
// import Img1 from "../../assets/1.png";
// import Img2 from "../../assets/product2.png";
// import Img3 from "../../assets/product3.png";
// import Img4 from "../../assets/product4.png";
// import Img6 from "../../assets/product6.png";

const Img1 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1721888558/1_hfnryb.webp";
const Img2 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1721888886/product2_itjeii.webp";
const Img3 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1721888886/product3_m2d19u.webp";
const Img4 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1721888886/product4_zocndo.webp";
const Img6 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1721888885/product6_lhsedh.webp";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const Product = () => {
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
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".CategoryProduct",
        start: "5% 0%",
        end: "20% 5%",
        scrub: 1,
        // markers: true,
        scroller: "body",
        pin: true,
      },
    });
    timeline.to(".overlay", {
      height: 0,
    });
    return () => {
      timeline.scrollTrigger.kill(true);
    };
  }, []);

  const imglist = [Img1, Img2, Img3, Img4, Img6];

  const product_info = [
    { name: "NIKON Z6III", price: "$499", secPrice: "", rating: "" },
    { name: "NIKON Z F", price: "$499", secPrice: "", rating: "" },
    { name: "NIKON Z 5-TOP", price: "$499", secPrice: "", rating: "" },
    { name: "NIKKOR Z 35MM", price: "$499", secPrice: "", rating: "" },
    { name: "NIKKOR Z 28", price: "$499", secPrice: "", rating: "" },
    { name: "NIKKOR Z 135MM", price: "$499", secPrice: "", rating: "" },
  ];

  if (width > 768) {
    return (
      <div className=" CategoryProduct w-full bg-transparent relative md:p-[2rem] md:mt-[4rem] p-[1rem] text-white">
        <div className="header-product w-full flex flex-col  ">
          <h1 className="lg:text-[10rem]  text-center gradiant-feature alfa pt-[60px]">
            CATEGORY
          </h1>
          <button className="ml-[2rem] button">
            <div class="text">
              <span>See</span>
              <span>More</span>
            </div>
            <div class="clone">
              <span>See</span>
              <span>More</span>
            </div>
            <svg
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
            >
              <path
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className="camera-product w-full relative flex flex-wrap items-center justify-center gap-[5rem] mt-[2rem]">
          <Card src={Img1} name={product_info[0].name} />
          <Card src={Img2} name={product_info[1].name} />
          <Card src={Img3} name={product_info[2].name} />
        </div>
        <div className="lens-productw-full relative flex flex-wrap items-center justify-center gap-[5rem] mt-[4rem]">
          <Card src={Img4} name={product_info[3].name} />
          <Card src={Img6} name={product_info[4].name} />
          <Card src={Img4} name={product_info[5].name} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="overflow-x-auto relative  h-screen flex items-center scrollhide">
        <div className="flex p-[4rem]  w-[1740px] gap-[2rem]">
          {imglist.map((item, index) => {
            return <Card src={item} name={product_info[5].name} />;
          })}
        </div>
      </div>
    );
  }
};

export default Product;
