
import React, { useState, useMemo } from 'react';
import type { PortfolioItem, PortfolioCategory } from '../types';

const portfolioItems: PortfolioItem[] = [
  { image: 'https://picsum.photos/seed/p1/600/400', title: 'E-commerce SEO Boost', client: 'Shopify Store', result: '+300% Organic Traffic', category: 'SEO' },
  { image: 'https://picsum.photos/seed/p2/600/400', title: 'Tech Startup Launch', client: 'SaaS Company', result: '10k+ Signups in 1 Month', category: 'Ads' },
  { image: 'https://picsum.photos/seed/p3/600/400', title: 'Viral Instagram Campaign', client: 'Fashion Brand', result: '5M+ Impressions', category: 'Social Media' },
  { image: 'https://picsum.photos/seed/p4/600/400', title: 'Corporate Website Redesign', client: 'Finance Corp', result: '+50% Conversion Rate', category: 'Web Design' },
  { image: 'https://picsum.photos/seed/p5/600/400', title: 'Local Business Domination', client: 'Restaurant Chain', result: '#1 on Google Maps', category: 'SEO' },
  { image: 'https://picsum.photos/seed/p6/600/400', title: 'Lead Gen for B2B', client: 'Software Inc.', result: 'Cost Per Lead Reduced by 40%', category: 'Ads' },
];

const categories: PortfolioCategory[] = ['All', 'SEO', 'Ads', 'Social Media', 'Web Design'];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>('All');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') {
      return portfolioItems;
    }
    return portfolioItems.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-light-text">Our Work</h2>
          <p className="mt-4 text-lg text-gray-text max-w-2xl mx-auto">
            We deliver results. Check out some of our successful projects.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${activeFilter === category ? 'bg-brand-primary text-white' : 'bg-gray-800 text-gray-text hover:bg-gray-700'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-300">{item.client}</p>
                  <p className="mt-4 bg-brand-accent/80 inline-block px-3 py-1 rounded-full text-sm font-semibold">{item.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
