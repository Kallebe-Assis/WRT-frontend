import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faStar } from '@fortawesome/free-solid-svg-icons';

// Animações
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const slideInFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FullscreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--corFundoPrimaria);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${fadeIn} 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

const FullscreenHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--espacamentoGrande);
  background: var(--corFundoCard);
  border-bottom: 1px solid var(--corBordaPrimaria);
  box-shadow: var(--sombraLeve);
  animation: ${slideInFromTop} 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s both;
`;

const FullscreenTitle = styled.h1`
  color: var(--corTextoPrimaria);
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`;

const CloseButton = styled.button`
  background: var(--corErro);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio);
  font-size: var(--tamanhoFonteMedia);
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;

  &:hover {
    background: #d32f2f;
    transform: scale(1.05);
  }
`;

const FullscreenContent = styled.div`
  flex: 1;
  padding: var(--espacamentoGrande);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--espacamentoGrande);
  animation: ${slideInFromBottom} 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
`;

const ContentSection = styled.div`
  background: var(--corFundoCard);
  border-radius: var(--bordaRaioGrande);
  padding: var(--espacamentoGrande);
  box-shadow: var(--sombraLeve);
  border: 1px solid var(--corBordaPrimaria);
  animation: ${fadeIn} 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both;
`;

const ContentText = styled.div`
  color: var(--corTextoSecundaria);
  line-height: 1.8;
  font-size: var(--tamanhoFonteMedia);
  white-space: pre-wrap;
  max-width: 100%;
  overflow-wrap: break-word;

  /* Estilos base para HTML renderizado */
  h1, h2, h3, h4, h5, h6 {
    color: var(--corTextoPrimaria);
    margin: 1.5rem 0 1rem 0;
    font-weight: 600;
  }

  p {
    margin: 1rem 0;
    line-height: 1.8;
  }

  ul, ol {
    margin: 1rem 0;
    padding-left: 2rem;
  }

  li {
    margin: 0.5rem 0;
  }

  strong, b {
    font-weight: 600;
    color: var(--corTextoPrimaria);
  }

  em, i {
    font-style: italic;
  }

  u {
    text-decoration: underline;
  }

  blockquote {
    border-left: 4px solid var(--corPrimaria);
    padding-left: 1rem;
    margin: 1rem 0;
    font-style: italic;
    color: var(--corTextoSecundaria);
  }

  code {
    background: var(--corFundoSecundaria);
    padding: 0.2rem 0.4rem;
    border-radius: var(--bordaRaioPequena);
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
  }

  pre {
    background: var(--corFundoSecundaria);
    padding: 1rem;
    border-radius: var(--bordaRaioMedia);
    overflow-x: auto;
    margin: 1rem 0;
  }

  a {
    color: var(--corPrimaria);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: var(--bordaRaioMedia);
    margin: 1rem 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    
    th, td {
      border: 1px solid var(--corBordaPrimaria);
      padding: 0.5rem;
      text-align: left;
    }
    
    th {
      background: var(--corFundoSecundaria);
      font-weight: 600;
    }
  }

  /* Permitir que estilos inline funcionem, mas com algumas limitações */
  span[style] {
    /* Manter estilos inline, mas garantir que não quebrem o layout */
    display: inline;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  /* Garantir que elementos com font-size específico não quebrem o layout */
  span[style*="font-size"] {
    line-height: 1.2;
    display: inline-block;
  }

  /* Garantir que elementos com font-family específica funcionem */
  span[style*="font-family"] {
    display: inline;
  }

  /* Garantir que cores específicas sejam respeitadas */
  span[style*="color"] {
    display: inline;
  }

  /* Garantir que text-align funcione */
  p[style*="text-align"] {
    text-align: inherit;
  }

  /* Garantir que listas com estilos específicos funcionem */
  ul[style], ol[style] {
    list-style: inherit;
  }
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoGrande);
  padding: var(--espacamentoMedio);
  background: var(--corFundoSecundaria);
  border-radius: var(--bordaRaioMedia);
  margin-bottom: var(--espacamentoGrande);
  flex-wrap: wrap;
  animation: ${fadeIn} 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
`;

const Tag = styled.span`
  background: var(--corPrimaria);
  color: white;
  padding: 4px 12px;
  border-radius: var(--bordaRaioPequena);
  font-size: var(--tamanhoFontePequena);
  font-weight: 500;
`;

const FullscreenViewer = ({
  item,
  isVisible,
  onClose
}) => {
  if (!isVisible || !item) return null;

  const formatarData = (dataString) => {
    return new Date(dataString).toLocaleString('pt-BR');
  };

  // Função para renderizar HTML preservando a formatação original
  const renderizarHTML = (htmlString) => {
    if (!htmlString) return '';
    
    // Criar um elemento temporário para processar o HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;
    
    // Apenas limpar estilos que podem causar problemas de layout
    const elements = tempDiv.querySelectorAll('[style]');
    elements.forEach(element => {
      const style = element.getAttribute('style');
      if (style) {
        // Remover apenas estilos que podem quebrar o layout
        const cleanStyle = style
          .replace(/position:\s*absolute;?/g, '')
          .replace(/position:\s*fixed;?/g, '')
          .replace(/z-index:\s*[^;]*;?/g, '')
          .replace(/top:\s*[^;]*;?/g, '')
          .replace(/left:\s*[^;]*;?/g, '')
          .replace(/right:\s*[^;]*;?/g, '')
          .replace(/bottom:\s*[^;]*;?/g, '')
          .replace(/width:\s*100%;?/g, 'max-width: 100%')
          .replace(/height:\s*100%;?/g, 'max-height: 100%');
        
        if (cleanStyle.trim()) {
          element.setAttribute('style', cleanStyle);
        } else {
          element.removeAttribute('style');
        }
      }
    });
    
    return tempDiv.innerHTML;
  };

  return (
    <FullscreenOverlay>
      <FullscreenHeader>
        <FullscreenTitle>
          <FontAwesomeIcon icon={faStar} />
          {item.titulo}
        </FullscreenTitle>
        
        <CloseButton onClick={onClose} title="Fechar (ESC)">
          <FontAwesomeIcon icon={faTimes} />
        </CloseButton>
      </FullscreenHeader>

      <FullscreenContent>
        <ContentSection>
          <MetaInfo>
            <MetaItem>
              <span>Criada em: {formatarData(item.dataCriacao)}</span>
            </MetaItem>
            {item.dataModificacao !== item.dataCriacao && (
              <MetaItem>
                <span>• Editada em: {formatarData(item.dataModificacao)}</span>
              </MetaItem>
            )}
            {item.topico && (
              <MetaItem>
                <span>• Tópico:</span>
                <Tag>{item.topico}</Tag>
              </MetaItem>
            )}
            {item.favorito && (
              <MetaItem>
                <FontAwesomeIcon icon={faStar} style={{ color: '#FF6B6B' }} />
                <span>Favorita</span>
              </MetaItem>
            )}
          </MetaInfo>

          <ContentText 
            dangerouslySetInnerHTML={{ 
              __html: renderizarHTML(item.conteudo) 
            }} 
          />
        </ContentSection>
      </FullscreenContent>
    </FullscreenOverlay>
  );
};

export default FullscreenViewer; 