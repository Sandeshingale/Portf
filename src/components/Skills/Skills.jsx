import React from 'react'
import Title from '../reusable/Title'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function Skills() {
  const Skills = [
    { name: 'C++', percentage: 60 },
    { name: 'Java', percentage: 50 },
    { name: 'React', percentage: 70 },
    { name: 'JavaScript', percentage: 70 },
    { name: 'Tailwind CSS', percentage: 60 },
    { name: 'Node.js', percentage: 50 },
    { name: 'MySQL', percentage: 80 },

  ]

  return (
    <section id='skills' className='min-h-screen py-20 px-6 sm:px-12 lg:px-12 xl:px-16 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto relative z-10'>
        <Title label='My Skills' />
        
        {/* Skills Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20'>
          {Skills.map((skill, index) => {
            const count = useMotionValue(0)
            const rounded = useTransform(count, latest => Math.round(latest))
            const spring = useSpring(count, { duration: 1.5, ease: 'easeOut' })

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={() => {
                  count.set(skill.percentage)
                  return { opacity: 1, y: 0 }
                }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
                className='flex flex-col items-center'
              >
                
                {/* Circular Progress Bar */}
                <div className='relative w-40 h-40'>
                  <svg className='w-full h-full rotate-[-90deg]' viewBox='0 0 100 100'>
                    
                    {/* Background Circle */}
                    <circle
                      cx={50} cy={50} r={45} fill='none'
                      strokeWidth={10} strokeLinecap='round' stroke='rgba(255,255,255,0.1)'
                    />
                    
                    {/* Animated Progress Circle */}
                    <motion.circle
                      cx={50} cy={50} r={45} fill='none' strokeWidth={10} strokeLinecap='round'
                      stroke='url(#gradient)'
                      strokeDasharray={283}
                      strokeDashoffset={283}
                      initial={{ strokeDashoffset: 283 }}
                      whileInView={{ strokeDashoffset: 283 - (283 * skill.percentage) / 100 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                    />

                    {/* Gradient */}
                    <defs>
                      <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
                        <stop offset='0%' stopColor='#fba3c7' />
                        <stop offset='100%' stopColor='#e95fa0' />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Animated Percentage */}
                  <div className='absolute inset-0 flex items-center justify-center text-white text-2xl font-bold'>
                    <motion.span>
                      {rounded}
                    </motion.span>
                    %
                  </div>
                </div>

                <h3 className='text-xl font-bold text-white mt-4'>{skill.name}</h3>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
