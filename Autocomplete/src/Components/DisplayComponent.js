import React from 'react'
import './DisplayComponent.css'
export default function DisplayComponent({product}) {
  return (
    <div className='displayComponentContainer'>
      <h1>{product?.productName}</h1>
      <div>
      <img src={product?.image} alt={product.productName}></img>
      </div>
    </div>
  )
}
