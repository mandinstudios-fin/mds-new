import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import AboutUs from './components/AboutUs'
import BuildWithUs from './components/BuildWithUs'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/build-with-us' element={<BuildWithUs />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}

export default App