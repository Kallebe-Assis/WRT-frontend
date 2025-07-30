import React, { useState, useEffect, useMemo } from 'react';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import ListaItens from './ListaItens';

const TelaNotas = ({ 
  notas, 
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

    let notasProcessadas = [...notas];

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
    />
  );
};

export default TelaNotas;