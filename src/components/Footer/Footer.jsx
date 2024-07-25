import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  var path = `M 10 100 Q 500 100 990 100`;
  var finalpath = `M 10 100 Q 500 100 990 100`;
  const lineSvgRef = useRef(null);

  const aboutNikon = [
    "ABOUT NIKON",
    "Careers",
    "Corporate Social Responsibility",
    "Corporate Profile",
    "Events & Nikon School",
    "Contact Us",
    "Privacy Policy",
  ];
  const ToolsAndDownloads = [
    "TOOLS & DOWNLOADS",
    "Software & Apps",
    "Firmware",
    "Brochures",
    "Manuals",
    "Nikon Image Space",
    "Nikon Imaging Cloud",
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = lineSvgRef.current.getBoundingClientRect();
      const relY = e.clientY - rect.top;
      path = `M 10 100 Q 500 ${relY} 990 100`;
      gsap.to(".svg path", {
        attr: { d: path },
      });
    };

    const lineSvgElement = lineSvgRef.current;
    if (lineSvgElement) {
      lineSvgElement.addEventListener("mousemove", handleMouseMove);
      lineSvgElement.addEventListener("mouseleave", () => {
        gsap.to(".svg path", {
          attr: { d: finalpath },
          duration: 1.5,
          ease: "elastic.out(1,0.2)",
        });
      });
    }

    return () => {
      if (lineSvgElement) {
        lineSvgElement.removeEventListener("mousemove", handleMouseMove);
        lineSvgElement.removeEventListener("mouseleave", () => {
          gsap.to(".svg path", {
            attr: { d: `M 10 100 Q 500 100 990 100` },
            duration: 0.3,
            ease: "power3.out",
          });
        });
      }
    };
  }, []);

  return (
    <div className="FooterContainer m-0 max-h-[65vh] w-full flex flex-col items-center gap-5 justify-center relative z-[999999] pt-5 bg-transparent box-border">
      <div className="footertop flex items-center justify-center gap-10">
        <ul>
          {aboutNikon.map((item, index) => (
            <li
              key={index}
              className={`text-white ${
                index === 0 ? "font-bold text-[18px] pb-3" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
        <ul>
          {ToolsAndDownloads.map((item, index) => (
            <li
              key={index}
              className={`text-white ${
                index === 0 ? "font-bold text-[18px] pb-3" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div
        ref={lineSvgRef}
        className="LineSvg h-[200px] w-full flex items-center justify-center"
      >
        <svg width="1000" height="200" className="svg">
          <path
            d="M 10 100 Q 500 100 990 100"
            stroke="white"
            fill="transparent"
          />
        </svg>
      </div>

      <div className="social-icons flex gap-5 w-[50%] flex-col items-center">
        <div className="flex gap-[5rem]">
          <div className="flex items-center gap-4">
            <FaFacebookF className="text-black text-[35px] p-1.5  rounded-[12px] bg-white" />
            <span className="text-white tracking-[0.3rem] text-[20px]">
              FACEBOOK
            </span>
          </div>

          <div className="flex items-center gap-4">
            <FaInstagram className="text-black text-[35px] p-1.5  rounded-[12px] bg-white" />
            <span className="text-white tracking-[0.3rem] text-[20px]">
              INSTAGRAM
            </span>
          </div>

          <div className="flex items-center gap-4">
            <FaYoutube className="text-black text-[35px] p-1.5  rounded-[12px] bg-white" />
            <span className="text-white tracking-[0.3rem] text-[20px]">
              YOUTUBE
            </span>
          </div>
        </div>

        <div className="flex gap-[2rem]">
          <div className="flex items-center gap-4">
            <FaLinkedinIn className="text-black text-[35px] p-1.5  rounded-[12px] bg-white" />
            <span className="text-white tracking-[0.3rem] text-[18px]">
              LINEDIN
            </span>
          </div>
          <div className="flex items-center gap-4">
            <FaTwitter className="text-black text-[35px] p-1.5  rounded-[12px] bg-white" />
            <span className="text-white tracking-[0.3rem] text-[18px]">
              X(FORMERLY TWITTER)
            </span>
          </div>
        </div>
      </div>

      <div className="text-white pb-3 pt-2">© 2023 Nikon India Pvt Ltd</div>
    </div>
  );
};

export default Footer;
