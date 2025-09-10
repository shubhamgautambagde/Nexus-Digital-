
import React from 'react';
import type { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    image: 'https://picsum.photos/seed/b1/600/400',
    category: 'SEO',
    title: 'The Future of SEO: AI and Voice Search',
    excerpt: 'Explore how artificial intelligence and the rise of voice assistants are reshaping the landscape of search engine optimization.'
  },
  {
    image: 'https://picsum.photos/seed/b2/600/400',
    category: 'Social Media',
    title: '5 Creative Ways to Use Instagram Reels for Business',
    excerpt: 'Leverage the power of short-form video content to boost engagement and reach a wider audience on Instagram.'
  },
  {
    image: 'https://picsum.photos/seed/b3/600/400',
    category: 'PPC',
    title: 'Maximizing ROI with Google Ads Performance Max',
    excerpt: 'A deep dive into Google\'s newest campaign type and how to use it effectively to achieve your marketing goals.'
  },
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-light-text">Insights & News</h2>
          <p className="mt-4 text-lg text-gray-text max-w-2xl mx-auto">
            Stay ahead of the curve with our latest digital marketing tips & trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-gray-900/50 rounded-lg shadow-lg overflow-hidden group">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity" />
              <div className="p-6">
                <p className="text-brand-primary font-semibold text-sm mb-2">{post.category}</p>
                <h3 className="text-xl font-bold text-light-text mb-3 hover:text-brand-secondary transition-colors cursor-pointer">{post.title}</h3>
                <p className="text-gray-text mb-4">{post.excerpt}</p>
                <a href="#" className="font-semibold text-brand-accent hover:underline">Read More &rarr;</a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a href="#" className="bg-gray-800 text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-700 transition-colors duration-200">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
