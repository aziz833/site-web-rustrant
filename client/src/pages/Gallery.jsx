import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800', alt: 'Couscous au poisson' },
    { src: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800', alt: 'Mloukhia' },
    { src: 'https://images.unsplash.com/photo-1548484168-f9b2d35c8297?q=80&w=800', alt: 'Médina' },
    { src: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800', alt: 'Chef en cuisine' },
    { src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800', alt: 'Salade Mechouia' },
    { src: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=800', alt: 'Brik' },
  ];

  return (
    <div className="pt-28 pb-20 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-serif text-medina mb-4">Galerie</h1>
            <div className="w-16 h-1 bg-gold mx-auto mb-6" />
            <p className="text-gray-600 font-light text-lg">
              Un aperçu de nos plats et de l'atmosphère qui vous attend.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="aspect-square rounded-xl overflow-hidden shadow-sm group relative"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif text-lg tracking-wider px-4 text-center">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Gallery;
