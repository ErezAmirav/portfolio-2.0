"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-4 left-[5vh] right-[5vh] z-10 bg-[#121212] border-2 border-[#414559] rounded-xl animate-slide-in-slow">
      <div className="flex flex-wrap items-center justify-between mx-auto px-3 py-1">
        <Link
          href={"#"}
          className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#949cbb] to-[#838ba7] font-semibold select-none"
        >
          E.A
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 text-slate-200 hover:text-white"
            >
              <Bars3Icon className="h-5 w-5 text-[#949cbb]" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 text-slate-200 hover:text-white"
            >
              <XMarkIcon className="h-5 w-5 text-[#949cbb]" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <AnimatePresence>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
