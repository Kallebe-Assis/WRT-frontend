// Importar configuração centralizada
import { config, getApiUrl, apiRequest } from './environment.js';

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

// Configuração padrão para requisições
const defaultConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
};

// Função para fazer requisições
async function makeRequest(endpoint, options = {}) {
  // Obter dados do usuário do localStorage
  const user = localStorage.getItem('user');
  let userId = null;
  
  if (user) {
    try {
      const userData = JSON.parse(user);
      userId = userData.id;
      
      // Verificar se o ID do usuário é válido
      if (!userId) {
        console.error('❌ ID do usuário inválido');
        throw new Error('Usuário não autenticado');
      }
    } catch (error) {
      console.error('❌ Erro ao obter ID do usuário:', error);
      throw new Error('Usuário não autenticado');
    }
  } else {
    console.error('❌ Nenhum usuário encontrado no localStorage');
    throw new Error('Usuário não autenticado');
  }

  const config = {
    ...defaultConfig,
    ...options,
    headers: {
      ...defaultConfig.headers,
      ...(options.headers || {}),
      // Adicionar userId no header se disponível
      ...(userId && { 'user-id': userId }),
    },
  };

  console.log('🌐 makeRequest - Endpoint:', endpoint);
  console.log('🌐 makeRequest - URL completa:', `${API_BASE_URL}${endpoint}`);
  console.log('🌐 makeRequest - Config:', config);
  console.log('🌐 makeRequest - User ID:', userId);

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
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
export const linksAPI = {
  // Buscar todos os links
  buscarTodos: () => makeRequest('/links'),
  
  // Buscar link por ID
  buscarPorId: (id) => makeRequest(`/links/${id}`),
  
  // Criar novo link
  criar: (dados) => makeRequest('/links', {
    method: 'POST',
    body: JSON.stringify(dados),
  }),
  
  // Atualizar link
  atualizar: (id, dados) => makeRequest(`/links/${id}`, {
    method: 'PUT',
    body: JSON.stringify(dados),
  }),
  
  // Excluir link
  excluir: (id) => makeRequest(`/links/${id}`, {
    method: 'DELETE',
  }),
  
  // Atualizar posições
  atualizarPosicoes: (posicoes) => makeRequest('/links/posicoes', {
    method: 'PUT',
    body: JSON.stringify({ posicoes }),
  }),
  
  // Verificar pendências (sempre retorna false agora)
  verificarPendencias: () => makeRequest('/links/pendencias'),
  
  // Sincronização manual
  sincronizarManual: () => makeRequest('/links/sincronizar-manual', {
    method: 'POST',
  }),
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
    // Construir query string com os parâmetros
    const queryParams = new URLSearchParams();
    Object.keys(params).forEach(key => {
      if (params[key] !== undefined && params[key] !== null) {
        queryParams.append(key, params[key]);
      }
    });
    
    const endpoint = queryParams.toString() ? `/notas?${queryParams.toString()}` : '/notas';
    const response = await makeRequest(endpoint);
    return response;
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
    console.log('🌐 API - criarNota chamado com dados:', nota);
    const response = await makeRequest('/notas', {
      method: 'POST',
      body: JSON.stringify(nota)
    });
    console.log('✅ API - criarNota resposta:', response);
    return response;
  } catch (error) {
    console.error('❌ API - Erro ao criar nota:', error);
    throw error;
  }
};

const atualizarNota = async (id, nota) => {
  try {
    console.log('🌐 API - atualizarNota chamado com ID:', id, 'dados:', nota);
    const response = await makeRequest(`/notas/${id}`, {
      method: 'PUT',
      body: JSON.stringify(nota)
    });
    console.log('✅ API - atualizarNota resposta:', response);
    return response;
  } catch (error) {
    console.error('❌ API - Erro ao atualizar nota:', error);
    throw error;
  }
};

const deletarNota = async (id) => {
  try {
    const response = await makeRequest(`/notas/${id}`, {
      method: 'DELETE'
    });
    return response;
  } catch (error) {
    console.error('Erro ao deletar nota:', error);
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

// const alternarFavorito = async (id) => {
//   try {
//     const response = await makeRequest(`/notas/${id}/favorito`, { method: 'PATCH' });
//     return response;
//   } catch (error) {
//     console.error('Erro ao alternar favorito:', error);
//     throw error;
//   }
// };

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
      method: 'PUT',
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
    const response = await makeRequest('/notas/ordenacoes', {
      method: 'PUT',
      body: JSON.stringify({ ordenacoes })
    });
    return response;
  } catch (error) {
    console.error('Erro ao atualizar múltiplas ordenações:', error);
    throw error;
  }
};

// const buscarFavoritas = async () => {
//   try {
//     const response = await makeRequest('/notas/favoritas');
//     return response;
//   } catch (error) {
//     console.error('Erro ao buscar notas favoritas:', error);
//     throw error;
//   }
// };

const buscarFixadas = async () => {
  try {
    const response = await makeRequest('/notas/fixadas');
    return response;
  } catch (error) {
    console.error('Erro ao buscar notas fixadas:', error);
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
    const response = await makeRequest(`/categorias/${id}/restore`, {
      method: 'PATCH'
    });
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

export const categoriasAPI = {
  listar: listarCategorias,
  buscarPorId: buscarCategoriaPorId,
  criar: criarCategoria,
  atualizar: atualizarCategoria,
  deletar: deletarCategoria,
  restaurar: restaurarCategoria,
  buscarDeletados: buscarCategoriasDeletadas
};

export const notasAPI = {
  listar: listarNotas,
  buscarPorId: buscarNotaPorId,
  criar: criarNota,
  atualizar: atualizarNota,
  deletar: deletarNota,
  restaurar: restaurarNota,
  excluirDefinitivamente: excluirNotaDefinitivamente,
  // alternarFavorito, // DESABILITADO
  alternarFixado,
  atualizarOrdenacao,
  atualizarMultiplasOrdenacoes,
  // buscarFavoritas, // DESABILITADO
  buscarFixadas
}; 