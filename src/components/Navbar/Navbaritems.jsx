import React from 'react'
import { motion } from 'framer-motion'

const NavbarItems = () => {
    const items=[
        {name : 'About', id:'about'},
        {name : 'Skills', id:'skills'},
        {name : 'Project', id:'project'},
        {name : 'Contact', id:'contact'},
    ]
    const handleScroll=(id)=>{
        const element=document.getElementById(id)
        if(element){
            window.scrollTo({
                top:element.offsetTop -80,
                behavior:'smooth',
            })
        }
    }
    const navList={
        visible:{
            opacity:1,
            transition:{
                delayChildren:0.2,
                straggerChildren:0.07,
            }
        },
        hidden:{
            
            opacity:0,
            transition:{
                straggerChildren:0.05,
                straggerDirection:-1,
            }
        }

    }

  const navItem={
    visible:{
        y:0,
        opacity:1,
        transition:{
            y:{stiffness:1000,velocity:-100}
        }
    },
    hidden:{
        y:50,
        opacity:0,
        transition:{
            y:{stiffness:1000,velocity:-100}  
          }
    }
  }
  return(
    <motion.ul
    className="pt-[100px] px-[70px] pb-[200px] space-y-6"
    initial="hidden"
    animate="visible"
    exit="hidden"
    variants={navList}
    >
        {items.map((item)=>(
            <motion.li
            className='text-[20px] list-none text-white cursor-pointer font-bold'
            variants={navItem}
            key={item.name}
            onClick={()=>handleScroll(item.id)}
            >
                <p>{item.name}</p>

            </motion.li>
        ))}
    </motion.ul>
  )
  
}

export default NavbarItems
