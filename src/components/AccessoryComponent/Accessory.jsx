import React, { useEffect, useRef, useState } from "react";
import "./Accessory.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import AccessoryProduct from "./AccessoryProduct";
import lens from "../../assets/FinalCameraImagelens.png";
import lensbody from "../../assets/FinalCameraImagebody.png";
import camerapart1 from "../../assets/fsa043ag_-_sb-5000_speedlight_2_-removebg-preview.png";
import camerapart2 from "../../assets/62mm-circular-polariser-series-ii_heroimage-removebg-preview.png";
import camerapart3 from "../../assets/vfb10413_en-el12-rechargeable-li-ion-battery_front_heroimage-removebg-preview.png";
import ButtonComponent from "./spacebutton/ButtonComponent";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
function Accessory() {
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
  let ListArr = [
    {
      id: 0,
      prodList: [
        {
          Name: "yo",
          bgimg:
            "https://res.cloudinary.com/difxhccup/image/upload/v1721900648/1_gowkju.webp",
        },
        {
          Name: "yo1",
          bgimg:
            "https://res.cloudinary.com/difxhccup/image/upload/v1721900644/2_t4lodg.webp",
        },
        {
          Name: "yo2",
          bgimg:
            "https://res.cloudinary.com/difxhccup/image/upload/v1721900644/3_rnbeof.webp",
        },
        {
          Name: "yo3",
          bgimg:
            "https://res.cloudinary.com/difxhccup/image/upload/v1721900643/5_cqrvvb.webp",
        },
        {
          Name: "yo4",
          bgimg:
            "https://res.cloudinary.com/difxhccup/image/upload/v1721900643/4_ewvffz.webp",
        },
        {
          Name: "yo5",
          bgimg:
            "https://res.cloudinary.com/difxhccup/image/upload/v1721900643/6_xho3um.webp",
        },
      ],
    },
    {
      id: 1,
      prodList: [
        {
          Name: "bro",
          bgimg:
            "https://res.cloudinary.com/difxhccup/image/upload/v1721900632/5_qag3ej.webp",
        },
        {
          Name: "bro",
          bgimg:
            "https://res.cloudinary.com/difxhccup/image/upload/v1721900632/1_nkrqxe.webp",
        },
        {
          Name: "bro",
          bgimg:
            "https://res.cloudinary.com/difxhccup/image/upload/v1721900632/2_mod3i0.webp",
        },
        {
          Name: "bro",
          bgimg:
            "https://res.cloudinary.com/difxhccup/image/upload/v1721900632/3_ajlc9m.webp",
        },
        {
          Name: "bro",
          bgimg:
            "https://res.cloudinary.com/difxhccup/image/upload/v1721900631/4_ctpgsq.webp",
        },
        {
          Name: "bro",
          bgimg:
            "https://res.cloudinary.com/difxhccup/image/upload/v1721900631/6_lmkfkz.webp",
        },
      ],
    },
    {
      id: 2,
      prodList: [
        {
          Name: "goat",
          bgimg:
            "https://res.cloudinary.com/difxhccup/image/upload/v1721904007/s-l400-removebg-preview_olj5vf.webp",
        },
        {
          Name: "goat",
          bgimg:
            "https://res.cloudinary.com/difxhccup/image/upload/v1721904006/representative-25837-ChTdBUH__gl5j6s.webp",
        },
        {
          Name: "goat",
          bgimg:
            "https://res.cloudinary.com/difxhccup/image/upload/v1721904004/nikon-camera-lithium-ion-battery-removebg-preview_yeg2bw.webp",
        },
        {
          Name: "goat",
          bgimg:
            "https://res.cloudinary.com/difxhccup/image/upload/v1721904002/nikon-battery-500x500_ttnzau.webp",
        },
        {
          Name: "goat",
          bgimg:
            "https://res.cloudinary.com/difxhccup/image/upload/v1721904001/images-removebg-preview_nbhv5l.webp",
        },
        {
          Name: "goat",
          bgimg:
            "https://res.cloudinary.com/difxhccup/image/upload/v1721904001/17f176732449e726df1353649d7b5144-removebg-preview_yr11d1.webp",
        },
      ],
    },
    {
      id: 3,
      prodList: [
        {
          Name: "tiger",
          bgimg:
            "https://res.cloudinary.com/difxhccup/image/upload/v1721905690/vea006ec-mh-24-battery-charger_storeimage-depositphotos-bgremover_ycqyw2.png",
        },
        {
          Name: "tiger",
          bgimg:
            "https://res.cloudinary.com/difxhccup/image/upload/v1721905687/nikon-mh-24-original-imafjjtqgyzrcyhn-depositphotos-bgremover_zvvned.webp",
        },
        {
          Name: "tiger",
          bgimg:
            "https://res.cloudinary.com/difxhccup/image/upload/v1721905685/mh_33-grey-depositphotos-bgremover_qwdcwt.webp",
        },
        {
          Name: "tiger",
          bgimg:
            "https://res.cloudinary.com/difxhccup/image/upload/v1721905684/images-depositphotos-bgremover_j5j60q.webp",
        },
        {
          Name: "tiger",
          bgimg:
            "https://res.cloudinary.com/difxhccup/image/upload/v1721905686/mh23-depositphotos-bgremover_nvybgg.webp",
        },
        {
          Name: "tiger",
          bgimg:
            "https://res.cloudinary.com/difxhccup/image/upload/v1721905690/vea006ec-mh-24-battery-charger_storeimage-depositphotos-bgremover_ycqyw2.png",
        },
      ],
    },
  ];

  const [listArrIndex, setlistArrIndex] = useState(0);

  if (width > 768) {
    useEffect(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".NikonWrapAcess",
          start: "55% 55%",
          end: "140% 50%",
          scrub: 1,
          markers: true,
          scroller: "body",
          pin: true,
        },
      });
      timeline
        // .to(".CameraImg", {
        //   x: "+160%",
        //   duration: 1,
        // },[])
        .to(
          ".CameraImg",
          {
            gap: "5rem",
            duration: 0.2,
          },
          []
        )
        .to(
          ".SpeedLight",
          {
            x: "-380%",
            duration: 0.2,
            scale: 2.5,
          },
          [0.3]
        )
        .to(
          ".Filters",
          {
            x: "400%",
            duration: 0.2,
            scale: 2.5,
            zIndex: 3,
          },
          [0.3]
        )
        .to(
          ".Batteries",
          {
            x: "-300%",
            duration: 1,
            scale: 2.5,
          },
          [0.3]
        )
        .to(
          ".Chargers",
          {
            x: "+280%",
            duration: 1,
            scale: 2.5,
          },
          [0.3]
        )
        .to(
          ".CameraImg",
          {
            gap: "0rem",
            duration: 0.5,
          },
          [2.1]
        )
        .to(
          ".SpeedLight",
          {
            x: "0%",
            duration: 0.5,
            scale: 1,
          },
          [2]
        )
        .to(
          ".Filters",
          {
            x: "0%",
            duration: 0.5,
            scale: 1,
            zIndex: 3,
          },
          [2]
        )
        .to(
          ".Batteries",
          {
            x: "0%",
            duration: 0.5,
            scale: 1,
          },
          [2]
        )
        .to(
          ".Chargers",
          {
            x: "0%",
            duration: 0.5,
            scale: 1,
          },
          [2]
        );
    }, [".CameraImg"]);
    useEffect(() => {
      let plus = document.querySelectorAll(".MoreAboutProduct");
      plus.forEach((item) => {
        item.addEventListener("click", () => {
          let t1 = gsap.timeline();

          t1.to(".DetailsofAccessory", {
            display: "flex",
          })
            .to(".DetailsofAccessory", {
              opacity: 1,
              backdropFilter: "blur(50px)",
              pointerEvents: "all",
            })
            .to(".CloseAccessoryList", {
              opacity: 1,
            })
            .to(".listDetail", {
              x: "0%",
            });
        });
      });

      let XYZ = document.querySelectorAll(".Heading");
      XYZ.forEach((item, index) => {
        item.addEventListener("click", () => {
          setlistArrIndex(index);
          document.querySelector(".ImgDetail").style.opacity = 1;
          document.querySelector(".ImgDetail").style.opacity = 1;
        });
      });
      let clA = document.querySelector(".CloseAccessoryList");
      clA.addEventListener("click", () => {
        let t5 = gsap.timeline();
        t5.to(".ImgDetail", {
          opacity: 0,
        })
          .to(".listDetail", {
            x: "-100%",
          })
          .to(".CloseAccessoryList", {
            opacity: 0,
          })
          .to(".DetailsofAccessory", {
            opacity: 0,
            backdropFilter: "blur(0px)",
            display: "none",
          });
      });
    }, []);
    useEffect(() => {
      const lineoverlay = document.querySelectorAll(".lineoverlay");
      const heading = document.querySelectorAll(".Heading");
      console.log(lineoverlay);

      heading.forEach((item, index) => {
        console.log(item);
        item.addEventListener("click", () => {
          lineoverlay[index].style.width = "100%";
          lineoverlay[index].style.height = "5%";
        });
      });

      // heading.forEach((item,index) => {
      //   console.log(item);
      //   item.addEventListener("mouseleave", () => {
      //     lineoverlay[index].style.width="0%";
      //     lineoverlay[index].style.height="0%";
      //   });
      // });

      return () => {
        heading.forEach((item, index) => {
          item.removeEventListener("click", () => {
            lineoverlay[index].style.width = "100%";
            lineoverlay[index].style.height = "5%";
          });
        });
      };
    }, []);
    const titles = ["Speedlight", "Filter", "Battery", "Charger"];
    const [isactiveunderliine, setisactiveunderliine] = useState(null);

    const handleClick = (index) => {
      setisactiveunderliine(index);
    };
    return (
      <>
        <div className="NikonWrapAcess">
          <div className="DetailsofAccessory">
            <div className="listDetail">
              <IoMdClose className="CloseAccessoryList" />
              {titles.map((title, index) => (
                <span
                  key={title}
                  className="Heading select-none"
                  onClick={() => handleClick(index)}
                >
                  <summary>
                    <div
                      className="lineoverlay"
                      style={{
                        width: index === isactiveunderliine ? "100%" : "0",
                      }}
                    ></div>
                    {title}
                  </summary>
                </span>
              ))}
            </div>
            <div className="ImgDetail">
              <AccessoryProduct
                Name={ListArr[listArrIndex].prodList[0].Name}
                bgimg={ListArr[listArrIndex].prodList[0].bgimg}
              />
              <AccessoryProduct
                Name={ListArr[listArrIndex].prodList[1].Name}
                bgimg={ListArr[listArrIndex].prodList[1].bgimg}
              />
              <AccessoryProduct
                Name={ListArr[listArrIndex].prodList[2].Name}
                bgimg={ListArr[listArrIndex].prodList[2].bgimg}
              />
              <AccessoryProduct
                Name={ListArr[listArrIndex].prodList[3].Name}
                bgimg={ListArr[listArrIndex].prodList[3].bgimg}
              />
              <AccessoryProduct
                Name={ListArr[listArrIndex].prodList[4].Name}
                bgimg={ListArr[listArrIndex].prodList[4].bgimg}
              />
              <AccessoryProduct
                Name={ListArr[listArrIndex].prodList[5].Name}
                bgimg={ListArr[listArrIndex].prodList[5].bgimg}
              />
            </div>
          </div>
          <div className="CameraImg" id="CameraImg">
            <div className="lensportion">
              <img src="src\assets\FinalCameraImagelens.png" alt="" />
              <div className="box SpeedLight">
                <div className="MoreAboutProduct">
                  <LuPlus className="MoreAboutProductIcon" />
                </div>
              </div>
              <div className="box Filters">
                <div className="MoreAboutProduct">
                  <LuPlus className="MoreAboutProductIcon" />
                </div>
              </div>
            </div>
            <div className="CameraBodyPortion">
              <img src="src\assets\FinalCameraImagebody.png" alt="" />
              <div className="box Batteries">
                <div className="MoreAboutProduct">
                  <LuPlus className="MoreAboutProductIcon" />
                </div>
              </div>
              <div className="box Chargers">
                <div className="MoreAboutProduct">
                  <LuPlus className="MoreAboutProductIcon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    const mainRef = useRef(null);
    useEffect(() => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "0% 0%",
          end: "150% 50%",
          scrub: true,
          pin: true,
          // markers: true,
        },
      });
      // t1.to(
      //   ".mobilelensorrin",
      //   {
      //     top: "-8%",
      //   },
      //   "a"
      // );
      // t1.to(
      //   ".mobilelensbodyorrin",
      //   {
      //     top: "8%",
      //   },
      //   "a"
      // );
      t1.from(
        ".lenspartmobileorrin1",
        {
          left: "-300px",
        },
        "a"
      );
      t1.to(
        ".lenspartmobileorrin2",
        {
          opacity: 1,
        },
        "a"
      );
      t1.from(
        ".lenspartmobileorrin3",
        {
          left: "300px",
        },
        "a"
      );
      t1.from(
        ".lenspartmobileorrin2",
        {
          top: "-300px",
        },
        "a"
      );
    }, []);
    return (
      <>
        <div
          className="h-screen flex flex-col justify-between w-[100%] overflow-x-hidden relative"
          ref={mainRef}
        >
          <div className="flex">
            <div className="relative top-[150px] lenspartmobileorrin1 scale-[1]">
              <LuPlus className="text-[30px] text-white border border-white rounded-[50%] cursor-pointer relative left-[60px] " />
              <img src={camerapart1} alt="" className="h-[150px] " />
            </div>
            <div className=" relative top-[50px] right-[20px] lenspartmobileorrin2 scale-[1] opacity-[0]">
              <LuPlus className="text-[30px] text-white border border-white rounded-[50%] cursor-pointer relative left-[60px] top-[190px]" />
              <img src={camerapart2} alt="" className="h-[150px] " />
            </div>
            <div className=" relative top-[200px] right-[20px] lenspartmobileorrin3 scale-[1] left-0">
              <LuPlus className="text-[30px] text-white border border-white rounded-[50%] cursor-pointer relative left-[20px] top-[10px]" />
              <img src={camerapart3} alt="" className="h-[150px] " />
            </div>
          </div>
          <div className="pb-[5rem]">
            <div className="relative mobilelensorrin">
              <img src={lens} alt="" />
            </div>
            <div className="relative mobilelensbodyorrin">
              <img src={lensbody} alt="" />
            </div>
          </div>
          <div className="text-white absolute bottom-[2rem] right-[3rem]">
            <ButtonComponent />
          </div>
        </div>
      </>
    );
  }
}

export default Accessory;
