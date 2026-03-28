import {useState}  from 'react'
import Contact from "./components/Contact"
import Projects  from "./components/Projects"
import Articles  from "./components/Articles"
import About  from "./components/About"

import NavBar  from "./components/NavBar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"



function App(){

  const [isDark, setIsDark]= useState(true)
  const toggleTheme= ()=>{
    setIsDark(!isDark)
    document.documentElement.classList.toggle('light')
  }
  return(
    <>
    
    <NavBar  toggleTheme={toggleTheme} isDark={isDark}/>
     <Hero />
    <About />
    <Projects />
    <Articles />
    <Contact />
    <Footer/>

    
     </>
    
  );
}

export default App