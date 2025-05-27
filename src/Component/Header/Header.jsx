import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1>Hello, I’m Ree<span className="reem-name">M</span></h1>
        <h2>a Front-End Developer</h2>
        <p className="summary">
          Front-End Web Developer focused on building fast, responsive, and scalable applications using React.js, React Native, and Firebase as a full back-end solution (BaaS). Passionate about writing clean, maintainable code and creating intuitive UI/UX experiences. Currently converting my projects into a mobile app using React Native. Open to remote opportunities where I can contribute to meaningful, user-focused projects
        </p>
        <a href="/ReemAldarwesh_CV.pdf" className="cv-button" target="_blank" rel="noopener noreferrer">
          View My CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
