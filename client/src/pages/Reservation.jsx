import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="pt-28 pb-20 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-medina mb-4">Réserver une table</h1>
          <div className="w-16 h-1 bg-gold mx-auto mb-6" />
          <p className="text-gray-600 font-light text-lg">
            Nous avons hâte de vous accueillir. Veuillez remplir le formulaire ci-dessous pour effectuer votre réservation.
          </p>
        </div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-10 rounded-xl shadow-md text-center border-t-4 border-gold"
          >
            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-3xl font-serif text-medina mb-4">Réservation confirmée</h2>
            <p className="text-gray-600 font-light mb-8">
              Merci {formData.name}, votre table pour {formData.guests} personnes le {formData.date} à {formData.time} a bien été enregistrée.
              Nous vous enverrons un message de confirmation prochainement.
            </p>
            <Button onClick={() => setSubmitted(false)} variant="outline">Faire une autre réservation</Button>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-10 rounded-xl shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-terracotta focus:border-terracotta outline-none transition-colors" placeholder="Votre nom" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-terracotta focus:border-terracotta outline-none transition-colors" placeholder="+216 XX XXX XXX" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Personnes *</label>
                  <select required name="guests" value={formData.guests} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-terracotta focus:border-terracotta outline-none transition-colors">
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'personne' : 'personnes'}</option>
                    ))}
                    <option value="9+">9+ personnes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date *</label>
                  <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-terracotta focus:border-terracotta outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Heure *</label>
                  <select required name="time" value={formData.time} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-terracotta focus:border-terracotta outline-none transition-colors">
                    <option value="">Sélectionner</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Demande spéciale (optionnel)</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-terracotta focus:border-terracotta outline-none transition-colors" placeholder="Allergies, anniversaire, préférence de table..."></textarea>
              </div>

              <div className="pt-4 text-center">
                <Button type="submit" variant="primary" className="w-full md:w-auto px-10 text-lg uppercase tracking-wide">
                  Confirmer la réservation
                </Button>
              </div>
            </form>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default Reservation;
