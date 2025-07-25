"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaArrowRight, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="#"
      className="relative min-h-screen flex items-center justify-center pt-24"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white mb-2">Hi, I'm</span>
              <span className="gradient-text">Erez Amirav</span>
            </h1>

            <div className="text-2xl md:text-3xl lg:text-4xl text-white/80 font-medium mb-8">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "React Specialist",
                  2000,
                  "UI/UX Enthusiast",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inline-block"
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Computer Science graduate specializing in modern web development. I
            build exceptional digital experiences with clean code and innovative
            solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              href="#projects"
              className="btn-primary group px-8 py-4 text-lg font-semibold"
            >
              View My Work
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <Link
              href="/Erez Amirav - CV.pdf"
              download
              className="btn-secondary group px-8 py-4 text-lg font-semibold"
            >
              <FaDownload className="mr-2 group-hover:scale-110 transition-transform duration-200" />
              Download CV
            </Link>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                <Image
                  src="/images/me.png"
                  alt="Erez Amirav"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Gradient Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-1 opacity-75">
                <div className="w-full h-full rounded-full bg-[var(--background)]"></div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center gap-6"
          >
            <Link
              href="https://www.linkedin.com/in/erez-amirav/"
              target="_blank"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 group"
            >
              <FaLinkedin className="text-2xl text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-200" />
            </Link>
            <Link
              href="https://github.com/ErezAmirav"
              target="_blank"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 group"
            >
              <FaGithub className="text-2xl text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-200" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
