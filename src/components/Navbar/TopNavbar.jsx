import React, { useEffect, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { GoArrowSwitch } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import NIKONLOGO from "../../assets/NIKONLOGO.webp"
const list = ["NIKON GLOBAL", "LOCATION", "SEARCH", "COMPARE", "SIGN IN"];
import "./topNavbar.css"

function TopNavbar({scroll}) {
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
  return (
    <div  style={{ opacity: scroll > 200 || width<768 ? "0" : "1"}} className="  transition-all duration-200 ease-linear w-full pl-[5%] pr-[2%] py-[1.2rem]  top-0  font-[500] flex justify-between fixed z-50">
      <div className="text-white">
        <div className="w-[50px] h-[50px] bg-red-800 logo"></div>
      </div>
      <div className=" text-white flex items-center justify-end gap-[30px] text-[0.8rem]">
        {/* {list.map((item, index) => {
          return <p>{item}</p>;
        })} */}
        <p className=" flex flex-col items-center gap-2">NIKON GLOBAL <FaGlobeAmericas className="scale-[1.5]"/></p>
        <p className=" flex flex-col items-center gap-2">LOCATION<MdOutlineLocationOn className=" scale-[2]"/></p>
        <details className="relative ">
          <summary className=" flex flex-col items-center gap-2 select-none"><GoSearch className=" scale-[1.5] "/>SEARCH</summary>
          <input type="text" className="top-[-25%] absolute left-[-750%] mt-4 border-b-2 bg-transparent outline-none transition-all" placeholder="SEARCH"></input>
          </details>
        <p className=" flex flex-col items-center gap-3">COMPARE<GoArrowSwitch className=" scale-[1.5]"/></p>
        <p className=" flex flex-col items-center gap-2"><VscAccount className=" inline-block scale-[2]" />SIGN IN</p>
      </div>
    </div>
  );
}

export default TopNavbar;
