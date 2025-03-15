import React from 'react'
import Title from '../reusable/Title'
import Experience from './Experience'
import Education from './Education'
import Button from '../reusable/Button'
export default function About() {
  return (
    <section id='about' className='min-h-screen py-20 px-6 sm:px-8 lg:px-12 x1:px-16 relative z-[999] overflow-hidden'>
        <div className='max-w-7xl max-auto'>
            <Title label='About Me'/>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20'>
                <Experience/>
                <Education/>
            </div>
        <a href='/Sandesh_ingale.pdf' download className='mt-20 flex justify-center'>
        <Button>Resume</Button>
        </a>
        </div>
    </section>
  )
}


