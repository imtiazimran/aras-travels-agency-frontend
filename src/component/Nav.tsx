/* eslint-disable @typescript-eslint/no-explicit-any */
 

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import AuthBtn from "../utils/GoogleAuthBtn";
import logo from "../assets/img/avlogo.png";

const Navbar = () => {
  return (
    <nav className="flex w-full px-4 hover:shadow-lg transition-all duration-700 bg-transparent py-3 fixed top-0 items-center justify-center z-50 ">
      <div>
        <img className="w-24" src={logo} alt="" />
      </div>
      <SlideTabs />
      <AuthBtn />
    </nav>
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
      className=" relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
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
