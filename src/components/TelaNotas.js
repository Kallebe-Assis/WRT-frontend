import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faStickyNote,
  faHeart,
  faEdit,
  faTrash,
  faEye
} from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  padding: var(--espacamentoGrande);
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--espacamentoGrande);
  flex-wrap: wrap;
  gap: var(--espacamentoMedio);
`;

const Titulo = styled.h1`
  color: var(--corTextoPrimaria);
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`;

const BotaoPrimario = styled.button`
  background: var(--corPrimaria);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);

  &:hover {
    background: var(--corSecundaria);
    transform: translateY(-1px);
  }
`;

const ContainerBusca = styled.div`
  display: flex;
  gap: var(--espacamentoMedio);
  align-items: center;
  flex-wrap: wrap;
`;

const InputBusca = styled.input`
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  min-width: 300px;
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);

  &:focus {
    outline: none;
    border-color: var(--corBordaFoco);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const SelectFiltro = styled.select`
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--corBordaFoco);
  }
`;

const GridNotas = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--espacamentoGrande);
  margin-top: var(--espacamentoGrande);
`;

const CardNota = styled.div`
  background: var(--corFundoCard);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioGrande);
  padding: var(--espacamentoGrande);
  transition: all var(--transicaoRapida);
  cursor: pointer;
  position: relative;
  box-shadow: var(--sombraLeve);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
    border-radius: var(--bordaRaioGrande) var(--bordaRaioGrande) 0 0;
    opacity: 0;
    transition: opacity var(--transicaoRapida);
  }

  &:hover {
    border-color: var(--corPrimaria);
    transform: translateY(-3px);
    box-shadow: var(--sombraMedia);
    
    &::before {
      opacity: 1;
    }
  }
`;

const CategoriaTag = styled.span`
  background: ${props => props.cor || 'var(--corPrimaria)'};
  color: white;
  padding: 2px 6px;
  border-radius: var(--bordaRaioPequena);
  font-size: 0.7rem;
  font-weight: 500;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--espacamentoMedio);
`;

const CardTitulo = styled.h3`
  color: var(--corTextoPrimaria);
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
`;

const CardAcoes = styled.div`
  display: flex;
  gap: var(--espacamentoPequeno);
`;

const BotaoAcao = styled.button`
  background: transparent;
  border: none;
  color: var(--corTextoSecundaria);
  cursor: pointer;
  padding: 4px;
  border-radius: var(--bordaRaioPequena);
  transition: all var(--transicaoRapida);

  &:hover {
    color: var(--corPrimaria);
    background: var(--corFundoSecundaria);
  }
`;

const CardConteudo = styled.div`
  color: var(--corTextoSecundaria);
  line-height: 1.5;
  margin-bottom: var(--espacamentoMedio);
  max-height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  font-size: 0.9rem;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoTerciaria);
`;

const CardMeta = styled.div`
  display: flex;
  gap: var(--espacamentoMedio);
  align-items: center;
`;

const Tag = styled.span`
  background: var(--corPrimaria);
  color: white;
  padding: 4px 8px;
  border-radius: var(--bordaRaioPequena);
  font-size: var(--tamanhoFontePequena);
  font-weight: 500;
`;

const EstadoVazio = styled.div`
  text-align: center;
  padding: var(--espacamentoExtraGrande);
  color: var(--corTextoSecundaria);
`;

const IconeVazio = styled.div`
  font-size: 4rem;
  color: var(--corTextoTerciaria);
  margin-bottom: var(--espacamentoGrande);
