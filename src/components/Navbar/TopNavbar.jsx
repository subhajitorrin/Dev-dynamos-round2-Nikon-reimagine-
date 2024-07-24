import React, { useEffect, useState } from "react";

const list = ["item", "item", "item", "item", "item"];

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
    <div  style={{ opacity: scroll > 200 || width<768 ? "0" : "1"}} className="transition-all duration-200 ease-linear w-full px-[5%] py-[1.2rem]  top-0  font-[500] flex justify-between fixed">
      <div className="text-white">
        <p>NIKON</p>
      </div>
      <div className="text-white flex gap-[20px]">
        {list.map((item, index) => {
          return <p>{item}</p>;
        })}
      </div>
    </div>
  );
}

export default TopNavbar;
