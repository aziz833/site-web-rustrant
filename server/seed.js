const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Menu = require('./models/Menu');
const Review = require('./models/Review');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const menuData = [
  {
    name: 'Couscous au Poisson',
    description: 'Le célèbre couscous au poisson de Nabeul, préparé avec la pêche du jour et des légumes de saison.',
    price: 25,
    category: 'Plats',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop', // Placeholder
    tags: ['Spécialité', 'Fait maison']
  },
  {
    name: 'Couscous à l\'Agneau',
    description: 'Couscous traditionnel à la viande d\'agneau tendre, médaillé de bronze au concours africain.',
    price: 28,
    category: 'Plats',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop',
    tags: ['Médaillé', 'Authentique']
  },
  {
    name: 'Mloukhia',
    description: 'Plat traditionnel tunisien mijoté à feu très doux pendant des heures, avec de la viande de bœuf.',
    price: 22,
    category: 'Plats',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop',
    tags: ['Tradition']
  },
  {
    name: 'Spaghetti aux Fruits de Mer',
    description: 'Pâtes généreuses accompagnées de crevettes, calamars et moules fraîches de la région.',
    price: 26,
    category: 'Plats',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=800&auto=format&fit=crop',
    tags: ['Frais']
  },
  {
    name: 'Brik à l\'Œuf',
    description: 'Feuille de brick croustillante garnie de thon, persil, oignon et d\'un œuf coulant.',
    price: 6,
    category: 'Entrées',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=800&auto=format&fit=crop',
    tags: ['Croustillant']
  },
  {
    name: 'Salade Mechouia',
    description: 'Salade de poivrons et tomates grillés, relevée d\'ail et d\'huile d\'olive, garnie de thon et d\'œufs durs.',
    price: 8,
    category: 'Entrées',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop',
    tags: ['Végétarien', 'Épicé']
  }
];

const reviewData = [
  {
    author: 'Andile Masuku',
    rating: 5,
    text: 'Couscous exceptionnel, vraiment le meilleur que j\'ai pu goûter. L\'accueil du Chef Marouen est formidable.',
    source: 'Google'
  },
  {
    author: 'Ammar Alansari',
    rating: 5,
    text: 'Un joyau caché dans la médina de Nabeul. La Mloukhia est à tomber par terre, on s\'y sent comme à la maison.',
    source: 'Google'
  },
  {
    author: 'hidinho',
    rating: 4,
    text: 'Très bon restaurant populaire. Plats généreux et prix très corrects. La terrasse est agréable le soir.',
    source: 'Google'
  }
];

const importData = async () => {
  try {
    await Menu.deleteMany();
    await Review.deleteMany();

    await Menu.insertMany(menuData);
    await Review.insertMany(reviewData);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

importData();
