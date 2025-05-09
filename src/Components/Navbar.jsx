import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="px-6 md:px-32  bg-[#292F36] text-white">
      <div className="py-5 flex items-center justify-between border-b border-gray-600">
        <h2 className="text-xl md:text-2xl text-[#12F7D6] Cfont font-medium"> NirmalGusain</h2>
        <div className="flex gap-5 md:gap-10">
          <a
            className="flex items-center gap-1"
            href="https://www.instagram.com/nirmal_gusain"
            target="_blank"
          >
            <FaInstagram size={20} className="text-[#12F7D6]" />
            <h2 className="Cfont font-medium hidden lg:block">Instagram</h2>
          </a>

          <a
            className="flex items-center gap-1"
            href="https://github.com/Nirmal-Gusain"
            target="_blank"
          >
            <FiGithub size={20} className="text-[#12F7D6]" />
            <h2 className="Cfont font-medium hidden lg:block">Github</h2>
          </a>

          <a
            className="flex items-center gap-1"
            href="https://linkedin.com/in/nirmal-singh-gusain-487119228"
            target="_blank"
          >
            <CiLinkedin size={20} className="text-[#12F7D6]" />
            <h2 className="Cfont font-medium hidden lg:block">Linkedin</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
