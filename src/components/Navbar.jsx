import logo from "../assets/Logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 mb-10 md:mb-20">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="w-10 mx-2" />
      </div>
      <div className="flex items-center gap-4 m-8 text-2xl">
        <FaLinkedin className="cursor-pointer hover:text-gray-400" />
        <FaGithub className="cursor-pointer hover:text-gray-400" />
        <FaInstagram className="cursor-pointer hover:text-gray-400" />
      </div>
    </nav>
  );
};

export default Navbar;
