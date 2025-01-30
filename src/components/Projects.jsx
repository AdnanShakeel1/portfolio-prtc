import React from 'react';
import project1 from '../assets/projects/project-1.jpg';
import project2 from '../assets/projects/project-2.jpg';
import project3 from '../assets/projects/project-3.jpg';
import project4 from '../assets/projects/project-4.jpg';

const Projects = () => {
  const PROJECTS = [
    {
      title: "E-Commerce Website",
      image: project1,
      description:
        "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
      technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    },
    {
      title: "Task Management App",
      image: project2,
      description:
        "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
      technologies: ["HTML", "CSS", "Angular", "Firebase"],
    },
    {
      title: "Portfolio Website",
      image: project3,
      description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: ["HTML", "CSS", "React", "Bootstrap"],
    },
    {
      title: "Blogging Platform",
      image: project4,
      description:
        "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
      technologies: ["HTML", "CSS", "Vue.js", "Express", "MySQL"],
    },
  ];

  return (
    <div className="h-auto w-[98.5vw] border border-amber-600 rounded-2xl m-2 p-4 lg:mt-[2vw] mb-[2vw]">
      <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <li
                    key={techIndex}
                    className="bg-blue-200 text-blue-800 px-2 py-1 text-sm rounded"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
