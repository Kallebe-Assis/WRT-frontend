import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import useNotasAPI from '../hooks/useNotasAPI';

// Criar contexto
const NotasAPIContext = createContext();

// Hook para usar o contexto
export const useNotasAPIContext = () => {
  const contexto = useContext(NotasAPIContext);
  if (!contexto) {
    throw new Error('useNotasAPIContext deve ser usado dentro de um NotasAPIProvider');
  }
  return contexto;
};

// Provider do contexto
export const NotasAPIProvider = ({ children }) => {
  const [categoriaAtiva, setCategoriaAtiva] = useState('anotacoes');
  const [menuRecolhido, setMenuRecolhido] = useState(false);
  const [termoBusca, setTermoBusca] = useState('');
  const [ordenacao, setOrdenacao] = useState('dataCriacao');

  // Usar o hook da API
  const {
    notas,
    categorias,
    loading: carregando,
    error: erro,
    isOnline, // Novo estado de conectividade
    carregarNotas,
    carregarCategorias,
    criarNota,
    atualizarNota,
    deletarNota,
    refreshNotas,
    clearCache
  } = useNotasAPI();

  // Expor funções no window para uso pela sincronização
  useEffect(() => {
    window.notasContext = {
      carregarNotas,
      carregarCategorias,
      recarregarDados: refreshNotas
    };
    
    console.log('Funções do contexto de notas expostas no window');
    
    return () => {
      delete window.notasContext;
    };
  }, [carregarNotas, carregarCategorias, refreshNotas]);

  // Log quando categorias mudarem
  useEffect(() => {
    console.log('=== CONTEXTO CATEGORIAS ===');
    console.log('Categorias carregadas:', categorias);
    console.log('Tipo das categorias:', Array.isArray(categorias) ? 'Array' : typeof categorias);
    if (Array.isArray(categorias)) {
      console.log('Número de categorias:', categorias.length);
      categorias.forEach((cat, index) => {
        console.log(`Categoria ${index}:`, cat);
      });
    }
  }, [categorias]);

  // Filtrar e ordenar notas usando useMemo para otimização
  const notasFiltradas = useMemo(() => {
    // Garantir que notas seja um array
    const notasArray = Array.isArray(notas) ? notas : [];
    
    // Só executar se notas mudou
    if (!notasArray || notasArray.length === 0) {
      return [];
    }

    let notasParaFiltrar = [...notasArray]; // Criar cópia para não mutar o original

    // Filtrar por categoria ativa (tópico específico)
    if (categoriaAtiva && categoriaAtiva !== 'anotacoes') {
      notasParaFiltrar = notasParaFiltrar.filter(nota => nota.categoria === categoriaAtiva);
    }

    // Filtrar por termo de busca
    if (termoBusca && termoBusca.trim()) {
      const termo = termoBusca.toLowerCase().trim();
      notasParaFiltrar = notasParaFiltrar.filter(nota =>
        (nota.titulo && nota.titulo.toLowerCase().includes(termo)) ||
        (nota.conteudo && nota.conteudo.toLowerCase().includes(termo))
      );
    }

    // Ordenar
    switch (ordenacao) {
      case 'dataCriacao':
        notasParaFiltrar.sort((a, b) => 
          new Date(b.dataCriacao) - new Date(a.dataCriacao)
        );
        break;
      case 'dataModificacao':
        notasParaFiltrar.sort((a, b) => 
          new Date(b.dataModificacao) - new Date(a.dataModificacao)
        );
        break;
      case 'titulo':
        notasParaFiltrar.sort((a, b) => 
          a.titulo.localeCompare(b.titulo)
        );
        break;
      case 'categoria':
        notasParaFiltrar.sort((a, b) => 
          (a.categoria || '').localeCompare(b.categoria || '')
        );
        break;
      default:
        break;
    }

    return notasParaFiltrar;
  }, [notas, categoriaAtiva, termoBusca, ordenacao]);

  // Funções para gerenciar notas
  const adicionarNota = async (nota) => {
    try {
      console.log('📝 Context: Adicionando nota...');
      const novaNota = await criarNota(nota);
      console.log('✅ Context: Nota adicionada com sucesso');
      return novaNota;
    } catch (error) {
      console.error('❌ Context: Erro ao adicionar nota:', error);
      throw error;
    }
  };

  const editarNota = async (id, nota) => {
    try {
      console.log('✏️ Context: Editando nota:', id);
      const notaAtualizada = await atualizarNota(id, nota);
      console.log('✅ Context: Nota editada com sucesso');
      return notaAtualizada;
    } catch (error) {
      console.error('❌ Context: Erro ao editar nota:', error);
      throw error;
    }
  };

  // Excluir nota
  const excluirNota = async (id) => {
    try {
      console.log('🗑️ Excluindo nota:', id);
      const response = await deletarNota(id);
      console.log('✅ Nota excluída com sucesso');
      return response;
    } catch (error) {
      console.error('❌ Erro ao excluir nota:', error);
      throw error;
    }
  };

  const filtrarPorCategoriaEspecifica = async (categoria) => {
    try {
      // Garantir que notas seja um array
      const notasArray = Array.isArray(notas) ? notas : [];
      
      // Filtrar notas localmente
      const notasFiltradas = notasArray.filter(nota => nota.categoria === categoria);
      return notasFiltradas;
    } catch (error) {
      console.error('Erro ao filtrar por categoria:', error);
      throw error;
    }
  };

  const buscarNotas = async (termo) => {
    try {
      // Garantir que notas seja um array
      const notasArray = Array.isArray(notas) ? notas : [];
      
      // Buscar notas localmente
      const termoLower = termo.toLowerCase();
      const resultados = notasArray.filter(nota =>
        (nota.titulo && nota.titulo.toLowerCase().includes(termoLower)) ||
        (nota.conteudo && nota.conteudo.toLowerCase().includes(termoLower))
      );
      return resultados;
    } catch (error) {
      console.error('Erro ao buscar notas:', error);
      throw error;
    }
  };

  // Funções de interface
  const definirCategoriaAtiva = (categoria) => {
    setCategoriaAtiva(categoria);
  };

  const alternarMenu = () => {
    setMenuRecolhido(!menuRecolhido);
  };

  const definirTermoBusca = (termo) => {
    setTermoBusca(termo);
  };

  const definirOrdenacao = (novaOrdenacao) => {
    setOrdenacao(novaOrdenacao);
  };

  // Função para ordenar notas (alias para definirOrdenacao)
  const ordenarNotas = (novaOrdenacao) => {
    definirOrdenacao(novaOrdenacao);
  };

  // Função para buscar notas (alias para buscarNotas)
  const buscarNotasPorTermo = async (termo) => {
    return await buscarNotas(termo);
  };

  // Função para filtrar por categoria (alias para filtrarPorCategoriaEspecifica)
  const filtrarNotasPorCategoria = async (categoria) => {
    return await filtrarPorCategoriaEspecifica(categoria);
  };

  // Estatísticas
  const estatisticas = {
    totalNotas: Array.isArray(notas) ? notas.length : 0,
    notasFavoritas: Array.isArray(notas) ? notas.filter(nota => nota.favorito).length : 0,
    notasPorCategoria: Array.isArray(categorias) ? categorias.reduce((acc, categoria) => {
      let nomeCategoria = '';
      if (typeof categoria === 'object' && categoria.nome) {
        nomeCategoria = categoria.nome;
      } else if (typeof categoria === 'string') {
        nomeCategoria = categoria;
      } else {
        console.error('❌ Categoria inválida em estatísticas:', categoria);
        return acc;
      }
      acc[nomeCategoria] = Array.isArray(notas) ? notas.filter(nota => {
        if (typeof nota.categoria === 'object' && nota.categoria.nome) {
          return nota.categoria.nome === nomeCategoria;
        }
        return nota.categoria === nomeCategoria;
      }).length : 0;
      return acc;
    }, {}) : {},
    categoriasComQuantidade: Array.isArray(categorias) ? categorias.map(categoria => ({
      categoria: categoria,
      quantidade: Array.isArray(notas) ? notas.filter(nota => nota.categoria === categoria).length : 0
    })) : []
  };

  // Monitorar mudanças nas notas e forçar re-renderização
  useEffect(() => {
    console.log('📊 Context: Estado das notas atualizado:', Array.isArray(notas) ? notas.length : 0, 'notas');
  }, [notas]);

  // Monitorar mudanças nas categorias
  useEffect(() => {
    console.log('📂 Context: Estado das categorias atualizado:', Array.isArray(categorias) ? categorias.length : 0, 'categorias');
  }, [categorias]);

  // Criar o valor do contexto
  const contextValue = {
    // Estados
    notas: Array.isArray(notas) ? notas : [],
    notasAtivas: Array.isArray(notas) ? notas : [], // Alias para notas
    notasDeletadas: [], // Não disponível no hook atual
    categorias: Array.isArray(categorias) ? categorias : [],
    carregando,
    erro,
    isOnline, // Status de conectividade
    categoriaAtiva,
    menuRecolhido,
    termoBusca,
    ordenacao,
    notasFiltradas,
    estatisticas,

    // Funções
    carregarNotas,
    carregarCategorias,
    adicionarNota,
    editarNota,
    excluirNota,
    restaurarNota: () => {}, // Não disponível no hook atual
    alternarFavorito: () => {}, // Não disponível no hook atual
    filtrarPorCategoria: filtrarNotasPorCategoria, // Alias para filtrarNotasPorCategoria
    ordenarNotas,
    buscarNotas,
    definirCategoriaAtiva,
    alternarMenu,
    definirTermoBusca,
    definirOrdenacao,
    recarregarDados: refreshNotas, // Alias para refreshNotas
    clearCache,
    
    // Funções de busca e filtro
    buscarNotasPorTermo,
    filtrarNotasPorCategoria,
    filtrarPorCategoriaEspecifica
  };

  // Retornar o provider com o valor do contexto
  return (
    <NotasAPIContext.Provider value={contextValue}>
      {children}
    </NotasAPIContext.Provider>
  );
}; 