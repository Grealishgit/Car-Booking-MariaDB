import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Service from './pages/Service'
import Locations from './pages/Locations'
import Contact from './pages/Contact'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Login from './auth/Login'
import SignUp from './auth/SignUp'



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
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

    </>
  )

}

export default App
