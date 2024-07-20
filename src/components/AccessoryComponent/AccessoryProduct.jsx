import React from 'react'
import './AccessoryProduct.css'

function AccessoryProduct({Name}) {
  return (
    <>
    <div className="productCard">
        <span>{Name}</span>
    </div>
    </>
  )
}

export default AccessoryProduct