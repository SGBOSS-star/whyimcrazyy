import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VPSHosting from './pages/VPSHosting';
import DedicatedHosting from './pages/DedicatedHosting';
import MinecraftHosting from './pages/MinecraftHosting';
import About from './pages/About';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-navy-950 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vps" element={<VPSHosting />} />
          <Route path="/dedicated" element={<DedicatedHosting />} />
          <Route path="/minecraft" element={<MinecraftHosting />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App