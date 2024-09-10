import { motion } from "framer-motion";

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "circIn", // Ensure this is a valid easing value
      repeat: Infinity,
    },
  },
};

// Define the BarLoader component
export const BarLoader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <motion.div
        transition={{
          staggerChildren: 0.25,
        }}
        initial="initial"
        animate="animate"
        className="flex gap-2" // Adjust gap if needed
      >
        <motion.div
          variants={variants}
          className="h-12 w-2 bg-white"
        />
        <motion.div
          variants={variants}
          className="h-12 w-2 bg-white"
        />
        <motion.div
          variants={variants}
          className="h-12 w-2 bg-white"
        />
        <motion.div
          variants={variants}
          className="h-12 w-2 bg-white"
        />
        <motion.div
          variants={variants}
          className="h-12 w-2 bg-white"
        />
      </motion.div>
    </div>
  );
};
