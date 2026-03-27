import Contact from "./components/Contact"
import Projects  from "./components/Projects"
import Articles  from "./components/Articles"
import About  from "./components/About"
import Skills  from "./components/Skills"
import NavBar  from "./components/NavBar"
import Hero from "./components/Hero"



function App(){
  return(
    <>
    
    <NavBar />
    
    <Hero />
    
    <About />
    <Skills />
    <Projects />
    <Articles />
    <Contact />

    
     </>
    
  );
}

export default App