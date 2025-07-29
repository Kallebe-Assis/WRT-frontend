// Configuração da API - Usando backend da Vercel
const API_CONFIG = {
  vercel: {
    baseURL: 'https://wrt-back.vercel.app/api',
    timeout: 15000,
    retries: 5
  },
  local: {
    baseURL: 'http://localhost:5000/api',
    timeout: 15000,
    retries: 5
  }
};

// Usar backend da Vercel em produção, local em desenvolvimento
const currentConfig = API_CONFIG.vercel;

// Função para testar conectividade com back-end da Vercel
export const testConnection = async () => {
  try {
    console.log('🧪 Testando Back-end da Vercel:', currentConfig.baseURL);
    const response = await fetch(`${currentConfig.baseURL}/test`, {
      method: 'GET',
      timeout: currentConfig.timeout
    });
    
    if (response.ok) {
      console.log('✅ Back-end da Vercel está funcionando!');
      return currentConfig;
    } else {
      console.log(`❌ Back-end da Vercel retornou status: ${response.status}`);
    }
  } catch (error) {
    console.log('❌ Back-end da Vercel falhou:', error.message);
  }
  
  console.log('❌ Back-end da Vercel não está acessível');
  return null;
};

export default currentConfig; 