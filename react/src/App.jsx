import Contact from "./components/Contact"
import Projects  from "./components/Projects"
import Articles  from "./components/Articles"
import About  from "./components/About"

import NavBar  from "./components/NavBar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"



function App(){
  return(
    <>
    
    <NavBar />
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