import React, { useEffect, useState } from "react";
import "./Accessory.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import AccessoryProduct from "./AccessoryProduct";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
function Accessory() {
  let ListArr = [
    {
      id:0,
      prodList:[
        {
          Name:"yo",
        },{
          Name:"yo1",
        },{
          Name:"yo2",
        },{
          Name:"yo3",
        },{
          Name:"yo4",
        },{
          Name:"yo5",
        }
      ]
    },{
      id:1,
      prodList:[
        {
          Name:"bro",
        },{
          Name:"bro",
        },{
          Name:"bro",
        },{
          Name:"bro",
        },{
          Name:"bro",
        },{
          Name:"bro",
        }
      ]
    },{
      id:2,
      prodList:[
        {
          Name:"goat",
        },{
          Name:"goat",
        },{
          Name:"goat",
        },{
          Name:"goat",
        },{
          Name:"goat",
        },{
          Name:"goat",
        }
      ]
    },{
      id:3,
      prodList:[
        {
          Name:"tiger",
        },{
          Name:"tiger",
        },{
          Name:"tiger",
        },{
          Name:"tiger",
        },{
          Name:"tiger",
        },{
          Name:"tiger",
        }
      ]
    }
  ]
  
  const [listArrIndex, setlistArrIndex] = useState(0)


  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".NikonWrapAcess",
        start: "55% 55%",
        end: "140% 50%",
        scrub: 1,
        markers: true,
        scroller:"body",
        pin:true,
      },
    });
    timeline
      // .to(".CameraImg", {
      //   x: "+160%",
      //   duration: 1,
      // },[])
      .to(".CameraImg", {
        gap: "5rem",
        duration: 0.2,
      },[])
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
      .to(".CameraImg", {
        gap: "0rem",
        duration: 0.5,
      },[2.1])
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
          duration:0.5,
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

        t1.to(".DetailsofAccessory",{
          display:"flex",
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
    
    let XYZ = document.querySelectorAll(".Heading")
    XYZ.forEach((item,index)=>{
      item.addEventListener("click",()=>{
        setlistArrIndex(index);
        document.querySelector(".ImgDetail").style.opacity = 1;
        document.querySelector(".ImgDetail").style.opacity = 1;
      }
      )
    })
    let clA = document.querySelector(".CloseAccessoryList");
    clA.addEventListener("click", () => {
      let t5 = gsap.timeline();
      t5.to(".ImgDetail",{
        opacity:0
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
          display:"none",
        });
    });
  }, []);



  return (
    <>
          <div className="NikonWrapAcess">
            <div className="DetailsofAccessory">
              <div className="listDetail">
              <IoMdClose className="CloseAccessoryList" />
                <span className="Heading">
                  <summary>
                    <div className="overlay">Speedlight</div>
                    Speedlight
                  </summary>
                </span>
                <span className="Heading">
                  <summary>
                    <div className="overlay">Filter</div>
                    Filter
                  </summary>
                </span >
                <span className="Heading">
                  <summary>
                    <div className="overlay">Battery</div>
                    Battery
                  </summary>
                </span>
                <span className="Heading">
                  <summary>
                    <div className="overlay">Charger</div>
                    Charger
                  </summary>
                </span>
              </div>
              <div className="ImgDetail">
                <AccessoryProduct Name = {ListArr[listArrIndex].prodList[0].Name} />
                <AccessoryProduct Name = {ListArr[listArrIndex].prodList[1].Name} />
                <AccessoryProduct Name = {ListArr[listArrIndex].prodList[2].Name} />
                <AccessoryProduct Name = {ListArr[listArrIndex].prodList[3].Name} />
                <AccessoryProduct Name = {ListArr[listArrIndex].prodList[4].Name} />
                <AccessoryProduct Name = {ListArr[listArrIndex].prodList[5].Name} />
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
}

export default Accessory;
