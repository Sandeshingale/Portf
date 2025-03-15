import React from 'react'
import { motion } from 'framer-motion'
export default function HeroText() {
  return (
    <>
    <motion.h1 className='pt-4 text-white font-bold text-4xl md:text-6xl lg:text-8xl xl:text-9xl'    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{duration:1,ease:'easeOut'}}
    >
        Sandesh{' '}
        <motion.span
          style={{
            WebkitTextFillColor:'transparent',
            WebkitTextStroke:'3px white',
          }}  

          className='drop-shadow-[1px_1px_2px_rgb(251,163,199,1)]'
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{delay:0.3,duration:1,ease:"easeOut"}}
        >
            Ingale
        </motion.span>
    </motion.h1>

    <motion.div
    className='flex justify-center lg:justify-start space-x-4 mt-8'
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{duration:1,ease:'easeOut'}}
    >
        <a href='https://github.com/Sandeshingale' target='_blank' rel="noopener noreferrer">
        <img src='/github.png' alt='Github' className='w-10 h-10 md:w-12 md:h-12 hover:opacity-80'/>
        </a>
        <a href='https://t.me/Sandeshingale10' target='_blank' rel="noopener noreferrer">
        <img src='/telegram.png' alt='Telegram' className='w-10 h-10 md:w-12 md:h-12 hover:opacity-80'/>
        </a>
        <a href='https://www.linkedin.com/in/sandesh-ingale-4419ba211/
' target='_blank' rel="noopener noreferrer">
          <img src='/linkedin.png' alt='Linkedin' className='w-10 h-10 md:w-12 md:h-12 hover:opacity-80'/>          
        </a>        
        <a href='mailto:ingalesandesh7@gmail.com' >
        <img src='/gmail.png' alt='Gmail' className='w-10 h-10 md:w-12 md:h-12 hover:opacity-80'/>
        </a>
    </motion.div>
    </> 
     )
}


