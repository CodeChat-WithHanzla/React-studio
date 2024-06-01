import { useState,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState('')
  const passwordRef = useRef(null)
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,12)
    window.navigator.clipboard.writeText(password)
  },[password])
  const passwordGenerator = useCallback(()=>{
  let pass = ''
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  if(numberAllowed) str +='0123456789'
  if(charAllowed) str += '!@#$%^&*()_+[]{}|;:'
  for(let i=0;i<length;i++){
    let char = Math.random()*str.length + 1
    pass += str.charAt(char)
  }
  setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      
       <div className=' bg-gray-800 p-20 flex justify-center items-center flex-col gap-7  rounded-md shadow-xl '>
       <h1 className='text-3xl text-center text-white'>Password Generator</h1>
       
       <div className=' flex mb-5'>
       <input type="text" placeholder='Password' className='outline-none p-2 ' readOnly value={password} ref={passwordRef}/>
       <button className='bg-sky-500 hover:bg-sky-700 p-2 text-white' onClick={copyPasswordToClipboard}>Copy</button>
       </div>

       <div className='flex gap-3 text-orange-600 text-xl'>
       <input type="range" name="length"  min={8} max={12} className='cursor-pointer' value={length} onChange={(e)=>{setLength(e.target.value)}}/>
       <label htmlFor="length">Length : {length} </label>
       <input type="checkbox" name="number" className='cursor-pointer' defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
       <label htmlFor="number">Number</label>  
       <input type="checkbox" name="character" className='cursor-pointer' defaultChecked={charAllowed} onChange={()=>{setCharAllowed((prev)=>!prev)}}/>
       <label htmlFor="character">Character</label>   
      </div> 
       
      
      </div>                             
    </>
  )
}

export default App
