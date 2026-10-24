import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1D3557] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="font-serif text-2xl font-bold mb-4 tracking-wider text-[#F8F9FA]">
            LE BONHEUR
          </h2>
          <p className="text-gray-300 font-light mb-6">
            Le bonheur, ça se déguste à Nabeul. Cuisine traditionnelle tunisienne et orientale par le Chef Marouen.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start text-[#D4AF37]">
            <a href="#" className="hover:text-white transition-colors"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-white transition-colors"><FaInstagram size={24} /></a>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-serif text-xl mb-6 text-[#D4AF37]">Contact</h3>
          <ul className="space-y-4 text-gray-300 font-light">
            <li className="flex items-start">
              <MapPin className="mr-3 mt-1 flex-shrink-0 text-[#C05D43]" size={20} />
              <span>Médina de Nabeul,<br/>FP4P+5GJ, Nabeul, Tunisie</span>
            </li>
            <li className="flex items-center">
              <Phone className="mr-3 text-[#C05D43]" size={20} />
              <span>+216 96 461 160</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-serif text-xl mb-6 text-[#D4AF37]">Horaires</h3>
          <ul className="space-y-3 text-gray-300 font-light">
            <li className="flex items-center">
              <Clock className="mr-3 text-[#C05D43]" size={20} />
              <span>Lundi - Dimanche</span>
            </li>
            <li className="ml-8 text-sm">11:00 - 23:00</li>
          </ul>
          <Link to="/reservation" className="mt-6 inline-block pb-1 border-b border-[#D4AF37] text-[#D4AF37] hover:text-white transition-colors">
            Réserver une table
          </Link>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Restaurant Le Bonheur. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
