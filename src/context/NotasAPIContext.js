import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useNotasAPI } from '../hooks/useNotasAPI';

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
    carregando,
    erro,
    carregarNotas,
    carregarCategorias,
    criarNota,
    atualizarNota,
    deletarNota,
    restaurarNota,
    excluirNotaDefinitivamente,
    buscarNotaPorId,
    filtrarPorCategoria,
    buscarPorTermo,
    limparErro,
    notasAtivas,
    notasDeletadas,
    adicionarCategoria,
    editarCategoria,
    removerCategoria,
    alternarFavorito,
    buscarFavoritas
  } = useNotasAPI();

  // Expor funções no window para uso pela sincronização
  useEffect(() => {
    window.notasContext = {
      carregarNotas,
      carregarCategorias,
      recarregarDados
    };
    
    return () => {
      delete window.notasContext;
    };
  }, [carregarNotas, carregarCategorias]);

  // Filtrar e ordenar notas usando useMemo para otimização
  const notasFiltradas = useMemo(() => {
    // Só executar se notasAtivas mudou
    if (!notasAtivas || notasAtivas.length === 0) {
      return [];
    }

    let notasParaFiltrar = [...notasAtivas]; // Criar cópia para não mutar o original

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
  }, [notasAtivas, categoriaAtiva, termoBusca, ordenacao]);

  // Funções para gerenciar notas
  const adicionarNota = async (nota) => {
    try {
      const novaNota = await criarNota(nota);
      // O hook já recarrega os dados automaticamente
      return novaNota;
    } catch (error) {
      console.error('Erro ao adicionar nota:', error);
      throw error;
    }
  };

  const editarNota = async (id, nota) => {
    try {
      const notaAtualizada = await atualizarNota(id, nota);
      // O hook já recarrega os dados automaticamente
      return notaAtualizada;
    } catch (error) {
      console.error('Erro ao editar nota:', error);
      throw error;
    }
  };

  const excluirNota = async (id) => {
    try {
      await deletarNota(id);
      // O hook já recarrega os dados automaticamente
    } catch (error) {
      console.error('Erro ao excluir nota:', error);
      throw error;
    }
  };

  const visualizarNota = async (id) => {
    try {
      const nota = await buscarNotaPorId(id);
      return nota;
    } catch (error) {
      console.error('Erro ao buscar nota:', error);
      throw error;
    }
  };

  const filtrarPorCategoriaEspecifica = async (categoria) => {
    try {
      const notasFiltradas = await filtrarPorCategoria(categoria);
      return notasFiltradas;
    } catch (error) {
      console.error('Erro ao filtrar por categoria:', error);
      throw error;
    }
  };

  const buscarNotas = async (termo) => {
    try {
      const resultados = await buscarPorTermo(termo);
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

  const recarregarDados = async () => {
    try {
      await carregarNotas({ ativo: true });
      await carregarCategorias();
    } catch (error) {
      console.error('Erro ao recarregar dados:', error);
    }
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
    totalNotas: notasAtivas ? notasAtivas.length : 0,
    notasFavoritas: notasAtivas ? notasAtivas.filter(nota => nota.favorito).length : 0,
    notasPorCategoria: categorias.reduce((acc, categoria) => {
      let nomeCategoria = '';
      if (typeof categoria === 'object' && categoria.nome) {
        nomeCategoria = categoria.nome;
      } else if (typeof categoria === 'string') {
        nomeCategoria = categoria;
      } else {
        console.error('❌ Categoria inválida em estatísticas:', categoria);
        return acc;
      }
      acc[nomeCategoria] = notasAtivas.filter(nota => {
        if (typeof nota.categoria === 'object' && nota.categoria.nome) {
          return nota.categoria.nome === nomeCategoria;
        }
        return nota.categoria === nomeCategoria;
      }).length;
      return acc;
    }, {}),
    notasPorCategoria: categorias ? categorias.map(categoria => ({
      categoria: categoria,
      quantidade: notasAtivas ? notasAtivas.filter(nota => nota.categoria === categoria).length : 0
    })) : []
  };

  // Criar o valor do contexto
  const contextValue = {
    // Estados
    notas: notasAtivas,
    notasAtivas,
    notasDeletadas,
    categorias,
    carregando,
    erro,
    
    // Funções
    carregarNotas,
    carregarCategorias,
    adicionarNota,
    editarNota,
    excluirNota,
    restaurarNota,
    alternarFavorito,
    filtrarPorCategoria,
    ordenarNotas,
    
    // Estatísticas
    estatisticas
  };

  // Retornar o provider com o valor do contexto
  return (
    <NotasAPIContext.Provider value={contextValue}>
      {children}
    </NotasAPIContext.Provider>
  );
}; 