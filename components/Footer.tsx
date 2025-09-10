
import React from 'react';
import { LogoIcon, TwitterIcon, LinkedInIcon, InstagramIcon } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center space-x-2 mb-4">
              <LogoIcon />
              <span className="text-xl font-bold text-light-text">Nexus</span>
            </a>
            <p className="text-gray-text">Elevating brands in the digital age.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-text hover:text-white"><TwitterIcon /></a>
              <a href="#" className="text-gray-text hover:text-white"><LinkedInIcon /></a>
              <a href="#" className="text-gray-text hover:text-white"><InstagramIcon /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-light-text mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-text hover:text-white">About Us</a></li>
              <li><a href="#services" className="text-gray-text hover:text-white">Services</a></li>
              <li><a href="#portfolio" className="text-gray-text hover:text-white">Portfolio</a></li>
              <li><a href="#blog" className="text-gray-text hover:text-white">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-light-text mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-text hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-text hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-light-text mb-4">Newsletter</h4>
            <p className="text-gray-text mb-4">Get the latest digital marketing insights delivered to your inbox.</p>
            <form className="flex">
              <input type="email" placeholder="Your Email" className="w-full bg-gray-800 border-gray-700 rounded-l-md py-2 px-3 text-light-text focus:ring-1 focus:ring-brand-primary focus:border-brand-primary" />
              <button type="submit" className="bg-brand-primary text-white font-semibold px-4 rounded-r-md hover:bg-brand-primary/90">&rarr;</button>
            </form>
          </div>

        </div>
        <div className="mt-16 border-t border-gray-800 pt-8 text-center text-gray-text text-sm">
          <p>&copy; {new Date().getFullYear()} Nexus Digital Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
