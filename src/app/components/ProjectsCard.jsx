"use client";
import React from "react";
import { FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectsCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="card group h-full flex flex-col overflow-hidden"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-6">
        <Image
          src={imgUrl}
          alt={title}
          width={400}
          height={250}
          className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay with Action Buttons */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          {gitUrl && (
            <Link
              href={gitUrl}
              target="_blank"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-200"
            >
              <FaCodeBranch className="text-white text-xl" />
            </Link>
          )}
          {previewUrl && (
            <Link
              href={previewUrl}
              target="_blank"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-200"
            >
              <FaExternalLinkAlt className="text-white text-xl" />
            </Link>
          )}
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-50"></div>
      </div>

      {/* Project Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-white/70 mb-6 leading-relaxed flex-1">
          {description}
        </p>

        {/* Action Links */}
        <div className="flex space-x-3 mt-auto">
          {gitUrl && (
            <Link
              href={gitUrl}
              target="_blank"
              className="flex-1 btn-secondary text-center py-3 text-sm font-medium group/btn"
            >
              <FaCodeBranch className="inline mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
              Code
            </Link>
          )}
          {previewUrl && (
            <Link
              href={previewUrl}
              target="_blank"
              className="flex-1 btn-primary text-center py-3 text-sm font-medium group/btn"
            >
              <FaExternalLinkAlt className="inline mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
