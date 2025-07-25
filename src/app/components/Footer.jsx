"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaHeart, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/erez-amirav/",
      name: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/ErezAmirav",
      name: "GitHub",
    },
  ];

  return (
    <footer className=" bg-gradient-to-b from-transparent to-black/20">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <Link
              href="#"
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-200 inline-block mb-4"
            >
              Erez Amirav
            </Link>
            <p className="text-white/70 leading-relaxed mb-6 max-w-md">
              Frontend Developer at{" "}
              <a
                href="https://www.linkedin.com/company/ersona"
                target="_blank"
                className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
              >
                Ersona
              </a>
              , building AI-powered solutions for customer support and sales
              automation with modern web technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-200 group"
                  aria-label={social.name}
                >
                  <div className="text-xl text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-200">
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-white mb-6">Get In Touch</h3>
            <div className="space-y-3">
              <Link
                href="mailto:erezamirav@gmail.com"
                className="block text-white/70 hover:text-white transition-colors duration-200"
              >
                erezamirav@gmail.com
              </Link>
              <p className="text-white/70">Israel</p>
              <p className="text-white/70">Frontend Developer @ Ersona</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center mb-6"
        >
          <div className="flex items-center space-x-2 text-white/60 mb-4 md:mb-0">
            <span>Erez Amirav</span>
            <span>© {new Date().getFullYear()}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-200 group"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-white/70 group-hover:text-white group-hover:-translate-y-1 transition-all duration-200" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
