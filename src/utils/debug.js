// Utilitário para debug de autenticação
export const debugAuth = () => {
  console.log('🔍 === DEBUG AUTENTICAÇÃO ===');
  
  // Verificar localStorage
  const user = localStorage.getItem('user');
  console.log('📦 User no localStorage:', user);
  
  if (user) {
    try {
      const userData = JSON.parse(user);
      console.log('👤 Dados do usuário:', userData);
      console.log('🆔 User ID:', userData.id);
    } catch (error) {
      console.error('❌ Erro ao parsear dados do usuário:', error);
    }
  } else {
    console.log('❌ Nenhum usuário encontrado no localStorage');
  }
  
  // Verificar se o usuário está logado
  const isLoggedIn = !!user;
  console.log('🔐 Usuário logado:', isLoggedIn);
  
  console.log('🔍 === FIM DEBUG ===');
  
  return {
    isLoggedIn,
    user: user ? JSON.parse(user) : null
  };
};

// Função para testar requisição
export const testRequest = async (endpoint) => {
  console.log('🧪 === TESTE DE REQUISIÇÃO ===');
  console.log('🌐 Endpoint:', endpoint);
  
  const user = localStorage.getItem('user');
  let userId = null;
  
  if (user) {
    try {
      const userData = JSON.parse(user);
      userId = userData.id;
    } catch (error) {
      console.error('❌ Erro ao obter ID do usuário:', error);
    }
  }
  
  console.log('🆔 User ID para requisição:', userId);
  
  const headers = {
    'Content-Type': 'application/json',
    ...(userId && { 'user-id': userId }),
  };
  
  console.log('📋 Headers:', headers);
  
  try {
    // Usar configuração da API da Vercel
    const baseURL = 'https://wrt-back.vercel.app/api';
    
    console.log('🌐 URL completa:', `${baseURL}${endpoint}`);
    
    const response = await fetch(`${baseURL}${endpoint}`, {
      method: 'GET',
      headers
    });
    
    console.log('📡 Status:', response.status);
    console.log('📡 Status Text:', response.statusText);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Erro HTTP:', response.status, errorText);
      return { error: true, status: response.status, message: errorText };
    }
    
    const data = await response.json();
    console.log('📦 Dados recebidos:', data);
    return { error: false, data };
  } catch (error) {
    console.error('❌ Erro na requisição:', error);
    return { error: true, message: error.message };
  }
}; 