'use client';
import React, { useState } from 'react';
import ProjectsCard from './ProjectsCard';
import ProjectTag from './ProjectTag';

const projectsData = [
  {
    id: 1,
    title: 'Ecommerce',
    description:
      'An online shop frontend. Created with React & Material-UI components.',
    image: '/images/ecommerce.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'MyWiki',
    description: `Alternative Wikipedia front page. Created with Wikipedia's API (MediaWiki), React & CSS.`,
    image: '/images/mywiki.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 3,
    title: 'Portfolio',
    description: 'One page portfolio website using ReactJS, HTML, CSS, React-Icons.',
    image: '',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 4,
    title: 'Employee Manager',
    description: `NodeJS app Interacting with MongoDB and 
      exposing CRUD API to manage a list of employees. Using React, Redux, 
      NodeJS & MongoDB, Material-UI.`,
    image: '',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
];

const ProjectsSections = () => {
  const [activeTag, setActiveTag] = useState('All');
  const handleTagChange = (newTag) => {
    setActiveTag(newTag);
  };
  const filterProjects = projectsData.filter((project) =>
    project.tag.includes(activeTag)
  );
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md-mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
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
      </div>
      <div className="grid md:grid-cols-3 gap-8 md-gap-12">
        {filterProjects.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            imgUrl={project.image}
            description={project.description}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSections;
