import React from 'react'
import { FaStarHalfAlt, FaStar } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'

const Star = ({stars, reviews}) => {

  const ratingStar =  Array.from({ length:5 }, (elem, index) => {
let number = index + 0.5;
return <span key={index}>
{
    stars >= index + 1 ? <FaStar/> : stars >= number ? <FaStarHalfAlt/> : <AiOutlineStar/> 
}
</span>

    })
  return (
    <div className="icon_style mb-3">    
        {ratingStar}
        <span className='mx-2'>({reviews} Ratings)</span>
    </div>
  )
}
 
export default Star