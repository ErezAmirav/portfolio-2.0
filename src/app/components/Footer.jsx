import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="py-12 text-center text-sm mt-28">
      <Link href="#" className="text-2xl font-semibold mb-8 inline-block">
        Erez Amirav
      </Link>
      <ul className="flex flex-wrap justify-center gap-2 mx-auto mb-12">
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
        {/* <li>
          <a href="#experience" className="p-2 rounded-lg flex border border-transparent">Experience</a>
        </li> */}
        <li>
          <Link
            href="#contact"
            className="p-2 rounded-lg flex border border-transparent font-semibold"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex justify-center gap-1 mb-14">
        <Link
          href="https://www.linkedin.com/in/erez-amirav/"
          className="p-2 rounded-lg flex border border-transparent text-2xl bg-[#181818]"
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://github.com/ErezAmirav"
          className="p-2 rounded-lg flex border border-transparent text-2xl bg-[#181818]"
          target="_blank"
        >
          <FaGithub />
        </Link>
      </div>
      <div className="mb-16">
        <small>Erez Amirav &copy; {new Date().getFullYear()}</small>
      </div>
    </div>
  );
};

export default Footer;
