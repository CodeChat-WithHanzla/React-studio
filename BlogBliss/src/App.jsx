import React,{ useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import services from './lib/auth'
import {login,logout} from './store/authSlice'
import {Header,Footer} from './components/index'
import {Outlet} from 'react-router-dom'

function App() {
  console.log('hello word')
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(()=>{
    services.GetCurrentUser()
    .then((userData)=>{
    if(userData)
      dispatch(login({userData}))
    else 
      dispatch(logout())  
    })
    .finally(()=>setLoading(false))
  },[])
   
  return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  </div>
):(null)

  
}

export default App
