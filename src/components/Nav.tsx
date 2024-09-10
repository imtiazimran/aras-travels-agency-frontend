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
import Reveal from "../utils/Reveal";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Link, NavLink } from "react-router-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { persister } from "../redux/store";
import { logout, selectUser } from "../redux/features/auth/authSlice";

const Navbar = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  useOutsideClick(menuRef, () => setOpen(false));
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

  const handleLogout = () => {
    dispatch(logout());
    persister.purge();
  };

  return (
    <nav
      style={{
        background: background as unknown as string,
        opacity: opacity as unknown as string,
        boxShadow: boxShadow as unknown as string,
      }}
      className={`${
        scrollY > 800 ? " bg-white bg-opacity-75" : "bg-transparent"
      } flex w-full px-4 hover:shadow-lg transition-all duration-700  py-3 fixed top-0 items-center justify-between z-50 `}
    >
      <div className="z-50">
        <Link to="/">
          <img className="w-24" src={logo} alt="" />
        </Link>
      </div>
      <SlideTabs />
      <div className="hidden md:flex">
        {user ? (
          <div className="text-sm flex justify-center items-center gap-4">
            <button
              onClick={handleLogout}
              className="relative inline-flex  overflow-hidden rounded-full p-0.5  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Logout
              </span>
            </button>
            <img
              className="size-10 rounded-full"
              src={user?.picture}
              alt={user?.name}
            />
          </div>
        ) : (
          <AuthBtn />
        )}
      </div>
      <div className="md:hidden flex  gap-4">
        <MobileNav />
        <div className="text-sm relative ">
          {user && (
            <img
              onClick={() => setOpen((prev) => !prev)}
              className="rounded-full size-10"
              src={user?.picture}
              alt={user?.name}
            />
          )}
          <AnimatePresence>
            {open && (
              <motion.div
                ref={menuRef}
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
                exit={{
                  opacity: 0,
                  x: 100,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
                className=" bg-white/50 rounded flex flex-col gap-5 absolute top-11 p-5 right-0"
              >
                <Link
                  className="text-xl hover:bg-white/25 p-2 transition-all rounded font-semibold"
                  to={"/profile"}
                >
                  Profile
                </Link>
                <Link
                  className="text-xl hover:bg-white/25 p-2 rounded transition-all font-semibold"
                  to={"/dashboard"}
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="relative inline-flex  overflow-hidden rounded-full p-0.5  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Logout
                  </span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

const MobileNav = () => {
  const user = useAppSelector(selectUser);
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
              <motion.li
              onClick={() => setActive(false)}
                variants={childVariant}
                whileTap={{
                  scale: 1.2,
                  transition: {
                    duration: 0.2,
                    ease: "easeInOut",
                  },
                }}
              >
                <Reveal>
                  <Link to="/"> Home </Link>
                </Reveal>
              </motion.li>
              <motion.li
              onClick={() => setActive(false)}
                variants={childVariant}
                whileTap={{
                  scale: 1.2,
                  transition: {
                    duration: 0.2,
                    ease: "easeInOut",
                  },
                }}
              >
                <Reveal>
                  {user?.role === "admin" && (
                    <Link to="/dashboard">Dashboard</Link>
                  )}
                </Reveal>
              </motion.li>
              <motion.li
              onClick={() => setActive(false)}
                variants={childVariant}
                whileTap={{
                  scale: 1.2,
                  transition: {
                    duration: 0.2,
                    ease: "easeInOut",
                  },
                }}
              >
                <Reveal>
                  <Link to="/contact">Contact</Link>
                </Reveal>
              </motion.li>
              <motion.li
                variants={childVariant}
                whileTap={{
                  scale: 1.2,
                  transition: {
                    duration: 0.2,
                    ease: "easeInOut",
                  },
                }}
              >
                {user ? null : <AuthBtn />}
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SlideTabs = () => {
  const user = useAppSelector(selectUser);
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
      <Tab setPosition={setPosition} to="/">
        Home
      </Tab>
      {user?.role === "admin" && (
        <Tab setPosition={setPosition} to="/dashboard">
          Dashboard
        </Tab>
      )}
      <Tab setPosition={setPosition} to="/projects">
        Projects
      </Tab>
      <Tab setPosition={setPosition} to="/contact">
        Contact
      </Tab>

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
  to,
}: {
  children: React.ReactNode | string;
  setPosition: any;
  to: string;
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
      <NavLink
        className={({ isActive }) =>
          isActive ? "font-semibold text-blue-400 hover:text-white" : ""
        }
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default Navbar;
