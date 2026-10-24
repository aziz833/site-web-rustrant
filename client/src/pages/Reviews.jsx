import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import Button from '../components/Button';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/reviews');
        if (res.ok) {
          const data = await res.json();
          setReviews(data);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  return (
    <div className="pt-28 pb-20 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-serif text-medina mb-6">Vos impressions</h1>
            <p className="text-gray-600 font-light text-lg mb-8">
              La satisfaction de nos clients est notre plus belle récompense. Découvrez ce qu'ils disent de leur expérience au Bonheur.
            </p>
            <Button onClick={() => setFormOpen(!formOpen)} variant="outline">
              Laisser un avis
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white p-8 rounded-2xl shadow-sm flex flex-col sm:flex-row gap-8 justify-around items-center border border-gray-100">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2 text-medina">
                <FaGoogle size={24} />
                <span className="font-serif text-4xl">4.8</span>
              </div>
              <div className="flex text-gold justify-center mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-xs text-gray-400 uppercase tracking-wider">912 avis</span>
            </div>
            <div className="hidden sm:block w-px h-20 bg-gray-200" />
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2 text-[#1877F2]">
                <FaFacebookF size={24} />
                <span className="font-serif text-4xl text-medina">5.0</span>
              </div>
              <div className="flex text-gold justify-center mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-xs text-gray-400 uppercase tracking-wider">Facebook</span>
            </div>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-terracotta"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <motion.div 
                key={review._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="font-serif text-lg text-medina font-medium">{review.author}</h4>
                    <span className="text-xs text-gray-400">{new Date(review.date).toLocaleDateString('fr-FR')}</span>
                  </div>
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} stroke={i < review.rating ? "none" : "currentColor"} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 font-light text-sm italic leading-relaxed">"{review.text}"</p>
                
                {review.source === 'Google' && (
                  <div className="absolute bottom-4 right-6 text-gray-300">
                    <FaGoogle size={16} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Reviews;
