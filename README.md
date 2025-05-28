# Application E-commerce (v1)

## Présentation du projet

Cette application e-commerce est une plateforme complète comprenant une interface publique pour les clients et une interface d'administration pour la gestion des produits, commandes et utilisateurs. Développée dans le cadre d'un projet d'apprentissage de 3 jours avec une équipe de 3-4 développeurs, elle démontre l'utilisation de technologies modernes pour créer une solution e-commerce fonctionnelle.

## Fonctionnalités

### Interface publique
- Page d'accueil avec présentation des produits vedettes
- Catalogue de produits avec filtres et recherche
- Pages de détail produit
- Panier d'achat
- Processus de paiement
- Authentification (connexion/inscription)
- Historique des commandes

### Interface d'administration
- Dashboard avec statistiques et graphiques
- Gestion des produits (CRUD)
- Gestion des commandes avec filtres par statut
- Gestion des utilisateurs et des rôles
- Interface responsive adaptée à tous les appareils
- Protection des routes basée sur les rôles (admin/user)

## Technologies utilisées

### Frontend
- **React** (avec Vite) - Bibliothèque UI
- **React Router** - Gestion des routes
- **Tailwind CSS** - Framework CSS utilitaire
- **Heroicons** - Icônes SVG

### Backend
- **Node.js** (Express) - Serveur API
- **MongoDB** avec Mongoose - Base de données
- **JWT** - Authentification

## Installation et démarrage

### Prérequis
- Node.js (v14+)
- npm ou yarn
- MongoDB (local ou distant)

### Installation

1. Cloner le dépôt
```bash
git clone https://github.com/votre-username/ecommerce-v1.git
cd ecommerce-v1
```

2. Installer les dépendances (backend et frontend)
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

3. Configurer les variables d'environnement
   - Créer un fichier `.env` dans le dossier backend en vous basant sur `.env.example`

4. Démarrer l'application
```bash
# Backend (depuis le dossier backend)
npm run dev

# Frontend (depuis le dossier frontend)
npm run dev
```

## Identifiants de test

```
Email: admin@example.com
Mot de passe: password
```

## Structure du projet

```
ecommerce-v1/
├── backend/           # API Node.js/Express
│   ├── controllers/   # Contrôleurs pour chaque entité
│   ├── models/        # Modèles Mongoose
│   ├── routes/        # Routes API
│   └── middleware/    # Middleware (auth, validation)
├── frontend/          # Application React
│   ├── public/        # Ressources statiques
│   └── src/           # Code source React
│       ├── components/ # Composants réutilisables
│       ├── layouts/    # Layouts (Admin, Public)
│       ├── pages/      # Pages de l'application
│       ├── services/   # Services API
│       └── utils/      # Utilitaires
└── README.md          # Documentation
```

## Workflow Git

Le projet suit un workflow Git avec les branches suivantes :
- `main` : version stable, prête pour la production
- `dev` : branche d'intégration quotidienne
- Branches de fonctionnalités : `feature/xxx` pour chaque nouvelle fonctionnalité

## Équipe de développement

Projet réalisé par une équipe de 3-4 développeurs dans le cadre d'un exercice d'apprentissage de 3 jours.

## Licence

Ce projet est sous licence MIT.