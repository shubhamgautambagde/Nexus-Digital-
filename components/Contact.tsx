
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-light-text">Let's Build Something Great</h2>
          <p className="mt-4 text-lg text-gray-text max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-dark-bg p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" id="name" placeholder="Your Name" className="w-full bg-gray-800 border-gray-700 rounded-md py-3 px-4 text-light-text focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" id="email" placeholder="Your Email" className="w-full bg-gray-800 border-gray-700 rounded-md py-3 px-4 text-light-text focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition" />
              </div>
              <div>
                <label htmlFor="service" className="sr-only">Service</label>
                <select id="service" className="w-full bg-gray-800 border-gray-700 rounded-md py-3 px-4 text-light-text focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition">
                  <option>Select a service</option>
                  <option>SEO & Content Marketing</option>
                  <option>Social Media Marketing</option>
                  <option>PPC & Paid Ads</option>
                  <option>Branding & Design</option>
                  <option>Web Development</option>
                  <option>AI-Powered Solutions</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" rows={4} placeholder="Your Message" className="w-full bg-gray-800 border-gray-700 rounded-md py-3 px-4 text-light-text focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-dark-bg p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <ul className="space-y-3 text-gray-text">
                <li className="flex items-center"><svg className="w-5 h-5 mr-3 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> (123) 456-7890</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-3 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> hello@nexusdigital.com</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-3 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> 123 Digital Ave, Web City, 40404</li>
              </ul>
            </div>
            <div className="h-64 rounded-lg overflow-hidden">
               <img src="https://picsum.photos/seed/map/800/400" alt="Map" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
