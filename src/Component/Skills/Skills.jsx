import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';
import { FaGithub, FaFigma, FaReact } from 'react-icons/fa';
import {
  SiFirebase, SiCloudinary, SiHtml5, SiCss3, SiJavascript,
  SiRedux, SiTailwindcss, SiNetlify
} from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';
import { BiDevices } from 'react-icons/bi';

const skillsList = [
  { name: "Git & GitHub", icon: <FaGithub /> },
  { name: "App Design", icon: <MdDesignServices /> },
  { name: "Firebase (Auth & Firestore)", icon: <SiFirebase /> },
  { name: "HTML/CSS/JS/React", icon: <FaReact /> },
  { name: "Figma & UI/UX", icon: <FaFigma /> },
  { name: "Responsive Design", icon: <BiDevices /> },
  { name: "React Native", icon: <FaReact />, learning: true },
  { name: "Cloudinary", icon: <SiCloudinary /> },
  { name: "Redux", icon: <SiRedux />, learning: true },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Deployment (Netlify, Vercel)", icon: <SiNetlify /> },
  { name: "SEO Basics", icon: <MdDesignServices /> },
];

const Skills = () => {
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <div
        ref={sectionRef}
        className={`skills-grid ${isVisible ? 'visible' : ''}`}
      >
        {(showAll ? skillsList : skillsList.slice(0, 4)).map((skill, index) => (
          <div
           className="skill-card" key={index}

            
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">
              {skill.name}
              {skill.learning && (
                <span className="learning-badge">Currently Learning</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <button className="toggle-btn" onClick={() => setShowAll(!showAll)}>
        {showAll ? 'View Less' : 'View More'}
      </button>
    </section>
  );
};

export default Skills;
