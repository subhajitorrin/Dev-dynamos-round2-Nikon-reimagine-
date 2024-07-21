import React, { useEffect, useState } from "react";
import InstagreamCards from "../InstagramSection/InstagreamCards";

function LowerInstagram() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (width > 768) {
    return (
      <div>
        <div className="my-[10rem] ">
          <p className="text-[#fff018] font-bold text-center">
            Meet I-2 photographers
          </p>
          <p className="text-white text-[3vw] text-center font-bold leading-[90%] mt-[2rem]">
            The <br /> Imperfectionists
          </p>
        </div>
        <InstagreamCards />
        <InstagreamCards />
        <InstagreamCards />
      </div>
    );
  } else {
    return (
      <div>
        <div className="my-[1rem] ">
          <p className="text-[#fff018] font-bold text-center">
            Meet I-2 photographers
          </p>
          <p className="text-white text-[3vw] text-center font-bold leading-[90%] mt-[2rem]">
            The <br /> Imperfectionists
          </p>
        </div>
        <InstagreamCards />
        <InstagreamCards />
        <InstagreamCards />
      </div>
    );
  }
}

export default LowerInstagram;
