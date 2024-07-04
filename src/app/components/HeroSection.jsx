"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left w-[90%] h-[70%]">
          <h1 className="mb-4 text-2xl sm:text-xl lg:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-600">
              Hello, I{`'`}m
            </span>
            <br />
            <TypeAnimation
              sequence={["Erez Amirav", 1000, "A Frontend Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-purple-500 hover:bg-slate-400 text-white">
              <Link href="#contact">Contact Me</Link>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <a href="/cv.pdf" download>
                  Download CV
                </a>
              </span>
            </button>
          </div>

          {/* <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-lg invisible">
            Computer Science Graduate (B.Sc.), Fullstack development
            specialization. <br />
            Skills: TypeScript, JavaScript, HTML, CSS, Java, C, C++.
            <br />
            Framework & Tools: NextJS, ReactJS, NodeJS, MongoDB, Git.
            <br />
            Ambitious, team player, love to challenge myself.
          </p> */}
        </div>
        <div className="col-span-5 place-self-center mt-10 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              src="/images/me.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 mt-10  rounded-b-full"
              width={300}
              height={300}
            />
          </div>
          <div className="flex justify-center gap-1 mt-5">
            <Link
              href="https://www.linkedin.com/in/erez-amirav/"
              className="p-2 rounded-lg flex border border-transparent text-2xl bg-[#181818] hover:bg-[#303446]"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/ErezAmirav"
              className="p-2 rounded-lg flex border border-transparent text-2xl bg-[#181818] hover:bg-[#303446]"
              target="_blank"
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
