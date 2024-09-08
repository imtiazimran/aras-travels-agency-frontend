import { FiFacebook, FiInstagram, FiLinkedin, FiX } from "react-icons/fi";
import Container from "../utils/Container";
import logo from "../assets/img/avlogo.png";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="bg-black">
            <Container className=" flex justify-center flex-col gap-20 items-center py-40">
                <Link to="/">
                    <img className="w-24" src={logo} alt="" />
                </Link>
                <div className="flex gap-4">
                    <FiFacebook className=" border-2 border-white  text-4xl size-10 transition-all duration-300 rounded-full bg-white p-1 hover:bg-black hover:text-white" />
                    <FiLinkedin className=" border-2 border-white  text-4xl transition-all duration-300 size-10 rounded-full bg-white p-1 hover:bg-black hover:text-white" />
                    <FiInstagram className=" border-2 border-white  text-4xl transition-all duration-300 size-10 rounded-full bg-white p-2 hover:bg-black hover:text-white" />
                    <FiX className=" border-2 border-white  text-4xl size-10 transition-all duration-300 rounded-full bg-white p-1 hover:bg-black hover:text-white" />
                </div>
            </Container>
            <p className="text-center text-white text-xl py-5 bg-slate-800 ">© {new Date().getFullYear()}. Av Visa Agency All rights reserved.</p>
        </div>
    );
};

export default Footer;
