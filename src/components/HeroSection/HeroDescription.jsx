import React from 'react'
import { motion } from 'framer-motion'
import Button from '../reusable/Button'
const description='I am a passionate Full Stack Developer skilled in building dynamic and responsive web applications. Proficient in technologies like HTML, CSS, JavaScript, React.js, Node.js, and MySQL, I enjoy creating seamless user experiences and efficient backend systems.'
{/* for mobile*/}
export function HeroDescription()  {
  return (
    <div className=' bg-primary w-full rounded-3xl border border-secondary p-5'>
      <div className='text-center text-white'>
        <span className='ms-1 text-2xl font-extrabold'>Full Stack Developer</span>

      </div>
        <p className='text-white font-bold mt-6 p-2'>
            {description.split(" ").map((el,i)=>(
                <motion.span
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.25,delay:i/10}}
                key={i}
                >
                    {el}{"  "}

                </motion.span>
            ))}
        </p>
            <div className='flex justify-center mt-6'>
            <Button>Hire Me</Button>
            </div>
    </div>
  )
}

{/* for mobile*/}
export function HeroDescriptionDesktop  (){
    return(
        <div className=' bg-primary w-full rounded-3xl border border-secondary p-5'>
        <div className='text-center text-white'>
        <span className='ms-1 text-x1 font-extrabold'>Full Stack Developer</span>

      </div>
        <p className='text-white font-bold mt-8 p-1'>
            {description.split(" ").map((el,i)=>(
                <motion.span
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.25,delay:i/10}}
                key={i}
                >
                    {el}{"  "}

                </motion.span>
            ))}
        </p>
        <div className='flex justify-center mt-8'>
            <Button>Hire Me</Button>
            </div>
    </div>
    )
}