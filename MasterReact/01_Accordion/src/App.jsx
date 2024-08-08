import React, { useState } from 'react';
import Accordion from './Accordion';
import data from './data';
function App() {
  
  return (
    <div className='w-screen min-h-screen bg-gray-900 text-white flex justify-center items-center py-36 overflow-hidden'>
      <div className='mx-auto p-4 flex flex-col justify-center items-center'>
      
      <div className='flex flex-col w-full gap-4 overflow-y-auto'>
      {data && (
        data.map((each)=>(
          <Accordion key={each.id} subtopic={each.subtopic} wholetopic={each.wholetopic}/>
        ))
      )}
      </div>

      
      </div>
    </div>

    
  );
}

export default App;
