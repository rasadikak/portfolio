import { useState } from 'react';
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import About from "./components/About";
import OpenSource from './components/OpenSource';
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Education from "./components/Education";
import BackgroundAnimation from "./components/BackgroundAnimation";

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('light');
  };

  return (
    <>
      {/* Interactive cursor & stardust animation in the background */}
      <BackgroundAnimation />

      <NavBar toggleTheme={toggleTheme} isDark={isDark} />
      <Hero />
      <About />
      <Education />
      <Projects />
      <OpenSource />
      <Articles />
      <Contact />
      <Footer />
    </>
  );
}

export default App;