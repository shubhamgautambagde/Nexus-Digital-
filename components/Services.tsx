
import React from 'react';
import type { Service } from '../types';
import { SeoIcon, SmmIcon, PpcIcon, BrandingIcon, WebDevIcon, AiIcon } from '../constants';

const services: Service[] = [
  {
    icon: <SeoIcon />,
    title: 'SEO & Content Marketing',
    description: 'Drive organic traffic and rank higher on search engines with our expert SEO and content strategies.',
  },
  {
    icon: <SmmIcon />,
    title: 'Social Media Marketing',
    description: 'Engage your audience and build a loyal community with targeted social media campaigns.',
  },
  {
    icon: <PpcIcon />,
    title: 'PPC & Paid Ads',
    description: 'Get instant, qualified traffic and maximize your ROI with our precision-targeted paid ad campaigns.',
  },
  {
    icon: <BrandingIcon />,
    title: 'Branding & Design',
    description: 'Create a memorable brand identity that resonates with your audience and stands out from the competition.',
  },
  {
    icon: <WebDevIcon />,
    title: 'Web Development',
    description: 'Build fast, responsive, and conversion-optimized websites that provide a seamless user experience.',
  },
  {
    icon: <AiIcon />,
    title: 'AI-Powered Solutions',
    description: 'Leverage the power of artificial intelligence for predictive analytics, automation, and hyper-personalization.',
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-gray-900/50 p-8 rounded-lg shadow-lg hover:shadow-brand-primary/20 hover:-translate-y-2 transition-all duration-300 flex flex-col items-start">
    <div className="bg-brand-primary/10 p-4 rounded-full mb-6">
      {service.icon}
    </div>
    <h3 className="text-xl font-bold text-light-text mb-3">{service.title}</h3>
    <p className="text-gray-text mb-6 flex-grow">{service.description}</p>
    <a href="#" className="font-semibold text-brand-primary hover:text-brand-secondary transition-colors duration-200">
      Learn More &rarr;
    </a>
  </div>
);


const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-light-text">Our Services</h2>
          <p className="mt-4 text-lg text-gray-text max-w-2xl mx-auto">
            A complete suite of digital marketing solutions to fuel your growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
