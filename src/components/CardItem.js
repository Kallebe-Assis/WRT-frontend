import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
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
  faFileWord,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { formatarData } from '../utils/formatacao';
import { exportarParaPDF, exportarParaDOCX } from '../utils/exportacao';
import FullscreenButton from './FullscreenButton';
import { useNotasAPIContext } from '../context/NotasAPIContext';

// Animações
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Card = styled.div`
  background: linear-gradient(135deg, var(--corFundoCard) 0%, var(--corFundoSecundaria) 100%);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioGrande);
  padding: ${props => props.tipo === 'link' ? '8px' : 'var(--espacamentoMedio)'};
  transition: all var(--transicaoMedia);
  cursor: pointer;
  position: relative;
  box-shadow: var(--sombraLeve);
  overflow: hidden;
  min-height: ${props => props.tipo === 'link' ? '120px' : 'auto'};
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.6s ease-out;
  
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
    transform: translateY(-8px);
    box-shadow: var(--sombraForte);
    
    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: ${props => props.tipo === 'link' ? '6px' : 'var(--espacamentoPequeno)'};
    margin-bottom: var(--espacamentoPequeno);
    min-height: ${props => props.tipo === 'link' ? '100px' : 'auto'};
  }

  @media (max-width: 480px) {
    padding: ${props => props.tipo === 'link' ? '5px' : 'var(--espacamentoPequeno)'};
    border-radius: var(--bordaRaioMedia);
    min-height: ${props => props.tipo === 'link' ? '90px' : 'auto'};
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.tipo === 'link' ? '4px' : 'var(--espacamentoMedio)'};
  flex-shrink: 0;
  animation: ${slideIn} 0.8s ease-out;
`;

const CardTitle = styled.h3`
  font-size: ${props => props.tipo === 'link' ? '12px' : 'var(--tamanhoFonteGrande)'};
  font-weight: 600;
  color: var(--corTextoPrimaria);
  margin: 0;
  flex: 1;
  overflow: ${props => props.tipo === 'link' ? 'visible' : 'hidden'};
  text-overflow: ${props => props.tipo === 'link' ? 'clip' : 'ellipsis'};
  white-space: ${props => props.tipo === 'link' ? 'normal' : 'nowrap'};
  transition: all var(--transicaoRapida);
  max-width: 100%;
  line-height: 1.2;
  max-height: ${props => props.tipo === 'link' ? 'none' : '2.4em'};
  word-wrap: ${props => props.tipo === 'link' ? 'break-word' : 'normal'};
  text-align: ${props => props.tipo === 'link' ? 'center' : 'left'};
  
  ${Card}:hover & {
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
    word-wrap: break-word;
    max-height: none;
  }

  @media (max-width: 768px) {
    font-size: ${props => props.tipo === 'link' ? '11px' : 'var(--tamanhoFonteMedia)'};
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: ${props => props.tipo === 'link' ? '10px' : 'var(--tamanhoFontePequena)'};
    line-height: 1.4;
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

  @media (max-width: 768px) {
    opacity: 1;
    gap: var(--espacamentoPequeno);
  }

  @media (max-width: 480px) {
    gap: var(--espacamentoPequeno);
    flex-wrap: wrap;
  }
`;

const CardActionButton = styled.button`
  background: linear-gradient(135deg, var(--corFundoTerciaria) 0%, var(--corFundoSecundaria) 100%);
  border: 1px solid var(--corBordaPrimaria);
  color: var(--corTextoSecundaria);
  cursor: pointer;
  padding: ${props => props.tipo === 'link' ? '2px' : '6px'};
  border-radius: var(--bordaRaioMedia);
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.tipo === 'link' ? '20px' : '32px'};
  height: ${props => props.tipo === 'link' ? '20px' : '32px'};
  font-size: ${props => props.tipo === 'link' ? '10px' : 'var(--tamanhoFonteMedia)'};
  position: relative;
  
  &:hover {
    background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
    color: var(--corTextoClara);
    border-color: var(--corPrimaria);
    transform: scale(1.1);
    box-shadow: var(--sombraLeve);
  }

  &:active {
    transform: scale(0.95);
  }

  ${props => props.loading && `
    pointer-events: none;
    opacity: 0.7;
  `}

  @media (max-width: 768px) {
    width: ${props => props.tipo === 'link' ? '20px' : '36px'};
    height: ${props => props.tipo === 'link' ? '20px' : '36px'};
    padding: ${props => props.tipo === 'link' ? '2px' : '8px'};
    min-height: ${props => props.tipo === 'link' ? '20px' : '44px'};
    min-width: ${props => props.tipo === 'link' ? '20px' : '44px'};
    font-size: ${props => props.tipo === 'link' ? '8px' : 'var(--tamanhoFontePequena)'};
  }

  @media (max-width: 480px) {
    width: ${props => props.tipo === 'link' ? '18px' : '32px'};
    height: ${props => props.tipo === 'link' ? '18px' : '32px'};
    padding: ${props => props.tipo === 'link' ? '1px' : '6px'};
    min-height: ${props => props.tipo === 'link' ? '18px' : '32px'};
    min-width: ${props => props.tipo === 'link' ? '18px' : '32px'};
    font-size: ${props => props.tipo === 'link' ? '7px' : 'var(--tamanhoFontePequena)'};
  }
`;

