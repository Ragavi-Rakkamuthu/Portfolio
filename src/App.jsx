import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Project from './Components/Projects/Project'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Project/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App
