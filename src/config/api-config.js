// Configuração da API para diferentes ambientes
const API_CONFIG = {
  development: {
    baseURL: 'http://localhost:5000/api',
    timeout: 10000,
    retries: 3
  },
  production: {
    baseURL: 'https://wrt-back.vercel.app/api',
    timeout: 15000,
    retries: 5
  },
  // URL alternativa para teste (caso a Vercel não funcione)
  alternative: {
    baseURL: 'https://wrt-backend.vercel.app/api',
    timeout: 15000,
    retries: 5
  }
};

// Detectar ambiente
const isDevelopment = process.env.NODE_ENV === 'development' || 
                     window.location.hostname === 'localhost' || 
                     window.location.hostname === '127.0.0.1';

// Selecionar configuração
const currentConfig = isDevelopment ? API_CONFIG.development : API_CONFIG.production;

// Função para alternar configuração manualmente
export const switchToAlternative = () => {
  console.log('🔄 Alternando para configuração alternativa');
  return API_CONFIG.alternative;
};

// Função para testar conectividade
export const testConnection = async () => {
  const configs = [
    { name: 'Development', config: API_CONFIG.development },
    { name: 'Production', config: API_CONFIG.production },
    { name: 'Alternative', config: API_CONFIG.alternative }
  ];

  for (const { name, config } of configs) {
    try {
      console.log(`🧪 Testando ${name}: ${config.baseURL}/health`);
      const response = await fetch(`${config.baseURL}/health`, {
        method: 'GET',
        timeout: config.timeout
      });
      
      if (response.ok) {
        console.log(`✅ ${name} está funcionando!`);
        return config;
      } else {
        console.log(`❌ ${name} retornou status: ${response.status}`);
      }
    } catch (error) {
      console.log(`❌ ${name} falhou:`, error.message);
    }
  }
  
  console.log('❌ Nenhuma configuração funcionou');
  return null;
};

export default currentConfig; 