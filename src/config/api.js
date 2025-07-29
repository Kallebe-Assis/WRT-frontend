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
    
    const userId = getUserId();
    if (!userId) {
      throw new Error('Usuário não autenticado');
    }
    
    // URL simplificada
    const url = `https://wrt-back.vercel.app/api/links?userId=${userId}`;
    console.log('🌐 API - URL completa:', url);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'user-id': userId
      }
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }
    
    const data = await response.json();
    console.log('✅ API - listarLinks resposta:', data);
    return data;
  } catch (error) {
    console.error('❌ API - Erro ao listar links:', error);
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
    
    const userId = getUserId();
    if (!userId) {
      throw new Error('Usuário não autenticado');
    }
    
    // Reduzir tamanho da imagem se necessário
    const imagemUrlReduzida = reduceImageSize(link.imagemUrl);
    
    // Enviar apenas os campos que o backend espera
    const dadosCorretos = {
      nome: link.nome,
      url: link.url,
      imagemUrl: imagemUrlReduzida || ''
    };
    
    console.log('🌐 API - dados corretos para Vercel:', dadosCorretos);
    
    // URL simplificada
    const url = 'https://wrt-back.vercel.app/api/links';
    console.log('🌐 API - URL completa:', url);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'user-id': userId
      },
      body: JSON.stringify(dadosCorretos)
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }
    
    const data = await response.json();
    console.log('✅ API - criarLink resposta:', data);
    return data;
  } catch (error) {
    console.error('❌ API - Erro ao criar link:', error);
    throw error;
  }
};

// Função para reduzir tamanho da imagem base64
const reduceImageSize = (base64String, maxSize = 500000) => {
  if (!base64String || base64String.length <= maxSize) {
    return base64String;
  }
  
  console.log('🖼️ Reduzindo tamanho da imagem de', base64String.length, 'para máximo', maxSize);
  
  // Se a imagem for muito grande, retornar null para usar ícone padrão
  return null;
};

const atualizarLink = async (id, link) => {
  try {
    console.log('🌐 API - atualizarLink chamado com ID:', id, 'dados:', link);
    
    const userId = getUserId();
    console.log('🌐 API - UserId obtido:', userId);
    
    if (!userId) {
      console.error('❌ API - Usuário não autenticado');
      throw new Error('Usuário não autenticado');
    }
    
    // Reduzir tamanho da imagem se necessário
    const imagemUrlReduzida = reduceImageSize(link.imagemUrl);
    
    // Enviar apenas os campos que o backend espera
    const dadosCorretos = {
      nome: link.nome,
      url: link.url,
      imagemUrl: imagemUrlReduzida || ''
    };
    
    console.log('🌐 API - dados corretos para Vercel:', dadosCorretos);
    console.log('🌐 API - Tamanho da imagem:', dadosCorretos.imagemUrl ? dadosCorretos.imagemUrl.length : 0);
    
    // URL simplificada
    const url = `https://wrt-back.vercel.app/api/links?id=${id}`;
    console.log('🌐 API - URL completa:', url);
    
    const headers = {
      'Content-Type': 'application/json',
      'user-id': userId
    };
    
    console.log('🌐 API - Headers:', headers);
    console.log('🌐 API - Iniciando fetch...');
    
    // TENTATIVA 1: PUT normal
    try {
      console.log('🔄 Tentativa 1: PUT normal...');
      const response = await fetch(url, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(dadosCorretos)
      });
      
      console.log('📡 API - Status:', response.status);
      console.log('📡 API - Status Text:', response.statusText);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ API - Erro HTTP:', response.status, errorText);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }
      
      console.log('📡 API - Response OK, lendo JSON...');
      const data = await response.json();
      console.log('✅ API - atualizarLink resposta:', data);
      return data;
    } catch (putError) {
      console.error('❌ PUT falhou, tentando alternativa...', putError.message);
      
      // TENTATIVA 2: POST com _method=PUT
      try {
        console.log('🔄 Tentativa 2: POST com _method=PUT...');
        const dadosComMethod = {
          ...dadosCorretos,
          _method: 'PUT'
        };
        
        const response = await fetch(url, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(dadosComMethod)
        });
        
        console.log('📡 API - Status (POST):', response.status);
        console.log('📡 API - Status Text (POST):', response.statusText);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('❌ API - Erro HTTP (POST):', response.status, errorText);
          throw new Error(`HTTP ${response.status}: ${errorText}`);
        }
        
        console.log('📡 API - Response OK (POST), lendo JSON...');
        const data = await response.json();
        console.log('✅ API - atualizarLink resposta (POST):', data);
        return data;
      } catch (postError) {
        console.error('❌ POST também falhou:', postError.message);
        throw putError; // Re-throw o erro original do PUT
      }
    }
  } catch (error) {
    console.error('❌ API - Erro ao atualizar link:', error);
    console.error('❌ API - Stack trace:', error.stack);
    console.error('❌ API - Error name:', error.name);
    console.error('❌ API - Error message:', error.message);
    throw error;
  }
};

