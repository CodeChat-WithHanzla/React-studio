import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children,authenticationReq=true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state=>state.auth.status)
    useEffect(()=>{
        console.log('authStatus:', authStatus);
        if (authenticationReq && authStatus !==authenticationReq) {
            navigate('/login')
        }
        else if(!authenticationReq && authStatus!==authenticationReq){
            navigate('/')
        }
        setLoader(false)
    },[authStatus,navigate,authenticationReq])
  return loader ? <h1>Loading...</h1> : <>{children}</>
}