const LoadingSpinner = styled.div`
  animation: ${spin} 1s linear infinite;
  color: var(--corPrimaria);
`;

// Botão de favoritar com estado visual
const FavoriteButton = styled(CardActionButton)`
  color: ${props => props.favorita ? '#FFD700' : 'var(--corTextoSecundaria)'};
  background: ${props => props.favorita 
    ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 215, 0, 0.2) 100%)' 
    : 'linear-gradient(135deg, var(--corFundoTerciaria) 0%, var(--corFundoSecundaria) 100%)'};
  border-color: ${props => props.favorita ? '#FFD700' : 'var(--corBordaPrimaria)'};
  
  &:hover {
    background: ${props => props.favorita 
      ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 215, 0, 0.3) 100%)' 
      : 'linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%)'};
    color: ${props => props.favorita ? '#FFD700' : 'var(--corTextoClara)'};
    border-color: ${props => props.favorita ? '#FFD700' : 'var(--corPrimaria)'};
    transform: scale(1.1);
    box-shadow: var(--sombraLeve);
  }
`;

const CardContent = styled.div`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFonteMedia);
  line-height: 1.6;
  margin-bottom: ${props => props.tipo === 'link' ? '4px' : 'var(--espacamentoMedio)'};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${props => props.tipo === 'link' ? '1' : '3'};
  -webkit-box-orient: vertical;
  flex: 1;
  animation: ${fadeIn} 1s ease-out 0.2s both;

  @media (max-width: 768px) {
    font-size: var(--tamanhoFontePequena);
    line-height: 1.5;
    margin-bottom: ${props => props.tipo === 'link' ? '4px' : 'var(--espacamentoPequeno)'};
    -webkit-line-clamp: ${props => props.tipo === 'link' ? '1' : '2'};
  }

  @media (max-width: 480px) {
    font-size: var(--tamanhoFontePequena);
    line-height: 1.4;
    -webkit-line-clamp: ${props => props.tipo === 'link' ? '1' : '2'};
  }
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--espacamentoPequeno);
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: var(--espacamentoPequeno);
  animation: ${fadeIn} 1s ease-out 0.4s both;

  @media (max-width: 768px) {
    gap: var(--espacamentoPequeno);
  }

  @media (max-width: 480px) {
    gap: var(--espacamentoPequeno);
    flex-direction: column;
    align-items: stretch;
  }
`;

const CardMeta = styled.div`
  display: flex;
  gap: var(--espacamentoPequeno);
  flex-wrap: wrap;
  flex: 1;

  @media (max-width: 768px) {
    gap: var(--espacamentoPequeno);
  }

  @media (max-width: 480px) {
    gap: var(--espacamentoPequeno);
    justify-content: center;
  }
`;

const CardTag = styled.span`
  background: ${props => props.cor || 'var(--corPrimaria)'};
  color: var(--corTextoClara);
  padding: ${props => props.tipo === 'link' ? '2px 6px' : '4px 8px'};
  border-radius: var(--bordaRaioPequena);
  font-size: ${props => props.tipo === 'link' ? '8px' : 'var(--tamanhoFontePequena)'};
  font-weight: 500;
  white-space: nowrap;
  transition: all var(--transicaoRapida);
  animation: ${pulse} 2s ease-in-out infinite;

  &:hover {
    transform: scale(1.05);
    box-shadow: var(--sombraLeve);
  }

  @media (max-width: 768px) {
    font-size: ${props => props.tipo === 'link' ? '7px' : 'var(--tamanhoFontePequena)'};
    padding: ${props => props.tipo === 'link' ? '2px 5px' : '3px 7px'};
  }

  @media (max-width: 480px) {
    font-size: ${props => props.tipo === 'link' ? '6px' : 'var(--tamanhoFontePequena)'};
    padding: ${props => props.tipo === 'link' ? '1px 4px' : '2px 6px'};
  }
`;

