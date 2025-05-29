import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Composant pour protéger les routes en fonction du rôle de l'utilisateur
const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { currentUser, loading, hasRole } = useAuth();
  const location = useLocation();

  // Si l'authentification est en cours de chargement, afficher un indicateur de chargement
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Si un rôle spécifique est requis et que l'utilisateur n'a pas ce rôle, rediriger vers une page d'accès refusé
  if (requiredRole && !hasRole(requiredRole)) {
    return <Navigate to="/access-denied" replace />;
  }

  // Si l'utilisateur est connecté et a le rôle requis (ou aucun rôle spécifique n'est requis), afficher le contenu protégé
  return children;
};

export default ProtectedRoute;
