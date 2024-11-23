import React from 'react';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types';

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Handwoven Silk Saree',
    description: 'Traditional handwoven silk saree with intricate designs.',
    price: 15000,
    seller: 'Sri Lakshmi Silks',
    whatsappLink: 'https://wa.me/919876543210',
    image: 'https://images.unsplash.com/photo-1606913084603-3e7702b01627?auto=format&fit=crop&q=80',
    category: 'Sarees'
  },
  {
    id: '2',
    name: 'Cotton Handloom Saree',
    description: 'Comfortable cotton handloom saree perfect for daily wear.',
    price: 3500,
    seller: 'Raj Handlooms',
    whatsappLink: 'https://wa.me/919876543211',
    image: 'https://images.unsplash.com/photo-1624028763097-1e95b43a3252?auto=format&fit=crop&q=80',
    category: 'Sarees'
  },
  {
    id: '3',
    name: 'Designer Blouse',
    description: 'Custom-designed blouse with modern patterns.',
    price: 2500,
    seller: 'Modern Textiles',
    whatsappLink: 'https://wa.me/919876543212',
    image: 'https://images.unsplash.com/photo-1625042770755-a959b2e37e8c?auto=format&fit=crop&q=80',
    category: 'Blouses'
  }
];

export default function Marketplace() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Marketplace</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sampleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}