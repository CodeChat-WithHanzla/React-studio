import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';

function Accordion({id,subtopic,wholetopic}) {
  const [active, setActive] = useState(open);  
  return (
    <div className='w-[500px] flex flex-col items-center my-2' key={id}>
          <div className='flex items-center gap-4 mb-4'>
            <h1 className='text-2xl font-bold'>{subtopic}</h1>
            <button 
              onClick={() => setActive(active === null ? true : null)} 
              className='text-2xl p-2 bg-gray-700 rounded hover:bg-gray-600 transition'
            >
              {!active ? <FaPlus /> : <FaMinus />}
            </button>
          </div>

          {active && (
            <div className='p-4 bg-gray-800 rounded'>
              <p>
                {wholetopic}              
              </p>
            </div>
          )}
        </div>
  )
}

export default Accordion