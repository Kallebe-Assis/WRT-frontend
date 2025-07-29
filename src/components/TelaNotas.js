import React, { useState, useEffect } from 'react';
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
`;

const CardNota = styled.div`
  background: var(--corFundoCard);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoGrande);
  transition: all var(--transicaoRapida);
  cursor: pointer;

  &:hover {
    border-color: var(--corPrimaria);
    transform: translateY(-2px);
    box-shadow: var(--sombraMedia);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--espacamentoMedio);
`;

const CardTitulo = styled.h3`
  color: var(--corTextoPrimaria);
  font-size: 1.2rem;
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
  line-height: 1.6;
  margin-bottom: var(--espacamentoMedio);
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
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
  const [filtroTopico, setFiltroTopico] = useState('todos');
  const [ordenacao, setOrdenacao] = useState('dataCriacao');

  // Reagir à atualização forçada
  useEffect(() => {
    if (forcarAtualizacao > 0) {
      console.log('🔄 TelaNotas: Atualização forçada detectada');
      // Limpar filtros para mostrar todos os dados atualizados
      setTermoBusca('');
      setFiltroTopico('todos');
      setOrdenacao('dataCriacao');
    }
  }, [forcarAtualizacao]);

  // Debug logs
  console.log('🔍 TelaNotas - notas recebidas:', notas);
  console.log('🔍 TelaNotas - carregando:', carregando);
  console.log('🔍 TelaNotas - total de notas:', notas?.length || 0);

  // Filtrar e ordenar notas
  const notasFiltradas = notas
    .filter(nota => {
      const matchBusca = termoBusca === '' || 
        nota.titulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
        nota.conteudo.toLowerCase().includes(termoBusca.toLowerCase());
      
      const matchTopico = filtroTopico === 'todos' || nota.topico === filtroTopico;
      
      return matchBusca && matchTopico;
    })
    .sort((a, b) => {
      switch (ordenacao) {
        case 'titulo':
          return a.titulo.localeCompare(b.titulo);
        case 'dataCriacao':
          return new Date(b.dataCriacao) - new Date(a.dataCriacao);
        case 'dataModificacao':
          return new Date(b.dataModificacao || b.dataCriacao) - new Date(a.dataModificacao || a.dataCriacao);
        default:
          return 0;
      }
    });

  console.log('🔍 TelaNotas - notas filtradas:', notasFiltradas);
  console.log('🔍 TelaNotas - total de notas filtradas:', notasFiltradas?.length || 0);

  // Obter tópicos únicos
  const topicos = [...new Set(notas.map(nota => nota.topico).filter(Boolean))];

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
          value={filtroTopico}
          onChange={(e) => setFiltroTopico(e.target.value)}
        >
          <option value="todos">Todos os tópicos</option>
          {topicos.map(topico => (
            <option key={topico} value={topico}>{topico}</option>
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
          <p>{termoBusca || filtroTopico !== 'todos' ? 'Nenhuma nota encontrada' : 'Você ainda não tem notas'}</p>
          {!termoBusca && filtroTopico === 'todos' && (
            <BotaoPrimario onClick={onNovoItem}>
              <FontAwesomeIcon icon={faPlus} />
              Criar Primeira Nota
            </BotaoPrimario>
          )}
        </EstadoVazio>
      ) : (
        <GridNotas>
          {notasFiltradas.map(nota => (
            <CardNota key={nota.id} onClick={() => onVisualizarItem(nota)}>
              <CardHeader>
                <CardTitulo>{nota.titulo}</CardTitulo>
                <CardAcoes onClick={(e) => e.stopPropagation()}>
                  {nota.favorito && (
                    <BotaoAcao onClick={() => onFavoritarItem(nota.id)}>
                      <FontAwesomeIcon icon={faHeart} style={{ color: '#e74c3c' }} />
                    </BotaoAcao>
                  )}
                  <BotaoAcao onClick={() => onEditarItem(nota)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </BotaoAcao>
                  <BotaoAcao onClick={() => onExcluirItem(nota.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </BotaoAcao>
                </CardAcoes>
              </CardHeader>
              
              <CardConteudo>
                {nota.conteudo.replace(/<[^>]*>/g, '').substring(0, 150)}...
              </CardConteudo>
              
              <CardFooter>
                <CardMeta>
                  {nota.topico && <Tag>{nota.topico}</Tag>}
                  <span>{formatarData(nota.dataCriacao)}</span>
                </CardMeta>
                <BotaoAcao onClick={(e) => e.stopPropagation()}>
                  <FontAwesomeIcon icon={faEye} />
                </BotaoAcao>
              </CardFooter>
            </CardNota>
          ))}
        </GridNotas>
      )}
    </Container>
  );
};

export default TelaNotas;