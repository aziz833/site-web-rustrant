import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isHome = location.pathname === '/';
  const navClass = scrolled
    ? 'bg-white shadow-sm text-[#1D3557]'
    : isHome ? 'bg-transparent text-white' : 'bg-white shadow-sm text-[#1D3557]';

  const links = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Galerie', path: '/gallery' },
    { name: 'Avis', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-serif text-2xl font-bold tracking-wider">
              LE BONHEUR
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-[#C05D43] transition-colors duration-200 font-medium text-sm tracking-wide uppercase"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex">
            <Link to="/reservation">
              <button className="px-5 py-2 bg-[#D4AF37] text-white font-medium text-sm tracking-wider uppercase hover:bg-[#b5952f] transition-colors rounded-sm shadow-sm">
                Réserver
              </button>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg text-[#1D3557]"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 font-medium uppercase tracking-wide border-b border-gray-100"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/reservation"
                onClick={() => setIsOpen(false)}
                className="block mt-4 text-center px-4 py-3 bg-[#D4AF37] text-white font-medium uppercase tracking-wide rounded-sm"
              >
                Réserver une table
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
