
import React, { useState } from 'react';
import type { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: { monthly: 299, annually: 249 },
    features: ['Basic SEO Audit', 'Social Media Management (2 Platforms)', 'Monthly Reporting', 'Email Support'],
    isPopular: false,
  },
  {
    name: 'Professional',
    price: { monthly: 799, annually: 699 },
    features: ['Advanced SEO & Content', 'Social Media Management (4 Platforms)', 'PPC Campaign (Up to $1k/mo)', 'Bi-weekly Strategy Calls', 'Priority Support'],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: 1499, annually: 1299 },
    features: ['Comprehensive SEO & Outreach', 'Full Social Media Management', 'Advanced PPC & Retargeting', 'Weekly Performance Reviews', 'Dedicated Account Manager'],
    isPopular: false,
  },
];

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-light-text">Flexible Pricing Plans</h2>
          <p className="mt-4 text-lg text-gray-text max-w-2xl mx-auto">
            Choose a plan that fits your business needs and budget.
          </p>
        </div>

        <div className="flex justify-center items-center space-x-4 mb-12">
          <span className={`font-semibold ${!isAnnual ? 'text-white' : 'text-gray-text'}`}>Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} className="sr-only peer" />
            <div className="w-14 h-8 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-brand-primary"></div>
          </label>
          <span className={`font-semibold ${isAnnual ? 'text-white' : 'text-gray-text'}`}>Annually</span>
          <span className="bg-brand-accent/20 text-brand-accent text-xs font-bold px-2 py-1 rounded-full">Save 15%</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-gray-900/50 p-8 rounded-lg shadow-lg relative flex flex-col ${plan.isPopular ? 'border-2 border-brand-primary' : ''}`}>
              {plan.isPopular && <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</span>}
              <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
              <p className="text-center text-gray-text mb-6">For growing businesses</p>
              <p className="text-center text-5xl font-extrabold mb-2">
                ${isAnnual ? plan.price.annually : plan.price.monthly}<span className="text-lg font-normal text-gray-text">/mo</span>
              </p>
              <p className="text-center text-gray-text mb-8">{isAnnual ? 'Billed annually' : 'Billed monthly'}</p>
              <ul className="space-y-4 text-gray-text mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-brand-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 font-bold rounded-lg transition-colors duration-300 ${plan.isPopular ? 'bg-brand-primary text-white hover:bg-brand-primary/90' : 'bg-gray-700 hover:bg-brand-primary text-white'}`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
