
import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export type PortfolioCategory = 'All' | 'SEO' | 'Ads' | 'Social Media' | 'Web Design';

export interface PortfolioItem {
  image: string;
  title: string;
  client: string;
  result: string;
  category: PortfolioCategory;
}

export interface PricingPlan {
  name: string;
  price: {
    monthly: number;
    annually: number;
  };
  features: string[];
  isPopular: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface BlogPost {
  image: string;
  category: string;
  title:string;
  excerpt: string;
}
