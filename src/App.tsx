import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Admin from './pages/Admin';
import AdminDashboard from './pages/AdminDashboard';
import Shops from './pages/Shops';
import Blog from './pages/Blog';
import Marketplace from './pages/Marketplace';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
            <Route path="/shops" element={<Shops />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/marketplace" element={<Marketplace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;