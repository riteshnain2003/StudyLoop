import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from "./pages/Home"
import "./App.css"
import Navbar from './components/core/common/Navbar'
import Signup from './pages/Signup'
import Login from './pages/Login'
import About from './pages/About'



function App() {
 

  return (
    <div className='w-full min-h-screen bg-gray-950 flex flex-col font-Inter'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </div>
  )
}

export default App
