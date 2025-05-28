import { useState, useEffect } from 'react';
import { 
  BanknotesIcon, 
  ShoppingBagIcon, 
  UserGroupIcon, 
  ClipboardDocumentListIcon 
} from '@heroicons/react/24/solid';

const Dashboard = () => {
  // État pour stocker les données du tableau de bord
  const [stats, setStats] = useState({
    totalSales: 0,
    totalOrders: 0,
    totalProducts: 0,
    totalUsers: 0,
    recentOrders: [],
    topProducts: []
  });

  // Simuler le chargement des données depuis l'API
  useEffect(() => {
    // Dans un cas réel, vous feriez un appel API ici
    // fetch('/api/admin/dashboard')
    //   .then(res => res.json())
    //   .then(data => setStats(data));

    // Données simulées pour la démonstration
    setStats({
      totalSales: 2995,
      totalOrders: 3,
      totalProducts: 4,
      totalUsers: 4,
      recentOrders: [
        { id: 1003, customer: 'Pierre Durand', total: 598.00, status: 'En attente' },
        { id: 1002, customer: 'Marie Martin', total: 1295.00, status: 'En cours' },
        { id: 1001, customer: 'Jean Dupont', total: 1098.00, status: 'Livré' },
      ],
      topProducts: [
        { id: 1, name: 'Laptop Pro', price: 1299.00, stock: 20 },
        { id: 2, name: 'Smartphone XYZ', price: 899.00, stock: 45 },
        { id: 3, name: 'Casque audio', price: 199.00, stock: 100 },
      ]
    });
  }, []);

  return (
    <div className="admin-header">
      <h1>Dashboard</h1>
      <h2>Tableau de bord</h2>
      
      {/* Statistiques */}
      <div className="admin-stats">
        {/* Ventes totales */}
        <div className="admin-stat-card">
          <div className="admin-stat-card-content">
            <div className="admin-stat-card-icon blue">
              <BanknotesIcon className="h-6 w-6 text-blue-500" />
            </div>
            <div className="admin-stat-card-text">
              <h3>Ventes totales</h3>
              <p>{stats.totalSales} €</p>
            </div>
          </div>
        </div>
        
        {/* Commandes */}
        <div className="admin-stat-card">
          <div className="admin-stat-card-content">
            <div className="admin-stat-card-icon green">
              <ClipboardDocumentListIcon className="h-6 w-6 text-green-500" />
            </div>
            <div className="admin-stat-card-text">
              <h3>Commandes</h3>
              <p>{stats.totalOrders}</p>
            </div>
          </div>
        </div>
        
        {/* Produits */}
        <div className="admin-stat-card">
          <div className="admin-stat-card-content">
            <div className="admin-stat-card-icon purple">
              <ShoppingBagIcon className="h-6 w-6 text-indigo-500" />
            </div>
            <div className="admin-stat-card-text">
              <h3>Produits</h3>
              <p>{stats.totalProducts}</p>
            </div>
          </div>
        </div>
        
        {/* Utilisateurs */}
        <div className="admin-stat-card">
          <div className="admin-stat-card-content">
            <div className="admin-stat-card-icon amber">
              <UserGroupIcon className="h-6 w-6 text-amber-500" />
            </div>
            <div className="admin-stat-card-text">
              <h3>Utilisateurs</h3>
              <p>{stats.totalUsers}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Commandes récentes et produits populaires */}
      <div className="admin-sections">
        {/* Commandes récentes */}
        <div className="admin-section">
          <h3>Commandes récentes</h3>
          <div>
            {stats.recentOrders.map((order) => (
              <div key={order.id} className="admin-order-item">
                <div className="admin-order-info">
                  <h4>Commande #{order.id}</h4>
                  <p>{order.customer} - {order.total.toLocaleString('fr-FR')} €</p>
                </div>
                <span className={`admin-order-status ${
                  order.status === 'Livré' ? 'completed' :
                  order.status === 'En cours' ? 'processing' :
                  'pending'
                }`}>
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Produits populaires */}
        <div className="admin-section">
          <h3>Produits populaires</h3>
          <div>
            {stats.topProducts.map((product) => (
              <div key={product.id} className="admin-product-item">
                <div className="admin-product-info">
                  <div className="admin-product-image">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxhcHRvcCI+PHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjEyIiB4PSIzIiB5PSI0IiByeD0iMiIgcnk9IjIiLz48cGF0aCBkPSJNMiAxN2gyMCIvPjwvc3ZnPg==" alt="" className="w-5 h-5 text-gray-500" />
                  </div>
                  <div className="admin-product-details">
                    <h4>{product.name}</h4>
                    <p>{product.price.toLocaleString('fr-FR')} € - {product.stock} en stock</p>
                  </div>
                </div>
                <span className="admin-product-badge">
                  Populaire
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
