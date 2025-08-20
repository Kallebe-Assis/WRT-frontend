import { useState, useEffect, useCallback } from 'react';
import { notasAPI, categoriasAPI } from '../config/api';

// Cache em localStorage
const CACHE_KEY = 'wrtmind_notas_cache';
const CACHE_TIMESTAMP_KEY = 'wrtmind_notas_timestamp';
const CATEGORIAS_CACHE_KEY = 'wrtmind_categorias_cache';
const CATEGORIAS_CACHE_TIMESTAMP_KEY = 'wrtmind_categorias_timestamp';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

const useNotasAPI = () => {
  const [notas, setNotas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastSync, setLastSync] = useState(null);
  const [isOnline, setIsOnline] = useState(false);

  // Função para obter cache do localStorage
  const getCachedNotas = () => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      const timestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
      
      if (cached && timestamp) {
        const age = Date.now() - parseInt(timestamp);
        if (age < CACHE_DURATION) {
          const parsedData = JSON.parse(cached);
          console.log('✅ Usando cache de notas (idade:', Math.round(age/1000), 's)');
          return Array.isArray(parsedData) ? parsedData : [];
        }
      }
    } catch (error) {
      console.warn('Erro ao ler cache:', error);
    }
    return null;
  };

  // Função para obter cache de categorias
  const getCachedCategorias = () => {
    try {
      const cached = localStorage.getItem(CATEGORIAS_CACHE_KEY);
      const timestamp = localStorage.getItem(CATEGORIAS_CACHE_TIMESTAMP_KEY);
      
      if (cached && timestamp) {
        const age = Date.now() - parseInt(timestamp);
        if (age < CACHE_DURATION) {
          const parsedData = JSON.parse(cached);
          console.log('✅ Usando cache de categorias (idade:', Math.round(age/1000), 's)');
          return parsedData;
        }
      }
    } catch (error) {
      console.warn('Erro ao ler cache de categorias:', error);
    }
    return null;
  };

  // Função para salvar cache no localStorage
  const setCachedNotas = (data) => {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
      localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
      console.log('Cache de notas atualizado');
    } catch (error) {
      console.warn('Erro ao salvar cache:', error);
    }
  };

  // Função para salvar cache de categorias
  const setCachedCategorias = (data) => {
    try {
      localStorage.setItem(CATEGORIAS_CACHE_KEY, JSON.stringify(data));
      localStorage.setItem(CATEGORIAS_CACHE_TIMESTAMP_KEY, Date.now().toString());
      console.log('Cache de categorias atualizado');
    } catch (error) {
      console.warn('Erro ao salvar cache de categorias:', error);
    }
  };

  // Carregar notas com cache inteligente
  const carregarNotas = useCallback(async (forceRefresh = false) => {
    console.log('🔍 Iniciando carregamento de notas...');
    setLoading(true);
    setError(null);

    try {
      // Se não for refresh forçado, tentar usar cache primeiro
      if (!forceRefresh) {
        const cachedData = getCachedNotas();
        if (cachedData) {
          console.log('✅ Usando cache de notas:', cachedData.length, 'notas');
          setNotas(cachedData);
          setLastSync(new Date());
          setLoading(false);
          
          // Carregar dados atualizados em background
          setTimeout(async () => {
            try {
              console.log('🔄 Atualizando dados em background...');
              const freshData = await notasAPI.listar();
              console.log('📦 Resposta da API:', freshData);
              let data = [];
              if (freshData && freshData.success) {
                data = freshData.notas || [];
              } else if (Array.isArray(freshData)) {
                data = freshData;
              } else {
                console.warn('⚠️ Formato de resposta inesperado:', freshData);
                data = [];
              }
              console.log('✅ Dados atualizados em background:', data.length, 'notas');
              setNotas(data);
              setCachedNotas(data);
              setLastSync(new Date());
              setIsOnline(true);
              console.log('🟢 Status: Online - Background sync bem-sucedido');
            } catch (error) {
              console.warn('⚠️ Erro ao atualizar em background:', error);
              setIsOnline(false);
              console.log('🔴 Status: Offline - Erro no background sync');
            }
          }, 1000);
          
          return;
        }
      }

      // Carregar dados do servidor
      console.log('🌐 Carregando notas do servidor...');
      const response = await notasAPI.listar();
      console.log('📦 Resposta da API:', response);
      
      // Extrair dados da resposta
      let data = [];
      if (response && response.success) {
        data = response.notas || [];
      } else if (Array.isArray(response)) {
        data = response;
      } else {
        console.warn('⚠️ Formato de resposta inesperado:', response);
        data = [];
      }
      
      console.log('✅ Dados extraídos:', data.length, 'notas');
      setNotas(data);
      setCachedNotas(data);
      setLastSync(new Date());
      setIsOnline(true);
      console.log('🟢 Status: Online - Sincronização bem-sucedida');
    } catch (error) {
      console.error('❌ Erro ao carregar notas:', error);
      setError(error.message);
      setIsOnline(false);
      console.log('🔴 Status: Offline - Erro na sincronização');
      
      // Se falhar, tentar usar cache mesmo que antigo
      const cachedData = getCachedNotas();
      if (cachedData) {
        console.log('🔄 Usando cache antigo devido a erro no servidor');
        setNotas(cachedData);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // Carregar categorias com cache
  const carregarCategorias = useCallback(async (forceRefresh = false) => {
    console.log('=== CARREGANDO CATEGORIAS ===');
    
    try {
      // Se não for refresh forçado, tentar usar cache primeiro
      if (!forceRefresh) {
        const cachedData = getCachedCategorias();
        if (cachedData) {
          console.log('✅ Usando cache de categorias');
          setCategorias(cachedData);
          
          // Carregar dados atualizados em background
          setTimeout(async () => {
            try {
              const freshData = await categoriasAPI.listar();
              const categoriasData = processarDadosCategorias(freshData);
              setCategorias(categoriasData);
              setCachedCategorias(categoriasData);
              console.log('✅ Categorias atualizadas em background');
            } catch (error) {
              console.warn('⚠️ Erro ao atualizar categorias em background:', error);
            }
          }, 1000);
          
          return;
        }
      }

      // Carregar dados do servidor
      console.log('🌐 Carregando categorias do servidor...');
      const data = await categoriasAPI.listar();
      const categoriasData = processarDadosCategorias(data);
      
      console.log('✅ Categorias carregadas:', categoriasData);
      setCategorias(categoriasData);
      setCachedCategorias(categoriasData);
    } catch (error) {
      console.error('❌ Erro ao carregar categorias:', error);
      
      // Se falhar, tentar usar cache mesmo que antigo
      const cachedData = getCachedCategorias();
      if (cachedData) {
        console.log('🔄 Usando cache antigo de categorias');
        setCategorias(cachedData);
      }
    }
  }, []);

  // Função auxiliar para processar dados das categorias
  const processarDadosCategorias = (data) => {
    console.log('🔍 Processando dados das categorias:', data);
    
    if (!data) {
      console.log('❌ Dados vazios');
      return [];
    }
    
    // Se é um array, retornar diretamente
    if (Array.isArray(data)) {
      console.log('✅ Dados já são um array:', data.length, 'categorias');
      return data;
    }
    
    // Se tem propriedade categorias e é um array
    if (data.categorias && Array.isArray(data.categorias)) {
      console.log('✅ Encontrado data.categorias:', data.categorias.length, 'categorias');
      return data.categorias;
    }
    
    // Se tem propriedade success e categorias
    if (data.success && data.categorias && Array.isArray(data.categorias)) {
      console.log('✅ Encontrado data.success.categorias:', data.categorias.length, 'categorias');
      return data.categorias;
    }
    
    // Se tem propriedade success e data (estrutura do backend)
    if (data.success && data.data && Array.isArray(data.data)) {
      console.log('✅ Encontrado data.success.data:', data.data.length, 'categorias');
      return data.data;
    }
    
    // Se tem propriedade data diretamente (sem success)
    if (data.data && Array.isArray(data.data)) {
      console.log('✅ Encontrado data.data:', data.data.length, 'categorias');
      return data.data;
    }
    
    // Se é um objeto com propriedades que parecem categorias
    if (typeof data === 'object' && !Array.isArray(data)) {
      const keys = Object.keys(data);
      console.log('🔍 Chaves do objeto:', keys);
      if (keys.length > 0) {
        // Tentar extrair categorias do objeto
        const categorias = [];
        keys.forEach(key => {
          if (data[key] && typeof data[key] === 'object') {
            categorias.push(data[key]);
          }
        });
        if (categorias.length > 0) {
          console.log('✅ Extraídas categorias do objeto:', categorias.length, 'categorias');
          return categorias;
        }
      }
    }
    
    console.warn('⚠️ Estrutura de dados inesperada para categorias:', data);
    return [];
  };

  // Carregar notas na inicialização
  useEffect(() => {
    console.log('🚀 Hook useNotasAPI inicializado');
    carregarNotas();
    carregarCategorias();
  }, [carregarNotas, carregarCategorias]);

  // Atualizar nota
  const atualizarNota = useCallback(async (id, dados) => {
    try {
      console.log('✏️ Atualizando nota:', id);
      const response = await notasAPI.atualizar(id, dados);
      
      // Atualizar estado local imediatamente
      setNotas(prevNotas => {
        const updatedNotas = prevNotas.map(nota => 
          nota.id === id ? { ...nota, ...dados, dataModificacao: new Date().toISOString() } : nota
        );
        console.log('✅ Estado local atualizado:', updatedNotas.length, 'notas');
        setCachedNotas(updatedNotas);
        return updatedNotas;
      });
      
      // Forçar nova renderização
      setLastSync(new Date());
      
      return response;
    } catch (error) {
      console.error('❌ Erro ao atualizar nota:', error);
      throw error;
    }
  }, []);

  // Criar nota
  const criarNota = useCallback(async (dados) => {
    try {
      console.log('➕ Criando nova nota');
      const response = await notasAPI.criar(dados);
      
      // Adicionar ao estado local imediatamente
      setNotas(prevNotas => {
        const newNotas = [response.nota || response, ...prevNotas];
        console.log('✅ Nova nota adicionada ao estado:', newNotas.length, 'notas');
        setCachedNotas(newNotas);
        return newNotas;
      });
      
      // Forçar nova renderização
      setLastSync(new Date());
      
      return response;
    } catch (error) {
      console.error('❌ Erro ao criar nota:', error);
      throw error;
    }
  }, []);

  // Deletar nota
  const deletarNota = useCallback(async (id) => {
    try {
      console.log('🗑️ Deletando nota:', id);
      await notasAPI.deletar(id);
      
      // Remover do estado local imediatamente
      setNotas(prevNotas => {
        const filteredNotas = prevNotas.filter(nota => nota.id !== id);
        console.log('✅ Nota removida do estado:', filteredNotas.length, 'notas');
        setCachedNotas(filteredNotas);
        return filteredNotas;
      });
      
      // Forçar nova renderização
      setLastSync(new Date());
    } catch (error) {
      console.error('❌ Erro ao deletar nota:', error);
      throw error;
    }
  }, []);

  // Favoritar/desfavoritar nota
  const favoritarNota = useCallback(async (id, favorita) => {
    try {
      console.log(`⭐ ${favorita ? 'Favoritando' : 'Desfavoritando'} nota:`, id);
      const response = await notasAPI.favoritar(id, favorita);
      
      // Atualizar estado local e cache imediatamente
      setNotas(prevNotas => {
        const updatedNotas = prevNotas.map(nota => 
          nota.id === id ? { ...nota, favorita: favorita } : nota
        );
        console.log(`✅ Nota ${favorita ? 'favoritada' : 'desfavoritada'} no estado:`, id);
        setCachedNotas(updatedNotas);
        return updatedNotas;
      });
      
      // Forçar nova renderização
      setLastSync(new Date());
      
      return response;
    } catch (error) {
      console.error('❌ Erro ao favoritar nota:', error);
      throw error;
    }
  }, []);

  // Função para forçar refresh
  const refreshNotas = useCallback(async () => {
    console.log('🔄 Forçando refresh completo das notas...');
    await carregarNotas(true);
  }, [carregarNotas]);

  // Função para limpar cache
  const clearCache = useCallback(() => {
    console.log('🧹 Limpando cache...');
    localStorage.removeItem(CACHE_KEY);
    localStorage.removeItem(CACHE_TIMESTAMP_KEY);
    localStorage.removeItem(CATEGORIAS_CACHE_KEY);
    localStorage.removeItem(CATEGORIAS_CACHE_TIMESTAMP_KEY);
    setLastSync(null);
  }, []);

  return {
    notas,
    categorias,
    loading,
    error,
    lastSync,
    isOnline,
    carregarNotas,
    carregarCategorias,
    atualizarNota,
    criarNota,
    deletarNota,
    favoritarNota,
    refreshNotas,
    clearCache
  };
};

export default useNotasAPI;