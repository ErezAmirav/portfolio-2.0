"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdOutlineMail, MdLocationOn, MdWork, MdSend } from "react-icons/md";
import { FaLinkedin, FaGithub, FaTwitter, FaArrowRight } from "react-icons/fa";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <MdOutlineMail />,
      title: "Email",
      value: "erezamirav@gmail.com",
      href: "mailto:erezamirav@gmail.com",
      description: "Send me a message anytime",
    },
    {
      icon: <MdLocationOn />,
      title: "Location",
      value: "Israel",
      href: null,
      description: "Open to remote opportunities",
    },
          {
        icon: <MdWork />,
        title: "Current Role",
        value: "Frontend Dev @ Ersona",
        href: null,
        description: "Building AI-powered solutions",
      },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/erez-amirav/",
      color: "hover:text-blue-500",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      href: "https://github.com/ErezAmirav",
      color: "hover:text-gray-400",
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Let&apos;s Connect</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Currently building AI-powered solutions at{" "}
            <a
              href="https://www.linkedin.com/company/ersona"
              target="_blank"
              className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
            >
              Ersona
            </a>
            . Always excited to discuss new projects, opportunities, and
            collaborations in the AI and web development space.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="card group"
                >
                  {method.href ? (
                    <Link
                      href={method.href}
                      className="flex items-start space-x-4"
                    >
                      <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl text-white text-xl">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors duration-200">
                          {method.title}
                        </h3>
                        <p className="text-white/80 font-medium mb-1">
                          {method.value}
                        </p>
                        <p className="text-white/60 text-sm">
                          {method.description}
                        </p>
                      </div>
                      <FaArrowRight className="text-white/40 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  ) : (
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl text-white text-xl">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {method.title}
                        </h3>
                        <p className="text-white/80 font-medium mb-1">
                          {method.value}
                        </p>
                        <p className="text-white/60 text-sm">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card"
            >
              <h3 className="text-xl font-bold text-white mb-6">Socials</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    className={`p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-200 group ${social.color}`}
                  >
                    <div className="text-2xl text-white/70 group-hover:text-current group-hover:scale-110 transition-all duration-200">
                      {social.icon}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:sticky lg:top-8"
          >
            <div className="card text-center space-y-8">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                <MdSend className="text-3xl text-white" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Start a Project?
                </h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Whether you have a specific project in mind or just want to
                  explore possibilities, I&apos;d love to hear from you. Let&apos;s
                  discuss how we can work together.
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  href="mailto:erezamirav@gmail.com"
                  className="btn-primary w-full py-4 text-lg font-semibold group"
                >
                  Send Message
                  <MdSend className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>

                <Link
                  href="/Erez Amirav - CV.pdf"
                  download
                  className="btn-secondary w-full py-4 text-lg font-semibold"
                >
                  Download Resume
                </Link>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-white/60 text-sm">
                  Usually responds within 24 hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
