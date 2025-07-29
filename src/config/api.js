// Importar configuração centralizada
import { config, apiRequest } from './environment.js';

// Configuração da API
const API_BASE_URL = config.API_BASE_URL;

console.log('🌐 API Base URL:', API_BASE_URL);
console.log('🌐 Environment:', config.NODE_ENV);

// Log da configuração atual
console.log('✅ Configuração da API carregada:', {
  baseURL: API_BASE_URL,
  environment: config.NODE_ENV,
  isDevelopment: config.IS_DEVELOPMENT
});

// Função para fazer requisições
async function makeRequest(endpoint, options = {}) {
  console.log('🌐 makeRequest - Endpoint:', endpoint);
  console.log('🌐 makeRequest - URL completa:', `${API_BASE_URL}${endpoint}`);
  console.log('🌐 makeRequest - Options:', options);

  try {
    const response = await apiRequest(endpoint, options);
    
    console.log('📡 makeRequest - Status:', response.status);
    console.log('📡 makeRequest - Status Text:', response.statusText);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ makeRequest - Erro HTTP:', response.status, errorText);
      
      // Se for erro 401, limpar dados do usuário
      if (response.status === 401) {
        console.log('🔐 Erro 401 - Limpando dados do usuário');
        localStorage.removeItem('user');
        window.dispatchEvent(new CustomEvent('userLogout'));
      }
      
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('📦 makeRequest - Dados recebidos:', data);
    return data;
  } catch (error) {
    console.error('❌ makeRequest - Erro:', error);
    throw new Error(`Erro na requisição: ${error.message}`);
  }
}

// API de Links
const listarLinks = async () => {
  try {
    console.log('🌐 API - listarLinks chamado');
    
    const url = `${config.API_BASE_URL}/links`;
    console.log('🌐 API - URL completa:', url);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'user-id': getUserId()
      }
    });
    
    console.log('📡 API - Status:', response.status);
    console.log('📡 API - Status Text:', response.statusText);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API - Erro HTTP:', response.status, errorText);
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }
    
    const data = await response.json();
    console.log('✅ API - listarLinks resposta:', data);
    return data;
  } catch (error) {
    console.error('Erro ao listar links:', error);
    throw error;
  }
};

const buscarLinkPorId = async (id) => {
  try {
    const response = await makeRequest(`/links/${id}`);
    return response;
  } catch (error) {
    console.error('Erro ao buscar link por ID:', error);
    throw error;
  }
};

const criarLink = async (link) => {
  try {
    console.log('🌐 API - criarLink chamado com dados:', link);
    
    // Verificar se o usuário está logado
    const userId = getUserId();
    console.log('🌐 API - UserId obtido:', userId);
    
    if (!userId) {
      throw new Error('Usuário não autenticado');
    }
    
    // Enviar apenas os campos necessários
    const dadosCorretos = {
      nome: link.nome,
      url: link.url,
      imagemUrl: link.imagemUrl || ''
    };
    
    console.log('🌐 API - dados corretos para Vercel:', dadosCorretos);
    
    const url = `${config.API_BASE_URL}/links`;
    console.log('🌐 API - URL completa:', url);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'user-id': userId
      },
      body: JSON.stringify(dadosCorretos)
    });
    
    console.log('📡 API - Status:', response.status);
    console.log('📡 API - Status Text:', response.statusText);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API - Erro HTTP:', response.status, errorText);
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }
    
    const data = await response.json();
    console.log('✅ API - criarLink resposta:', data);
    return data;
  } catch (error) {
    console.error('Erro ao criar link:', error);
    throw error;
  }
};

const atualizarLink = async (id, link) => {
  try {
    console.log('🌐 API - atualizarLink chamado com ID:', id, 'dados:', link);
    
    // Enviar apenas os campos necessários
    const dadosCorretos = {
      nome: link.nome,
      url: link.url,
      imagemUrl: link.imagemUrl || ''
    };
    
    console.log('🌐 API - dados corretos para Vercel:', dadosCorretos);
    
    // Usar fetch diretamente com query parameter
    const url = `${config.API_BASE_URL}/links?id=${id}`;
    console.log('🌐 API - URL completa:', url);
    
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'user-id': getUserId()
      },
      body: JSON.stringify(dadosCorretos)
    });
    
    console.log('📡 API - Status:', response.status);
    console.log('📡 API - Status Text:', response.statusText);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API - Erro HTTP:', response.status, errorText);
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }
    
    const data = await response.json();
    console.log('✅ API - atualizarLink resposta:', data);
    return data;
  } catch (error) {
    console.error('❌ API - Erro ao atualizar link:', error);
    throw error;
  }
};

