import React from 'react';



import Hero from '../../Component/Header/Header';
import Skills from '../../Component/Skills/Skills';
import Projects from '../../Component/Projects/Projects';

import Contact from '../../Component/Contact/Contact';

const HomePage = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default HomePage;
