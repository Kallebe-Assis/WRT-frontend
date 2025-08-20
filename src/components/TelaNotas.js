import React, { useState, useEffect, useMemo } from 'react';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import ListaItens from './ListaItens';

const TelaNotas = ({ 
  notas, 
  categorias: categoriasProp,
  carregando, 
  onNovoItem, 
  onEditarItem, 
  onVisualizarItem, 
  onExcluirItem,
  onExportarItem,
  onImprimirItem,
  onFavoritarItem,
  onTelaCheia,
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

  // Filtrar e ordenar notas
  const notasFiltradas = useMemo(() => {
    if (!notas) return [];

    // Filtrar notas null/undefined antes de processar
    let notasProcessadas = notas.filter(nota => nota && typeof nota === 'object');

    // Aplicar filtro
    if (filtro) {
      const filtroLower = filtro.toLowerCase();
      notasProcessadas = notasProcessadas.filter(nota =>
        nota.titulo?.toLowerCase().includes(filtroLower) ||
        nota.conteudo?.toLowerCase().includes(filtroLower) ||
        nota.topico?.toLowerCase().includes(filtroLower)
      );
    }

    // Aplicar ordenação
    notasProcessadas.sort((a, b) => {
      let valorA, valorB;

      switch (ordenacao) {
        case 'titulo':
          valorA = a.titulo?.toLowerCase() || '';
          valorB = b.titulo?.toLowerCase() || '';
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

    return notasProcessadas;
  }, [notas, filtro, ordenacao, direcao]);

  // Usar categorias passadas como prop ou extrair das notas
  const categorias = useMemo(() => {
    // Se categorias foram passadas como prop, usar elas
    if (categoriasProp && Array.isArray(categoriasProp) && categoriasProp.length > 0) {
      return categoriasProp.map(cat => typeof cat === 'object' ? cat.nome : cat).sort();
    }
    
    // Caso contrário, extrair categorias únicas das notas
    if (!notas) return [];
    
    const categoriasUnicas = notas
      .filter(nota => nota && typeof nota === 'object') // Filtrar notas null/undefined
      .map(nota => {
        // Tentar diferentes propriedades onde a categoria pode estar
        return nota.categoria?.nome || nota.categoria || nota.topico || null;
      })
      .filter(Boolean)
      .filter((value, index, self) => self.indexOf(value) === index);
    
    return categoriasUnicas.sort();
  }, [notas, categoriasProp]);

  if (carregando) {
    return (
      <div style={{ padding: 'var(--espacamentoGrande)', textAlign: 'center' }}>
        <p>Carregando suas notas...</p>
      </div>
    );
  }

  return (
    <ListaItens
      itens={notasFiltradas}
      tipo="nota"
      titulo="Minhas Notas"
      icone={faStickyNote}
      carregando={carregando}
      onNovo={onNovoItem}
      onEditar={onEditarItem}
      onExcluir={onExcluirItem}
      onVisualizar={onVisualizarItem}
      onExportar={onExportarItem}
      onImprimir={onImprimirItem}
      onTelaCheia={onTelaCheia}
      onFavoritar={onFavoritarItem}
      categorias={categorias}
    />
  );
};

export default TelaNotas;