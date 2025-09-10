
import React, { useState, useEffect } from 'react';
import { LogoIcon } from '../constants';

const navLinks = ["Home", "About", "Services", "Portfolio", "Blog", "Pricing", "Contact"];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-bg/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <LogoIcon />
              <span className="text-xl font-bold text-light-text">Nexus</span>
            </a>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-text hover:text-light-text transition-colors duration-200">{link}</a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center">
            <a href="#contact" className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold px-6 py-2 rounded-full hover:opacity-90 transition-opacity duration-200">
              Get a Quote
            </a>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-text focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-dark-bg/95 backdrop-blur-sm absolute top-20 left-0 right-0">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-gray-text hover:text-light-text transition-colors duration-200 text-lg">{link}</a>
            ))}
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity duration-200 mt-4">
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
