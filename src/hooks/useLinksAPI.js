import { useState, useEffect, useCallback } from 'react';
import { linksAPI } from '../config/api';

const LINKS_CACHE_KEY = 'wrtmind_links_cache';
const LINKS_CACHE_TIMESTAMP_KEY = 'wrtmind_links_timestamp';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

const useLinksAPI = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastSync, setLastSync] = useState(null);

  // Função para obter cache de links
  const getCachedLinks = () => {
    try {
      const cached = localStorage.getItem(LINKS_CACHE_KEY);
      const timestamp = localStorage.getItem(LINKS_CACHE_TIMESTAMP_KEY);

      if (cached && timestamp) {
        const age = Date.now() - parseInt(timestamp);
        if (age < CACHE_DURATION) {
          const parsedData = JSON.parse(cached);
          console.log('✅ Usando cache de links (idade:', Math.round(age/1000), 's)');
          return parsedData;
        }
      }
    } catch (error) {
      console.warn('Erro ao ler cache de links:', error);
    }
    return null;
  };

  // Função para salvar cache de links
  const setCachedLinks = (data) => {
    try {
      localStorage.setItem(LINKS_CACHE_KEY, JSON.stringify(data));
      localStorage.setItem(LINKS_CACHE_TIMESTAMP_KEY, Date.now().toString());
      console.log('Cache de links atualizado');
    } catch (error) {
      console.warn('Erro ao salvar cache de links:', error);
    }
  };

  // Carregar links com cache
  const carregarLinks = useCallback(async (forceRefresh = false) => {
    console.log('=== CARREGANDO LINKS ===');

    try {
      if (!forceRefresh) {
        const cachedData = getCachedLinks();
        if (cachedData) {
          console.log('✅ Usando cache de links');
          setLinks(cachedData);
          setLoading(false);

          // Carregar dados atualizados em background
          setTimeout(async () => {
            try {
              const freshData = await linksAPI.buscarTodos();
              const linksData = freshData.links || freshData.data || [];
              setLinks(linksData);
              setCachedLinks(linksData);
              setLastSync(new Date());
              console.log('✅ Links atualizados em background');
            } catch (error) {
              console.warn('⚠️ Erro ao atualizar links em background:', error);
            }
          }, 1000);

          return;
        }
      }

      // Carregar dados do servidor
      console.log('🌐 Carregando links do servidor...');
      const data = await linksAPI.buscarTodos();
      const linksData = data.links || data.data || [];

      console.log('✅ Links carregados:', linksData);
      setLinks(linksData);
      setCachedLinks(linksData);
      setLastSync(new Date());
      setError(null);
    } catch (error) {
      console.error('❌ Erro ao carregar links:', error);
      setError(error.message);

      // Se falhar, tentar usar cache mesmo que antigo
      const cachedData = getCachedLinks();
      if (cachedData) {
        console.log('🔄 Usando cache antigo de links');
        setLinks(cachedData);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // Criar link
  const criarLink = useCallback(async (linkData) => {
    try {
      console.log('📝 Criando link:', linkData);
      const response = await linksAPI.criar(linkData);
      const novoLink = response.data || response.link || { id: Date.now().toString(), ...linkData };
      
      setLinks(prev => [...prev, novoLink]);
      setCachedLinks([...links, novoLink]);
      
      console.log('✅ Link criado com sucesso');
      return novoLink;
    } catch (error) {
      console.error('❌ Erro ao criar link:', error);
      throw error;
    }
  }, [links]);

  // Atualizar link
  const atualizarLink = useCallback(async (id, linkData) => {
    try {
      console.log('📝 Atualizando link:', id, linkData);
      const response = await linksAPI.atualizar(id, linkData);
      const linkAtualizado = response.data || response.link || { id, ...linkData };
      
      setLinks(prev => prev.map(link => 
        link.id === id ? linkAtualizado : link
      ));
      setCachedLinks(links.map(link => 
        link.id === id ? linkAtualizado : link
      ));
      
      console.log('✅ Link atualizado com sucesso');
      return linkAtualizado;
    } catch (error) {
      console.error('❌ Erro ao atualizar link:', error);
      throw error;
    }
  }, [links]);

  // Deletar link
  const deletarLink = useCallback(async (id) => {
    try {
      console.log('🗑️ Deletando link:', id);
      await linksAPI.deletar(id);
      
      setLinks(prev => prev.filter(link => link.id !== id));
      setCachedLinks(links.filter(link => link.id !== id));
      
      console.log('✅ Link deletado com sucesso');
    } catch (error) {
      console.error('❌ Erro ao deletar link:', error);
      throw error;
    }
  }, [links]);

  // Buscar link por ID
  const buscarLinkPorId = useCallback(async (id) => {
    try {
      const response = await linksAPI.buscarPorId(id);
      return response.data || response.link;
    } catch (error) {
      console.error('❌ Erro ao buscar link por ID:', error);
      throw error;
    }
  }, []);

  // Limpar cache
  const limparCache = useCallback(() => {
    try {
      localStorage.removeItem(LINKS_CACHE_KEY);
      localStorage.removeItem(LINKS_CACHE_TIMESTAMP_KEY);
      console.log('🗑️ Cache de links limpo');
    } catch (error) {
      console.warn('Erro ao limpar cache de links:', error);
    }
  }, []);

  // Forçar atualização
  const forcarAtualizacao = useCallback(() => {
    carregarLinks(true);
  }, [carregarLinks]);

  return {
    links,
    setLinks,
    loading,
    error,
    lastSync,
    carregarLinks,
    criarLink,
    atualizarLink,
    deletarLink,
    buscarLinkPorId,
    limparCache,
    forcarAtualizacao
  };
};

export default useLinksAPI;
