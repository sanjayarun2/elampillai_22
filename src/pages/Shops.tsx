import React from 'react';
import ShopCard from '../components/ShopCard';
import type { Shop } from '../types';

const sampleShops: Shop[] = [
  {
    id: '1',
    name: 'Sri Lakshmi Silks',
    address: '123 Main Street, Elampillai',
    description: 'Premium silk sarees and traditional wear with expert craftsmanship.',
    rating: 4.8,
    phone: '+91 9876543210',
    category: 'Textiles'
  },
  {
    id: '2',
    name: 'Raj Handlooms',
    address: '45 Market Road, Elampillai',
    description: 'Traditional handloom sarees and fabrics direct from weavers.',
    rating: 4.5,
    phone: '+91 9876543211',
    category: 'Handlooms'
  },
  {
    id: '3',
    name: 'Modern Textiles',
    address: '78 Gandhi Street, Elampillai',
    description: 'Contemporary designs meeting traditional craftsmanship.',
    rating: 4.7,
    phone: '+91 9876543212',
    category: 'Textiles'
  }
];

export default function Shops() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Local Shops</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sampleShops.map(shop => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>
    </div>
  );
}