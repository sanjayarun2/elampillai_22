import React from 'react';
import BlogCard from '../components/BlogCard';
import type { BlogPost } from '../types';

const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'Annual Textile Exhibition Coming Soon',
    content: 'Join us for the biggest textile exhibition of the year featuring local artisans and their masterpieces. Experience the rich heritage of Elampillai\'s textile industry.',
    date: '2024-03-15',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1606913084603-3e7702b01627?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    title: 'New Handloom Training Center Opens',
    content: 'A state-of-the-art handloom training center has opened in Elampillai to preserve and pass on traditional weaving techniques to the next generation.',
    date: '2024-03-10',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1624028763097-1e95b43a3252?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    title: 'Local Weavers Win State Award',
    content: 'Three master weavers from Elampillai have been recognized for their exceptional contribution to the textile industry at the state level.',
    date: '2024-03-05',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1625042770755-a959b2e37e8c?auto=format&fit=crop&q=80'
  }
];

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">News & Updates</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {samplePosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}