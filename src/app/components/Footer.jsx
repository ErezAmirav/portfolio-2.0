import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-12 text-center text-sm mt-28 relative overflow-hidden">
      <div className="relative flex flex-col z-10">
        <Link
          href="#"
          className="text-2xl font-semibold mb-8 inline-block text-white"
        >
          Erez Amirav
        </Link>
        <ul className="flex flex-wrap justify-center gap-2 mx-auto mb-12 text-white">
          <li>
            <Link
              href="#"
              className="p-2 rounded-lg flex border border-transparent font-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="p-2 rounded-lg flex border border-transparent font-semibold"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="p-2 rounded-lg flex border border-transparent font-semibold"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex justify-center gap-2 mb-14">
          <Link
            href="https://www.linkedin.com/in/erez-amirav/"
            className="p-2 rounded-lg flex border-2 border-[#414559] text-2xl bg-[#181818] hover:bg-[#303446]"
            target="_blank"
          >
            <FaLinkedin className="text-white" />
          </Link>
          <Link
            href="https://github.com/ErezAmirav"
            className="p-2 rounded-lg flex border-2 border-[#414559] text-2xl bg-[#181818] hover:bg-[#303446]"
            target="_blank"
          >
            <FaGithub className="text-white" />
          </Link>
        </div>
        <div className="mb-16 text-white">
          <small>Erez Amirav &copy; {new Date().getFullYear()}</small>
        </div>
      </div>
      <div className="flex justify-center">
        {/* <img 
          src="/images/bottom-img.png" 
          className="absolute top-0 left-0 right-0 w-full h-auto md:-top-[4rem] xs:top-auto xs:bottom-0 object-cover" 
        /> */}
      </div>
    </div>
  );
};

export default Footer;
