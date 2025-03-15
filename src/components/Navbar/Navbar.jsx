import React,{useState,useEffect,useRef} from 'react'
import NavbarItems from './Navbaritems'
import { motion,AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'
export default function Navbar()  {
    const [isToggled,setToggle]=useState(false)
    const [isPlaying,setIsPlaying]=useState(false)

    const audio = useRef(new Audio('/music2.mp3')).current
  
  useEffect(()=>{
    if(isPlaying){
        audio.play()
    }
    else{
        audio.pause()
    }
  },[isPlaying,audio])

  const navContainer={
    visible:{
        opacity:1,
        transition:{
            x:{velocity:100},
            duration:0.3
        }
    },
    hidden:{
        opacity:0,
        transition:{
            x:{velocity:100},
            duration:0.3,
        }
    }
  }
    return (
    <header className='pt-10 px-8'>
        <div className='flex justify-between w-full'>
            {/* Menu buuton*/}
            <button className='relative flex justify-center items-center w-12 h-12 rounded-full cursor-pointer z-[1000] border-none bg-primary'
            onClick={()=>setToggle(!isToggled)}
            >
            <Icon icon={isToggled ? 'line-md:close':'line-md:menu'} className='text-white text-2x1'/>
            </button>
            {/* Play and pause*/}
            <button className='relative flex justify-center items-center w-12 h-12 rounded-full cursor-pointer z-[1000] border-none bg-primary'
            onClick={()=>setIsPlaying(!isPlaying)}
            >
            <Icon icon={isPlaying ? 'line-md:play':'line-md:pause'} className='text-white text-2x1'/>
            </button>
        </div>
        <AnimatePresence>
            <div className='relative z-[9999]'>
                {isToggled &&(
                    <motion.div 
                    className='absolute z-[100] w-[250px] h-[80vh] rounded-[16px] bg-primary'
                    initial='hidden'
                    animate={isToggled ?'visible' : 'hidden'}
                    exit='hidden'
                    variants={navContainer}
                    >
                        <NavbarItems isToggled={isToggled}/>
                    </motion.div>
                )

                }
            </div>
        </AnimatePresence>

    </header>
  )
}


