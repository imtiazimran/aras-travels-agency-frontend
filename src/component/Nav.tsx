/* eslint-disable @typescript-eslint/no-explicit-any */

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  motionValue,
  useTransform,
} from "framer-motion";
import AuthBtn from "../utils/GoogleAuthBtn";
import logo from "../assets/img/avlogo.png";
import useScrolledValue from "../utils/useScroll";

const Navbar = () => {
  const [scrollY] = useScrolledValue();
  const motionYValue = motionValue(scrollY);
  const background = useTransform(
    motionYValue,
    [0, 300],
    ["rgba(0,0,0,0)", "rgba(0,0,0,1)"]
  );
  const opacity = useTransform(motionYValue, [0, 300], [0, 1]);
  const boxShadow = useTransform(
    motionYValue,
    [0, 300],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 12px rgba(0,0,0,0.3)"]
  );

  return (
    <nav
      style={{
        background: background as unknown as string,
        opacity: opacity as unknown as string,
        boxShadow: boxShadow as unknown as string,
      }}
      className={`${
        scrollY > 800 ? " bg-white bg-opacity-25" : "bg-transparent"
      } flex w-full px-4 hover:shadow-lg transition-all duration-700  py-3 fixed top-0 items-center justify-between z-50 `}
    >
      <div className="z-50">
        <img className="w-24" src={logo} alt="" />
      </div>
      <SlideTabs />
      <div className="hidden md:flex">
        <AuthBtn />
      </div>
      <div className="md:hidden ">
        <MobileNav />
      </div>
    </nav>
  );
};

const MobileNav = () => {
  const [active, setActive] = useState(false);
  const VARIANTS = {
    top: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        top: ["35%", "50%", "50%"],
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        top: ["50%", "50%", "35%"],
      },
    },
    middle: {
      open: {
        rotate: ["0deg", "0deg", "-45deg"],
      },
      closed: {
        rotate: ["-45deg", "0deg", "0deg"],
      },
    },
    bottom: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        bottom: ["35%", "50%", "50%"],
        left: "50%",
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        bottom: ["50%", "50%", "35%"],
        left: "calc(50% + 10px)",
      },
    },
  };

  const parentVariant = {
    closed: {
      height: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      height: "100vh",
      transition: {
        duration: 0.5,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    exit: {
      height: 0,
      transition: {
        duration: 0.1,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const childVariant = {
    closed: {
      y: 0,
      opacity: 0,
    },
    open: {
      y: 300,
      opacity: 1,
    },
  };
  return (
    <>
      <MotionConfig
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <motion.button
          initial={false}
          animate={active ? "open" : "closed"}
          onClick={() => setActive((pv) => !pv)}
          className={`${
            active ? "bg-black/50" : "bg-white/0 hover:bg-white/20 "
          } relative z-50 size-10 rounded-full  transition-colors `}
        >
          <motion.span
            variants={VARIANTS.top}
            className="absolute h-1 w-10 bg-white"
            style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
          />
          <motion.span
            variants={VARIANTS.middle}
            className="absolute h-1 w-10 bg-white"
            style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
          />
          <motion.span
            variants={VARIANTS.bottom}
            className="absolute h-1 w-5 bg-white"
            style={{
              x: "-50%",
              y: "50%",
              bottom: "35%",
              left: "calc(50% + 10px)",
            }}
          />
        </motion.button>
      </MotionConfig>
      <AnimatePresence>
        {active && (
          <motion.div
            className="absolute right-0 top-0 z-0 origin-top-right h-screen w-full bg-gradient-to-b from-slate-200 via-purple-500 to-pink-500 flex justify-center items-center font-serif"
            variants={parentVariant}
            initial="closed"
            animate="open"
            exit="exit"
          >
            <motion.ul
              variants={parentVariant}
              initial="closed"
              animate="open"
              exit="exit"
              className="text-5xl text-center flex flex-col gap-4 skew-x-1 uppercase"
            >
              <motion.li variants={childVariant} whileTap={{
                scale: 1.2,
                transition: {
                  duration: 0.2,
                  ease: "easeInOut"
                }
              }}>Home</motion.li>
              <motion.li variants={childVariant} whileTap={{
                scale: 1.2,
                transition: {
                  duration: 0.2,
                  ease: "easeInOut"
                }
              }}>About</motion.li>
              <motion.li variants={childVariant} whileTap={{
                scale: 1.2,
                transition: {
                  duration: 0.2,
                  ease: "easeInOut"
                }
              }}>Projects</motion.li>
              <motion.li variants={childVariant} whileTap={{
                scale: 1.2,
                transition: {
                  duration: 0.2,
                  ease: "easeInOut"
                }
              }}>Contact</motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  return (
    <ul
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      className=" relative mx-auto hidden md:flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>About</Tab>
      <Tab setPosition={setPosition}>Projects</Tab>
      <Tab setPosition={setPosition}>Contact</Tab>

      <motion.li
        animate={{
          left: position.left,
          width: position.width,
          opacity: position.opacity,
        }}
        className="absolute z-0 h-9  rounded-full bg-black"
      />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition: setPosition,
}: {
  children: React.ReactNode | string;
  setPosition: any;
}) => {
  const ref = useRef<HTMLLIElement>(null!);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:text-base"
    >
      {children}
    </li>
  );
};

export default Navbar;
