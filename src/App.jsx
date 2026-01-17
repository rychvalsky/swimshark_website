import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Classes from './pages/Classes'
import About from './pages/About'
import Schedule from './pages/Schedule'
import Contact from './pages/Contact'
import Apply from './pages/Apply'
import ApplyKids from './pages/ApplyKids'
import ApplyCamp from './pages/ApplyCamp'
import SummerCamp from './pages/SummerCamp'
import KidsCourses from './pages/KidsCourses'
import Admin from './pages/Admin'
import Photos from './pages/Photos'

import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-text-main">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/apply-kids" element={<ApplyKids />} />
          <Route path="/apply-camp" element={<ApplyCamp />} />
          <Route path="/camps" element={<SummerCamp />} />
          <Route path="/kids-courses" element={<KidsCourses />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
