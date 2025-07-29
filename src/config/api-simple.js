// API Simplificada e Robusta para WRTmind
import { config } from './environment.js';

const API_BASE_URL = config.API_BASE_URL;

console.log('🌐 API Base URL:', API_BASE_URL);

// Função robusta para fazer requisições
async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  // Obter dados do usuário
  const user = localStorage.getItem('user');
  let userId = null;
  
  console.log('🔍 Verificando usuário no localStorage:', user);
  
  if (user) {
    try {
      const userData = JSON.parse(user);
      userId = userData.id;
      console.log('✅ ID do usuário obtido:', userId);
    } catch (error) {
      console.error('❌ Erro ao obter ID do usuário:', error);
    }
  } else {
    console.log('⚠️ Nenhum usuário encontrado no localStorage');
  }
  
  // Configurar headers
  const headers = {
    'Content-Type': 'application/json',
    ...(userId && { 'user-id': userId }),
    ...options.headers
  };
  
  console.log('📡 Headers configurados:', headers);
  
  console.log('📡 Fazendo requisição:', {
    url,
    method: options.method || 'GET',
    headers
  });
  
  try {
    const fetchOptions = {
      method: options.method || 'GET',
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined
    };
    
    console.log('📡 Opções de fetch:', fetchOptions);
    console.log('📡 URL:', url);
    console.log('📡 Body:', options.body);
    
    const response = await fetch(url, fetchOptions);
    
    console.log('📡 Resposta:', {
      status: response.status,
      statusText: response.statusText
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Erro HTTP:', response.status, errorText);
      
      // Tentar parsear como JSON para obter mais detalhes
      let errorData = {};
      try {
        errorData = JSON.parse(errorText);
      } catch (e) {
        errorData = { error: errorText };
      }
      
      // Se for erro 401, limpar dados do usuário
      if (response.status === 401) {
        console.log('🔐 Erro 401 - Limpando dados do usuário');
        localStorage.removeItem('user');
        window.dispatchEvent(new CustomEvent('userLogout'));
      }
      
      throw new Error(`HTTP ${response.status}: ${errorData.error || response.statusText}`);
    }
    
    const data = await response.json();
    console.log('✅ Dados recebidos:', data);
    return data;
  } catch (error) {
    console.error('❌ Erro na requisição:', error);
    throw new Error(`Erro na requisição: ${error.message}`);
  }
}

// API de Links
export const linksAPI = {
  // Listar links
  listar: () => apiRequest('/links'),
  
  // Buscar link por ID
  buscarPorId: (id) => apiRequest(`/links/${id}`),
  
  // Criar link
  criar: (dados) => apiRequest('/links', {
    method: 'POST',
    body: dados
  }),
  
  // Atualizar link
  atualizar: (id, dados) => apiRequest(`/links/${id}`, {
    method: 'PUT',
    body: dados
  }),
  
  // Deletar link
  deletar: (id) => apiRequest(`/links/${id}`, {
    method: 'DELETE'
  }),
  
  // Verificar pendencias
  verificarPendencias: () => apiRequest('/links/pendencias')
};

// API de Notas
export const notasAPI = {
  // Listar notas
  listar: (filtros = {}) => {
    const params = new URLSearchParams();
    Object.keys(filtros).forEach(key => {
      if (filtros[key] !== undefined && filtros[key] !== null) {
        params.append(key, filtros[key]);
      }
    });
    
    const endpoint = params.toString() ? `/notas?${params.toString()}` : '/notas';
    return apiRequest(endpoint);
  },
  
  // Buscar nota por ID
  buscarPorId: (id) => apiRequest(`/notas/${id}`),
  
  // Criar nota
  criar: (dados) => apiRequest('/notas', {
    method: 'POST',
    body: dados
  }),
  
  // Atualizar nota
  atualizar: (id, dados) => apiRequest(`/notas/${id}`, {
    method: 'PUT',
    body: dados
  }),
  
  // Deletar nota
  deletar: (id) => apiRequest(`/notas/${id}`, {
    method: 'DELETE'
  }),
  
  // Restaurar nota
  restaurar: (id) => apiRequest(`/notas/${id}/restaurar`, {
    method: 'POST'
  }),
  
  // Alternar favorito
  alternarFavorito: (id) => apiRequest(`/notas/${id}/favorito`, {
    method: 'POST'
  }),
  
  // Buscar favoritas
  buscarFavoritas: () => apiRequest('/notas/favoritas'),
  
  // Buscar fixadas
  buscarFixadas: () => apiRequest('/notas/fixadas')
};

// API de Categorias
export const categoriasAPI = {
  // Listar categorias
  listar: () => apiRequest('/categorias'),
  
  // Buscar categoria por ID
  buscarPorId: (id) => apiRequest(`/categorias/${id}`),
  
  // Criar categoria
  criar: (dados) => apiRequest('/categorias', {
    method: 'POST',
    body: dados
  }),
  
  // Atualizar categoria
  atualizar: (id, dados) => apiRequest(`/categorias/${id}`, {
    method: 'PUT',
    body: dados
  }),
  
  // Deletar categoria
  deletar: (id) => apiRequest(`/categorias/${id}`, {
    method: 'DELETE'
  })
};

// API de Autenticação
export const authAPI = {
  // Login
  login: (credenciais) => apiRequest('/auth/login', {
    method: 'POST',
    body: credenciais
  }),
  
  // Registro
  register: (dados) => apiRequest('/auth/register', {
    method: 'POST',
    body: dados
  })
};

// API de Teste
export const testAPI = {
  // Teste de conectividade
  health: () => apiRequest('/test-simple'),
  
  // Teste de login
  testLogin: (credenciais) => apiRequest('/test-login', {
    method: 'POST',
    body: credenciais
  })
}; 