import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sue5gbc', 'template_8at5kz9', form.current, 'tVI3m1bcN_iSr4guR')
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset(); // optional: clear the form after submit
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Connect with Me</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="title" placeholder="Subject" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Stay Connected</button>
      </form>

      <div className="social-icons">
        <a href="https://www.linkedin.com/in/reemdarwish03" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ReemDa03" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/reemda03" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="mailto:reemdarwish07@gmail.com" target="_blank" rel="noreferrer">
          <SiGmail />
        </a>
      </div>

      <div className="footer">© 2025 Reem Aldarwesh</div>
    </section>
  );
};

export default Contact;
