import { useState, useEffect } from 'react';

/**
 * Composant de formulaire dynamique et ru00e9utilisable
 * @param {Object} props - Propriu00e9tu00e9s du composant
 * @param {Array} props.fields - Configuration des champs du formulaire
 * @param {Object} props.initialValues - Valeurs initiales du formulaire
 * @param {Function} props.onSubmit - Fonction appelu00e9e lors de la soumission du formulaire
 * @param {Function} props.onCancel - Fonction appelu00e9e lors de l'annulation
 * @param {string} props.submitLabel - Texte du bouton de soumission
 * @param {boolean} props.loading - Indique si le formulaire est en cours de chargement
 */
const FormBuilder = ({
  fields = [],
  initialValues = {},
  onSubmit,
  onCancel,
  submitLabel = 'Enregistrer',
  cancelLabel = 'Annuler',
  loading = false,
}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Mettre u00e0 jour les valeurs lorsque les valeurs initiales changent
  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  // Gu00e9rer les changements de valeur
  const handleChange = (field, value) => {
    setValues(prev => ({
      ...prev,
      [field.name]: value
    }));
    
    // Marquer le champ comme touchu00e9
    setTouched(prev => ({
      ...prev,
      [field.name]: true
    }));
    
    // Valider le champ
    validateField(field, value);
  };

  // Valider un champ spu00e9cifique
  const validateField = (field, value) => {
    let fieldErrors = [];
    
    // Valider si le champ est requis
    if (field.required && (value === undefined || value === null || value === '')) {
      fieldErrors.push(`${field.label} est requis`);
    }
    
    // Valider le format avec une expression ru00e9guliu00e8re
    if (field.pattern && value && !new RegExp(field.pattern).test(value)) {
      fieldErrors.push(`${field.label} n'est pas au format valide`);
    }
    
    // Valider la longueur minimale
    if (field.minLength && value && value.length < field.minLength) {
      fieldErrors.push(`${field.label} doit contenir au moins ${field.minLength} caractu00e8res`);
    }
    
    // Valider la longueur maximale
    if (field.maxLength && value && value.length > field.maxLength) {
      fieldErrors.push(`${field.label} ne doit pas du00e9passer ${field.maxLength} caractu00e8res`);
    }
    
    // Valider la valeur minimale (pour les nombres)
    if (field.min !== undefined && value && Number(value) < field.min) {
      fieldErrors.push(`${field.label} doit u00eatre supu00e9rieur ou u00e9gal u00e0 ${field.min}`);
    }
    
    // Valider la valeur maximale (pour les nombres)
    if (field.max !== undefined && value && Number(value) > field.max) {
      fieldErrors.push(`${field.label} doit u00eatre infu00e9rieur ou u00e9gal u00e0 ${field.max}`);
    }
    
    // Validation personnalisu00e9e
    if (field.validate) {
      const customError = field.validate(value, values);
      if (customError) {
        fieldErrors.push(customError);
      }
    }
    
    // Mettre u00e0 jour les erreurs
    setErrors(prev => ({
      ...prev,
      [field.name]: fieldErrors.length > 0 ? fieldErrors : null
    }));
    
    return fieldErrors.length === 0;
  };

  // Valider tous les champs
  const validateForm = () => {
    let isValid = true;
    let newTouched = {};
    
    fields.forEach(field => {
      newTouched[field.name] = true;
      if (!validateField(field, values[field.name])) {
        isValid = false;
      }
    });
    
    setTouched(newTouched);
    return isValid;
  };

  // Gu00e9rer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit && onSubmit(values);
    }
  };

  // Rendu d'un champ de formulaire en fonction de son type
  const renderField = (field) => {
    const fieldError = touched[field.name] && errors[field.name];
    
    switch (field.type) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        return (
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={values[field.name] || ''}
            onChange={(e) => handleChange(field, e.target.value)}
            disabled={field.disabled || loading}
            placeholder={field.placeholder}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${fieldError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            min={field.min}
            max={field.max}
            minLength={field.minLength}
            maxLength={field.maxLength}
            step={field.step}
            pattern={field.pattern}
            required={field.required}
          />
        );
        
      case 'textarea':
        return (
          <textarea
            id={field.name}
            name={field.name}
            value={values[field.name] || ''}
            onChange={(e) => handleChange(field, e.target.value)}
            disabled={field.disabled || loading}
            placeholder={field.placeholder}
            rows={field.rows || 3}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${fieldError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            minLength={field.minLength}
            maxLength={field.maxLength}
            required={field.required}
          />
        );
        
      case 'select':
        return (
          <select
            id={field.name}
            name={field.name}
            value={values[field.name] || ''}
            onChange={(e) => handleChange(field, e.target.value)}
            disabled={field.disabled || loading}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${fieldError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            required={field.required}
          >
            {field.placeholder && (
              <option value="" disabled>{field.placeholder}</option>
            )}
            {field.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
        
      case 'checkbox':
        return (
          <div className="flex items-center">
            <input
              type="checkbox"
              id={field.name}
              name={field.name}
              checked={values[field.name] || false}
              onChange={(e) => handleChange(field, e.target.checked)}
              disabled={field.disabled || loading}
              className={`w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${fieldError ? 'border-red-500' : ''}`}
            />
            <label htmlFor={field.name} className="ml-2 text-sm text-gray-700">
              {field.checkboxLabel || field.label}
            </label>
          </div>
        );
        
      case 'radio':
        return (
          <div className="space-y-2">
            {field.options.map((option) => (
              <div key={option.value} className="flex items-center">
                <input
                  type="radio"
                  id={`${field.name}-${option.value}`}
                  name={field.name}
                  value={option.value}
                  checked={values[field.name] === option.value}
                  onChange={() => handleChange(field, option.value)}
                  disabled={field.disabled || loading}
                  className={`w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 ${fieldError ? 'border-red-500' : ''}`}
                />
                <label htmlFor={`${field.name}-${option.value}`} className="ml-2 text-sm text-gray-700">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        );
        
      case 'date':
      case 'datetime-local':
      case 'time':
        return (
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={values[field.name] || ''}
            onChange={(e) => handleChange(field, e.target.value)}
            disabled={field.disabled || loading}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${fieldError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            min={field.min}
            max={field.max}
            required={field.required}
          />
        );
        
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name} className="space-y-1">
          {field.type !== 'checkbox' && (
            <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
              {field.label}
              {field.required && <span className="ml-1 text-red-500">*</span>}
            </label>
          )}
          
          {renderField(field)}
          
          {field.helpText && (
            <p className="mt-1 text-xs text-gray-500">{field.helpText}</p>
          )}
          
          {touched[field.name] && errors[field.name] && (
            <div className="mt-1 text-sm text-red-600">
              {errors[field.name].map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>
          )}
        </div>
      ))}
      
      <div className="flex justify-end space-x-2 pt-4">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            {cancelLabel}
          </button>
        )}
        
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {loading ? 'Chargement...' : submitLabel}
        </button>
      </div>
    </form>
  );
};

export default FormBuilder;
