"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaReact,
  FaTools,
  FaGraduationCap,
  FaArrowRight,
} from "react-icons/fa";

const SKILLS_DATA = [
  {
    title: "Languages",
    id: "languages",
    icon: <FaCode />,
    items: [
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Java", level: 80 },
    ],
  },
  {
    title: "Frameworks",
    id: "frameworks",
    icon: <FaReact />,
    items: [
      { name: "Next.js", level: 90 },
      { name: "React", level: 95 },
      // { name: "Node.js", level: 85 },
      { name: "TailwindCSS", level: 90 },
      // { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "Tools",
    id: "tools",
    icon: <FaTools />,
    items: [
      { name: "Git", level: 90 },
      // { name: "VS Code", level: 95 },
      { name: "DevTools", level: 85 },
      { name: "Jira", level: 80 },
      // { name: "Figma", level: 75 },
      // { name: "Docker", level: 70 },
    ],
  },
  {
    title: "Education",
    id: "education",
    icon: <FaGraduationCap />,
    items: [
      { name: "Computer Science (B.Sc.)", level: 100 },
      { name: "Fullstack Development", level: 90 },
      { name: "Data Structures & Algorithms", level: 85 },
    ],
  },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setActiveTab(id);
    });
  };

  const activeData = SKILLS_DATA.find((tab) => tab.id === activeTab);

  return (
    <section id="about" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Frontend Developer at{" "}
            <a
              href="https://www.linkedin.com/company/ersona"
              target="_blank"
              className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
            >
              Ersona
            </a>
            , where I build AI-powered solutions for customer support and sales
            automation. Computer Science graduate passionate about creating
            exceptional digital experiences through clean code and innovative
            web technologies.
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
            <div className="card text-center">
              <div className="relative w-[20rem] h-[20rem] mx-auto mb-6">
                <Image
                  src="/images/about-image.png"
                  width={500}
                  height={500}
                  alt="About Erez Amirav"
                  className="w-full h-full object-contain rounded-lg"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-lg"></div> */}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Erez Amirav
              </h3>
              <p className="text-white/70 mb-4">Frontend Developer @ Ersona</p>
              <div className="flex justify-center space-x-4 text-sm text-white/60">
                <span>📍 Israel</span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  Currently at Ersona
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card text-center">
                <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                <div className="text-white/70 text-sm">Years Experience</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                <div className="text-white/70 text-sm">Projects Completed</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {SKILLS_DATA.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`p-4 rounded-xl border transition-all duration-200 flex flex-col items-center space-y-2 ${
                    activeTab === tab.id
                      ? "bg-white/10 border-white/20 text-white"
                      : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/15"
                  }`}
                >
                  <div className="text-xl">{tab.icon}</div>
                  <span className="text-sm font-medium">{tab.title}</span>
                </button>
              ))}
            </div>

            <div className="card min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="text-2xl text-indigo-400">
                      {activeData.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {activeData.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {activeData.items.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">
                            {item.name}
                          </span>
                          <span className="text-sm text-white/60">
                            {item.level}%
                          </span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <a
                href="#contact"
                className="btn-primary group inline-flex items-center px-8 py-4 text-lg font-semibold"
              >
                Let&apos;s Work Together
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
