
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-dark-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-secondary/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-light-text mb-4 tracking-tight">
          We Grow Your Business with
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary py-2">
            Smart Digital Marketing
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-text mb-8">
          Harnessing data-driven strategies and AI-powered solutions to elevate your brand and accelerate growth. Let's build your digital future, together.
        </p>
        <a href="#contact" className="inline-block bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
          Get Free Consultation
        </a>
      </div>
    </section>
  );
};

const bgGridPattern = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" stroke-width="0.5">
    <path d="M0 .5H32M.5 0V32"/>
  </svg>
`;

const bgGridPatternDataURL = `data:image/svg+xml;base64,${btoa(bgGridPattern)}`;

const style = document.createElement('style');
style.innerHTML = `
  .bg-grid-pattern {
    background-image: url("${bgGridPatternDataURL}");
  }
`;
document.head.appendChild(style);

export default Hero;
