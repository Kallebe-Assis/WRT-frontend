import React, { useState, useEffect, useMemo } from 'react';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import ListaItens from './ListaItens';

const TelaLinks = ({ 
  links, 
  carregando, 
  onNovoItem, 
  onEditarItem, 
  onVisualizarItem, 
  onExcluirItem, 
  onFavoritarItem,
  forcarAtualizacao 
}) => {
  const [filtro, setFiltro] = useState('');
  const [ordenacao, setOrdenacao] = useState('dataModificacao');
  const [direcao, setDirecao] = useState('desc');

  // Resetar filtros quando forcarAtualizacao mudar
  useEffect(() => {
    if (forcarAtualizacao > 0) {
      setFiltro('');
      setOrdenacao('dataModificacao');
      setDirecao('desc');
    }
  }, [forcarAtualizacao]);

  // Filtrar e ordenar links
  const linksFiltrados = useMemo(() => {
    if (!links) return [];

    // Filtrar links null/undefined antes de processar
    let linksProcessados = links.filter(link => link && typeof link === 'object');

    // Aplicar filtro
    if (filtro) {
      const filtroLower = filtro.toLowerCase();
      linksProcessados = linksProcessados.filter(link =>
        link.nome?.toLowerCase().includes(filtroLower) ||
        link.url?.toLowerCase().includes(filtroLower) ||
        link.descricao?.toLowerCase().includes(filtroLower) ||
        (link.categoria && typeof link.categoria === 'object' ? link.categoria.nome : link.categoria)?.toLowerCase().includes(filtroLower)
      );
    }

    // Aplicar ordenação
    linksProcessados.sort((a, b) => {
      let valorA, valorB;

      switch (ordenacao) {
        case 'nome':
          valorA = a.nome?.toLowerCase() || '';
          valorB = b.nome?.toLowerCase() || '';
          break;
        case 'dataCriacao':
          valorA = new Date(a.dataCriacao || 0);
          valorB = new Date(b.dataCriacao || 0);
          break;
        case 'dataModificacao':
        default:
          valorA = new Date(a.dataModificacao || a.dataCriacao || 0);
          valorB = new Date(b.dataModificacao || b.dataCriacao || 0);
          break;
      }

      if (direcao === 'asc') {
        return valorA > valorB ? 1 : -1;
      } else {
        return valorA < valorB ? 1 : -1;
      }
    });

    return linksProcessados;
  }, [links, filtro, ordenacao, direcao]);

  // Obter categorias únicas dos links
  const categorias = useMemo(() => {
    if (!links) return [];
    
    const categoriasUnicas = links
      .filter(link => link && typeof link === 'object') // Filtrar links null/undefined
      .map(link => {
        if (!link.categoria) return null;
        return typeof link.categoria === 'object' ? link.categoria.nome : link.categoria;
      })
      .filter(Boolean)
      .filter((value, index, self) => self.indexOf(value) === index);
    
    return categoriasUnicas.sort();
  }, [links]);

  if (carregando) {
    return (
      <div style={{ padding: 'var(--espacamentoGrande)', textAlign: 'center' }}>
        <p>Carregando seus links...</p>
      </div>
    );
  }

  return (
    <ListaItens
      itens={linksFiltrados}
      tipo="link"
      titulo="Meus Links"
      icone={faLink}
      carregando={carregando}
      onNovo={onNovoItem}
      onEditar={onEditarItem}
      onExcluir={onExcluirItem}
      onVisualizar={onVisualizarItem}
      onFavoritar={onFavoritarItem}
      categorias={categorias}
    />
  );
};

export default TelaLinks;