const deletarLink = async (id) => {
  try {
    console.log('🌐 API - deletarLink chamado com ID:', id);
    
    // Usar fetch diretamente com query parameter
    const url = `${config.API_BASE_URL}/links?id=${id}`;
    console.log('🌐 API - URL completa:', url);
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'user-id': getUserId()
      }
    });
    
    console.log('📡 API - Status:', response.status);
    console.log('📡 API - Status Text:', response.statusText);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API - Erro HTTP:', response.status, errorText);
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }
    
    const data = await response.json();
    console.log('✅ API - deletarLink resposta:', data);
    return data;
  } catch (error) {
    console.error('❌ API - Erro ao deletar link:', error);
    throw error;
  }
};

// Função auxiliar para obter userId
const getUserId = () => {
  const user = localStorage.getItem('user');
  console.log('🔍 getUserId - User do localStorage:', user);
  
  if (user) {
    try {
      const userData = JSON.parse(user);
      console.log('🔍 getUserId - UserData:', userData);
      console.log('🔍 getUserId - UserId:', userData.id);
      return userData.id;
    } catch (error) {
      console.error('❌ getUserId - Erro ao obter ID do usuário:', error);
    }
  } else {
    console.log('❌ getUserId - User não encontrado no localStorage');
  }
  return null;
};

export const linksAPI = {
  buscarTodos: listarLinks,
  buscarPorId: buscarLinkPorId,
  criar: criarLink,
  atualizar: atualizarLink,
  deletar: deletarLink,
  sincronizarManual: () => makeRequest('/links/sincronizar-manual', {
    method: 'POST'
  })
};

// API de Sincronização
export const syncAPI = {
  // Buscar status de sincronização
  buscarStatus: () => makeRequest('/sync/status'),
  
  // Buscar logs de sincronização
  buscarLogs: () => makeRequest('/sync/logs'),
  
  // Limpar logs
  limparLogs: () => makeRequest('/sync/limpar-logs', {
    method: 'POST',
  }),
  
  // Buscar última alteração no banco
  buscarUltimaAlteracaoBanco: () => makeRequest('/sync/last-database-change'),
  
  // Sincronização manual (alias para linksAPI.sincronizarManual)
  sincronizarManual: linksAPI.sincronizarManual,
};

// Health check da API
export const healthAPI = {
  verificar: () => makeRequest('/health')
}; 

// Funções para notas
const listarNotas = async (params = {}) => {
  try {
    // Obter userId do localStorage
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
    
    if (!userId) {
      throw new Error('Usuário não autenticado');
    }
    
    // Para GET, usar fetch diretamente com userId como query parameter
    const url = `${config.API_BASE_URL}/notas?userId=${userId}`;
    console.log('🌐 API - listarNotas URL:', url);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }
    
    const data = await response.json();
    console.log('📦 API - listarNotas dados:', data);
    return data;
  } catch (error) {
    console.error('Erro ao listar notas:', error);
    throw error;
  }
};



const buscarNotaPorId = async (id) => {
  try {
    const response = await makeRequest(`/notas/${id}`);
    return response;
  } catch (error) {
    console.error('Erro ao buscar nota por ID:', error);
    throw error;
  }
};

const criarNota = async (nota) => {
  try {
    // Obter userId do localStorage
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
    
    if (!userId) {
      throw new Error('Usuário não autenticado');
    }
    
    // Para POST, usar fetch diretamente com userId no body
    const url = `${config.API_BASE_URL}/notas`;
    console.log('🌐 API - criarNota URL:', url);
    console.log('🌐 API - criarNota dados:', { ...nota, userId });
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...nota,
        userId: userId
      })
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }
    
    const data = await response.json();
    console.log('✅ API - criarNota resposta:', data);
    return data;
  } catch (error) {
    console.error('❌ API - Erro ao criar nota:', error);
    throw error;
  }
};

const atualizarNota = async (id, nota) => {
  try {
    console.log('🌐 API - atualizarNota chamado com ID:', id, 'dados:', nota);
    
    // Usar fetch diretamente com query parameter
    const url = `${config.API_BASE_URL}/notas?id=${id}`;
    console.log('🌐 API - URL completa:', url);
    
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nota)
    });
    
    console.log('📡 API - Status:', response.status);
    console.log('📡 API - Status Text:', response.statusText);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API - Erro HTTP:', response.status, errorText);
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }
    
    const data = await response.json();
    console.log('✅ API - atualizarNota resposta:', data);
    return data;
  } catch (error) {
    console.error('❌ API - Erro ao atualizar nota:', error);
    console.error('❌ API - Stack trace:', error.stack);
    throw error;
  }
};

const deletarNota = async (id) => {
  try {
    console.log('🌐 API - deletarNota chamado com ID:', id);
    const url = `${config.API_BASE_URL}/notas?id=${id}`;
    console.log('🌐 API - URL completa:', url);
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('📡 API - Status:', response.status);
    console.log('📡 API - Status Text:', response.statusText);
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API - Erro HTTP:', response.status, errorText);
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }
    const data = await response.json();
    console.log('✅ API - deletarNota resposta:', data);
    return data;
  } catch (error) {
    console.error('❌ API - Erro ao deletar nota:', error);
    console.error('❌ API - Stack trace:', error.stack);
    throw error;
  }
};

