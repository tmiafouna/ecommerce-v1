import { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { 
  HomeIcon, 
  ShoppingBagIcon, 
  UserGroupIcon, 
  ClipboardDocumentListIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowRightStartOnRectangleIcon
} from '@heroicons/react/24/outline';
import '../styles/newAdmin.css';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: HomeIcon },
    { name: 'Produits', href: '/admin/products', icon: ShoppingBagIcon },
    { name: 'Commandes', href: '/admin/orders', icon: ClipboardDocumentListIcon },
    { name: 'Utilisateurs', href: '/admin/users', icon: UserGroupIcon },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    // Logique de déconnexion à implémenter
    // localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <div className="admin-sidebar">
        <div className="admin-sidebar-header">
          <h1>Admin Panel</h1>
        </div>
        <div className="admin-sidebar-nav">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="admin-sidebar-footer">
          <button onClick={handleLogout}>
            Déconnexion
          </button>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
