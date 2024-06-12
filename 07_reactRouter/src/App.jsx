import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <h1 className='bg-green-700 p-2 text-white text-center'>React Router</h1>
    <Header/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
