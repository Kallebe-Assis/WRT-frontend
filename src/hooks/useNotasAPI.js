import { useState, useEffect, useCallback } from 'react';
import { notasAPI, categoriasAPI } from '../config/api';
import { debugAuth } from '../utils/debug';

export const useNotasAPI = () => {
  const [notas, setNotas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [topicos, setTopicos] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  // Carregar todas as notas
  const carregarNotas = useCallback(async (filtros = {}) => {
    console.log('📡 Fazendo requisição para API...');
    
    // Debug de autenticação
    debugAuth();
    
    // Verificar se o usuário está logado
    const user = localStorage.getItem('user');
    if (!user) {
      console.log('❌ Usuário não logado, pulando carregamento de notas');
      setNotas([]);
      return [];
    }
    
    setCarregando(true);
    setErro(null);
    
    try {
      const response = await notasAPI.listar(filtros);
      console.log('📦 Resposta da API:', response);
      setNotas(response.notas || []);
      return response.notas || [];
    } catch (error) {
      console.error('❌ Erro ao carregar notas:', error);
      setErro(error.message);
      return [];
    } finally {
      setCarregando(false);
    }
  }, []);

  // Carregar categorias
  const carregarCategorias = useCallback(async () => {
    try {
      const response = await categoriasAPI.listar();
      const categoriasData = response.categorias || [];
      setCategorias(categoriasData);
      return categoriasData;
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
      setErro(error.message);
      setCategorias([]);
      return [];
    }
  }, []);

  // Carregar tópicos
  const carregarTopicos = useCallback(async () => {
    try {
      const response = await categoriasAPI.listar();
      const topicosData = response.topicos || [];
      setTopicos(topicosData);
      return topicosData;
    } catch (error) {
      console.error('Erro ao carregar tópicos:', error);
      setErro(error.message);
      setTopicos([]);
      return [];
    }
  }, []);

  // Criar nova nota
  const criarNota = useCallback(async (nota) => {
    setCarregando(true);
    setErro(null);
    
    try {
      const response = await notasAPI.criar(nota);
      const novaNota = response.nota;
      
      // Recarregar notas do servidor para garantir sincronização
      await carregarNotas({ ativo: true });
      return novaNota;
    } catch (error) {
      console.error('Erro ao criar nota:', error);
      setErro(error.message);
      throw error;
    } finally {
      setCarregando(false);
    }
  }, [carregarNotas]);

  // Atualizar nota
  const atualizarNota = useCallback(async (id, nota) => {
    setCarregando(true);
    setErro(null);
    
    try {
      const response = await notasAPI.atualizar(id, nota);
      const notaAtualizada = response.nota;
      
      // Recarregar notas do servidor para garantir sincronização
      await carregarNotas({ ativo: true });
      return notaAtualizada;
    } catch (error) {
      console.error('Erro ao atualizar nota:', error);
      setErro(error.message);
      throw error;
    } finally {
      setCarregando(false);
    }
  }, [carregarNotas]);

  // Deletar nota
  const deletarNota = useCallback(async (id) => {
    setCarregando(true);
    setErro(null);
    
    try {
      await notasAPI.deletar(id);
      
      // Recarregar notas do servidor para garantir sincronização
      await carregarNotas({ ativo: true });
      return true;
    } catch (error) {
      console.error('Erro ao deletar nota:', error);
      setErro(error.message);
      throw error;
    } finally {
      setCarregando(false);
    }
  }, [carregarNotas]);

  // Restaurar nota
  const restaurarNota = useCallback(async (id) => {
    setCarregando(true);
    setErro(null);
    
    try {
      const response = await notasAPI.restaurar(id);
      const notaRestaurada = response.nota;
      
      // Recarregar notas do servidor para garantir sincronização
      await carregarNotas({ ativo: true });
      return notaRestaurada;
    } catch (error) {
      console.error('Erro ao restaurar nota:', error);
      setErro(error.message);
      throw error;
    } finally {
      setCarregando(false);
    }
  }, [carregarNotas]);

  // Excluir nota definitivamente
  const excluirNotaDefinitivamente = useCallback(async (id) => {
    setCarregando(true);
    setErro(null);
    
    try {
      await notasAPI.excluirDefinitivamente(id);
      
      // Recarregar notas do servidor para garantir sincronização
      await carregarNotas({ ativo: true });
      return true;
    } catch (error) {
      console.error('Erro ao excluir nota definitivamente:', error);
      setErro(error.message);
      throw error;
    } finally {
      setCarregando(false);
    }
  }, [carregarNotas]);

  // Alternar favorito (DESABILITADO)
  // const alternarFavorito = useCallback(async (id) => {
  //   setCarregando(true);
  //   setErro(null);
  //   
  //   try {
  //     const response = await notasAPI.alternarFavorito(id);
  //     const notaAtualizada = response.nota;
  //       
  //     // Atualizar a nota na lista local
  //     setNotas(prev => prev.map(nota => 
  //       nota.id === id ? notaAtualizada : nota
  //     ));
  //       
  //     // Disparar evento para notificar outros componentes
  //     window.dispatchEvent(new CustomEvent('favoritosAlterados', {
  //       detail: { notaId: id, favorito: notaAtualizada.favorito }
  //     }));
  //       
  //     return notaAtualizada;
  //   } catch (error) {
  //     console.error('Erro ao alternar favorito:', error);
  //     setErro(error.message);
  //     throw error;
  //   } finally {
  //     setCarregando(false);
  //   }
  // }, []);

  // Alternar fixado
  const alternarFixado = useCallback(async (id) => {
    setCarregando(true);
    setErro(null);
    
    try {
      const response = await notasAPI.alternarFixado(id);
      const notaAtualizada = response.nota;
      
      // Atualizar a nota no estado local
      setNotas(prev => prev.map(nota => 
        nota.id === id ? { ...nota, fixado: notaAtualizada.fixado } : nota
      ));
      
      return notaAtualizada;
    } catch (error) {
      console.error('Erro ao alternar fixado:', error);
      setErro(error.message);
      throw error;
    } finally {
      setCarregando(false);
    }
  }, []);

  // Atualizar ordenação
  const atualizarOrdenacao = useCallback(async (id, ordenacao) => {
    setCarregando(true);
    setErro(null);
    
    try {
      const response = await notasAPI.atualizarOrdenacao(id, ordenacao);
      const notaAtualizada = response.nota;
      
      // Atualizar a nota no estado local
      setNotas(prev => prev.map(nota => 
        nota.id === id ? { ...nota, ordenacao: notaAtualizada.ordenacao } : nota
      ));
      
      return notaAtualizada;
    } catch (error) {
      console.error('Erro ao atualizar ordenação:', error);
      setErro(error.message);
      throw error;
    } finally {
      setCarregando(false);
    }
  }, []);

  // Atualizar múltiplas ordenações
  const atualizarMultiplasOrdenacoes = useCallback(async (ordenacoes) => {
    setCarregando(true);
    setErro(null);
    
    try {
      await notasAPI.atualizarMultiplasOrdenacoes(ordenacoes);
      
      // Recarregar notas do servidor para garantir sincronização
      await carregarNotas({ ativo: true });
      return true;
    } catch (error) {
      console.error('Erro ao atualizar múltiplas ordenações:', error);
      setErro(error.message);
      throw error;
    } finally {
      setCarregando(false);
    }
  }, [carregarNotas]);

  // Buscar notas favoritas (DESABILITADO)
  // const buscarFavoritas = useCallback(async () => {
  //   // Verificar se o usuário está logado
  //   const user = localStorage.getItem('user');
  //   if (!user) {
  //     console.log('❌ Usuário não logado, pulando busca de favoritos');
  //     return [];
  //   }
  //   
  //   setCarregando(true);
  //   setErro(null);
  //   
  //   try {
  //     const response = await notasAPI.buscarFavoritas();
  //     return response.notas || [];
  //   } catch (error) {
  //     console.error('Erro ao buscar notas favoritas:', error);
  //     setErro(error.message);
  //     return [];
  //   } finally {
  //     setCarregando(false);
  //   }
  // }, []);

  // Buscar notas fixadas
  const buscarFixadas = useCallback(async () => {
    setCarregando(true);
    setErro(null);
    
    try {
      const response = await notasAPI.buscarFixadas();
      return response.notas || [];
    } catch (error) {
      console.error('Erro ao buscar notas fixadas:', error);
      setErro(error.message);
      return [];
    } finally {
      setCarregando(false);
    }
  }, []);

  // Buscar nota por ID
  const buscarNotaPorId = useCallback(async (id) => {
    setCarregando(true);
    setErro(null);
    
    try {
      const response = await notasAPI.buscarPorId(id);
      return response.nota;
    } catch (error) {
      console.error('Erro ao buscar nota:', error);
      setErro(error.message);
      throw error;
    } finally {
      setCarregando(false);
    }
  }, []);

  // Filtrar notas por tópico
  const filtrarPorCategoria = useCallback(async (categoria) => {
    return await carregarNotas({ categoria, ativo: true });
  }, [carregarNotas]);

  // Buscar notas por termo
  const buscarPorTermo = useCallback(async (termo) => {
    // Implementar busca no backend quando disponível
    // Por enquanto, filtrar localmente
    const notasFiltradas = notas.filter(nota =>
      nota.titulo.toLowerCase().includes(termo.toLowerCase()) ||
      nota.conteudo.toLowerCase().includes(termo.toLowerCase())
    );
    return notasFiltradas;
  }, [notas]);

  // Limpar erro
  const limparErro = useCallback(() => {
    setErro(null);
  }, []);

  // Funções de gerenciamento de tópicos
  const adicionarCategoria = useCallback(async (dadosCategoria) => {
    try {
      const response = await categoriasAPI.criar(dadosCategoria);
      const novaCategoria = response.categoria;
      setCategorias(prev => [...prev, novaCategoria]);
      return novaCategoria;
    } catch (error) {
      console.error('Erro ao adicionar categoria:', error);
      setErro(error.message);
      throw error;
    }
  }, []);

  const editarCategoria = useCallback(async (id, dadosCategoria) => {
    try {
      const response = await categoriasAPI.atualizar(id, dadosCategoria);
      const categoriaAtualizada = response.categoria;
      setCategorias(prev => prev.map(c => c.id === id ? categoriaAtualizada : c));
      return categoriaAtualizada;
    } catch (error) {
      console.error('Erro ao editar categoria:', error);
      setErro(error.message);
      throw error;
    }
  }, []);

  const removerCategoria = useCallback(async (id) => {
    try {
      await categoriasAPI.deletar(id);
      setCategorias(prev => prev.filter(c => c.id !== id));
      return true;
    } catch (error) {
      console.error('Erro ao remover categoria:', error);
      setErro(error.message);
      throw error;
    }
  }, []);

  // Carregar dados iniciais apenas quando o usuário estiver logado
  useEffect(() => {
    console.log('🚀 Verificando se usuário está logado...');
    
    const carregarDadosIniciais = async () => {
      try {
        // Verificar se o usuário está logado
        const user = localStorage.getItem('user');
        if (!user) {
          console.log('⚠️ Usuário não está logado, aguardando login...');
          setNotas([]);
          setCategorias([]);
          return;
        }

        // Verificar se os dados do usuário são válidos
        let userData;
        try {
          userData = JSON.parse(user);
          if (!userData.id) {
            console.log('⚠️ Dados do usuário inválidos, aguardando login válido...');
            setNotas([]);
            setCategorias([]);
            return;
          }
        } catch (error) {
          console.log('⚠️ Erro ao parsear dados do usuário, aguardando login válido...');
          setNotas([]);
          setCategorias([]);
          return;
        }

        console.log('✅ Usuário logado, carregando dados...');
        
        // Usar as funções diretamente sem dependências circulares
        const responseNotas = await notasAPI.listar(); // Carregar todas as notas (ativas e deletadas)
        setNotas(responseNotas.notas || []);
        
        const responseCategorias = await categoriasAPI.listar();
        const categoriasIniciais = responseCategorias.categorias || [];
        setCategorias(categoriasIniciais);
      } catch (error) {
        console.error('Erro ao carregar dados iniciais:', error);
        setErro(error.message);
        // Em caso de erro, limpar dados para evitar estado inconsistente
        setNotas([]);
        setCategorias([]);
      }
    };
    
    carregarDadosIniciais();
  }, []); // Array vazio - executa apenas uma vez

  // Adicionar um useEffect para escutar mudanças no localStorage e eventos de login
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'user') {
        console.log('👤 Mudança detectada no localStorage (user)');
        if (e.newValue) {
          // Usuário fez login, carregar dados
          console.log('✅ Usuário logado, carregando dados...');
          const carregarDadosIniciais = async () => {
            try {
              const responseNotas = await notasAPI.listar();
              setNotas(responseNotas.notas || []);
              
              const responseCategorias = await categoriasAPI.listar();
              const categoriasIniciais = responseCategorias.categorias || [];
              setCategorias(categoriasIniciais);
            } catch (error) {
              console.error('Erro ao carregar dados após login:', error);
              setErro(error.message);
            }
          };
          carregarDadosIniciais();
        } else {
          // Usuário fez logout, limpar dados
          console.log('🚪 Usuário deslogado, limpando dados...');
          setNotas([]);
          setCategorias([]);
          setErro(null);
        }
      }
    };

    const handleUserLogin = (e) => {
      console.log('👤 Evento de login detectado:', e.detail);
      // Usuário fez login, carregar dados
      console.log('✅ Usuário logado, carregando dados...');
      const carregarDadosIniciais = async () => {
        try {
          const responseNotas = await notasAPI.listar();
          setNotas(responseNotas.notas || []);
          
          const responseCategorias = await categoriasAPI.listar();
          const categoriasIniciais = responseCategorias.categorias || [];
          setCategorias(categoriasIniciais);
        } catch (error) {
          console.error('Erro ao carregar dados após login:', error);
          setErro(error.message);
        }
      };
      carregarDadosIniciais();
    };

    const handleUserLogout = () => {
      console.log('🚪 Evento de logout detectado');
      // Usuário fez logout, limpar dados
      console.log('🚪 Usuário deslogado, limpando dados...');
      setNotas([]);
      setCategorias([]);
      setErro(null);
    };

    // Adicionar listeners
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('userLogin', handleUserLogin);
    window.addEventListener('userLogout', handleUserLogout);

    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('userLogin', handleUserLogin);
      window.removeEventListener('userLogout', handleUserLogout);
    };
  }, []);

  return {
    // Estado
    notas,
    categorias,
    topicos,
    carregando,
    erro,
    
    // Ações
    carregarNotas,
    carregarCategorias,
    carregarTopicos,
    criarNota,
    atualizarNota,
    deletarNota,
    restaurarNota,
    excluirNotaDefinitivamente,
    buscarNotaPorId,
    filtrarPorCategoria,
    buscarPorTermo,
    limparErro,
    
    // Novos métodos para fixados e ordenação
    // alternarFavorito, // DESABILITADO
    alternarFixado,
    atualizarOrdenacao,
    atualizarMultiplasOrdenacoes,
    // buscarFavoritas, // DESABILITADO
    buscarFixadas,
    
    // Gerenciamento de categorias
    adicionarCategoria,
    editarCategoria,
    removerCategoria,
    
    // Utilitários
    notasAtivas: notas.filter(nota => nota.ativo),
    notasDeletadas: notas.filter(nota => !nota.ativo),
    // notasFavoritas: notas.filter(nota => nota.favorito && nota.ativo), // DESABILITADO
    notasFixadas: notas.filter(nota => nota.fixado && nota.ativo)
  };
}; 