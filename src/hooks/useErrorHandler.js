import { useState, useCallback } from 'react';

// Classe para gerenciar erros de requisição
class RequestErrorHandler {
  constructor() {
    this.errorQueue = [];
    this.maxRetries = 3;
    this.retryDelay = 1000;
  }

  // Função para tratar erros de requisição
  handleRequestError = async (error, requestFn, retryCount = 0) => {
    const errorInfo = {
      timestamp: new Date().toISOString(),
      error: error.message,
      status: error.status || error.response?.status,
      url: error.config?.url || 'unknown',
      method: error.config?.method || 'unknown',
      retryCount
    };

    // Log do erro
    console.error('🚨 Erro de requisição:', errorInfo);

    // Adicionar à fila de erros
    this.errorQueue.push(errorInfo);

    // Determinar se deve tentar novamente
    if (this.shouldRetry(error, retryCount)) {
      return this.retryRequest(requestFn, retryCount + 1);
    }

    // Retornar erro formatado
    return this.formatError(error);
  }

  // Verificar se deve tentar novamente
  shouldRetry = (error, retryCount) => {
    if (retryCount >= this.maxRetries) return false;

    const status = error.status || error.response?.status;
    
    // Tentar novamente para erros 5xx e timeouts
    return status >= 500 || status === 408 || !status;
  }

  // Tentar requisição novamente
  retryRequest = async (requestFn, retryCount) => {
    const delay = this.retryDelay * retryCount;
    
    console.log(`🔄 Tentativa ${retryCount} em ${delay}ms...`);
    
    await new Promise(resolve => setTimeout(resolve, delay));
    
    try {
      return await requestFn();
    } catch (error) {
      return this.handleRequestError(error, requestFn, retryCount);
    }
  }

  // Formatar erro para exibição
  formatError = (error) => {
    const status = error.status || error.response?.status;
    const message = error.message || 'Erro desconhecido';

    let userMessage = 'Ocorreu um erro inesperado.';
    let errorType = 'UNKNOWN_ERROR';

    switch (status) {
      case 400:
        userMessage = 'Dados inválidos fornecidos.';
        errorType = 'BAD_REQUEST';
        break;
      case 401:
        userMessage = 'Sessão expirada. Faça login novamente.';
        errorType = 'UNAUTHORIZED';
        break;
      case 403:
        userMessage = 'Acesso negado.';
        errorType = 'FORBIDDEN';
        break;
      case 404:
        userMessage = 'Recurso não encontrado.';
        errorType = 'NOT_FOUND';
        break;
      case 408:
        userMessage = 'A requisição expirou. Tente novamente.';
        errorType = 'TIMEOUT';
        break;
      case 429:
        userMessage = 'Muitas requisições. Aguarde um momento.';
        errorType = 'RATE_LIMIT';
        break;
      case 500:
        userMessage = 'Erro interno do servidor. Tente novamente.';
        errorType = 'SERVER_ERROR';
        break;
      case 502:
      case 503:
      case 504:
        userMessage = 'Serviço temporariamente indisponível.';
        errorType = 'SERVICE_UNAVAILABLE';
        break;
      default:
        if (message.includes('Network Error')) {
          userMessage = 'Erro de conexão. Verifique sua internet.';
          errorType = 'NETWORK_ERROR';
        } else if (message.includes('timeout')) {
          userMessage = 'A requisição demorou muito. Tente novamente.';
          errorType = 'TIMEOUT';
        }
    }

    return {
      success: false,
      error: {
        type: errorType,
        message: userMessage,
        originalMessage: message,
        status,
        timestamp: new Date().toISOString()
      }
    };
  }

  // Obter sugestões de recuperação
  getRecoverySuggestions = (errorType) => {
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
  }

  // Limpar fila de erros
  clearErrorQueue = () => {
    this.errorQueue = [];
  }

  // Obter estatísticas de erro
  getErrorStats = () => {
    const stats = {
      total: this.errorQueue.length,
      byType: {},
      byStatus: {},
      recent: this.errorQueue.slice(-10)
    };

    this.errorQueue.forEach(error => {
      const type = error.errorType || 'UNKNOWN';
      const status = error.status || 'UNKNOWN';
      
      stats.byType[type] = (stats.byType[type] || 0) + 1;
      stats.byStatus[status] = (stats.byStatus[status] || 0) + 1;
    });

    return stats;
  }
}

// Instância global do handler
const errorHandler = new RequestErrorHandler();

// Hook personalizado para tratamento de erros
export const useErrorHandler = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Função para executar requisição com tratamento de erro
  const executeRequest = useCallback(async (requestFn, options = {}) => {
    const { 
      showError = true, 
      retryOnError = true, 
      onSuccess, 
      onError,
      loadingMessage = 'Carregando...'
    } = options;

    setIsLoading(true);
    setError(null);

    try {
      const result = await requestFn();
      
      if (onSuccess) {
        onSuccess(result);
      }
      
      return result;
    } catch (err) {
      const formattedError = await errorHandler.handleRequestError(err, requestFn);
      
      if (showError) {
        setError(formattedError);
      }
      
      if (onError) {
        onError(formattedError);
      }
      
      return formattedError;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Função para limpar erro
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Função para mostrar erro manualmente
  const showError = useCallback((errorMessage, errorType = 'UNKNOWN_ERROR') => {
    setError({
      success: false,
      error: {
        type: errorType,
        message: errorMessage,
        timestamp: new Date().toISOString()
      }
    });
  }, []);

  // Função para obter sugestões de recuperação
  const getRecoverySuggestions = useCallback((errorType) => {
    return errorHandler.getRecoverySuggestions(errorType);
  }, []);

  return {
    error,
    isLoading,
    executeRequest,
    clearError,
    showError,
    getRecoverySuggestions,
    errorStats: errorHandler.getErrorStats(),
    clearErrorQueue: errorHandler.clearErrorQueue
  };
};

// Hook para tratamento de erros específicos de API
export const useApiErrorHandler = () => {
  const errorHandler = useErrorHandler();

  // Função para fazer requisições GET
  const get = useCallback(async (url, options = {}) => {
    return errorHandler.executeRequest(async () => {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return response.json();
    }, options);
  }, [errorHandler]);

  // Função para fazer requisições POST
  const post = useCallback(async (url, data, options = {}) => {
    return errorHandler.executeRequest(async () => {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        body: JSON.stringify(data),
        ...options
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return response.json();
    }, options);
  }, [errorHandler]);

  // Função para fazer requisições PUT
  const put = useCallback(async (url, data, options = {}) => {
    return errorHandler.executeRequest(async () => {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        body: JSON.stringify(data),
        ...options
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return response.json();
    }, options);
  }, [errorHandler]);

  // Função para fazer requisições DELETE
  const del = useCallback(async (url, options = {}) => {
    return errorHandler.executeRequest(async () => {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return response.json();
    }, options);
  }, [errorHandler]);

  return {
    ...errorHandler,
    get,
    post,
    put,
    delete: del
  };
};

export default useErrorHandler; 