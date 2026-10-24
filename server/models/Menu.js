const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Entrées', 'Plats', 'Desserts', 'Boissons'],
  },
  image: {
    type: String,
    required: true,
  },
  tags: [{
    type: String,
  }],
}, { timestamps: true });

module.exports = mongoose.model('Menu', menuSchema);
