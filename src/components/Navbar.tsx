import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-6 bg-transparent absolute w-full top-0 z-50 text-white">
      <h1 className="text-xl font-serif tracking-widest italic">ALISON SPEAR</h1>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-[11px] uppercase tracking-[0.2em]">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
      </div>
      <button 
        onClick={() => window.dispatchEvent(new CustomEvent('pay-rar-event'))}
        className="hidden md:block text-[11px] uppercase tracking-[0.1em] border border-white/30 px-4 py-2 hover:bg-white hover:text-black transition">
        Portfolio
      </button>

      {/* Mobile Menu Icon */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/90 p-6 flex flex-col space-y-4 text-[11px] uppercase tracking-[0.2em]">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-gray-300">About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Contact</Link>
          <button 
            onClick={() => { setIsOpen(false); window.dispatchEvent(new CustomEvent('pay-rar-event')); }}
            className="border border-white/30 px-4 py-2 hover:bg-white hover:text-black transition text-left">
            Portfolio
          </button>
        </div>
      )}
    </nav>
  );
}
