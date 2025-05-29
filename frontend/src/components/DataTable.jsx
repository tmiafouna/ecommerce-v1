import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

/**
 * Composant de tableau de donnu00e9es ru00e9utilisable avec pagination, tri et actions
 * @param {Object} props - Propriu00e9tu00e9s du composant
 * @param {Array} props.columns - Du00e9finition des colonnes du tableau
 * @param {Array} props.data - Donnu00e9es u00e0 afficher
 * @param {boolean} props.loading - Indique si les donnu00e9es sont en cours de chargement
 * @param {Function} props.onRowClick - Fonction appelu00e9e lors du clic sur une ligne
 * @param {Object} props.pagination - Configuration de la pagination
 * @param {Function} props.onPageChange - Fonction appelu00e9e lors du changement de page
 */
const DataTable = ({
  columns = [],
  data = [],
  loading = false,
  onRowClick,
  pagination = { currentPage: 1, totalPages: 1, pageSize: 10 },
  onPageChange,
  emptyMessage = 'Aucune donnu00e9e disponible',
  loadingMessage = 'Chargement des donnu00e9es...',
}) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'asc',
  });

  // Gu00e9rer le tri des donnu00e9es
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Trier les donnu00e9es en fonction de la configuration de tri
  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const column = columns.find(col => col.key === sortConfig.key);
    if (!column || !column.sortable) return 0;

    let aValue = a[sortConfig.key];
    let bValue = b[sortConfig.key];

    // Si une fonction de rendu personnalisu00e9e est fournie pour cette colonne,
    // utiliser la valeur brute pour le tri si disponible
    if (column.sortValue) {
      aValue = column.sortValue(a);
      bValue = column.sortValue(b);
    }

    if (aValue < bValue) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  // Gu00e9nu00e9rer les classes CSS pour l'en-tu00eate de colonne en fonction de l'u00e9tat de tri
  const getSortClass = (key) => {
    if (!key || !sortConfig.key || sortConfig.key !== key) {
      return '';
    }
    return sortConfig.direction === 'asc' ? 'text-blue-600' : 'text-blue-600 rotate-180';
  };

  // Rendu du contenu de la cellule
  const renderCell = (row, column) => {
    if (column.render) {
      return column.render(row);
    }
    return row[column.key];
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={`px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase ${column.sortable ? 'cursor-pointer select-none' : ''}`}
                onClick={() => column.sortable && handleSort(column.key)}
              >
                <div className="flex items-center">
                  {column.title}
                  {column.sortable && (
                    <span className={`ml-1 ${getSortClass(column.key)}`}>
                      u25b2
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {loading ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-4 text-center text-gray-500">
                {loadingMessage}
              </td>
            </tr>
          ) : sortedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-4 text-center text-gray-500">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            sortedData.map((row, rowIndex) => (
              <tr
                key={row._id || rowIndex}
                className={`hover:bg-gray-50 ${onRowClick ? 'cursor-pointer' : ''}`}
                onClick={() => onRowClick && onRowClick(row)}
              >
                {columns.map((column) => (
                  <td key={`${row._id || rowIndex}-${column.key}`} className="px-6 py-4 whitespace-nowrap">
                    {renderCell(row, column)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      {pagination && pagination.totalPages > 1 && (
        <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Affichage de <span className="font-medium">{(pagination.currentPage - 1) * pagination.pageSize + 1}</span> u00e0{' '}
                <span className="font-medium">
                  {Math.min(pagination.currentPage * pagination.pageSize, pagination.totalItems || data.length)}
                </span>{' '}
                sur <span className="font-medium">{pagination.totalItems || data.length}</span> ru00e9sultats
              </p>
            </div>
            <div>
              <nav className="inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <button
                  onClick={() => onPageChange && onPageChange(pagination.currentPage - 1)}
                  disabled={pagination.currentPage === 1}
                  className={`relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md ${pagination.currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-50'}`}
                >
                  <span className="sr-only">Pru00e9cu00e9dent</span>
                  <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                </button>
                
                {/* Pages */}
                {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => onPageChange && onPageChange(page)}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-medium border ${pagination.currentPage === page ? 'z-10 bg-blue-50 border-blue-500 text-blue-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'}`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => onPageChange && onPageChange(pagination.currentPage + 1)}
                  disabled={pagination.currentPage === pagination.totalPages}
                  className={`relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md ${pagination.currentPage === pagination.totalPages ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-50'}`}
                >
                  <span className="sr-only">Suivant</span>
                  <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;
