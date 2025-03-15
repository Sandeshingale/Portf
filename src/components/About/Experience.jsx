import React from 'react'
import { motion } from 'framer-motion'
import { cardHover, fadeInUp, staggerContainer } from './animations'
export default function Experience() {
   
  const experience=[
    {
        title:'Software Devloper Intern',
        company:'GTL Software PVT.LTD.',
        duration:'feb 2023-july 2023',
        description:'Worked on developing and optimizing web applications using modern technologies. Gained hands-on experience in front-end and back-end development, collaborated with teams to implement new features, and contributed to improving application performance and user experience.'
    }
  ]
    return (
    <motion.div variants={staggerContainer}>
      <h3 className='text-2xl font-bold text-white mb-6'>Experience</h3>
        <div className='space-y-6'>
            {experience.map((exp,index)=>(
                <motion.div
                key={index}
                initial='hidden'
                whileInView='visible'
                whileHover='hover'
                viewport={{once:true,amount:0.5}}
                variants={{...fadeInUp,...cardHover}}
                className='bg-white bg-opacity-10 backdrop-blur-xl rounded-2xl p-6 border border-white border-opacity-20 shadow-lg relative overflow-hidden'
                >
                    <h4 className='text-2x1 font-bold text-white'>{exp.title}</h4>
                    <p className='text-gray-300 text-lg'>{exp.company}</p>
                    <p className='text-gray-400 text-sm mb-4'>{exp.duration}</p>
                    <p className='text-gray-300 '>{exp.description}</p>
                </motion.div>
            ))}
        </div>
    </motion.div>
  )
}
