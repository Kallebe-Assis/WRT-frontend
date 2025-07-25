import React, { useState, useEffect } from 'react';
import './ErrorAlert.css';

const ErrorAlert = ({ 
  error, 
  onClose, 
  onRetry, 
  autoClose = true, 
  autoCloseDelay = 5000,
  showSuggestions = true,
  position = 'top-right'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (error) {
      setIsVisible(true);
      setIsExpanded(false);

      // Auto-close após delay
      if (autoClose && autoCloseDelay > 0) {
        const timer = setTimeout(() => {
          handleClose();
        }, autoCloseDelay);

        return () => clearTimeout(timer);
      }
    }
  }, [error, autoClose, autoCloseDelay]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    }
    handleClose();
  };

  const getErrorIcon = (errorType) => {
    switch (errorType) {
      case 'BAD_REQUEST':
        return '⚠️';
      case 'UNAUTHORIZED':
        return '🔐';
      case 'FORBIDDEN':
        return '🚫';
      case 'NOT_FOUND':
        return '🔍';
      case 'TIMEOUT':
        return '⏰';
      case 'RATE_LIMIT':
        return '🚦';
      case 'SERVER_ERROR':
        return '💥';
      case 'SERVICE_UNAVAILABLE':
        return '🔧';
      case 'NETWORK_ERROR':
        return '📡';
      default:
        return '❌';
    }
  };

  const getErrorColor = (errorType) => {
    switch (errorType) {
      case 'BAD_REQUEST':
        return '#f39c12';
      case 'UNAUTHORIZED':
        return '#e67e22';
      case 'FORBIDDEN':
        return '#e74c3c';
      case 'NOT_FOUND':
        return '#9b59b6';
      case 'TIMEOUT':
        return '#34495e';
      case 'RATE_LIMIT':
        return '#f1c40f';
      case 'SERVER_ERROR':
        return '#e74c3c';
      case 'SERVICE_UNAVAILABLE':
        return '#95a5a6';
      case 'NETWORK_ERROR':
        return '#3498db';
      default:
        return '#e74c3c';
    }
  };

  const getRecoverySuggestions = (errorType) => {
    const suggestions = {
      'BAD_REQUEST': [
        'Verifique os dados fornecidos',
        'Certifique-se de que todos os campos obrigatórios estão preenchidos',
        'Tente novamente com dados diferentes'
      ],
      'UNAUTHORIZED': [
        'Faça login novamente',
        'Limpe os cookies do navegador',
        'Verifique suas credenciais'
      ],
      'FORBIDDEN': [
        'Verifique se você tem permissão para acessar este recurso',
        'Entre em contato com o administrador',
        'Tente fazer login com uma conta diferente'
      ],
      'NOT_FOUND': [
        'Verifique se o endereço está correto',
        'O recurso pode ter sido removido ou movido',
        'Tente navegar para a página inicial'
      ],
      'TIMEOUT': [
        'Sua conexão pode estar lenta',
        'Tente novamente',
        'Verifique sua conexão com a internet'
      ],
      'RATE_LIMIT': [
        'Aguarde alguns segundos antes de tentar novamente',
        'Reduza a frequência de suas ações',
        'Tente novamente em alguns minutos'
      ],
      'SERVER_ERROR': [
        'Tente novamente em alguns segundos',
        'Verifique se o serviço está funcionando',
        'Se o problema persistir, entre em contato com o suporte'
      ],
      'SERVICE_UNAVAILABLE': [
        'O serviço está temporariamente indisponível',
        'Tente novamente em alguns minutos',
        'Verifique o status do sistema'
      ],
      'NETWORK_ERROR': [
        'Verifique sua conexão com a internet',
        'Tente recarregar a página',
        'Verifique se o servidor está acessível'
      ],
      'UNKNOWN_ERROR': [
        'Tente novamente',
        'Recarregue a página',
        'Se o problema persistir, entre em contato com o suporte'
      ]
    };

    return suggestions[errorType] || suggestions['UNKNOWN_ERROR'];
  };

  if (!error || !isVisible) {
    return null;
  }

  const errorType = error.error?.type || 'UNKNOWN_ERROR';
  const errorMessage = error.error?.message || 'Ocorreu um erro inesperado';
  const suggestions = getRecoverySuggestions(errorType);
  const icon = getErrorIcon(errorType);
  const color = getErrorColor(errorType);

  return (
    <div className={`error-alert error-alert-${position}`}>
      <div 
        className="error-alert-content"
        style={{ borderLeftColor: color }}
      >
        <div className="error-alert-header">
          <div className="error-alert-icon">
            {icon}
          </div>
          <div className="error-alert-title">
            <h4>Erro</h4>
            <p>{errorMessage}</p>
          </div>
          <div className="error-alert-actions">
            {showSuggestions && (
              <button
                className="error-alert-toggle"
                onClick={() => setIsExpanded(!isExpanded)}
                title="Ver sugestões"
              >
                {isExpanded ? '−' : '+'}
              </button>
            )}
            <button
              className="error-alert-close"
              onClick={handleClose}
              title="Fechar"
            >
              ×
            </button>
          </div>
        </div>

        {showSuggestions && isExpanded && (
          <div className="error-alert-suggestions">
            <h5>O que você pode fazer:</h5>
            <ul>
              {suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="error-alert-footer">
          {onRetry && (
            <button
              className="error-alert-retry"
              onClick={handleRetry}
            >
              🔄 Tentar Novamente
            </button>
          )}
          
          {process.env.NODE_ENV === 'development' && error.error?.originalMessage && (
            <details className="error-alert-details">
              <summary>Detalhes técnicos</summary>
              <pre>{error.error.originalMessage}</pre>
              {error.error.status && (
                <p><strong>Status:</strong> {error.error.status}</p>
              )}
              {error.error.timestamp && (
                <p><strong>Timestamp:</strong> {new Date(error.error.timestamp).toLocaleString()}</p>
              )}
            </details>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorAlert; 