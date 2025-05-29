/**
 * Service d'API pour communiquer avec le backend MongoDB/Express
 */

// URL de base de l'API
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Fonction pour récupérer le token d'authentification
const getToken = () => {
  return localStorage.getItem('token');
};

// Options par défaut pour les requêtes fetch
const defaultOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
};

// Fonction générique pour effectuer des requêtes API
const apiRequest = async (endpoint, method = 'GET', data = null) => {
  const url = `${API_URL}${endpoint}`;
  const token = getToken();
  
  const options = {
    ...defaultOptions,
    method,
    headers: {
      ...defaultOptions.headers,
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    },
    ...(data ? { body: JSON.stringify(data) } : {}),
  };

  try {
    const response = await fetch(url, options);
    
    // Si la réponse n'est pas ok (statut 2xx), lancer une erreur
    if (!response.ok) {
      // Essayer de récupérer le message d'erreur du serveur
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Erreur ${response.status}: ${response.statusText}`);
    }
    
    // Vérifier si la réponse contient du JSON
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    
    return await response.text();
  } catch (error) {
    console.error('Erreur API:', error);
    throw error;
  }
};

// Méthodes d'API pour les différentes ressources
export const api = {
  // Authentification
  auth: {
    login: (credentials) => apiRequest('/auth/login', 'POST', credentials),
    register: (userData) => apiRequest('/auth/register', 'POST', userData),
    me: () => apiRequest('/auth/me'),
  },
  
  // Produits
  products: {
    getAll: (params) => apiRequest(`/products${params ? `?${new URLSearchParams(params)}` : ''}`),
    getById: (id) => apiRequest(`/products/${id}`),
    create: (product) => apiRequest('/products', 'POST', product),
    update: (id, product) => apiRequest(`/products/${id}`, 'PUT', product),
    delete: (id) => apiRequest(`/products/${id}`, 'DELETE'),
  },
  
  // Commandes
  orders: {
    getAll: (params) => apiRequest(`/orders${params ? `?${new URLSearchParams(params)}` : ''}`),
    getById: (id) => apiRequest(`/orders/${id}`),
    create: (order) => apiRequest('/orders', 'POST', order),
    update: (id, order) => apiRequest(`/orders/${id}`, 'PUT', order),
    updateStatus: (id, status) => apiRequest(`/orders/${id}/status`, 'PATCH', { status }),
    delete: (id) => apiRequest(`/orders/${id}`, 'DELETE'),
  },
  
  // Utilisateurs
  users: {
    getAll: (params) => apiRequest(`/users${params ? `?${new URLSearchParams(params)}` : ''}`),
    getById: (id) => apiRequest(`/users/${id}`),
    create: (user) => apiRequest('/users', 'POST', user),
    update: (id, user) => apiRequest(`/users/${id}`, 'PUT', user),
    updateRole: (id, role) => apiRequest(`/users/${id}/role`, 'PATCH', { role }),
    delete: (id) => apiRequest(`/users/${id}`, 'DELETE'),
  },
  
  // Dashboard
  dashboard: {
    getStats: () => apiRequest('/dashboard/stats'),
    getRecentOrders: () => apiRequest('/dashboard/recent-orders'),
    getTopProducts: () => apiRequest('/dashboard/top-products'),
  },
};

export default api;
