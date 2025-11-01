import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Login from './pages/Login'
import SignUp from './pages/SignUp'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App