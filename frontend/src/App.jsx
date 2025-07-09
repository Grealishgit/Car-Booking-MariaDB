import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Service from './pages/Service'
import Locations from './pages/Locations'
import Contact from './pages/Contact'



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )

}

export default App
