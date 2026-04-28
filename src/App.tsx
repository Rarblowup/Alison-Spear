/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';

const projects = [
  { name: 'Obercreek Residence', category: 'Residential' },
  { name: '69th Street Penthouse', category: 'Residential' },
  { name: 'Hochberg / Healy Residence', category: 'Residential' },
  { name: 'Libow Residence', category: 'Residential' },
  { name: 'Lindemann Residence', category: 'Residential' },
  { name: 'Obercreek Farm Community', category: 'Residential' },
  { name: 'Ackerman Apartment', category: 'Residential' },
  { name: 'Deutch Residence', category: 'Residential' },
  { name: 'Fifth Avenue Loft', category: 'Residential' },
  { name: 'Sagaponack', category: 'Residential' },
  { name: 'The Standard Spa, Miami', category: 'Commercial' },
  { name: 'Odegard Showroom', category: 'Commercial' },
  { name: 'Aqua Island, Miami', category: 'Commercial' },
  { name: 'Obercreek Brewery', category: 'Commercial' },
  { name: 'Holly Hunt Showroom', category: 'Commercial' },
  { name: 'Genki Sushi', category: 'Commercial' },
  { name: 'Circa Modular Seating', category: 'Furniture' },
  { name: 'Spearlines', category: 'Furniture' },
  { name: 'Alison Spear for Odegard', category: 'Furniture' },
];

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f5f2ed] flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <AIAssistant />
      </div>
    </Router>
  );
}
