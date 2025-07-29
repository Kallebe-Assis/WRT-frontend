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
  background: linear-gradient(135deg, var(--corFundoCard) 0%, var(--corFundoSecundaria) 100%);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioGrande);
  padding: var(--espacamentoMedio);
  transition: all var(--transicaoMedia);
  cursor: pointer;
  position: relative;
  box-shadow: var(--sombraLeve);
  overflow: hidden;
  
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
  background: linear-gradient(135deg, var(--corFundoTerciaria) 0%, var(--corFundoSecundaria) 100%);
  border: 1px solid var(--corBordaPrimaria);
  color: var(--corTextoSecundaria);
  cursor: pointer;
  padding: 6px;
  border-radius: var(--bordaRaioMedia);
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  
  &:hover {
    background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
    color: var(--corTextoClara);
    border-color: var(--corPrimaria);
    transform: scale(1.1);
    box-shadow: var(--sombraLeve);
  }
`;

const CardContent = styled.div`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFonteMedia);
  line-height: 1.6;
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
  padding-top: var(--espacamentoMedio);
  border-top: 1px solid var(--corBordaPrimaria);
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
`;

const CardDate = styled.span`
  background: var(--corFundoTerciaria);
  padding: 4px 8px;
  border-radius: var(--bordaRaioPequena);
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoSecundaria);
`;

const FavoriteButton = styled.button`
  background: ${props => props.favorito ? 
    'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)' : 
    'linear-gradient(135deg, var(--corFundoTerciaria) 0%, var(--corFundoSecundaria) 100%)'};
  color: ${props => props.favorito ? 'white' : 'var(--corTextoSecundaria)'};
  border: 1px solid ${props => props.favorito ? '#ff6b6b' : 'var(--corBordaPrimaria)'};
  border-radius: var(--bordaRaioMedia);
  padding: 6px;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  
  &:hover {
    background: ${props => props.favorito ? 
      'linear-gradient(135deg, #ee5a52 0%, #ff6b6b 100%)' : 
      'linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%)'};
    color: white;
    border-color: ${props => props.favorito ? '#ee5a52' : 'var(--corPrimaria)'};
    transform: scale(1.1);
    box-shadow: var(--sombraLeve);
  }
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
            <FavoriteButton
              onClick={handleFavoritar}
              favorito={item.favorito}
            >
              <FontAwesomeIcon 
                icon={faStar} 
              />
            </FavoriteButton>
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
          <CardDate>{formatarData(getDate())}</CardDate>
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