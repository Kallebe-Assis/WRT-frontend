// Importar configuração centralizada
import { config, apiRequest } from './environment.js';

// Configuração da API
const API_BASE_URL = config.API_BASE_URL;

// Função para fazer requisições
async function makeRequest(endpoint, options = {}) {
  try {
    const response = await apiRequest(endpoint, options);
    
    if (!response.ok) {
      const errorText = await response.text();
      
      // Se for erro 401, limpar dados do usuário
      if (response.status === 401) {
        localStorage.removeItem('user');
        window.dispatchEvent(new CustomEvent('userLogout'));
      }
      
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw new Error(`Erro na requisição: ${error.message}`);
  }
}

// Função para obter user ID
const getUserId = () => {
  try {
    const user = localStorage.getItem('user');
    
    if (!user) {
      return null;
    }

    const userData = JSON.parse(user);
    return userData.id;
  } catch (error) {
    console.error('Erro ao obter user ID:', error);
    return null;
  }
};

// API de Links
const listarLinks = async () => {
  try {
    const userId = getUserId();
    if (!userId) {
      throw new Error('Usuário não autenticado');
    }
    
    const url = `https://wrt-back.vercel.app/api/links?userId=${userId}`;
    
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
    const userId = getUserId();
    if (!userId) {
      throw new Error('Usuário não autenticado');
    }

    const dadosCorretos = {
      ...link,
      userId: userId
    };

    const url = `https://wrt-back.vercel.app/api/links`;
    
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
    return data;
  } catch (error) {
    console.error('Erro ao criar link:', error);
    throw error;
  }
};

const atualizarLink = async (id, link) => {
  try {
    const userId = getUserId();
    if (!userId) {
      throw new Error('Usuário não autenticado');
    }

    const dadosCorretos = {
      ...link,
      userId: userId
    };

    const url = `https://wrt-back.vercel.app/api/links/${id}`;
    
    const response = await fetch(url, {
      method: 'PUT',
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
    return data;
  } catch (error) {
    console.error('Erro ao atualizar link:', error);
    throw error;
  }
};

const deletarLink = async (id) => {
  try {
    const userId = getUserId();
    if (!userId) {
      throw new Error('Usuário não autenticado');
    }

    const url = `https://wrt-back.vercel.app/api/links/${id}`;
    
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
    return data;
  } catch (error) {
    console.error('Erro ao deletar link:', error);
    throw error;
  }
};

// API de Notas
const listarNotas = async (params = {}) => {
  try {
    const userId = getUserId();
    if (!userId) {
      throw new Error('Usuário não autenticado');
    }

    const url = `https://wrt-back.vercel.app/api/notas?userId=${userId}`;
    
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
    
    // Retornar estrutura esperada pelo useNotasAPI
    if (data.success !== undefined) {
      return data; // Já tem a estrutura correta
    } else {
      // Converter para estrutura esperada
      return {
        success: true,
        notas: Array.isArray(data) ? data : (data.notas || [])
      };
    }
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
    const userId = getUserId();
    if (!userId) {
      throw new Error('Usuário não autenticado');
    }

    const dadosCompletos = {
      ...nota,
      userId: userId,
      ativo: true,
      dataCriacao: new Date().toISOString(),
      dataModificacao: new Date().toISOString()
    };

    const url = `https://wrt-back.vercel.app/api/notas`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'user-id': userId
      },
      body: JSON.stringify(dadosCompletos)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao criar nota:', error);
    throw error;
  }
};

const atualizarNota = async (id, nota) => {
  try {
    const userId = getUserId();
    if (!userId) {
      throw new Error('Usuário não autenticado');
    }

    const dadosCompletos = {
      ...nota,
      userId: userId,
      dataModificacao: new Date().toISOString()
    };

    const url = `https://wrt-back.vercel.app/api/notas/${id}`;
    
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'user-id': userId
      },
      body: JSON.stringify(dadosCompletos)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao atualizar nota:', error);
    throw error;
  }
};

const deletarNota = async (id) => {
  try {
    const userId = getUserId();
    if (!userId) {
      throw new Error('Usuário não autenticado');
    }

    const url = `https://wrt-back.vercel.app/api/notas/${id}`;
    
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
    return data;
  } catch (error) {
    console.error('Erro ao deletar nota:', error);
    throw error;
  }
};

const restaurarNota = async (id) => {
  try {
    const response = await makeRequest(`/notas/${id}/restaurar`, { method: 'PUT' });
    return response;
  } catch (error) {
    console.error('Erro ao restaurar nota:', error);
    throw error;
  }
};

const excluirNotaDefinitivamente = async (id) => {
  try {
    const response = await makeRequest(`/notas/${id}/excluir-definitivamente`, { method: 'DELETE' });
    return response;
  } catch (error) {
    console.error('Erro ao excluir nota definitivamente:', error);
    throw error;
  }
};

const alternarFavorito = async (id) => {
  try {
    const response = await makeRequest(`/notas/${id}/favorito`, { method: 'PUT' });
    return response;
  } catch (error) {
    console.error('Erro ao alternar favorito:', error);
    throw error;
  }
};

const alternarFixado = async (id) => {
  try {
    const response = await makeRequest(`/notas/${id}/fixado`, { method: 'PUT' });
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
    const response = await makeRequest('/notas/ordenacao-multipla', {
      method: 'PUT',
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
    const userId = getUserId();
    if (!userId) {
      throw new Error('Usuário não autenticado');
    }

    const url = `https://wrt-back.vercel.app/api/categorias?userId=${userId}`;
    
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
    
    // Retornar estrutura esperada
    if (data.success !== undefined) {
      return data; // Já tem a estrutura correta
    } else {
      // Converter para estrutura esperada
      return {
        success: true,
        categorias: Array.isArray(data) ? data : (data.categorias || [])
      };
    }
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
    const userId = getUserId();
    if (!userId) {
      throw new Error('Usuário não autenticado');
    }

    const dadosCompletos = {
      ...categoria,
      userId: userId,
      ativo: true,
      dataCriacao: new Date().toISOString(),
      dataModificacao: new Date().toISOString()
    };

    const url = `https://wrt-back.vercel.app/api/categorias`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'user-id': userId
      },
      body: JSON.stringify(dadosCompletos)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao criar categoria:', error);
    throw error;
  }
};

const atualizarCategoria = async (id, categoria) => {
  try {
    const userId = getUserId();
    if (!userId) {
      throw new Error('Usuário não autenticado');
    }

    const dadosCompletos = {
      ...categoria,
      userId: userId,
      dataModificacao: new Date().toISOString()
    };

    const url = `https://wrt-back.vercel.app/api/categorias/${id}`;
    
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'user-id': userId
      },
      body: JSON.stringify(dadosCompletos)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao atualizar categoria:', error);
    throw error;
  }
};

const deletarCategoria = async (id) => {
  try {
    const userId = getUserId();
    if (!userId) {
      throw new Error('Usuário não autenticado');
    }

    const url = `https://wrt-back.vercel.app/api/categorias/${id}`;
    
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
    return data;
  } catch (error) {
    console.error('Erro ao deletar categoria:', error);
    throw error;
  }
};

const restaurarCategoria = async (id) => {
  try {
    const response = await makeRequest(`/categorias/${id}/restaurar`, { method: 'PUT' });
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

// Exportar API de Links
export const linksAPI = {
  listar: listarLinks,
  buscarPorId: buscarLinkPorId,
  criar: criarLink,
  atualizar: atualizarLink,
  deletar: deletarLink,
  buscarTodos: listarLinks
};

// Exportar API de Notas
export const notasAPI = {
  listar: listarNotas,
  buscarTodos: listarNotas, // Alias para compatibilidade
  buscarPorId: buscarNotaPorId,
  criar: criarNota,
  atualizar: atualizarNota,
  deletar: deletarNota,
  restaurar: restaurarNota,
  excluirDefinitivamente: excluirNotaDefinitivamente,
  alternarFavorito: alternarFavorito,
  alternarFixado: alternarFixado,
  atualizarOrdenacao: atualizarOrdenacao,
  atualizarMultiplasOrdenacoes: atualizarMultiplasOrdenacoes,
  buscarFavoritas: buscarFavoritas,
  buscarFixadas: buscarFixadas
};

// Exportar API de Categorias
export const categoriasAPI = {
  listar: listarCategorias,
  buscarPorId: buscarCategoriaPorId,
  criar: criarCategoria,
  atualizar: atualizarCategoria,
  deletar: deletarCategoria,
  restaurar: restaurarCategoria,
  buscarDeletadas: buscarCategoriasDeletadas
}; 