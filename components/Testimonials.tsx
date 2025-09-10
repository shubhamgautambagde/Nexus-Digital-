
import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "Nexus Digital completely transformed our online presence. Their data-driven approach led to a 200% increase in leads within just three months. Highly recommended!",
    name: 'Sarah Johnson',
    role: 'CEO, Tech Innovators',
    avatar: 'https://picsum.photos/seed/sarah/100/100',
    rating: 5
  },
  {
    quote: "The team at Nexus is not just skilled, they're true partners. They took the time to understand our brand and delivered a social media strategy that felt authentic and drove amazing engagement.",
    name: 'David Chen',
    role: 'Founder, Urban Apparel',
    avatar: 'https://picsum.photos/seed/david/100/100',
    rating: 5
  },
  {
    quote: "Working with Nexus on our website redesign was a fantastic experience. They were professional, creative, and the final product exceeded all our expectations.",
    name: 'Maria Garcia',
    role: 'Marketing Director, Global Finance',
    avatar: 'https://picsum.photos/seed/maria/100/100',
    rating: 5
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
            <svg
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);


const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-light-text">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-text max-w-2xl mx-auto">
            Real stories from businesses we've helped succeed.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-dark-bg p-8 rounded-lg shadow-lg flex flex-col">
              <StarRating rating={testimonial.rating} />
              <p className="text-gray-text my-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                <div>
                  <h4 className="font-bold text-light-text">{testimonial.name}</h4>
                  <p className="text-sm text-brand-secondary">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
