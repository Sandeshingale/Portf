import React from 'react'
import Button from '../reusable/Button'
import { motion } from 'framer-motion'
//import Projects from './Projects'
export default function ProjectCard({project}) {
  const cardVariants={
    hover:{
        y:10,
        scale:1.02,
        boxShadow:'0px 20px 40px rgba(255,105,180,0.3)',
        transition:{type:'spring',stiffness:300}
    }
  }
  
    return (
    <motion.div
    whileHover='hover'
    variants={cardVariants}
    className='bg-white bg-opacity-10 background-blur-x1 rounded-2xl p-6 border border-white border-opacity-20 shadow-lg overflow-hidden relative'
    >
        {/** Gradient border effect */}
    <div className='absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 hover:opacity-20 transition-opacity duration-300 -z-10'/>
        {/** Project Image */}
        <div className='w-full h-48 rounded-lg overflow-hidden mb-6'>
            <img src={project.image} alt={project.title} className='w-full h-full object-cover'/>
        </div>  
        {/** Project title */}
        <h3 className='text-2xl font-bold text-white mb-2'>
        {project.title}
        </h3>
        {/** Project Description*/}
        <p className='text-gray-300 mb-4'>{project.description}</p>
        {/** Project Description*/}
        <div className='flex gap-4'>    
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            <Button>View Project</Button>
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Button>GitHub</Button>
          </a>
        )}
        </div>
    </motion.div>
  )
}
