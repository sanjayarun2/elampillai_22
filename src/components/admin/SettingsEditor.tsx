import React, { useState } from 'react';

export function SettingsEditor() {
  const [whatsappLink, setWhatsappLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save WhatsApp link
    localStorage.setItem('whatsappLink', whatsappLink);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">WhatsApp Community Link</label>
            <input
              type="url"
              value={whatsappLink}
              onChange={e => setWhatsappLink(e.target.value)}
              placeholder="https://chat.whatsapp.com/..."
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
}