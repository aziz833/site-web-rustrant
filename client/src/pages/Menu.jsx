import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Tous');

  const categories = ['Tous', 'Entrées', 'Plats', 'Desserts', 'Boissons'];

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/menu');
        if (res.ok) {
          const data = await res.json();
          setMenuItems(data);
        } else {
          console.error("Failed to fetch menu");
        }
      } catch (error) {
        console.error("Error fetching menu:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  const filteredItems = activeCategory === 'Tous' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-28 pb-20 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-serif text-medina mb-4">Notre Menu</h1>
            <div className="w-16 h-1 bg-gold mx-auto" />
          </motion.div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full transition-all duration-300 text-sm tracking-wider uppercase ${
                activeCategory === cat 
                ? 'bg-terracotta text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-terracotta"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {filteredItems.map((item, index) => (
              <motion.div 
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="group flex flex-col sm:flex-row gap-6 items-center sm:items-start"
              >
                <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg shadow-sm">
                  <img 
                    src={item.image || 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop'} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-grow flex flex-col h-full justify-center w-full">
                  <div className="flex justify-between items-baseline mb-2 relative">
                    <h3 className="font-serif text-xl text-medina bg-cream pr-2 relative z-10">{item.name}</h3>
                    <div className="absolute left-0 right-0 bottom-[6px] border-b border-dashed border-gray-300 z-0"></div>
                    <span className="font-serif text-lg text-terracotta font-medium ml-2 bg-cream pl-2 relative z-10">{item.price} TND</span>
                  </div>
                  <p className="text-gray-500 font-light text-sm italic mb-2">{item.description}</p>
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex gap-2 mt-auto">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider bg-gray-100 text-gray-500 px-2 py-1 rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Menu;