const CardDate = styled.span`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  font-style: italic;

  @media (max-width: 768px) {
    font-size: var(--tamanhoFontePequena);
  }

  @media (max-width: 480px) {
    font-size: var(--tamanhoFontePequena);
  }
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
  background: var(--corFundoSecundaria);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  box-shadow: var(--sombraForte);
  z-index: 1000;
  min-width: 120px;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all var(--transicaoRapida);
  animation: ${props => props.isOpen ? fadeIn : 'none'} 0.3s ease-out;
`;

const DropdownItem = styled.button`
  width: 100%;
  padding: 8px 12px;
  background: none;
  border: none;
  color: var(--corTextoPrimaria);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--tamanhoFontePequena);
  transition: background var(--transicaoRapida);

  &:hover {
    background: var(--corFundoTerciaria);
  }

  &:first-child {
    border-radius: var(--bordaRaioMedia) var(--bordaRaioMedia) 0 0;
  }

  &:last-child {
    border-radius: 0 0 var(--bordaRaioMedia) var(--bordaRaioMedia);
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: ${props => props.tipo === 'link' ? '60px' : '120px'};
  background: ${props => props.imagemUrl ? `url(${props.imagemUrl})` : 'linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%)'};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: var(--bordaRaioMedia);
  margin-bottom: var(--espacamentoPequeno);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  animation: ${fadeIn} 0.8s ease-out 0.1s both;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    opacity: 0;
    transition: opacity var(--transicaoRapida);
  }
  
  ${Card}:hover &::before {
    opacity: 1;
  }
`;

const CardImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  color: white;
  font-size: ${props => props.tipo === 'link' ? '24px' : '32px'};
  font-weight: 600;
`;

const CardUrl = styled.div`
  font-size: ${props => props.tipo === 'link' ? '10px' : 'var(--tamanhoFontePequena)'};
  color: var(--corTextoSecundaria);
  margin-bottom: var(--espacamentoPequeno);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  max-width: 100%;
