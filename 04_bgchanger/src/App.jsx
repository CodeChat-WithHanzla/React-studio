import { useState } from 'react'


function App() {
  const [color, setcolor] = useState('white')
  const colors = [
  {name:'Green',hex:'#052e16',class:'bg-green-950'},
  {name:'Pink',hex:'#701A75',class:'bg-pink-950'},
  {name:'Blue',hex:'#081630',class:'bg-blue-950'},
  {name:'Purple',hex:'#2E1048',class:'bg-purple-950'},
    
  ]
  return (
    <div className='w-screen h-screen' style={{backgroundColor:color}}>
      <div className='p-4 text-2xl  shadow-xl flex justify-center'><h1 className='bg-gray-950 p-4 rounded-xl shadow-xl'>Bgc Changer App</h1></div>
      
      <div className='p-4 flex justify-center absolute bottom-3 w-screen shadow-xl mb-10' >
      <div className='flex justify-center items-center rounded-xl  bg-gray-950 p-5 gap-5'>
        {colors.map((c)=>{
         return (
          <div key={c.name} onClick={()=>setcolor(c.hex)} className='bg-white p-4 rounded-full'>
          <p className={`${c.class} p-4 rounded-full shadow-xl cursor-pointer`}>{c.name}</p>
         </div>
         ) 
        })}
        </div> 
      </div>

    </div>
  )
}

export default App
