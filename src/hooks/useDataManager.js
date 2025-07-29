import { useState, useEffect, useCallback } from 'react';
import { linksAPI, notasAPI, categoriasAPI } from '../config/api-simple';

export const useDataManager = () => {
  const [links, setLinks] = useState([]);
  const [notas, setNotas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  // Função para verificar se o usuário está logado
  const isUserLoggedIn = useCallback(() => {
    const user = localStorage.getItem('user');
    console.log('🔍 Verificando usuário no localStorage:', user);
    
    if (!user || user === 'undefined' || user === 'null') {
      console.log('⚠️ Usuário não encontrado ou inválido no localStorage');
      return false;
    }
    
    try {
      const userData = JSON.parse(user);
      const isValid = userData && userData.id;
      console.log('✅ Usuário válido:', isValid, userData);
      return isValid;
    } catch (error) {
      console.error('❌ Erro ao verificar usuário:', error);
      // Limpar dados inválidos do localStorage
      localStorage.removeItem('user');
      return false;
    }
  }, []);

  // Função para limpar dados
  const limparDados = useCallback(() => {
    setLinks([]);
    setNotas([]);
    setCategorias([]);
    setErro(null);
  }, []);

  // Carregar links
  const carregarLinks = useCallback(async () => {
    if (!isUserLoggedIn()) {
      console.log('⚠️ Usuário não logado, pulando carregamento de links');
      return [];
    }

    setCarregando(true);
    setErro(null);

    try {
      const response = await linksAPI.buscarTodos();
      const linksData = response.data || [];
      setLinks(linksData);
      console.log('✅ Links carregados:', linksData.length);
      return linksData;
    } catch (error) {
      console.error('❌ Erro ao carregar links:', error);
      setErro(error.message);
      return [];
    } finally {
      setCarregando(false);
    }
  }, [isUserLoggedIn]);

  // Carregar notas
  const carregarNotas = useCallback(async (filtros = {}) => {
    if (!isUserLoggedIn()) {
      console.log('⚠️ Usuário não logado, pulando carregamento de notas');
      return [];
    }

    setCarregando(true);
    setErro(null);

    try {
      const response = await notasAPI.buscarTodos(filtros);
      const notasData = response.notas || [];
      setNotas(notasData);
      console.log('✅ Notas carregadas:', notasData.length);
      return notasData;
    } catch (error) {
      console.error('❌ Erro ao carregar notas:', error);
      setErro(error.message);
      return [];
    } finally {
      setCarregando(false);
    }
  }, [isUserLoggedIn]);

  // Carregar categorias
  const carregarCategorias = useCallback(async () => {
    if (!isUserLoggedIn()) {
      console.log('⚠️ Usuário não logado, pulando carregamento de categorias');
      return [];
    }

    setCarregando(true);
    setErro(null);

    try {
      const response = await categoriasAPI.buscarTodos();
      const categoriasData = response.data || [];
      setCategorias(categoriasData);
      console.log('✅ Categorias carregadas:', categoriasData.length);
      return categoriasData;
    } catch (error) {
      console.error('❌ Erro ao carregar categorias:', error);
      setErro(error.message);
      return [];
    } finally {
      setCarregando(false);
    }
  }, [isUserLoggedIn]);

  // Carregar todos os dados
  const carregarTodosDados = useCallback(async () => {
    if (!isUserLoggedIn()) {
      console.log('⚠️ Usuário não logado, pulando carregamento de dados');
      return;
    }

    console.log('🚀 Carregando todos os dados...');
    setCarregando(true);
    setErro(null);

    try {
      // Verificar se o usuário está logado antes de fazer as requisições
      const user = localStorage.getItem('user');
      if (!user) {
        console.log('⚠️ Usuário não encontrado no localStorage, pulando carregamento');
        return;
      }

      const userData = JSON.parse(user);
      if (!userData || !userData.id) {
        console.log('⚠️ Dados do usuário inválidos, pulando carregamento');
        return;
      }

      console.log('👤 Usuário logado:', userData.id);

      // Carregar em paralelo
      const [linksData, notasData, categoriasData] = await Promise.all([
        linksAPI.buscarTodos().catch(err => {
          console.error('❌ Erro ao carregar links:', err);
          return { data: [] };
        }),
        notasAPI.buscarTodos().catch(err => {
          console.error('❌ Erro ao carregar notas:', err);
          return { notas: [] };
        }),
        categoriasAPI.buscarTodos().catch(err => {
          console.error('❌ Erro ao carregar categorias:', err);
          return { data: [] };
        })
      ]);

      setLinks(linksData.links || linksData.data || []);
      setNotas(notasData.notas || []);
      setCategorias(categoriasData.data || []);

      console.log('✅ Todos os dados carregados:', {
        links: (linksData.links || linksData.data)?.length || 0,
        notas: notasData.notas?.length || 0,
        categorias: categoriasData.data?.length || 0
      });
    } catch (error) {
      console.error('❌ Erro ao carregar dados:', error);
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  }, [isUserLoggedIn]);

  // Criar link
  const criarLink = useCallback(async (dados) => {
    if (!isUserLoggedIn()) {
      throw new Error('Usuário não autenticado');
    }

    setCarregando(true);
    setErro(null);

    try {
      const response = await linksAPI.criar(dados);
      const novoLink = response.data || response.link;
      
      // Atualizar lista local
      setLinks(prev => [...prev, novoLink]);
      return novoLink;
    } catch (error) {
      console.error('❌ Erro ao criar link:', error);
      setErro(error.message);
      throw error;
    } finally {
      setCarregando(false);
    }
  }, [isUserLoggedIn]);

  // Criar nota
  const criarNota = useCallback(async (dados) => {
    if (!isUserLoggedIn()) {
      throw new Error('Usuário não autenticado');
    }

    setCarregando(true);
    setErro(null);

    try {
      const response = await notasAPI.criar(dados);
      const novaNota = response.nota;
      
      // Atualizar lista local
      setNotas(prev => [...prev, novaNota]);
      return novaNota;
    } catch (error) {
      console.error('❌ Erro ao criar nota:', error);
      setErro(error.message);
      throw error;
    } finally {
      setCarregando(false);
    }
  }, [isUserLoggedIn]);

  // Atualizar nota
  const atualizarNota = useCallback(async (id, dados) => {
    if (!isUserLoggedIn()) {
      throw new Error('Usuário não autenticado');
    }

    setCarregando(true);
    setErro(null);

    try {
      const response = await notasAPI.atualizar(id, dados);
      const notaAtualizada = response.nota;
      
      // Atualizar lista local
      setNotas(prev => prev.map(nota => 
        nota.id === id ? notaAtualizada : nota
      ));
      return notaAtualizada;
    } catch (error) {
      console.error('❌ Erro ao atualizar nota:', error);
      setErro(error.message);
      throw error;
    } finally {
      setCarregando(false);
    }
  }, [isUserLoggedIn]);

  // Deletar nota
  const deletarNota = useCallback(async (id) => {
    if (!isUserLoggedIn()) {
      throw new Error('Usuário não autenticado');
    }

    setCarregando(true);
    setErro(null);

    try {
      await notasAPI.deletar(id);
      
      // Atualizar lista local
      setNotas(prev => prev.map(nota => 
        nota.id === id ? { ...nota, ativo: false } : nota
      ));
      return true;
    } catch (error) {
      console.error('❌ Erro ao deletar nota:', error);
      setErro(error.message);
      throw error;
    } finally {
      setCarregando(false);
    }
  }, [isUserLoggedIn]);

  // Alternar favorito
  const alternarFavorito = useCallback(async (id) => {
    if (!isUserLoggedIn()) {
      throw new Error('Usuário não autenticado');
    }

    setCarregando(true);
    setErro(null);

    try {
      const response = await notasAPI.alternarFavorito(id);
      
      // Atualizar lista local
      setNotas(prev => prev.map(nota => 
        nota.id === id ? { ...nota, favorito: !nota.favorito } : nota
      ));
      return response;
    } catch (error) {
      console.error('❌ Erro ao alternar favorito:', error);
      setErro(error.message);
      throw error;
    } finally {
      setCarregando(false);
    }
  }, [isUserLoggedIn]);

  // Limpar erro
  const limparErro = useCallback(() => {
    setErro(null);
  }, []);

  // Escutar mudanças de autenticação
  useEffect(() => {
    const handleUserLogin = () => {
      console.log('👤 Usuário logado, carregando dados...');
      carregarTodosDados();
    };

    const handleUserLogout = () => {
      console.log('🚪 Usuário deslogado, limpando dados...');
      limparDados();
    };

    // Adicionar listeners
    window.addEventListener('userLogin', handleUserLogin);
    window.addEventListener('userLogout', handleUserLogout);

    // Cleanup
    return () => {
      window.removeEventListener('userLogin', handleUserLogin);
      window.removeEventListener('userLogout', handleUserLogout);
    };
  }, [carregarTodosDados, limparDados]);

  // Carregar dados iniciais se usuário estiver logado
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user && isUserLoggedIn()) {
      console.log('🚀 Usuário já logado, carregando dados iniciais...');
      carregarTodosDados();
    } else {
      console.log('⚠️ Usuário não logado, não carregando dados iniciais');
    }
  }, [isUserLoggedIn, carregarTodosDados]);

  return {
    // Estado
    links,
    notas,
    categorias,
    carregando,
    erro,
    
    // Ações
    carregarLinks,
    carregarNotas,
    carregarCategorias,
    carregarTodosDados,
    criarLink,
    criarNota,
    atualizarNota,
    deletarNota,
    alternarFavorito,
    limparErro,
    
    // Utilitários
    isUserLoggedIn,
    limparDados,
    
    // Dados filtrados
    notasAtivas: (notas || []).filter(nota => nota.ativo),
    notasDeletadas: (notas || []).filter(nota => !nota.ativo),
    notasFavoritas: (notas || []).filter(nota => nota.favorito && nota.ativo),
    linksAtivos: (links || []).filter(link => link.ativo !== false)
  };
}; 