`;

const CardItem = ({ 
  item, 
  tipo, 
  onEditar, 
  onExcluir, 
  onTelaCheia, 
  onExportar, 
  onImprimir,
  onFavoritar 
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isFavorita, setIsFavorita] = useState(item?.favorita || false);
  const [loadingStates, setLoadingStates] = useState({
    favoritar: false,
    exportar: false,
    copiar: false,
    excluir: false
  });
  const { favoritarNota } = useNotasAPIContext();

  // Atualizar estado local quando o item mudar
  useEffect(() => {
    if (item && typeof item === 'object') {
      setIsFavorita(item.favorita || false);
    }
  }, [item?.favorita]);

  // Verificação de segurança para item null/undefined
  if (!item || typeof item !== 'object') {
    console.warn('CardItem recebeu item inválido:', item);
    return null;
  }

  const setLoading = (action, loading) => {
    setLoadingStates(prev => ({
      ...prev,
      [action]: loading
    }));
  };

  const handleToggleFavorite = async (e) => {
    e.stopPropagation();
    
    if (tipo !== 'nota') return;
    
    const novaFavorita = !isFavorita;
    
    try {
      setLoading('favoritar', true);
      setIsFavorita(novaFavorita); // Atualização otimista
      
      // Chamar API para favoritar/desfavoritar
      await favoritarNota(item.id, novaFavorita);
      
      // Se houver callback personalizado, chamar
      if (onFavoritar) {
        onFavoritar(item.id, novaFavorita);
      }
      
      console.log(`✅ Nota ${novaFavorita ? 'favoritada' : 'desfavoritada'}:`, item.id);
    } catch (error) {
      // Reverter estado em caso de erro
      setIsFavorita(!novaFavorita);
      console.error('❌ Erro ao favoritar nota:', error);
      alert('Erro ao favoritar nota. Tente novamente.');
    } finally {
      setLoading('favoritar', false);
    }
  };

  const handleEditar = (e) => {
    e.stopPropagation();
    if (onEditar) onEditar(item);
  };

  const handleExcluir = async (e) => {
    e.stopPropagation();
    if (onExcluir) {
      setLoading('excluir', true);
      try {
        await onExcluir(item);
      } finally {
        setLoading('excluir', false);
      }
    }
  };

  const handleTelaCheia = (e) => {
    e.stopPropagation();
    if (onTelaCheia) onTelaCheia(item);
  };

  const handleCopiar = async (e) => {
    e.stopPropagation();
    try {
      setLoading('copiar', true);
      const textoParaCopiar = tipo === 'nota' 
        ? `${item.titulo || 'Sem título'}\n\n${item.conteudo || ''}`
        : `${item.nome || item.titulo || 'Sem título'}\n${item.url || ''}`;
      
      await navigator.clipboard.writeText(textoParaCopiar);
      alert('Conteúdo copiado para a área de transferência!');
    } catch (error) {
      console.error('Erro ao copiar:', error);
      alert('Erro ao copiar conteúdo.');
    } finally {
      setLoading('copiar', false);
    }
  };

  const handleExportarPDF = async (e) => {
    e.stopPropagation();
    if (tipo === 'nota' && onExportar) {
      try {
        setLoading('exportar', true);
        await exportarParaPDF(item.titulo || 'Sem título', item.conteudo || '');
        alert('PDF exportado com sucesso!');
      } catch (error) {
        console.error('Erro ao exportar PDF:', error);
        alert('Erro ao exportar PDF.');
      } finally {
        setLoading('exportar', false);
      }
    }
  };

  const handleExportarDOCX = async (e) => {
    e.stopPropagation();
    if (tipo === 'nota' && onExportar) {
      try {
        setLoading('exportar', true);
        await exportarParaDOCX(item.titulo || 'Sem título', item.conteudo || '');
        alert('DOCX exportado com sucesso!');
      } catch (error) {
        console.error('Erro ao exportar DOCX:', error);
        alert('Erro ao exportar DOCX.');
      } finally {
        setLoading('exportar', false);
      }
    }
  };

  const handleImprimir = (e) => {
    e.stopPropagation();
    if (onImprimir) onImprimir(item);
  };

  const getCategoriaCor = (categoria) => {
    if (!categoria) return 'var(--corPrimaria)';
    
    const cores = {
      'Trabalho': '#FF6B6B',
      'Pessoal': '#4ECDC4',
      'Estudo': '#45B7D1',
      'Saúde': '#96CEB4',
      'Finanças': '#FFEAA7',
      'default': 'var(--corPrimaria)'
    };
    
    const nomeCategoria = typeof categoria === 'object' ? categoria.nome : categoria;
    return cores[nomeCategoria] || cores.default;
  };

  const getContent = () => {
    if (tipo === 'nota') {
      // Usar o ContentRenderer para extrair texto puro de forma segura
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = item.conteudo || '';
      const texto = tempDiv.textContent || tempDiv.innerText || '';
      const conteudoLimpo = texto.replace(/\s+/g, ' ').trim();
      
      return conteudoLimpo.length > 150 
        ? `${conteudoLimpo.substring(0, 150)}...`
        : conteudoLimpo;
    } else if (tipo === 'link') {
      // Para links, não mostrar a URL no conteúdo
      return '';
    }
    return '';
  };

  return (
    <Card tipo={tipo} onClick={() => {
      if (tipo === 'link') {
        // Para links, abrir a URL diretamente
        if (item.url) {
          window.open(item.url, '_blank');
        }
      } else {
        // Para notas, abrir modal de edição
        if (onEditar) onEditar(item);
      }
    }}>
      {/* Imagem do link */}
      {tipo === 'link' && (
        <CardImage 
          tipo={tipo} 
          imagemUrl={item.imagemUrl}
        >
          {!item.imagemUrl && (
            <CardImagePlaceholder tipo={tipo}>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </CardImagePlaceholder>
          )}
        </CardImage>
      )}

      <CardHeader tipo={tipo}>
        <CardTitle tipo={tipo}>
          {tipo === 'nota' ? (item.titulo || 'Sem título') : (item.nome || item.titulo || 'Sem título')}
        </CardTitle>
      </CardHeader>

      {/* URL do link - removida para melhor visualização */}

      {tipo === 'nota' && item.conteudo && (
        <CardContent tipo={tipo}>
          {getContent()}
        </CardContent>
      )}

      <CardFooter tipo={tipo}>
        <CardMeta tipo={tipo}>
          {tipo === 'nota' && item.topico && (
            <CardTag tipo={tipo} cor={item.cor}>{item.topico}</CardTag>
          )}
          {tipo === 'nota' && item.categoria && (
            <CardTag tipo={tipo} cor={getCategoriaCor(item.categoria)}>
              {typeof item.categoria === 'object' ? item.categoria.nome || 'Categoria' : item.categoria}
            </CardTag>
          )}
          {tipo === 'link' && item.categoria && (
            <CardTag tipo={tipo} cor={getCategoriaCor(item.categoria)}>
              {typeof item.categoria === 'object' ? item.categoria.nome || 'Categoria' : item.categoria}
            </CardTag>
          )}
        </CardMeta>
        
        <div style={{ 
          display: 'flex', 
          gap: tipo === 'link' ? '4px' : 'var(--espacamentoPequeno)', 
          flexShrink: 0,
          justifyContent: tipo === 'link' ? 'center' : 'flex-end',
          flexWrap: 'wrap'
        }}>
          <CardActionButton
            onClick={handleEditar}
            title="Editar"
            tipo={tipo}
          >
            <FontAwesomeIcon icon={faEdit} />
          </CardActionButton>
          
          <CardActionButton
            onClick={handleExcluir}
            title="Excluir"
            tipo={tipo}
            loading={loadingStates.excluir}
          >
            {loadingStates.excluir ? (
              <LoadingSpinner>
                <FontAwesomeIcon icon={faSpinner} />
              </LoadingSpinner>
            ) : (
              <FontAwesomeIcon icon={faTrash} />
            )}
          </CardActionButton>
          
          {tipo === 'link' && (
            <CardActionButton
              onClick={(e) => {
                e.stopPropagation();
                window.open(item.url, '_blank');
              }}
              title="Abrir link"
              tipo={tipo}
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </CardActionButton>
          )}
          
          {tipo === 'nota' && (
            <>
              <CardActionButton
                onClick={handleToggleFavorite}
                title={isFavorita ? "Desfavoritar" : "Favoritar"}
                tipo={tipo}
                loading={loadingStates.favoritar}
                style={{ 
                  color: isFavorita ? '#FFD700' : 'var(--corTextoSecundaria)',
                  backgroundColor: isFavorita ? 'rgba(255, 215, 0, 0.1)' : 'transparent'
                }}
              >
                {loadingStates.favoritar ? (
                  <LoadingSpinner>
                    <FontAwesomeIcon icon={faSpinner} />
                  </LoadingSpinner>
                ) : (
                  <FontAwesomeIcon icon={faStar} />
                )}
              </CardActionButton>
              
              <CardActionButton
                onClick={handleCopiar}
                title="Copiar"
                tipo={tipo}
                loading={loadingStates.copiar}
              >
                {loadingStates.copiar ? (
                  <LoadingSpinner>
                    <FontAwesomeIcon icon={faSpinner} />
                  </LoadingSpinner>
                ) : (
                  <FontAwesomeIcon icon={faCopy} />
                )}
              </CardActionButton>
              
              {tipo === 'nota' && typeof onTelaCheia === 'function' && (
                <FullscreenButton
                  onClick={handleTelaCheia}
                  isFullscreen={false}
                />
              )}
              
              {onExportar && (
                <ExportDropdown className="export-dropdown">
                  <ExportButton 
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowMenu(!showMenu);
                    }} 
                    title="Exportar"
                    loading={loadingStates.exportar}
                  >
                    {loadingStates.exportar ? (
                      <LoadingSpinner>
                        <FontAwesomeIcon icon={faSpinner} />
                      </LoadingSpinner>
                    ) : (
                      <FontAwesomeIcon icon={faFileExport} />
                    )}
                  </ExportButton>
                  <DropdownMenu isOpen={showMenu}>
                    <DropdownItem onClick={(e) => {
                      setShowMenu(false);
                      handleExportarPDF(e);
                    }}>
                      <FontAwesomeIcon icon={faFilePdf} /> PDF
                    </DropdownItem>
                    <DropdownItem onClick={(e) => {
                      setShowMenu(false);
                      handleExportarDOCX(e);
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
                  tipo={tipo}
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