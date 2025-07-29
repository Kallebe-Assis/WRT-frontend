import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faTrash,
  faExternalLinkAlt,
  faCopy,
  faExpand,
  faFileExport,
  faPrint,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { formatarData } from '../utils/formatacao';

const Card = styled.div`
  background: var(--corFundoCard);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio);
  transition: all var(--transicaoMedia);
  cursor: pointer;
  position: relative;
  
  &:hover {
    border-color: var(--corPrimaria);
    transform: translateY(-2px);
    box-shadow: var(--sombraMedia);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--espacamentoMedio);
`;

const CardTitle = styled.h3`
  font-size: var(--tamanhoFonteGrande);
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
  gap: var(--espacamentoPequeno);
  opacity: 0;
  transition: opacity var(--transicaoRapida);
  
  ${Card}:hover & {
    opacity: 1;
  }
`;

const CardActionButton = styled.button`
  background: none;
  border: none;
  color: var(--corTextoSecundaria);
  cursor: pointer;
  padding: 4px;
  border-radius: var(--bordaRaioPequena);
  transition: all var(--transicaoRapida);
  
  &:hover {
    background: var(--corFundoTerciaria);
    color: var(--corTextoPrimaria);
  }
`;

const CardContent = styled.div`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  line-height: 1.5;
  margin-bottom: var(--espacamentoMedio);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoTerciaria);
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`;

const CardTag = styled.span`
  background: var(--corPrimaria);
  color: white;
  padding: 2px 8px;
  border-radius: var(--bordaRaioPequena);
  font-size: var(--tamanhoFontePequena);
  font-weight: 500;
`;

const CardItem = ({
  item,
  tipo,
  onEditar,
  onExcluir,
  onVisualizar,
  onCopiar,
  onExportar,
  onImprimir,
  onTelaCheia,
  onFavoritar
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    if (tipo === 'link') {
      window.open(item.url, '_blank');
    } else {
      onVisualizar(item);
    }
  };

  const handleFavoritar = (e) => {
    e.stopPropagation();
    onFavoritar(item.id);
  };

  const handleEditar = (e) => {
    e.stopPropagation();
    onEditar(item);
  };

  const handleExcluir = (e) => {
    e.stopPropagation();
    if (window.confirm('Tem certeza que deseja excluir este item?')) {
      onExcluir(item.id);
    }
  };

  const handleCopiar = (e) => {
    e.stopPropagation();
    onCopiar(item);
  };

  const handleTelaCheia = (e) => {
    e.stopPropagation();
    onTelaCheia(item);
  };

  const handleExportar = (e) => {
    e.stopPropagation();
    onExportar(item);
  };

  const handleImprimir = (e) => {
    e.stopPropagation();
    onImprimir(item);
  };

  const getContent = () => {
    if (tipo === 'nota') {
      return item.conteudo?.length > 150 
        ? `${item.conteudo.substring(0, 150)}...`
        : item.conteudo;
    } else if (tipo === 'link') {
      return item.url;
    }
    return '';
  };

  const getDate = () => {
    return item.dataCriacao || item.dataModificacao;
  };

  return (
    <Card onClick={handleClick}>
      <CardHeader>
        <CardTitle>
          {tipo === 'nota' ? item.titulo : item.nome}
        </CardTitle>
        <CardActions>
          {tipo === 'nota' && onFavoritar && (
            <CardActionButton
              onClick={handleFavoritar}
              title={item.favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            >
              <FontAwesomeIcon 
                icon={faStar} 
                style={{ color: item.favorito ? '#FF6B6B' : 'inherit' }}
              />
            </CardActionButton>
          )}
          
          <CardActionButton
            onClick={handleEditar}
            title="Editar"
          >
            <FontAwesomeIcon icon={faEdit} />
          </CardActionButton>
          
          <CardActionButton
            onClick={handleExcluir}
            title="Excluir"
          >
            <FontAwesomeIcon icon={faTrash} />
          </CardActionButton>
          
          {tipo === 'link' && (
            <CardActionButton
              onClick={(e) => {
                e.stopPropagation();
                window.open(item.url, '_blank');
              }}
              title="Abrir link"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </CardActionButton>
          )}
          
          {tipo === 'nota' && (
            <>
              <CardActionButton
                onClick={handleCopiar}
                title="Copiar"
              >
                <FontAwesomeIcon icon={faCopy} />
              </CardActionButton>
              
              <CardActionButton
                onClick={handleTelaCheia}
                title="Tela cheia"
              >
                <FontAwesomeIcon icon={faExpand} />
              </CardActionButton>
              
              {onExportar && (
                <CardActionButton
                  onClick={handleExportar}
                  title="Exportar"
                >
                  <FontAwesomeIcon icon={faFileExport} />
                </CardActionButton>
              )}
              
              {onImprimir && (
                <CardActionButton
                  onClick={handleImprimir}
                  title="Imprimir"
                >
                  <FontAwesomeIcon icon={faPrint} />
                </CardActionButton>
              )}
            </>
          )}
        </CardActions>
      </CardHeader>
      
      <CardContent>
        {getContent()}
      </CardContent>
      
      <CardFooter>
        <CardMeta>
          {tipo === 'nota' && item.topico && (
            <CardTag>{item.topico}</CardTag>
          )}
          {tipo === 'link' && item.categoria && (
            <CardTag>{item.categoria}</CardTag>
          )}
          <span>{formatarData(getDate())}</span>
        </CardMeta>
        
        <div>
          {tipo === 'nota' && item.favorito && (
            <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardItem; 