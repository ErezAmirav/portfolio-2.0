"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectsCard from "./ProjectsCard";
import { FaFilter } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Modern online shopping experience built with React and Material-UI. Features responsive design, product filtering, shopping cart functionality, and seamless user interactions.",
    image: "/images/ecommerce.png",
    tag: ["All", "Web", "React"],
    gitUrl: "https://github.com/ErezAmirav/ECommerce",
    previewUrl: "https://erezamirav.github.io/ecommerce/",
    technologies: ["React", "Material-UI", "JavaScript", "CSS"]
  },
  {
    id: 2,
    title: "MyWiki - Wikipedia Alternative",
    description: "Clean and intuitive Wikipedia frontend redesign using MediaWiki API. Features modern UI/UX, enhanced search functionality, and improved content presentation.",
    image: "/images/mywiki.png",
    tag: ["All", "Web", "API"],
    gitUrl: "https://github.com/ErezAmirav/MyWiki",
    previewUrl: "https://erezamirav.github.io/mywiki/",
    technologies: ["React", "MediaWiki API", "CSS", "JavaScript"]
  },
  {
    id: 3,
    title: "Portfolio Website v1.0",
    description:
      "First iteration of personal portfolio showcasing projects and skills. Built with modern web technologies and responsive design principles.",
    image: "/images/portfolio.png",
    tag: ["All", "Web", "Portfolio"],
    gitUrl: "https://github.com/ErezAmirav/portfolio",
    previewUrl: "https://erezamirav.github.io/portfolio/",
    technologies: ["React", "HTML", "CSS", "JavaScript"]
  },
];

const ProjectsSections = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "Web", "React", "API", "Portfolio"];
  
  const filteredProjects = projectsData.filter((project) =>
    activeFilter === "All" || project.tag.includes(activeFilter)
  );

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my expertise in modern web development, 
            problem-solving abilities, and attention to detail.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-3 p-2 rounded-2xl bg-white/5 border border-white/10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {filter === "All" && <FaFilter className="text-sm" />}
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <ProjectsCard
                title={project.title}
                imgUrl={project.image}
                description={project.description}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-white/60">Try selecting a different filter</p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="card max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-white/70 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together.
            </p>
            <a
              href="#contact"
              className="btn-primary px-8 py-4 text-lg font-semibold"
            >
              Start a Conversation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSections;
