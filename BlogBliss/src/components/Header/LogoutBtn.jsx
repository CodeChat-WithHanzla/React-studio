import React from 'react'
import {useDispatch} from 'react-redux'
import { logout } from '../../store/authSlice'
import auth from '../../lib/auth'
function LogoutBtn() {
  const dispatch = useDispatch()
  const LogoutHandler = () =>{
    auth.Logout().then(()=>dispatch(logout())).catch((error)=>console.error(error))
  }
  return (
    <button
      onClick={LogoutHandler}
      type="button"
      className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-red-800 hover:text-white"
    >
      Log Out
    </button>
  )
}

export default LogoutBtn