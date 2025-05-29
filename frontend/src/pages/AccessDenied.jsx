import { Link } from 'react-router-dom';
import { ShieldExclamationIcon } from '@heroicons/react/24/outline';

const AccessDenied = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center justify-center text-center">
          <ShieldExclamationIcon className="w-20 h-20 text-red-500" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Accès refusé</h2>
          <p className="mt-2 text-sm text-gray-600">
            Vous n'avez pas les autorisations nécessaires pour accéder à cette page.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            to="/"
            className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccessDenied;