`;

const TelaNotas = ({ 
  notas, 
  carregando, 
  onNovoItem, 
  onEditarItem, 
  onVisualizarItem, 
  onExcluirItem,
  onFavoritarItem,
  forcarAtualizacao 
}) => {
  const [termoBusca, setTermoBusca] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('todos');
  const [ordenacao, setOrdenacao] = useState('dataCriacao');

  // Resetar filtros quando forcarAtualizacao mudar
  useEffect(() => {
    if (forcarAtualizacao > 0) {
      setTermoBusca('');
      setFiltroCategoria('todos');
      setOrdenacao('dataCriacao');
    }
  }, [forcarAtualizacao]);

  // Debug logs
  console.log('🔍 TelaNotas - notas recebidas:', notas);
  console.log('🔍 TelaNotas - carregando:', carregando);
  console.log('🔍 TelaNotas - total de notas:', notas?.length || 0);

  const notasFiltradas = (notas || []).filter(nota => {
    const matchBusca = !termoBusca || 
      (nota.titulo && nota.titulo.toLowerCase().includes(termoBusca.toLowerCase())) ||
      (nota.conteudo && nota.conteudo.toLowerCase().includes(termoBusca.toLowerCase()));
    
    const matchCategoria = filtroCategoria === 'todos' || nota.topico === filtroCategoria;
    
    return matchBusca && matchCategoria;
  });

  console.log('🔍 TelaNotas - notas filtradas:', notasFiltradas);
  console.log('🔍 TelaNotas - total de notas filtradas:', notasFiltradas?.length || 0);

  // Obter categorias únicas das notas
  const categoriasUnicas = useMemo(() => {
    const categorias = (notas || [])
      .map(nota => nota.topico)
      .filter(categoria => categoria && categoria.trim() !== '')
      .filter((categoria, index, array) => array.indexOf(categoria) === index);
    
    return ['todos', ...categorias];
  }, [notas]);

  // Função para obter cor da categoria baseada no nome
  const getCorCategoria = (nomeCategoria) => {
    const coresCategorias = {
      'Mapeamento': '#667eea',
      'G2 Office': '#764ba2',
      'Unit': '#f093fb',
      'Rede': '#4facfe',
      'Trabalho': '#ff6b6b',
      'Pessoal': '#4ecdc4',
      'Estudo': '#45b7d1',
      'Saúde': '#96ceb4',
      'Finanças': '#feca57',
      'Ideias': '#ff9ff3',
      'Lembretes': '#54a0ff',
      'Receitas': '#5f27cd',
      'Dicas': '#00d2d3',
      'Notas': '#ff9f43'
    };
    
    return coresCategorias[nomeCategoria] || '#667eea';
  };

  const formatarData = (data) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (carregando) {
    return (
      <Container>
        <EstadoVazio>
          <IconeVazio>
            <FontAwesomeIcon icon={faStickyNote} />
          </IconeVazio>
          <p>Carregando suas notas...</p>
        </EstadoVazio>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Titulo>
          <FontAwesomeIcon icon={faStickyNote} />
          Minhas Notas
        </Titulo>
        <BotaoPrimario onClick={onNovoItem}>
          <FontAwesomeIcon icon={faPlus} />
          Nova Nota
        </BotaoPrimario>
      </Header>

      <ContainerBusca>
        <InputBusca
          type="text"
          placeholder="Buscar por título ou conteúdo..."
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
        />
        <SelectFiltro
          value={filtroCategoria}
          onChange={(e) => setFiltroCategoria(e.target.value)}
        >
          <option value="todos">Todas as categorias</option>
          {categoriasUnicas.map(categoria => (
            <option key={categoria} value={categoria}>{categoria}</option>
          ))}
        </SelectFiltro>
        <SelectFiltro
          value={ordenacao}
          onChange={(e) => setOrdenacao(e.target.value)}
        >
          <option value="dataCriacao">Data de Criação</option>
          <option value="dataModificacao">Data de Modificação</option>
          <option value="titulo">Título</option>
        </SelectFiltro>
      </ContainerBusca>

      {notasFiltradas.length === 0 ? (
        <EstadoVazio>
          <IconeVazio>
            <FontAwesomeIcon icon={faStickyNote} />
          </IconeVazio>
          <p>{termoBusca || filtroCategoria !== 'todos' ? 'Nenhuma nota encontrada' : 'Você ainda não tem notas'}</p>
          {!termoBusca && filtroCategoria === 'todos' && (
            <BotaoPrimario onClick={onNovoItem}>
              <FontAwesomeIcon icon={faPlus} />
              Criar Primeira Nota
            </BotaoPrimario>
          )}
        </EstadoVazio>
      ) : (
        <GridNotas>
          {notasFiltradas.map(nota => (
            <CardNota key={nota.id} onClick={() => onEditarItem(nota)}>
              <CardHeader>
                <CardTitulo>{nota.titulo}</CardTitulo>
                <CardAcoes onClick={(e) => e.stopPropagation()}>
                  {nota.favorito && (
                    <BotaoAcao onClick={() => onFavoritarItem(nota.id)}>
                      <FontAwesomeIcon icon={faHeart} style={{ color: '#e74c3c' }} />
                    </BotaoAcao>
                  )}
                </CardAcoes>
              </CardHeader>
              
              <CardConteudo onClick={(e) => {
                e.stopPropagation();
                onEditarItem(nota);
              }}>
                {nota.conteudo.replace(/<[^>]*>/g, '').substring(0, 150)}...
              </CardConteudo>
              
              <CardFooter>
                <CardMeta>
                  {nota.topico && (
                    <CategoriaTag cor={getCorCategoria(nota.topico)}>
                      {nota.topico}
                    </CategoriaTag>
                  )}
                </CardMeta>
                <div style={{ display: 'flex', gap: 'var(--espacamentoPequeno)' }}>
                  <BotaoAcao onClick={(e) => {
                    e.stopPropagation();
                    onVisualizarItem(nota);
                  }}>
                    <FontAwesomeIcon icon={faEye} />
                  </BotaoAcao>
                  <BotaoAcao onClick={(e) => {
                    e.stopPropagation();
                    onEditarItem(nota);
                  }}>
                    <FontAwesomeIcon icon={faEdit} />
                  </BotaoAcao>
                  <BotaoAcao onClick={(e) => {
                    e.stopPropagation();
                    onExcluirItem(nota.id);
                  }}>
                    <FontAwesomeIcon icon={faTrash} />
                  </BotaoAcao>
                </div>
              </CardFooter>
            </CardNota>
          ))}
        </GridNotas>
      )}
    </Container>
  );
};

export default TelaNotas;