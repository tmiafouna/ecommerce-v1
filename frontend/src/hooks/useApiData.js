import { useState, useEffect, useCallback } from 'react';
import api from '../utils/api';

/**
 * Hook personnalisé pour gérer les opérations CRUD avec l'API
 * @param {string} resourceType - Type de ressource (products, orders, users)
 * @param {Object} initialParams - Paramètres initiaux pour la requête
 */
const useApiData = (resourceType, initialParams = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [params, setParams] = useState(initialParams);

  // Vérifier que le type de ressource est valide
  if (!api[resourceType]) {
    throw new Error(`Type de ressource invalide: ${resourceType}`);
  }

  // Fonction pour charger les données
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await api[resourceType].getAll(params);
      setData(result);
    } catch (err) {
      setError(err.message || 'Une erreur est survenue lors du chargement des données');
    } finally {
      setLoading(false);
    }
  }, [resourceType, params]);

  // Charger les données au montage du composant et lorsque les paramètres changent
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Fonction pour créer un nouvel élément
  const createItem = async (item) => {
    try {
      setLoading(true);
      setError(null);
      const result = await api[resourceType].create(item);
      setData(prevData => [...prevData, result]);
      return result;
    } catch (err) {
      setError(err.message || 'Une erreur est survenue lors de la création');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour mettre à jour un élément
  const updateItem = async (id, item) => {
    try {
      setLoading(true);
      setError(null);
      const result = await api[resourceType].update(id, item);
      setData(prevData => prevData.map(d => d._id === id ? result : d));
      return result;
    } catch (err) {
      setError(err.message || 'Une erreur est survenue lors de la mise à jour');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour supprimer un élément
  const deleteItem = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await api[resourceType].delete(id);
      setData(prevData => prevData.filter(d => d._id !== id));
      return true;
    } catch (err) {
      setError(err.message || 'Une erreur est survenue lors de la suppression');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour mettre à jour les paramètres de recherche
  const updateParams = (newParams) => {
    setParams(prev => ({ ...prev, ...newParams }));
  };

  // Fonction pour réinitialiser les paramètres
  const resetParams = () => {
    setParams(initialParams);
  };

  return {
    data,
    loading,
    error,
    params,
    fetchData,
    createItem,
    updateItem,
    deleteItem,
    updateParams,
    resetParams
  };
};

export default useApiData;
