import React from "react";
import "./Footer.css";
import Nikonlogo from "../../assets/Nikon.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" bg-black h-[40vh] w-full flex justify-center flex-col items-center gap-7">
      <div className=" flex gap-20 items-center">
        <span className="text-white">Home</span>
        <span className="text-white">Product</span>
        <span className="text-white">Pricing</span>
        <img src={Nikonlogo} alt="" className="h-[40px]" />
        <span className="text-white">Blogs</span>
        <span className="text-white">Contact Us</span>
        <span className="text-white">About</span>
      </div>
      <div className="flex gap-7">
        <FaFacebookF className="text-white text-[35px] p-1.5  rounded-[12px]" />
        <FaLinkedinIn className="text-white text-[35px] p-1.5 rounded-[12px]" />
        <FaInstagram className="text-white text-[35px] p-1.5 rounded-[12px]" />
        <FaXTwitter className="text-white text-[35px] p-1.5 rounded-[12px]"/>
        <FaYoutube  className="text-white text-[35px] p-1.5 rounded-[12px]"/>
      </div>
      <div className="line  w-full bg-white h-[1px]"></div>
      <div className="text-white">© 2023 Nikon India Pvt Ltd</div>
    </div>
  );
};

export default Footer;
