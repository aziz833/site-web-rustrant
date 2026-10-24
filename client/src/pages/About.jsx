import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-cream">
      
      {/* Notre histoire */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Notre Histoire</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-medina mb-6">L'âme de Nabeul</h2>
            <div className="w-16 h-1 bg-gold mb-6" />
            <p className="text-gray-600 font-light leading-relaxed mb-6">
              Niché dans les ruelles vibrantes de la Médina de Nabeul, le Restaurant Le Bonheur est né d'une idée simple : partager la richesse de la cuisine familiale tunisienne avec tous.
            </p>
            <p className="text-gray-600 font-light leading-relaxed">
              Ici, "le bonheur" n'est pas qu'un nom, c'est une philosophie. C'est l'odeur du pain chaud, le sourire à l'accueil, et la générosité d'une assiette bien remplie, servie à un prix juste.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-96 rounded-xl overflow-hidden shadow-lg relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1548484168-f9b2d35c8297?q=80&w=1000&auto=format&fit=crop" 
              alt="Médina de Nabeul" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-medina/10" />
          </motion.div>
        </div>
      </section>

      {/* Le Chef */}
      <section className="bg-medina text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1 relative"
            >
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop" 
                  alt="Chef Marouen" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-8 -right-8 bg-gold text-medina p-6 rounded-full w-40 h-40 flex flex-col items-center justify-center text-center shadow-xl border-4 border-white">
                <span className="text-3xl font-serif block mb-1">🥉</span>
                <span className="text-xs font-bold uppercase tracking-wider leading-tight">Médaille<br/>de Bronze</span>
                <span className="text-[10px] uppercase mt-1">Couscous d'Afrique</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h4 className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Le Chef</h4>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Baccouche Marouen</h2>
              <div className="w-16 h-1 bg-gold mb-6" />
              <blockquote className="text-2xl font-serif italic font-light leading-relaxed text-gray-300 mb-8 border-l-4 border-gold pl-6 py-2">
                "Cuisiner, c'est raconter l'histoire de nos ancêtres à travers le parfum des épices."
              </blockquote>
              <p className="text-gray-300 font-light leading-relaxed mb-6">
                Passionné depuis son plus jeune âge par les saveurs orientales, le Chef Marouen a su hisser les plats populaires tunisiens au rang d'excellence gastronomique.
              </p>
              <p className="text-gray-300 font-light leading-relaxed">
                Son dévouement à la tradition lui a valu la médaille de bronze au prestigieux concours du meilleur couscous d'Afrique, une reconnaissance de son savoir-faire unique et de son amour pour les produits du terroir.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-medina mb-4">Nos Valeurs</h2>
          <div className="w-16 h-1 bg-gold mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Authenticité", desc: "Des recettes traditionnelles préservées, transmises de génération en génération." },
            { title: "Fraîcheur", desc: "Des ingrédients sourcés chaque matin au marché local de Nabeul." },
            { title: "Convivialité", desc: "Une ambiance chaleureuse où chaque client est reçu comme un ami." },
            { title: "Savoir-faire", desc: "La maîtrise parfaite des cuissons lentes et du roulage du couscous à la main." }
          ].map((val, idx) => (
            <motion.div 
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all text-center border border-gray-100"
            >
              <h3 className="text-xl font-serif text-terracotta mb-4">{val.title}</h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
