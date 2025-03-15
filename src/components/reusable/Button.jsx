import React ,{useState} from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import "@assets/style.css";

export default function Button({children}) {
    const[petals,setPetals]=useState([]);
    const[trigger,setTrigger]=useState(false)
    
    const handleHover=(e)=>{
        setTrigger((prev)=>!prev)
        const newPetals=Array.from({length:20},(_,i)=>({
            id:`${i}-${Date.now()}`,
            x: e.clientX-e.target.getBoundingClientRect().left,
            y: e.clientY-e.target.getBoundingClientRect().top,
            rotate: Math.random()*360,
            scale: Math.random()*0.5 + 0.5,
        }))
        setPetals(newPetals)
    }
    
    return (
    <div className='relative inline-block'>
        <motion.button
        onMouseEnter={handleHover}
        className='Button px-6 py-3 text-base font-semibold text-white bg-[#1c2a38] border-none rounded-lg outline-none relative overflow-hidden'
        whileHover={{scale:1.05}}
        transition={{type:'spring',stiffness:300,damping:20}}
        >
            {children}

        </motion.button>
      
      {/* Petal Explosion */}
      <AnimatePresence mode='popLayout'>
        {petals.map((petal)=>(
            <motion.img 
            key={petal.id}
            src="/petal.png"
            alt="petal"
            style={{position:'absolute',left:petal.x,top:petal.y,width:'25px',height:'25px',pointerEvents:'none'}}
            initial={{opacity:1,scale:0,rotate:petal.rotate}}
            animate={{
                opacity:0,
                scale:petal.scale,
                x:petal.x+(Math.random()-0.5)*200,
                y:petal.y+(Math.random()-0.5)*200,
                rotate:petal.rotate+360,
            }}
            exit={{opacity:0}}
            transition={{duration:5,ease:'easeOut'}}
            />
            
        ))}

      </AnimatePresence>
    </div>
  )
}