const restaurarNota = async (id) => {
  try {
    const response = await makeRequest(`/notas/${id}/restore`, { method: 'PATCH' });
    return response;
  } catch (error) {
    console.error('Erro ao restaurar nota:', error);
    throw error;
  }
};

const excluirNotaDefinitivamente = async (id) => {
  try {
    const response = await makeRequest(`/notas/${id}/permanent`, { method: 'DELETE' });
    return response;
  } catch (error) {
    console.error('Erro ao excluir nota definitivamente:', error);
    throw error;
  }
};

const alternarFavorito = async (id) => {
  try {
    const response = await makeRequest(`/notas/${id}/favorito`, { method: 'PATCH' });
    return response;
  } catch (error) {
    console.error('Erro ao alternar favorito:', error);
    throw error;
  }
};

const alternarFixado = async (id) => {
  try {
    const response = await makeRequest(`/notas/${id}/fixado`, { method: 'PATCH' });
    return response;
  } catch (error) {
    console.error('Erro ao alternar fixado:', error);
    throw error;
  }
};

const atualizarOrdenacao = async (id, ordenacao) => {
  try {
    const response = await makeRequest(`/notas/${id}/ordenacao`, {
      method: 'PATCH',
      body: JSON.stringify({ ordenacao })
    });
    return response;
  } catch (error) {
    console.error('Erro ao atualizar ordenação:', error);
    throw error;
  }
};

const atualizarMultiplasOrdenacoes = async (ordenacoes) => {
  try {
    const response = await makeRequest('/notas/ordenacao-multipla', {
      method: 'PATCH',
      body: JSON.stringify({ ordenacoes })
    });
    return response;
  } catch (error) {
    console.error('Erro ao atualizar múltiplas ordenações:', error);
    throw error;
  }
};

const buscarFavoritas = async () => {
  try {
    const response = await makeRequest('/notas/favoritas');
    return response;
  } catch (error) {
    console.error('Erro ao buscar favoritas:', error);
    throw error;
  }
};

const buscarFixadas = async () => {
  try {
    const response = await makeRequest('/notas/fixadas');
    return response;
  } catch (error) {
    console.error('Erro ao buscar fixadas:', error);
    throw error;
  }
};

// API de Categorias
const listarCategorias = async () => {
  try {
    const response = await makeRequest('/categorias');
    return response;
  } catch (error) {
    console.error('Erro ao listar categorias:', error);
    throw error;
  }
};

const buscarCategoriaPorId = async (id) => {
  try {
    const response = await makeRequest(`/categorias/${id}`);
    return response;
  } catch (error) {
    console.error('Erro ao buscar categoria por ID:', error);
    throw error;
  }
};

const criarCategoria = async (categoria) => {
  try {
    const response = await makeRequest('/categorias', {
      method: 'POST',
      body: JSON.stringify(categoria)
    });
    return response;
  } catch (error) {
    console.error('Erro ao criar categoria:', error);
    throw error;
  }
};

const atualizarCategoria = async (id, categoria) => {
  try {
    const response = await makeRequest(`/categorias/${id}`, {
      method: 'PUT',
      body: JSON.stringify(categoria)
    });
    return response;
  } catch (error) {
    console.error('Erro ao atualizar categoria:', error);
    throw error;
  }
};

const deletarCategoria = async (id) => {
  try {
    const response = await makeRequest(`/categorias/${id}`, {
      method: 'DELETE'
    });
    return response;
  } catch (error) {
    console.error('Erro ao deletar categoria:', error);
    throw error;
  }
};

const restaurarCategoria = async (id) => {
  try {
    const response = await makeRequest(`/categorias/${id}/restore`, { method: 'PATCH' });
    return response;
  } catch (error) {
    console.error('Erro ao restaurar categoria:', error);
    throw error;
  }
};

const buscarCategoriasDeletadas = async () => {
  try {
    const response = await makeRequest('/categorias/deletadas');
    return response;
  } catch (error) {
    console.error('Erro ao buscar categorias deletadas:', error);
    throw error;
  }
};

// Objeto principal da API de Notas
export const notasAPI = {
  buscarTodos: listarNotas,
  buscarPorId: buscarNotaPorId,
  criar: criarNota,
  atualizar: atualizarNota,
  deletar: deletarNota,
  restaurar: restaurarNota,
  excluirDefinitivamente: excluirNotaDefinitivamente,
  alternarFavorito,
  alternarFixado,
  atualizarOrdenacao,
  atualizarMultiplasOrdenacoes,
  buscarFavoritas,
  buscarFixadas
};

// Objeto principal da API de Categorias
export const categoriasAPI = {
  buscarTodos: listarCategorias,
  buscarPorId: buscarCategoriaPorId,
  criar: criarCategoria,
  atualizar: atualizarCategoria,
  deletar: deletarCategoria,
  restaurar: restaurarCategoria,
  buscarDeletadas: buscarCategoriasDeletadas
}; 