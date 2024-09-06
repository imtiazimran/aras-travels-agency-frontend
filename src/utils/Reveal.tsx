import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Reveal = ({children, width = 'fit-content', }: {children: React.ReactNode, width?: "fit-content" | "100%"}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: false});
    const AnimationController = useAnimation();
    const revealControl = useAnimation();
    
    
    
    const variants = {
        initial: {
            opacity: 0,
            y:75
        },
        animate: {
            opacity: 1,
            y:0,
            transition: {
                duration: 1,
                delay: 0.25
            }
        }
    };

    const overlayVariants = {
        initial: {
            left: 0
        },
        animate: {
            left: "100%",
            transition: {
                duration: 0.5,
                delay: 0.25,
                ease: "easeInOut"
            }
        }
    }

    useEffect(() => {
        if(isInView){
            AnimationController.start("animate");
            revealControl.start("animate");
        }
    }, [AnimationController, isInView, revealControl]);
  return (
    <div ref={ref} className={`overflow-hidden ${width} relative`}>
      <motion.div
        variants={variants}
        initial="initial"
        animate={AnimationController}
      >
        {children}
      </motion.div>
      <motion.div
        variants={overlayVariants}
        initial="initial"
        animate={revealControl}
        className="absolute top-1 bottom-1 left-0 right-0  bg-gradient-to-r from-green-300 to-indigo-300  z-50"
      />
    </div>
  );
};

export default Reveal;
