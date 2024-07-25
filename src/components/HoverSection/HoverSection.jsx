import React, { useEffect, useState, useRef } from "react";
import hover1 from "../../assets/hover1.jpg";
import hover2 from "../../assets/hover2.jpg";
import hover3 from "../../assets/hover3.jpg";
import hover4 from "../../assets/hover4.jpg";
import hover5 from "../../assets/hover5.jpg";

const list = [
  ["CAMERA", "Z SERIES", "CAMERA INNOVATION"],
  ["DSLR", "D850", "PROFESSIONAL DSLR"],
  ["LENSES", "NIKKOR LENSES", "OPTICAL ENGINEERING"],
  ["PHOTOGRAPHY", "EDUCATIONAL EVENT", "COMMUNITY"],
  ["ART", "EXHIBITION", "CREATIVE"],
];

const imglist = [hover1, hover2, hover3, hover4, hover5];

function HoverSection() {
  const [index, setIndex] = useState(null);
  const imgContainerRef = useRef(null);
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

  const handleMouseEnter = (index) => {
    setIndex(index);
  };

  const handleMouseLeave = () => {
    setIndex(null);
  };

  useEffect(() => {
    function handleMouseMove(e) {
      const imgContainer = document.querySelector(".movingImageContainerOrrin");
      if (imgContainer) {
        imgContainer.style.left = `${e.clientX + 200 * 1.5}px`;
        imgContainer.style.top = `${e.clientY - 200 * 1.5}px`;
      }
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (width > 768) {
    return (
      <div className="relative select-none">
        <div
          className="absolute top-0 movingImageContainerOrrin"
          ref={imgContainerRef}
        >
          {index !== null && (
            <div className="relative">
              <div
                className="hoverorrin1 bg-no-repeat bg-center bg-cover h-[450px] w-[300px] absolute overflow-hidden top-[-20px] left-[-20px]"
                style={{
                  background: `url('${imglist[index]}')`,
                  boxShadow: "-10px -10px 15px rgba(0, 0, 0, .3)",
                }}
              ></div>
              <div
                className="hoverorrin2 bg-no-repeat bg-center bg-cover h-[450px] w-[300px] absolute overflow-hidden top-[0px] left-[0px]"
                style={{
                  background: `url('${imglist[index]}')`,
                  boxShadow: "-10px -10px 15px rgba(0, 0, 0, .3)",
                }}
              ></div>
            </div>
          )}
        </div>
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col justify-between w-full text-white px-[5rem]">
            {list.map((item, idx) => (
              <div
                className=" flex justify-between items-center pb-[1rem] mouseHoverAnimationOrrinContainer"
                key={idx}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="text-center w-[200px]">{item[0]}</div>
                <div className="text-center w-[800px] font-bold text-[2vw]">
                  {item[1]}
                </div>
                <div className="text-center w-[200px]">{item[2]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <div className=""></div>;
  }
}

export default HoverSection;
