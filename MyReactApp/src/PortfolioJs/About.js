import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../PortfolioStyle/About.css';

function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h4 className="text-center mb-4">About Me</h4>

        <p className="text-center text-muted">
          I am a C# .NET Developer with over 3.5 years of experience in C#, .NET, HTML, CSS, Bootstrap, JavaScript, and React JS. 
          I specialize in building RESTful web applications, implementing security best practices, and applying design patterns 
          to create scalable solutions. I have strong problem-solving skills and a commitment to writing clean, maintainable code.
        </p>

        <div className="text-center mt-4">
          <img
            src="/images/default.jpg" 
            alt="Profile"
            className="profile-img" 
          />
        </div>
      </div>
    </section>
  );
}

export default About;
