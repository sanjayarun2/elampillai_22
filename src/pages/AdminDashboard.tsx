import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import { ShopEditor } from '../components/admin/ShopEditor';
import { BlogEditor } from '../components/admin/BlogEditor';
import { MarketplaceEditor } from '../components/admin/MarketplaceEditor';
import { SettingsEditor } from '../components/admin/SettingsEditor';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
        
        <Tabs defaultValue="shops">
          <TabsList>
            <TabsTrigger value="shops">Shops</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="shops">
            <ShopEditor />
          </TabsContent>

          <TabsContent value="blog">
            <BlogEditor />
          </TabsContent>

          <TabsContent value="marketplace">
            <MarketplaceEditor />
          </TabsContent>

          <TabsContent value="settings">
            <SettingsEditor />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}