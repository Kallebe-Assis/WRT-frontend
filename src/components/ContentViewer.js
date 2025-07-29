import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  color: var(--corTextoSecundaria);
  line-height: 1.6;
  margin-bottom: var(--espacamentoMedio);
  max-height: 120px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50px;
    height: 20px;
    background: linear-gradient(transparent, var(--corFundoCard));
    pointer-events: none;
  }

  /* Estilos para conteúdo HTML */
  h1, h2, h3, h4, h5, h6 {
    color: var(--corTextoPrimaria);
    margin: 0.5em 0 0.25em 0;
    font-weight: 600;
  }

  h1 { font-size: 1.2em; }
  h2 { font-size: 1.1em; }
  h3 { font-size: 1em; }
  h4, h5, h6 { font-size: 0.9em; }

  p {
    margin: 0 0 0.5em 0;
  }

  ul, ol {
    margin: 0 0 0.5em 1em;
    padding-left: 1em;
  }

  li {
    margin: 0.1em 0;
  }

  blockquote {
    border-left: 3px solid var(--corPrimaria);
    margin: 0.5em 0;
    padding: 0.25em 0.5em;
    background: var(--corFundoSecundaria);
    font-style: italic;
    font-size: 0.9em;
  }

  code {
    background: var(--corFundoSecundaria);
    padding: 1px 3px;
    border-radius: 2px;
    font-family: 'Courier New', monospace;
    font-size: 0.85em;
  }

  pre {
    background: var(--corFundoSecundaria);
    padding: 0.5em;
    border-radius: 3px;
    overflow-x: auto;
    font-size: 0.85em;
    margin: 0.5em 0;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin: 0.5em 0;
    font-size: 0.85em;
  }

  th, td {
    border: 1px solid var(--corBordaPrimaria);
    padding: 4px 6px;
    text-align: left;
  }

  th {
    background: var(--corFundoSecundaria);
    font-weight: bold;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 3px;
  }

  a {
    color: var(--corPrimaria);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
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

  s, strike {
    text-decoration: line-through;
  }

  /* Remover margens do último elemento */
  *:last-child {
    margin-bottom: 0;
  }
`;

const ContentViewer = ({ content, maxHeight = '120px' }) => {
  if (!content) {
    return <em>Sem conteúdo</em>;
  }

  // Remove tags HTML para exibição no card se necessário
  const isHtmlContent = content.includes('<') && content.includes('>');
  
  if (isHtmlContent) {
    return (
      <ContentContainer 
        style={{ maxHeight }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  } else {
    // Para conteúdo de texto simples
    return (
      <ContentContainer style={{ maxHeight }}>
        {content}
      </ContentContainer>
    );
  }
};

export default ContentViewer; 