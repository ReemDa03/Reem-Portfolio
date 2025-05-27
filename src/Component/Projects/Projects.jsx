import React, { useRef, useEffect, useState } from 'react';
import './Projects.css';
import laciteImg from '../../assets/lacite.png.jpg';
import fooddelImg from '../../assets/fooddel.png.jpg';
import todoImg from '../../assets/todo.png.png';

const projects = [
  {
    title: "LaCité (E-commerce)",
    image: laciteImg,
    link: "https://ree-lacite.netlify.app/",
  },
  {
    title: "Food Del (Restaurant App)",
    image: fooddelImg,
    link: "https://reemda03.github.io/my-vite-project/",
  },
  {
    title: "To-Do List App",
    image: todoImg,
    link: "https://ReemDa03.github.io/MyToDoApp/",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Featured Projects</h2>
      <div
        ref={sectionRef}
        className={`projects-grid ${isVisible ? 'visible' : ''}`}
      >
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-thumbnail"
            />
            <h3 className="project-name">{project.title}</h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Live
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
