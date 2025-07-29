import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faLink,
  faHeart,
  faEdit,
  faTrash,
  faExternalLinkAlt
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

const GridLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--espacamentoGrande);
`;

const CardLink = styled.div`
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

const CardImagem = styled.div`
  width: 100%;
  height: 150px;
  background: var(--corFundoSecundaria);
  border-radius: var(--bordaRaioMedia);
  margin-bottom: var(--espacamentoMedio);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardConteudo = styled.div`
  color: var(--corTextoSecundaria);
  line-height: 1.6;
  margin-bottom: var(--espacamentoMedio);
`;

const CardUrl = styled.div`
  color: var(--corPrimaria);
  font-size: var(--tamanhoFontePequena);
  word-break: break-all;
  margin-bottom: var(--espacamentoMedio);
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

const TelaLinks = ({ 
  links, 
  carregando, 
  onNovoItem, 
  onEditarItem, 
  onVisualizarItem, 
  onExcluirItem,
  onFavoritarItem 
}) => {
  const [termoBusca, setTermoBusca] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('todos');
  const [ordenacao, setOrdenacao] = useState('dataCriacao');

  // Filtrar e ordenar links
  const linksFiltrados = links
    .filter(link => {
      const matchBusca = termoBusca === '' || 
        link.nome.toLowerCase().includes(termoBusca.toLowerCase()) ||
        link.descricao.toLowerCase().includes(termoBusca.toLowerCase()) ||
        link.url.toLowerCase().includes(termoBusca.toLowerCase());
      
      const matchCategoria = filtroCategoria === 'todos' || link.categoria === filtroCategoria;
      
      return matchBusca && matchCategoria;
    })
    .sort((a, b) => {
      switch (ordenacao) {
        case 'nome':
          return a.nome.localeCompare(b.nome);
        case 'dataCriacao':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'dataModificacao':
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        default:
          return 0;
      }
    });

  // Obter categorias únicas
  const categorias = [...new Set(links.map(link => link.categoria).filter(Boolean))];

  const formatarData = (data) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleAbrirLink = (url) => {
    window.open(url, '_blank');
  };

  if (carregando) {
    return (
      <Container>
        <EstadoVazio>
          <IconeVazio>
            <FontAwesomeIcon icon={faLink} />
          </IconeVazio>
          <p>Carregando seus links...</p>
        </EstadoVazio>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Titulo>
          <FontAwesomeIcon icon={faLink} />
          Meus Links
        </Titulo>
        <BotaoPrimario onClick={onNovoItem}>
          <FontAwesomeIcon icon={faPlus} />
          Novo Link
        </BotaoPrimario>
      </Header>

      <ContainerBusca>
        <InputBusca
          type="text"
          placeholder="Buscar por nome, descrição ou URL..."
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
        />
        <SelectFiltro
          value={filtroCategoria}
          onChange={(e) => setFiltroCategoria(e.target.value)}
        >
          <option value="todos">Todas as categorias</option>
          {categorias.map(categoria => (
            <option key={categoria} value={categoria}>{categoria}</option>
          ))}
        </SelectFiltro>
        <SelectFiltro
          value={ordenacao}
          onChange={(e) => setOrdenacao(e.target.value)}
        >
          <option value="dataCriacao">Data de Criação</option>
          <option value="dataModificacao">Data de Modificação</option>
          <option value="nome">Nome</option>
        </SelectFiltro>
      </ContainerBusca>

      {linksFiltrados.length === 0 ? (
        <EstadoVazio>
          <IconeVazio>
            <FontAwesomeIcon icon={faLink} />
          </IconeVazio>
          <p>{termoBusca || filtroCategoria !== 'todos' ? 'Nenhum link encontrado' : 'Você ainda não tem links'}</p>
          {!termoBusca && filtroCategoria === 'todos' && (
            <BotaoPrimario onClick={onNovoItem}>
              <FontAwesomeIcon icon={faPlus} />
              Criar Primeiro Link
            </BotaoPrimario>
          )}
        </EstadoVazio>
      ) : (
        <GridLinks>
          {linksFiltrados.map(link => (
            <CardLink key={link.id}>
              <CardHeader>
                <CardTitulo>{link.nome}</CardTitulo>
                <CardAcoes>
                  {link.favorito && (
                    <BotaoAcao onClick={() => onFavoritarItem(link.id)}>
                      <FontAwesomeIcon icon={faHeart} style={{ color: '#e74c3c' }} />
                    </BotaoAcao>
                  )}
                  <BotaoAcao onClick={() => onEditarItem(link)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </BotaoAcao>
                  <BotaoAcao onClick={() => onExcluirItem(link.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </BotaoAcao>
                </CardAcoes>
              </CardHeader>
              
              {link.imagemUrl && (
                <CardImagem>
                  <img src={link.imagemUrl} alt={link.nome} />
                </CardImagem>
              )}
              
              <CardConteudo>
                {link.descricao}
              </CardConteudo>
              
              <CardUrl>
                {link.url}
              </CardUrl>
              
              <CardFooter>
                <CardMeta>
                  {link.categoria && <Tag>{link.categoria}</Tag>}
                  <span>{formatarData(link.createdAt)}</span>
                </CardMeta>
                <BotaoAcao onClick={() => handleAbrirLink(link.url)}>
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </BotaoAcao>
              </CardFooter>
            </CardLink>
          ))}
        </GridLinks>
      )}
    </Container>
  );
};

export default TelaLinks;