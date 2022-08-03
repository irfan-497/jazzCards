import React from 'react'
import './Card.css';
// import Signin from './Signin/Signin';
function Card({product}) {
  console.log(product)
  return (
    <> 
    <div className='mains'>
    <h3>
      {product.Description}
    </h3>

    <h2>
    {product.name}
    </h2>

    <h4>
    {product.jazzMinutes}
    </h4>

    <h4>
    {product.jazzSMS}
    </h4>

    <h4>
    {product.jazzMB}
    </h4>

    <h5>
      {product.button}
    </h5>

    {  <img src={product.img}>
    </img> } 
    </div>
  
    </>
  )
}

export default Card