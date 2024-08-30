import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Technologies from './components/Technologies'
import Exp from './components/Exp'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Proj from './components/project'
import Grid from'./components/grid'
import ReviewSection from './components/ReviewSection'


const App = () => {
  


  return (
    
    
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div></div>
      </div>  
          
          
          <div className="container mx-auto px-8">
          <Navbar/>
          <Hero/>
          <section id="tech"><Technologies/></section>
          <section id="proj"><Grid/></section>
          <section id="exp"><Exp/></section>
          <section id="edu"><Education/></section>
          <section id="con"><Contact/></section>
          <section id="rev"><ReviewSection/></section>
          
         
          </div>
          
          
    </div>
  )
}

export default App
