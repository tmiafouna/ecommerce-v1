import { createContext, useContext, useState, useEffect } from 'react';

// Création du contexte d'authentification
const AuthContext = createContext();

// Hook personnalisé pour utiliser le contexte d'authentification
export const useAuth = () => {
  return useContext(AuthContext);
};

// Fournisseur du contexte d'authentification
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Vérifier si l'utilisateur est déjà connecté au chargement
  useEffect(() => {
    // Dans un cas réel, vous vérifieriez le token JWT stocké
    // et feriez une requête à l'API pour obtenir les informations de l'utilisateur
    const token = localStorage.getItem('token');
    
    if (token) {
      // Simuler la récupération des informations utilisateur
      // En production, vous feriez un appel API pour vérifier le token
      // et récupérer les informations de l'utilisateur
      setTimeout(() => {
        setCurrentUser({
          id: 1,
          name: 'Jean Dupont',
          email: 'jean.dupont@example.com',
          role: 'admin'
        });
        setLoading(false);
      }, 500);
    } else {
      setLoading(false);
    }
  }, []);

  // Fonction de connexion
  const login = async (email, password) => {
    // Dans un cas réel, vous feriez un appel API pour authentifier l'utilisateur
    // et récupérer un token JWT
    
    // Simulation d'une connexion réussie
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Vérification simplifiée des identifiants
        if (email === 'admin@example.com' && password === 'password') {
          const user = {
            id: 1,
            name: 'Jean Dupont',
            email: 'admin@example.com',
            role: 'admin'
          };
          
          // Stocker le token (simulé)
          localStorage.setItem('token', 'fake-jwt-token');
          
          // Mettre à jour l'état de l'utilisateur
          setCurrentUser(user);
          
          resolve(user);
        } else if (email === 'user@example.com' && password === 'password') {
          const user = {
            id: 2,
            name: 'Marie Martin',
            email: 'user@example.com',
            role: 'user'
          };
          
          // Stocker le token (simulé)
          localStorage.setItem('token', 'fake-jwt-token-user');
          
          // Mettre à jour l'état de l'utilisateur
          setCurrentUser(user);
          
          resolve(user);
        } else {
          reject(new Error('Identifiants invalides'));
        }
      }, 1000);
    });
  };

  // Fonction de déconnexion
  const logout = () => {
    // Supprimer le token
    localStorage.removeItem('token');
    
    // Réinitialiser l'état de l'utilisateur
    setCurrentUser(null);
  };

  // Vérifier si l'utilisateur a un rôle spécifique
  const hasRole = (role) => {
    return currentUser?.role === role;
  };

  // Valeur du contexte
  const value = {
    currentUser,
    loading,
    login,
    logout,
    hasRole,
    isAdmin: currentUser?.role === 'admin'
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
