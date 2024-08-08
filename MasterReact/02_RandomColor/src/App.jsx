import React, { useState } from 'react'

function App() {
  const [bg,setBg] = useState('white')
  const randomColorGenerator = (type) => {
    if (type === 'hex') {
     let color = '#' 
     let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
     for(let i = 0 ; i < 6 ; i++){
      color += hex[Math.floor(Math.random()*hex.length)]
     } 
      return color;
    }
    else {
     let color = ''
     const r = Math.floor(Math.random()*256)
     const g = Math.floor(Math.random()*256)
     const b = Math.floor(Math.random()*256)
     color += `rgb(${r},${g},${b})`
     return color

    }
  }
  
  const handleGeneration = (type) => {
    setBg(randomColorGenerator(type))
  }
  return (
    <div className={`w-screen min-h-screen overflow-hidden`} style={{ backgroundColor: bg }}>
    
    <div className='w-full flex justify-center mt-6 gap-3'>
    <button onClick={()=>handleGeneration('rgb')} className="bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out backdrop-blur-md bg-opacity-70 hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-blue-300">
     Generate Random Rgb Color
    </button>
    <button onClick={()=>handleGeneration('hex')} className="bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out backdrop-blur-md bg-opacity-70 hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-blue-300">
     Generate Random Hex Color
    </button>
    </div>
     
     <div className='text-center mt-5'>
     <p className={`text-3xl ${bg ==='white' ? 'text-black' : 'text-white'}`}>{bg}</p>
     </div>
  
    </div>
  )
}

export default App