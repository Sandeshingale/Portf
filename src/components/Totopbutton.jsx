import React,{useState,useEffect} from 'react'
import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
export default function Totopbutton() {
  
    const[isVisible,setIsVisible]=useState(false)

  useEffect(()=>{
    const toggleVisibility=()=>{
        if(window.scrollY > 200){
            setIsVisible(true)
        }
           else{
            setIsVisible(false)
            }
    }
    window.addEventListener('scroll',toggleVisibility)
    return()=>window.removeEventListener('scroll',toggleVisibility)
  },[])

  const scrollToTop=()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
  }
    return (
    <motion.button
    className={`fixed z-[999] bottom-8 w-[4rem] h-[4rem] right-8 p-4 bg-gradient-to-b from-[#00b4db] to-[#0083b0] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow
        ${
        isVisible ? 'block' : 'hidden'
        }`}
        onClick={scrollToTop}
        initial={{opacity:0,y:20}}
        animate={{opacity:isVisible ? 1:0,y:isVisible ?0:20}}
        transition={{duration:0.3,ease:'easeOut'}}
        aria-label='Go To top'
        role="button"
    >
       <ArrowUp size={26} />
    </motion.button>
  )
}
