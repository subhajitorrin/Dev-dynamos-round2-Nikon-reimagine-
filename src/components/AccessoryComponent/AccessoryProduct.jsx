import React from 'react'
import './AccessoryProduct.css'
import ButtonComponent from "./spacebutton/ButtonComponent";
function AccessoryProduct({Name}) {
  return (
    <>
    <div className="productCard">
        <div className="imgLink"></div>
        <span className='DetailsProduct'>{Name}</span>
        <ButtonComponent />
    </div>
    </>
  )
}

export default AccessoryProduct