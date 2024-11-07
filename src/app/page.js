"use client";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSections from "./components/ProjectsSections";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main
      className="flex min-h-screen flex-col bg-[#121212]"
      style={{
        backgroundImage: `url('images/bg-overlay2.png')`,
        backgroundPosition: "bottom left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <HeroSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AboutSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ProjectsSections />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ContactSection />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Footer />
        </motion.div>
      </div>
    </main>
  );
}
