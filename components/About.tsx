
import React from 'react';

const teamMembers = [
  { name: 'Jane Doe', role: 'CEO & Founder', image: 'https://picsum.photos/seed/jane/400/400' },
  { name: 'John Smith', role: 'Head of SEO', image: 'https://picsum.photos/seed/john/400/400' },
  { name: 'Emily White', role: 'Creative Director', image: 'https://picsum.photos/seed/emily/400/400' },
  { name: 'Michael Brown', role: 'Lead Developer', image: 'https://picsum.photos/seed/michael/400/400' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-light-text">About Nexus</h2>
          <p className="mt-4 text-lg text-gray-text max-w-2xl mx-auto">We are a passionate team of digital experts dedicated to helping businesses thrive in the online world.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img src="https://picsum.photos/seed/agency/800/600" alt="Agency meeting" className="rounded-lg shadow-2xl"/>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-brand-primary">Our Story</h3>
            <p className="text-gray-text mb-4">
              Founded in 2020, Nexus was born from a desire to create a digital marketing agency that truly partners with its clients. We saw a gap for a firm that combines cutting-edge technology with genuine human connection and a deep commitment to client success.
            </p>
            <div className="space-y-6 mt-8">
              <div>
                <h4 className="font-bold text-light-text text-lg mb-2">Our Mission</h4>
                <p className="text-gray-text">To deliver measurable results and exceptional service through innovative and customized digital marketing strategies.</p>
              </div>
              <div>
                <h4 className="font-bold text-light-text text-lg mb-2">Our Vision</h4>
                <p className="text-gray-text">To be the leading digital growth partner for ambitious brands worldwide.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-light-text mb-12">Meet the Experts</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center group">
                        <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-700 group-hover:border-brand-primary transition-all duration-300 transform group-hover:scale-105"/>
                        <h4 className="font-semibold text-light-text text-lg">{member.name}</h4>
                        <p className="text-brand-secondary">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;
