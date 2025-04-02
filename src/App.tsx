import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import AboutUs from './components/AboutUs'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<AboutUs />} />
    </Routes>
  )
}

export default App