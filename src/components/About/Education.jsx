import React from 'react'
import { motion } from 'framer-motion'
import { cardHover, fadeInUp, staggerContainer } from './animations'
export default function Education() {
   
  const education=[
    {
        degree:'Masters of Computer Applications',
        university:'Fergusson College',
        duration:'2021-2023',
    },
    {
        degree:'Bachelors of Computer Science',
        university:'Fergusson College',
        duration:'2018-2021',
    }
  ]
    return (
    <motion.div variants={staggerContainer}>
      <h3 className='text-2xl font-bold text-white mb-6'>Education</h3>
        <div className='space-y-6'>
            {education.map((edu,index)=>(
                <motion.div
                key={index}
                initial='hidden'
                whileInView='visible'
                whileHover='hover'
                viewport={{once:true,amount:0.5}}
                variants={{...fadeInUp,...cardHover}}
                className='bg-white bg-opacity-10 backdrop-blur-xl rounded-2xl p-6 border border-white border-opacity-20 shadow-lg relative overflow-hidden'
                >
                    <h4 className='text-2x1 font-bold text-white'>{edu.degree}</h4>
                    <p className='text-gray-300 text-lg'>{edu.university}</p>
                    <p className='text-gray-400 text-sm mb-4'>{edu.duration}</p>
                    
                </motion.div>
            ))}
        </div>
    </motion.div>
  )
}
