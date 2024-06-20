import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section id="about">
      <h2>About</h2>
      <p>Mission and vision for our company</p>
      <Link to="/about" className="buttonlink">Us</Link>
    </section>
  );
}

export default About;
