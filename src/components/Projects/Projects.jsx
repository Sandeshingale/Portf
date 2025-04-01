import React,{useRef} from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import Title from '../reusable/Title'
export default function Projects() {
  const projects=[
    {
        title:'Attendance Autmation System',
        description:'The main goal of this project was to create a digital solution that automates the process of tracking attendance for students in an organization or educational institution.',
        image:'/project1.png',
        github:'https://github.com/Sandeshingale/Attendance-Automation_system'
    },
    {
        title:'EverLast',
        description:'I built a scalable, responsive, and real-time dating app that allows users to create profiles, find matches, and chat instantly.Developed with React.js, Redux, and Tailwind CSS for a seamless UI/UX',
        image:'/project2.png',
        live:'https://evermatch-4.onrender.com',
        github:'https://github.com/Sandeshingale/EverMatch/tree/master'
    },
    {
        title:'CryptoScreener',
        description:'The Crypto Screener App is a web application that allows users to monitor, filter, and analyze  cryptocurrency data. Key features include dynamic search, price filtering, chart visualization, watchlists, and percentage change calculations.',
        image:'/project3.png',
        live:'https://crypto-screener-phi.vercel.app/',
        github:'https://github.com/Sandeshingale/Crypto-Screener'
    },
    {
        title:'Mockmate-ai',
        description:'An AI-driven platform that helps users prepare for job applications and interviews by providing:Mock Interview Preparation ,Resume Builder,Cover Letter Builder Using AI.',
        image:'/project5.png',
        live:'https://mockmate-ai-wjvx.vercel.app/',
        github:'https://github.com/Sandeshingale/Mockmate-AI'
        
    },
    {
        title:'Portfolio',
        description:'"A personal Animated portfolio website built using React.js and frame motion to showcase my skills, projects, and experiences. It features a responsive design, interactive animations, and links to my social profiles and GitHub repositories.',
        image:'/project4.png',
        github:'https://github.com/Sandeshingale/Portf'
    }
  ]
  const carouselRef=useRef(null)
  
  const carouselVariants={
    hidden:{opacity:0},
    visible:{
        opacity:1,
        transition:{
            staggerChildren:0.2
        }
    }
  }
    return (
        <section id='projects'
        className='min-h-screen py-20 px-6 sm:px-8 lg:px-12 xl:px-16 relative overflow-hidden z-[999]'>
            <Title label='My Projects'/>
            {/**Carousel container */}
            <motion.div
            ref={carouselRef}
            initial='hidden'
            whileInView='visible'
            viewport={{once:true,amount:0.8}}
            variants={{carouselVariants}}
            className='flex overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-8 pb-8 mt-20'
            >
                {projects.map((project,index)=>(
                    <motion.div
                    key={index}
                    className='flex-shrink-0 w-80 snap-center'
                    variants={{
                        hidden:{opacity:0,x:-50},
                        visible:{opacity:1,x:0,transition:{duration:0.8}}
                    }}
                    >
                    <ProjectCard project={project}/>
                    </motion.div>                        
                ))}
             
             </motion.div> 

        </section>
  )
}
