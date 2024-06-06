import React from "react";
import { FaGithub } from "react-icons/fa";
import Photo from "../img/weather.png";
import "../css/Pros.css";

const projects = [
  {
    title: "weatherAPP",
    image: Photo,
    github: "https://github.com/Jacbski/weather_app.git",
  },
  {
    title: "Project 2",
    image: "link_do_zdjecia2", 
    github: "https://github.com/Jacbski",
  },
];

const Projects = () => {
  return (
    <div>
      <h5>My examples projects</h5>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-box" key={index}>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3>{project.title}</h3>

              <FaGithub size={30} color="black" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
