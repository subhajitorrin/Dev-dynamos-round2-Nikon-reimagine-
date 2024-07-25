import { useEffect, useState } from "react";
import "./App.css";
// import Hero from "./components/Hero Section/Hero";
import Hero from "./components/ZoomHero/Hero";
import Myswipper from "./components/ExpendaingSwiper/Myswiper";
import ScrollingCanvus1 from "./components/Scrolling-Canvus1/ScrollingCanvus1";
import ScrollingCanvus2 from "./components/Scrolling-Canvus2/ScrollingCanvus2";
import ScrollingCanvus3 from "./components/Scrolling-Canvus3/ScrollingCanvus3";
import Features from "./components/Features/Features";
import Product from "./components/Product/Product";
import InstagramSection from "./components/InstagramSection/InstagramSection";
import Accessory from "./components/AccessoryComponent/Accessory";
import StarsCanvas from "./components/StarBackground";
import LowerInstagram from "./components/LowerInstagramSection/LowerInstagram";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TopNavbar from "./components/Navbar/TopNavbar";
import HoverSection from "./components/HoverSection/HoverSection";
function App() {
  const [scroll, setscroll] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setscroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-[#010413]">
        <StarsCanvas />
        <Navbar scroll={scroll} />
        <TopNavbar scroll={scroll} />
        <Hero />
        <div className=" w-screen h-screen bg-transparent"></div>
        <ScrollingCanvus1 />
        <Features />
        <Product />
        {/* <ScrollingCanvus2 /> */}
        <Accessory />
        <HoverSection />
        <Myswipper />
        <InstagramSection />
        <LowerInstagram />
        {/* <ScrollingCanvus3 /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
