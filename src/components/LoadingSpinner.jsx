import React from 'react'
import { motion } from 'framer-motion'
export default function LoadingSpinner() {
  const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "First, solve the problem. Then, write the code.",
    "Experience is the name everyone gives to their mistakes."
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const Variants={
    hidden:{opacity:0,scale:0,rotate:0},
    visible:(i)=>({
        opacity:1,
        scale:1,
        rotate:i*72,
        transition:{delay:i*0.2,duration:0.8,ease:'easeOut'}
    }),
    hover:{
        scale:1.2,
        rotate:[0,360],
        transition:{delay:2,repeat:Infinity,ease:''
        }
    }

  }
    return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-b from-[#28627c] to-[#1a3a4a] relative overflow-hidden'>
      {[...Array(5)].map((_,i)=>(
        <motion.div 
        key={i}
        custom={i}
        variants={Variants}
        initial='hidden'
        animate='visible'
        whileHover='hover'
        className='absolute w-28 h-28 bg-gradient-to-b from-[#fba3c7] to-[#ff6b9c] rounded-full shadow-[0_0_20px_10px_rgba(251,163,199,0.4)] top-[50%] left-[50%] origin-center'
        style={{translate:'-50% -50%'}}
        />
      ))}

      {/** small circle around loader */}
      {[...Array(20)].map((_,i)=>(
        <motion.div
        key={i}
        className='absolute w-2 h-2 bg-white rounded-full'
        initial={{opacity:0,y:0,x:0}}
        animate={{
            opacity:[0,1,0],
            y:[0,-100,0],
            x:[0,Math.random()*100-50,0]
        }}
        transition={{
            duration:Math.random()*2+1,
            delay:Math.random(),
            repeat:Infinity,
            ease:'easeInOut'
        }}
        style={{
            top:`${Math.random()*100}%`,
            left:`${Math.random()*100}%`,

        }}
        />
      ))}
      <motion.p
      className='absolute bottom-20 text-white text-2xl font-bold'
      initial={{opacity:0,y:40}}
      animate={{opacity:1,y:0}}
      transition={{delay:1,duration:0.8,ease:'easeOut'}}
      >
        {randomQuote}
      </motion.p>
    
    </div>
  )
}
