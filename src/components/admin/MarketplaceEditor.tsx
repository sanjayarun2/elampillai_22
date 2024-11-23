import React, { useState } from 'react';
import type { Product } from '../../types';

export function MarketplaceEditor() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentProduct, setCurrentProduct] = useState<Partial<Product>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentProduct.id) {
      setProducts(products.map(product => 
        product.id === currentProduct.id ? { ...product, ...currentProduct } : product
      ));
    } else {
      setProducts([...products, { ...currentProduct, id: Date.now().toString() } as Product]);
    }
    setCurrentProduct({});
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              value={currentProduct.name || ''}
              onChange={e => setCurrentProduct({ ...currentProduct, name: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={currentProduct.description || ''}
              onChange={e => setCurrentProduct({ ...currentProduct, description: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price (₹)</label>
            <input
              type="number"
              value={currentProduct.price || ''}
              onChange={e => setCurrentProduct({ ...currentProduct, price: Number(e.target.value) })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">WhatsApp Link</label>
            <input
              type="url"
              value={currentProduct.whatsappLink || ''}
              onChange={e => setCurrentProduct({ ...currentProduct, whatsappLink: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="url"
              value={currentProduct.image || ''}
              onChange={e => setCurrentProduct({ ...currentProduct, image: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            {currentProduct.id ? 'Update Product' : 'Add Product'}
          </button>
        </div>
      </form>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">Existing Products</h3>
        <div className="space-y-4">
          {products.map(product => (
            <div key={product.id} className="flex items-center justify-between p-4 border rounded">
              <div>
                <h4 className="font-medium">{product.name}</h4>
                <p className="text-sm text-gray-600">₹{product.price}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => setCurrentProduct(product)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => setProducts(products.filter(p => p.id !== product.id))}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}