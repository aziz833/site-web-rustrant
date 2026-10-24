import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Star } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=2000&auto=format&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif text-white font-bold mb-6 tracking-wide">
              Le bonheur, ça se déguste à Nabeul
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light mb-10">
              Cuisine traditionnelle tunisienne et orientale, authentique et chaleureuse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reservation">
                <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4 uppercase tracking-wider bg-[#D4AF37] hover:bg-[#b5952f]">
                  Réserver une table
                </Button>
              </Link>
              <Link to="/menu">
                <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4 uppercase tracking-wider border-white text-white hover:bg-white hover:text-[#1D3557]">
                  Voir le menu
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-medina mb-6">L'Authenticité dans chaque bouchée</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-8" />
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              Niché au cœur de la Médina de Nabeul, Le Bonheur est plus qu'un restaurant : c'est une invitation au voyage.
              Découvrez les créations du Chef Marouen, médaillé de bronze au concours du meilleur couscous d'Afrique, 
              dans une ambiance conviviale et populaire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-medina text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="flex items-center gap-2 text-gold mb-4">
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
          </div>
          <h3 className="text-4xl font-serif mb-2">4.8 / 5</h3>
          <p className="text-gray-300 mb-8 tracking-wider uppercase text-sm">Basé sur 912 avis Google</p>
          <Link to="/reviews">
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-medina">
              Lire les avis
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
