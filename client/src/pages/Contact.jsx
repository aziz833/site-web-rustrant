import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import Button from '../components/Button';

const Contact = () => {
  return (
    <div className="pt-28 pb-20 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-medina mb-4">Contact & Accès</h1>
          <div className="w-16 h-1 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Informations */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-serif text-terracotta mb-8">Informations Pratiques</h3>
              
              <ul className="space-y-8">
                <li className="flex items-start">
                  <MapPin className="text-gold mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-medium text-medina mb-1">Adresse</h4>
                    <p className="text-gray-500 font-light text-sm">Médina de Nabeul, FP4P+5GJ<br/>Nabeul, Tunisie</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="text-gold mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-medium text-medina mb-1">Téléphone & WhatsApp</h4>
                    <a href="tel:+21696461160" className="text-gray-500 hover:text-terracotta transition-colors font-light text-sm block mb-1">+216 96 461 160</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="text-gold mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-medium text-medina mb-1">Horaires d'ouverture</h4>
                    <p className="text-gray-500 font-light text-sm">Lundi - Dimanche : 11h00 - 23h00</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Form / Map */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col gap-8">
            {/* Map */}
            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <iframe 
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3206.536762304899!2d10.7351!3d36.4566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302996d99f2b8ab%3A0xc391b058a5cbb7f8!2sNabeul%20Medina!5e0!3m2!1sfr!2stn!4v1655555555555!5m2!1sfr!2stn" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Simple Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-serif text-medina mb-6">Nous écrire</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Votre nom" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-terracotta outline-none text-sm" />
                <input type="email" placeholder="Votre email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-terracotta outline-none text-sm" />
                <textarea placeholder="Votre message" rows="3" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-terracotta outline-none text-sm"></textarea>
                <Button type="button" variant="primary" className="w-full text-sm">Envoyer</Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
