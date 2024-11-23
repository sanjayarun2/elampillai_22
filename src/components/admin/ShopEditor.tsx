import React, { useState } from 'react';
import type { Shop } from '../../types';

export function ShopEditor() {
  const [shops, setShops] = useState<Shop[]>([]);
  const [currentShop, setCurrentShop] = useState<Partial<Shop>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentShop.id) {
      setShops(shops.map(shop => 
        shop.id === currentShop.id ? { ...shop, ...currentShop } : shop
      ));
    } else {
      setShops([...shops, { ...currentShop, id: Date.now().toString() } as Shop]);
    }
    setCurrentShop({});
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={currentShop.name || ''}
              onChange={e => setCurrentShop({ ...currentShop, name: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={currentShop.description || ''}
              onChange={e => setCurrentShop({ ...currentShop, description: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            {currentShop.id ? 'Update Shop' : 'Add Shop'}
          </button>
        </div>
      </form>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">Existing Shops</h3>
        <div className="space-y-4">
          {shops.map(shop => (
            <div key={shop.id} className="flex items-center justify-between p-4 border rounded">
              <div>
                <h4 className="font-medium">{shop.name}</h4>
                <p className="text-sm text-gray-600">{shop.description}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => setCurrentShop(shop)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => setShops(shops.filter(s => s.id !== shop.id))}
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