const deletarLink = async (id) => {
  try {
    console.log('🌐 API - deletarLink chamado com ID:', id);
    
    const userId = getUserId();
    if (!userId) {
      throw new Error('Usuário não autenticado');
    }
    
    // URL simplificada
    const url = `https://wrt-back.vercel.app/api/links?id=${id}`;
    console.log('🌐 API - URL completa:', url);
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'user-id': userId
      }
    });
    
    if (!response.ok) {
      const errorText = await response.text();
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
      return null;
    }
  } else {
    console.log('❌ getUserId - User não encontrado no localStorage');
    return null;
  }
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
    const dadosCompletos = { ...nota, userId };
    console.log('🌐 API - criarNota URL:', url);
    console.log('🌐 API - criarNota dados completos:', dadosCompletos);
    console.log('🌐 API - tópico nos dados:', dadosCompletos.topico);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosCompletos)
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
    console.log('🌐 API - tópico nos dados:', nota.topico);
    
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
    
    // Para GET, usar fetch diretamente com userId como header
    const url = `${config.API_BASE_URL}/categorias`;
    console.log('🌐 API - listarCategorias URL:', url);
    console.log('🌐 API - listarCategorias userId:', userId);
    
    const response = await fetch(url, {
      headers: {
        'user-id': userId
      }
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }
    
    const data = await response.json();
    console.log('📦 API - listarCategorias dados brutos:', data);
    console.log('📦 API - listarCategorias success:', data.success);
    console.log('📦 API - listarCategorias categorias:', data.categorias);
    
    // Verificar se categorias é um array
    if (data.categorias && !Array.isArray(data.categorias)) {
      console.error('❌ API - categorias não é um array:', typeof data.categorias);
      throw new Error('Formato de dados inválido: categorias não é um array');
    }
    
    // Verificar estrutura de cada categoria
    if (data.categorias && data.categorias.length > 0) {
      console.log('📦 API - Primeira categoria:', data.categorias[0]);
      console.log('📦 API - Tipo da primeira categoria:', typeof data.categorias[0]);
    }
    
    return data;
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
    
    // Para POST, usar fetch diretamente com userId no header
    const url = `${config.API_BASE_URL}/categorias`;
    console.log('🌐 API - criarCategoria URL:', url);
    console.log('🌐 API - criarCategoria dados:', categoria);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'user-id': userId
      },
      body: JSON.stringify(categoria)
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }
    
    const data = await response.json();
    console.log('✅ API - criarCategoria resposta:', data);
    return data;
  } catch (error) {
    console.error('Erro ao criar categoria:', error);
    throw error;
  }
};

const atualizarCategoria = async (id, categoria) => {
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
    
    // Para PUT, usar fetch diretamente com userId no header
    const url = `${config.API_BASE_URL}/categorias?id=${id}`;
    console.log('🌐 API - atualizarCategoria URL:', url);
    console.log('🌐 API - atualizarCategoria dados:', categoria);
    
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'user-id': userId
      },
      body: JSON.stringify(categoria)
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }
    
    const data = await response.json();
    console.log('✅ API - atualizarCategoria resposta:', data);
    return data;
  } catch (error) {
    console.error('Erro ao atualizar categoria:', error);
    throw error;
  }
};

const deletarCategoria = async (id) => {
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
    
    // Para DELETE, usar fetch diretamente com userId no header
    const url = `${config.API_BASE_URL}/categorias?id=${id}`;
    console.log('🌐 API - deletarCategoria URL:', url);
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'user-id': userId
      }
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }
    
    const data = await response.json();
    console.log('✅ API - deletarCategoria resposta:', data);
    return data;
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