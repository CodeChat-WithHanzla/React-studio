import React from 'react'
import StarRating from './StarRating'
function App() {
  
  return (
    <div className='w-screen min-h-screen bg-gray-900 '>
    <div className='flex w-screen justify-center '>
    <StarRating noOfStars={5}/>
    </div>
    </div>
  )
}

export default App