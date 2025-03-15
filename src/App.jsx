import ThreeBackground from "./components/ThreeBackground";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer";
import Totopbutton from "./components/Totopbutton";
import { useState,useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
function App() {
  const[isLoading,setIsLoading]=useState(true)

  useEffect(()=>{
    const timer=setTimeout(()=>{
      setIsLoading(false)
    },3000)
    return ()=>clearTimeout(timer)
  },[])
  return (
  <div className="min-h-screen">
    {isLoading ? (<LoadingSpinner/>):(<>
      <ThreeBackground/>
    <Navbar/>
    <HeroSection/>
    <About/>
    <Skills/>
    <Projects/>
    <Contacts/>
    <Footer/>
    <Totopbutton/>
    </>
      )}
    
  </div>
  )
  }

export default App;
