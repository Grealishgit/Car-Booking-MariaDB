import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Service from './pages/Service'
import Locations from './pages/Locations'
import Contact from './pages/Contact'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'



function App() {
  return (
    <>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

    </>
  )

}

export default App
