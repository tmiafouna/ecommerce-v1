import { useState, useEffect } from 'react';
import { MagnifyingGlassIcon, EyeIcon } from '@heroicons/react/24/outline';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');

  // Simuler le chargement des commandes depuis l'API
  useEffect(() => {
    // Dans un cas ru00e9el, vous feriez un appel API ici
    // fetch('/api/admin/orders')
    //   .then(res => res.json())
    //   .then(data => setOrders(data));

    // Données simulées pour la démonstration
    setTimeout(() => {
      setOrders([
        { 
          id: 1001, 
          customer: { name: 'Jean Dupont', email: 'jean.dupont@example.com' },
          date: '25/05/2025', 
          total: 1098.00, 
          status: 'Livré',
          items: [
            { id: 1, name: 'Smartphone XYZ', price: 899.00, quantity: 1 },
            { id: 2, name: 'Casque audio', price: 199.00, quantity: 1 }
          ]
        },
        { 
          id: 1002, 
          customer: { name: 'Marie Martin', email: 'marie.martin@example.com' },
          date: '26/05/2025', 
          total: 1295.00, 
          status: 'En cours',
          items: [
            { id: 3, name: 'Laptop Pro', price: 1299.00, quantity: 1 }
          ]
        },
        { 
          id: 1003, 
          customer: { name: 'Pierre Durand', email: 'pierre.durand@example.com' },
          date: '27/05/2025', 
          total: 598.00, 
          status: 'En attente',
          items: [
            { id: 4, name: 'Montre connectée', price: 129.00, quantity: 1 },
            { id: 5, name: 'Enceinte Bluetooth', price: 79.00, quantity: 2 },
            { id: 6, name: 'Casque audio', price: 199.00, quantity: 1 }
          ]
        }
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Filtrer les commandes en fonction du terme de recherche et du filtre de statut
  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toString().includes(searchTerm);
    
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Ouvrir le modal pour voir les du00e9tails d'une commande
  const openModal = (order) => {
    setCurrentOrder(order);
    setIsModalOpen(true);
  };

  // Fermer le modal
  const closeModal = () => {
    setCurrentOrder(null);
    setIsModalOpen(false);
  };

  // Mettre u00e0 jour le statut d'une commande
  const updateOrderStatus = (orderId, newStatus) => {
    // Dans un cas ru00e9el, vous feriez un appel API ici
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
    closeModal();
  };

  // Options de statut pour le filtre et la mise à jour
  const statusOptions = ['Livré', 'En cours', 'En attente'];

  return (
    <div className="admin-header">
      <h1>Commandes</h1>
      <h2>Gestion des commandes</h2>

      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          {/* Barre de recherche */}
          <div className="relative w-64">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MagnifyingGlassIcon className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
              placeholder="Rechercher une commande..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filtre par statut */}
          <select
            className="block w-40 pl-3 pr-10 py-2 border border-gray-300 rounded-md"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">Tous les statuts</option>
            {statusOptions.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
        <div></div>
      </div>

      {/* Tableau des commandes */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {isLoading ? (
          <div className="p-6 text-center text-gray-500 flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Chargement des commandes...
          </div>
        ) : filteredOrders.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p className="mt-2 text-sm font-medium">Aucune commande trouvée</p>
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  COMMANDE
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CLIENT
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  DATE
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  TOTAL
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  STATUT
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">#{order.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.customer.name}</div>
                    <div className="text-sm text-gray-500">{order.customer.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.total.toLocaleString('fr-FR')} €</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === 'Livré' ? 'bg-green-100 text-green-800' :
                      order.status === 'En cours' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => openModal(order)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <EyeIcon className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Modal pour voir les détails d'une commande */}
      {isModalOpen && currentOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="relative w-full max-w-2xl p-6 mx-auto my-8 bg-white rounded-lg shadow-lg">
            <div className="flex items-start justify-between mb-4 border-b pb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Du00e9tails de la commande #{currentOrder.id}
              </h3>
              <button
                className="text-gray-400 hover:text-gray-500"
                onClick={closeModal}
              >
                <span className="text-xl">&times;</span>
              </button>
            </div>
            
            <div className="space-y-4">
              {/* Informations client et commande */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="p-3 bg-gray-50 rounded-md">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Client</h4>
                  <p className="text-sm">{currentOrder.customer.name}</p>
                  <p className="text-sm text-gray-500">{currentOrder.customer.email}</p>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-md">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Commande</h4>
                  <p className="text-sm">Date: {currentOrder.date}</p>
                  <p className="text-sm">Total: {currentOrder.total.toLocaleString('fr-FR')} u20ac</p>
                  <div className="flex items-center mt-2">
                    <span className="text-sm mr-2">Statut:</span>
                    <select
                      className="text-sm p-1 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                      value={currentOrder.status}
                      onChange={(e) => updateOrderStatus(currentOrder.id, e.target.value)}
                    >
                      {statusOptions.map(status => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Articles commandu00e9s */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Articles commandu00e9s</h4>
                <div className="bg-gray-50 rounded-md overflow-hidden">
                  <div className="grid grid-cols-3 gap-2 p-3 text-xs font-medium text-gray-500 border-b border-gray-200">
                    <div>Produit</div>
                    <div className="text-right">Prix unitaire</div>
                    <div className="text-right">Quantitu00e9</div>
                  </div>
                  {currentOrder.items.map((item) => (
                    <div key={item.id} className="grid grid-cols-3 gap-2 p-3 text-sm border-b border-gray-200 last:border-0">
                      <div>{item.name}</div>
                      <div className="text-right">{item.price.toLocaleString('fr-FR')} u20ac</div>
                      <div className="text-right">{item.quantity}</div>
                    </div>
                  ))}
                  <div className="grid grid-cols-3 gap-2 p-3 text-sm font-medium bg-gray-100">
                    <div className="col-span-2 text-right">Total</div>
                    <div className="text-right">{currentOrder.total.toLocaleString('fr-FR')} u20ac</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                onClick={closeModal}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
