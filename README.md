# Restaurant Le Bonheur

Bienvenue dans le dépôt du site web pour le **Restaurant Le Bonheur**, un restaurant authentique situé dans la Médina de Nabeul, Tunisie.

## Technologies Utilisées

- **Frontend** : React (Vite), Tailwind CSS, Framer Motion, React Router
- **Backend** : Node.js, Express, MongoDB (Mongoose)

## Structure du Projet

Le projet est divisé en deux parties principales (Monorepo) :
- `client/` : Le frontend React
- `server/` : Le backend Node.js / Express API

## Prérequis

- Node.js (v18+)
- Compte MongoDB Atlas (pour la base de données en ligne) ou MongoDB en local

## Installation et Lancement

### 1. Cloner et préparer la Base de Données

Créez un fichier `.env` dans le dossier `server/` en vous basant sur `.env.example` et ajoutez votre URI MongoDB Atlas :
```env
PORT=5000
MONGODB_URI=mongodb+srv://<votre_user>:<votre_mot_de_passe>@cluster0.../lebonheur
FRONTEND_URL=http://localhost:5173
```

### 2. Démarrer le Backend (API)

```bash
cd server
npm install
npm run dev
```
Le serveur démarrera sur `http://localhost:5000`. 
**Astuce** : Exécutez `node seed.js` une fois pour peupler la base de données avec le menu et les avis de départ.

### 3. Démarrer le Frontend (Client)

Dans un nouveau terminal :
```bash
cd client
npm install
npm run dev
```
Le site sera accessible sur `http://localhost:5173`.

## Déploiement

- **Frontend** : Recommandé sur Vercel ou Netlify. Lier le dossier `client` et définir la commande de build `npm run build`.
- **Backend** : Recommandé sur Render ou Railway. Lier le dossier `server`, définir la commande `npm start` (ajouter `"start": "node server.js"` dans le `package.json`), et configurer les variables d'environnement (`MONGODB_URI`, `PORT`).
