import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faLink,
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
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: var(--espacamentoMedio);
`;

const CardLink = styled.div`
  background: linear-gradient(135deg, var(--corFundoCard) 0%, var(--corFundoSecundaria) 100%);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioGrande);
  padding: var(--espacamentoPequeno);
  transition: all var(--transicaoMedia);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: var(--sombraLeve);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
    opacity: 0;
    transition: opacity var(--transicaoRapida);
  }
  
  &:hover {
    border-color: var(--corPrimaria);
    transform: translateY(-4px);
    box-shadow: var(--sombraForte);
    
    &::before {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(-2px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--espacamentoPequeno);
`;

const CardTitle = styled.h3`
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
  color: var(--corTextoPrimaria);
  margin: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CardActions = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  opacity: 0;
  transition: opacity var(--transicaoRapida);
  
  ${CardLink}:hover & {
    opacity: 1;
  }
`;

const CardActionButton = styled.button`
  background: linear-gradient(135deg, var(--corFundoTerciaria) 0%, var(--corFundoSecundaria) 100%);
  border: 1px solid var(--corBordaPrimaria);
  color: var(--corTextoSecundaria);
  cursor: pointer;
  padding: 2px;
  border-radius: var(--bordaRaioMedia);
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 0.7rem;
  
  &:hover {
    background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
    color: var(--corTextoClara);
    border-color: var(--corPrimaria);
    transform: scale(1.1);
    box-shadow: var(--sombraLeve);
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 70px;
  background: linear-gradient(135deg, var(--corFundoTerciaria) 0%, var(--corFundoSecundaria) 100%);
  border-radius: var(--bordaRaioMedia);
  margin-bottom: var(--espacamentoPequeno);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: var(--bordaRaioMedia);
    padding: 4px;
  }
  
  .placeholder {
    color: var(--corTextoTerciaria);
    font-size: 1rem;
  }
`;

const CardContent = styled.div`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  line-height: 1.3;
  margin-bottom: var(--espacamentoPequeno);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 2.6em;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoTerciaria);
  padding-top: var(--espacamentoPequeno);
  border-top: 1px solid var(--corBordaPrimaria);
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  flex: 1;
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
  forcarAtualizacao
}) => {
  const [termoBusca, setTermoBusca] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('todos');
  const [ordenacao, setOrdenacao] = useState('dataCriacao');

  // Reagir à atualização forçada
  useEffect(() => {
    if (forcarAtualizacao > 0) {
      console.log('🔄 TelaLinks: Atualização forçada detectada');
      // Limpar filtros para mostrar todos os dados atualizados
      setTermoBusca('');
      setFiltroCategoria('todos');
      setOrdenacao('dataCriacao');
    }
  }, [forcarAtualizacao]);

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
          {Array.isArray(categorias) && categorias.map((categoria) => {
            let categoriaValue = '';
            let categoriaKey = '';
            if (typeof categoria === 'object' && categoria.nome) {
              categoriaValue = categoria.nome;
              categoriaKey = categoria.id || categoria.nome;
            } else if (typeof categoria === 'string') {
              categoriaValue = categoria;
              categoriaKey = categoria;
            }
            if (!categoriaValue) return null;
            return (
              <option key={categoriaKey} value={categoriaValue}>
                {categoriaValue}
              </option>
            );
          })}
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
            <CardLink key={link.id} onClick={() => handleAbrirLink(link.url)}>
              <CardHeader>
                <CardTitle>{link.nome}</CardTitle>
                <CardActions>
                  <CardActionButton onClick={(e) => {
                    e.stopPropagation();
                    handleAbrirLink(link.url);
                  }}>
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </CardActionButton>
                  <CardActionButton onClick={(e) => {
                    e.stopPropagation();
                    onEditarItem(link);
                  }}>
                    <FontAwesomeIcon icon={faEdit} />
                  </CardActionButton>
                  <CardActionButton onClick={(e) => {
                    e.stopPropagation();
                    onExcluirItem(link.id);
                  }}>
                    <FontAwesomeIcon icon={faTrash} />
                  </CardActionButton>
                </CardActions>
              </CardHeader>
              
              {link.imagemUrl ? (
                <CardImage>
                  <img src={link.imagemUrl} alt={link.nome} />
                </CardImage>
              ) : (
                <CardImage>
                  <div className="placeholder">
                    <FontAwesomeIcon icon={faLink} />
                  </div>
                </CardImage>
              )}
              
              <CardContent>
                {link.descricao}
              </CardContent>
              
              <CardFooter>
                <CardMeta>
                  {link.categoria && (
                    <span>
                      {typeof link.categoria === 'object' ? link.categoria.nome || 'Categoria' : link.categoria}
                    </span>
                  )}
                </CardMeta>
              </CardFooter>
            </CardLink>
          ))}
        </GridLinks>
      )}
    </Container>
  );
};

export default TelaLinks;