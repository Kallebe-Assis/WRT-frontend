import React, { useState, useEffect } from 'react';
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
  faStar,
  faFilePdf,
  faFileWord
} from '@fortawesome/free-solid-svg-icons';
import { formatarData } from '../utils/formatacao';
import { exportarParaPDF, exportarParaDOCX } from '../utils/exportacao';
import FullscreenButton from './FullscreenButton';

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
  transition: all var(--transicaoRapida);
  max-width: 100%;
  line-height: 1.2;
  max-height: 2.4em;
  
  ${Card}:hover & {
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
    word-wrap: break-word;
    max-height: none;
  }
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
  gap: var(--espacamentoMedio);
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  flex: 1;
  min-width: 0;
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
  padding: 4px 12px;
  border-radius: var(--bordaRaioPequena);
  font-size: var(--tamanhoFontePequena);
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
  display: inline-block;
`;

const ExportDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const ExportButton = styled(CardActionButton)`
  position: relative;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: var(--corFundoPrimaria);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  box-shadow: var(--sombraForte);
  z-index: 1000;
  min-width: 150px;
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all var(--transicaoRapida);
`;

const DropdownItem = styled.button`
  width: 100%;
  padding: 10px 15px;
  background: none;
  border: none;
  color: var(--corTextoSecundaria);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  transition: all var(--transicaoRapida);
  
  &:hover {
    background: var(--corFundoSecundaria);
    color: var(--corTextoPrimaria);
  }
  
  &:first-child {
    border-radius: var(--bordaRaioMedia) var(--bordaRaioMedia) 0 0;
  }
  
  &:last-child {
    border-radius: 0 0 var(--bordaRaioMedia) var(--bordaRaioMedia);
  }
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

  // Fechar menu quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showMenu && !event.target.closest('.export-dropdown')) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  const handleClick = (e) => {
    e.stopPropagation();
    if (tipo === 'link') {
      window.open(item.url, '_blank');
    } else {
      onEditar(item);
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

  const handleImprimir = (e) => {
    e.stopPropagation();
    onImprimir(item);
  };

  const getContent = () => {
    if (tipo === 'nota') {
      // Função para limpar HTML e extrair texto puro
      const limparHTML = (html) => {
        if (!html) return '';
        
        // Criar elemento temporário para extrair texto
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        
        // Extrair texto puro
        let texto = tempDiv.textContent || tempDiv.innerText || '';
        
        // Limpar espaços extras e quebras de linha
        texto = texto.replace(/\s+/g, ' ').trim();
        
        return texto;
      };

      const conteudoLimpo = limparHTML(item.conteudo);
      return conteudoLimpo.length > 150 
        ? `${conteudoLimpo.substring(0, 150)}...`
        : conteudoLimpo;
    } else if (tipo === 'link') {
      return item.url;
    }
    return '';
  };

  const getTitulo = () => {
    if (tipo === 'nota') {
      // Função para limpar HTML e extrair texto puro
      const limparHTML = (html) => {
        if (!html) return '';
        
        // Criar elemento temporário para extrair texto
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        
        // Extrair texto puro
        let texto = tempDiv.textContent || tempDiv.innerText || '';
        
        // Limpar espaços extras e quebras de linha
        texto = texto.replace(/\s+/g, ' ').trim();
        
        return texto;
      };

      return limparHTML(item.titulo);
    } else {
      return item.nome;
    }
  };

  const getDate = () => {
    return item.dataCriacao || item.dataModificacao;
  };

  return (
    <Card onClick={handleClick}>
      <CardHeader>
        <CardTitle>
          {getTitulo()}
        </CardTitle>
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
            <CardTag>
              {typeof item.categoria === 'object' ? item.categoria.nome || 'Categoria' : item.categoria}
            </CardTag>
          )}
        </CardMeta>
        
        <div style={{ display: 'flex', gap: 'var(--espacamentoPequeno)', flexShrink: 0 }}>
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
              
              {tipo === 'nota' && typeof onTelaCheia === 'function' && (
                <FullscreenButton
                  onClick={handleTelaCheia}
                  isFullscreen={false}
                />
              )}
              
              {onExportar && (
                <ExportDropdown className="export-dropdown">
                  <ExportButton onClick={(e) => {
                    e.stopPropagation();
                    setShowMenu(!showMenu);
                  }} title="Exportar">
                    <FontAwesomeIcon icon={faFileExport} />
                  </ExportButton>
                  <DropdownMenu isOpen={showMenu}>
                    <DropdownItem onClick={() => {
                      setShowMenu(false);
                      exportarParaPDF(item);
                    }}>
                      <FontAwesomeIcon icon={faFilePdf} /> PDF
                    </DropdownItem>
                    <DropdownItem onClick={() => {
                      setShowMenu(false);
                      exportarParaDOCX(item);
                    }}>
                      <FontAwesomeIcon icon={faFileWord} /> DOCX
                    </DropdownItem>
                  </DropdownMenu>
                </ExportDropdown>
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
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardItem; 