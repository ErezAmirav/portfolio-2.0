"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Ecommerce",
    description:
      "An online shop frontend. Created with React & Material-UI components.",
    image: "/images/ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ErezAmirav/ECommerce",
    previewUrl: "https://erezamirav.github.io/ecommerce/",
  },
  {
    id: 2,
    title: "MyWiki",
    description: `Alternative Wikipedia front page. Created with Wikipedia's API (MediaWiki), React & CSS.`,
    image: "/images/mywiki.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ErezAmirav/MyWiki",
    previewUrl: "https://erezamirav.github.io/mywiki/",
  },
  {
    id: 3,
    title: "Portfolio 1.0",
    description:
      "One page portfolio website using ReactJS, HTML, JavaScript, CSS, React-Icons.",
    image: "/images/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ErezAmirav/portfolio",
    previewUrl: "https://erezamirav.github.io/portfolio/",
  },
];

const ProjectsSections = () => {
  const [activeTag, setActiveTag] = useState("All");
  const handleTagChange = (newTag) => {
    setActiveTag(newTag);
  };
  const filterProjects = projectsData.filter((project) =>
    project.tag.includes(activeTag)
  );
  return (
    <section id="projects">
      <motion.h2
        className="text-center text-4xl font-bold text-white mt-4 mb-8 md-mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={activeTag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={activeTag === 'Web'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={activeTag === 'Mobile'}
        />
      </div> */}
      <div className="grid md:grid-cols-3 gap-8 md-gap-12">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            className="h-full"
          >
            <ProjectsCard
              title={project.title}
              imgUrl={project.image}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              className="h-full"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSections;
