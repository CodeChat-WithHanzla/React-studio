import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function login() {
    const [user,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit=(e)=>{
     e.preventDefault();
     setUser({ username: user });
    }
  return (
    <div>
    <h2>login</h2>
    <input type="text" placeholder='username' value={user} onChange={(e)=>setUserName(e.target.value)}/>
    <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button onClick={handleSubmit}>Sumbit</button>

    </div>
  )
}

export default login