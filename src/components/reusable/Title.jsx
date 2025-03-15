import React,{useRef} from 'react'
import{motion,useInView} from 'framer-motion'
//import { label } from 'framer-motion/client'
export default function Title({label}) {
  const ref = useRef(null)
  const isInView = useInView(ref,{once:true , margin:'-100px'})
    return (
    <motion.h1
    ref={ref}
    style={{
        WebkitTextFillColor:'transparent',
        WebkitTextStroke:'3px white'
    }}    
    className='pt-4 text-white font-bold text-center text-2xl md:text-4xl lg:text-6xl x1:text-8xl  drop-shadow-[1px_1px_2px_rgb(251,163,199,1)]'
    initial={{opacity:0,y:40}}
    animate={isInView ?{opacity:1,y:0}:{opacity:0,y:40}}
    transition={{duration:1,ease:'easeOut'}}
    >
        {label}
    </motion.h1>
  )
}

 
