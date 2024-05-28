import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Counter() {
  const [count, setCount] = useState(15)
  const addVal=()=>{
    setCount(count + 1)
    }

  const subVal=()=>{
    setCount(count - 1) 
    }
  

  return (
    <>
    <h1>Code Chat with Hanzla</h1>
    <h2>Counter : {count}</h2>
    <button onClick={addVal}>Add</button>
    <br />
    <br />
    <button onClick={subVal}>Sub</button>
    </>
  )
}

export default Counter
