import React from 'react'
import Card from './Card';
import cardData from "../Cards/Card.json"
console.log(cardData)
function Cardss() {
  return (
    <div className='main'>
    {cardData.map((product)=>{
        console.log(cardData)
      return <Card product={product} />;
    })
    }
    </div>
  )
}

export default Cardss