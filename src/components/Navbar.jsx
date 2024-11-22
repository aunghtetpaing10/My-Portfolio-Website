import logo from "../assets/Logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 mb-10 md:mb-20">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="w-10 mx-2" />
      </div>
      <div className="flex items-center gap-4 m-8 text-2xl">
        <a
          href="https://linkedin.com/in/aung-htet-paing-4482622b2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="cursor-pointer hover:text-gray-400" />
        </a>
        <a
          href="https://github.com/aunghtetpaing10"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FaGithub className="cursor-pointer hover:text-gray-400" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
