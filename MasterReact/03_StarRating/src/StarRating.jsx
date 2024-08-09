import React from 'react'
import { useState } from 'react';
import {FaStar} from 'react-icons/fa'

function StarRating({noOfStars = 5}) {
const ArrayOfStars = [...Array(noOfStars)]
const [rating, setRating] = useState(0);
const [hover,setHover] = useState(0)
const handleClick = (index) => {
    setRating(index)
}
const handleMouseMove = (index) => {
    setHover(index)    
}
const handleMouseLeave = () => {
    setHover(rating)
    
    
}

  return (
    <div className='flex bg-white px-2 mt-5 rounded w-32 h-10'>
    {
       ArrayOfStars.map((_,index)=>{
        index++
       return (
        <FaStar key={index} className={index <= (hover || rating) ? 'active' : 'inactive'} size={40} onClick={()=>handleClick(index)} onMouseMove={()=>handleMouseMove(index)} onMouseLeave={handleMouseLeave}/>
       )
    }) 
    }
    </div>
    
  )
}

export default StarRating