import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  color: var(--corTextoPrimaria);
  font-size: 0.9rem;
  line-height: 1.5;
  max-height: 80px;
  overflow: hidden;
  position: relative;

  /* Estilos para o conteúdo HTML */
  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 8px 0;
    font-size: 1rem;
    font-weight: 600;
  }

  p {
    margin: 0 0 8px 0;
  }

  ul, ol {
    margin: 0 0 8px 0;
    padding-left: 16px;
  }

  li {
    margin: 0 0 4px 0;
  }

  blockquote {
    margin: 8px 0;
    padding-left: 12px;
    border-left: 3px solid var(--corPrimaria);
    font-style: italic;
    color: var(--corTextoSecundaria);
  }

  code {
    background: var(--corFundoSecundaria);
    padding: 1px 3px;
    border-radius: 2px;
    font-family: 'Courier New', monospace;
    font-size: 0.8rem;
  }

  pre {
    background: var(--corFundoSecundaria);
    padding: 8px;
    border-radius: 3px;
    overflow-x: auto;
    margin: 8px 0;
    font-size: 0.8rem;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin: 8px 0;
    font-size: 0.8rem;
  }

  table th, table td {
    border: 1px solid var(--corBordaPrimaria);
    padding: 4px 6px;
    text-align: left;
  }

  table th {
    background: var(--corFundoSecundaria);
    font-weight: 600;
  }

  a {
    color: var(--corPrimaria);
    text-decoration: underline;
  }

  strong, b {
    font-weight: 600;
  }

  em, i {
    font-style: italic;
  }

  /* Gradiente para indicar que há mais conteúdo */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(transparent, var(--corFundoCard));
    pointer-events: none;
  }
`;

const FormattedContent = ({ content, maxLength = 200 }) => {
  // Função para remover tags HTML e obter texto puro
  const stripHtml = (html) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  // Função para truncar texto
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  // Se não há conteúdo, retorna texto vazio
  if (!content) return <ContentContainer>Sem conteúdo</ContentContainer>;

  // Para cards, mostra texto puro truncado
  const plainText = stripHtml(content);
  const truncatedText = truncateText(plainText, maxLength);

  return (
    <ContentContainer>
      {truncatedText}
    </ContentContainer>
  );
};

export default FormattedContent;