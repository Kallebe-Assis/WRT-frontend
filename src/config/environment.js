// Configuração de ambiente para o frontend
const isDevelopment = process.env.NODE_ENV === 'development' || 
                     window.location.hostname === 'localhost' || 
                     window.location.hostname === '127.0.0.1';

console.log('🌐 Configuração de ambiente:', {
  NODE_ENV: process.env.NODE_ENV,
  hostname: window.location.hostname,
  isDevelopment: isDevelopment
});

export const config = {
  // API Configuration - Usando backend da Vercel
  API_BASE_URL: 'https://wrt-back.vercel.app/api',
  
  // Environment
  NODE_ENV: process.env.NODE_ENV || 'development',
  IS_DEVELOPMENT: isDevelopment,
  IS_PRODUCTION: !isDevelopment,
  
  // App Configuration
  APP_NAME: 'WRTmind',
  APP_VERSION: '1.0.0',
  
  // Firebase Configuration (se necessário)
  FIREBASE_API_KEY: process.env.REACT_APP_FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID: process.env.REACT_APP_FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  
  // Features
  ENABLE_DEBUG: isDevelopment,
  ENABLE_LOGS: true,
  ENABLE_ANALYTICS: !isDevelopment
};

// Função para obter URL da API
export const getApiUrl = (endpoint = '') => {
  return `${config.API_BASE_URL}${endpoint}`;
};

// Função para fazer requisições com configuração automática
export const apiRequest = async (endpoint, options = {}) => {
  const url = getApiUrl(endpoint);
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options
  };
  
  // Adicionar user-id se disponível
  const user = localStorage.getItem('user');
  console.log('🔍 apiRequest - User do localStorage:', user);
  
  if (user) {
    try {
      const userData = JSON.parse(user);
      console.log('🔍 apiRequest - UserData:', userData);
      
      if (userData.id) {
        defaultOptions.headers['user-id'] = userData.id;
        console.log('🔍 apiRequest - Header user-id adicionado:', userData.id);
      } else {
        console.log('❌ apiRequest - UserData.id não encontrado');
      }
    } catch (error) {
      console.error('❌ apiRequest - Erro ao obter ID do usuário:', error);
    }
  } else {
    console.log('❌ apiRequest - User não encontrado no localStorage');
  }
  
  console.log('🔍 apiRequest - Headers finais:', defaultOptions.headers);
  
  return fetch(url, defaultOptions);
};

// Log da configuração atual
console.log('🌐 Configuração do Frontend:', {
  environment: config.NODE_ENV,
  apiUrl: config.API_BASE_URL,
  isDevelopment: config.IS_DEVELOPMENT
}); 