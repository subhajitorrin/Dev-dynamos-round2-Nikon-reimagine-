import React from 'react'
import './AccessoryProduct.css'
import ButtonComponent from "./spacebutton/ButtonComponent";
function AccessoryProduct({Name,bgimg}) {
  console.log(bgimg);
  return (
    <>
    <div className="productCard" >
        <div className="imgLink" style={{backgroundImage:`url(${bgimg})`}}>
    {/* <img src={bgimg} alt="" /> */}
        </div>
        <span className='DetailsProduct'>{Name}</span>
        <ButtonComponent />
    </div>
    </>
  )
}

export default AccessoryProduct