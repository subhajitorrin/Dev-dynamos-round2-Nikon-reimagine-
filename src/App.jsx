import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero Section/Hero";
import Myswipper from "./components/ExpendaingSwiper/Myswiper";
import ScrollingCanvus1 from "./components/Scrolling-Canvus1/ScrollingCanvus1";
import ScrollingCanvus2 from "./components/Scrolling-Canvus2/ScrollingCanvus2";
import ScrollingCanvus3 from "./components/Scrolling-Canvus3/ScrollingCanvus3";
import Features from "./components/Features/Features";
import Product from "./components/Product/Product";
import InstagramSection from "./components/InstagramSection/InstagramSection";
import Accessory from "./components/AccessoryComponent/Accessory";
function App() {
  return (
    <>
      <div className="bg-[#00040c]">
        <Hero />
        {/* <ScrollingCanvus1 /> */}
        <Features />
        <Product />
        <Accessory />
        <ScrollingCanvus2 />
        <Myswipper />
        <InstagramSection/>
        <ScrollingCanvus3 />
      </div>
    </>
  );
}

export default App;
