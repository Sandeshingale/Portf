//import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js"

export const fadeInUp={
    hidden:{opacity:0,y:50},
    visible:{
        opacity:1,
        y:0,
        transition:{duration:0.8,ease:'easeOut'}
    }
}

export const cardHover={
    hover:{
        y:-10,
        scale:1.02,
        boxShadow:'0px 20px 40px rgba(255,105,100,0.3)',
        transition:{type:'spring' ,stiffness:300}
    }
}


export const staggerContainer={
    hidden:{opacity:0},
    visible:{
        opacity:1,
        transition:{staggerChildren:0.2}
    }
}