import React from 'react';
import styled from 'styled-components';

const FullContentContainer = styled.div`
  color: var(--corTextoPrimaria);
  font-size: 14px;
  line-height: 1.6;
  padding: 16px;
  background: var(--corFundoPrimaria);
  border-radius: var(--bordaRaioMedia);
  border: 1px solid var(--corBordaPrimaria);
  max-height: 400px;
  overflow-y: auto;

  /* Estilos para o conteúdo HTML */
  h1, h2, h3, h4, h5, h6 {
    color: var(--corTextoPrimaria);
    margin-top: 16px;
    margin-bottom: 8px;
    font-weight: 600;
  }

  h1 { font-size: 2em; }
  h2 { font-size: 1.5em; }
  h3 { font-size: 1.25em; }
  h4 { font-size: 1.1em; }
  h5 { font-size: 1em; }
  h6 { font-size: 0.9em; }

  p {
    margin: 0 0 12px 0;
  }

  ul, ol {
    margin: 0 0 12px 0;
    padding-left: 24px;
  }

  li {
    margin: 0 0 4px 0;
  }

  blockquote {
    border-left: 4px solid var(--corPrimaria);
    margin: 16px 0;
    padding-left: 16px;
    font-style: italic;
    color: var(--corTextoSecundaria);
  }

  code {
    background: var(--corFundoSecundaria);
    padding: 2px 4px;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
  }

  pre {
    background: var(--corFundoSecundaria);
    padding: 12px;
    border-radius: 4px;
    overflow-x: auto;
    margin: 16px 0;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin: 16px 0;
  }

  table th, table td {
    border: 1px solid var(--corBordaPrimaria);
    padding: 8px 12px;
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

  a:hover {
    color: var(--corSecundaria);
  }

  strong, b {
    font-weight: 600;
  }

  em, i {
    font-style: italic;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: var(--bordaRaioPequena);
  }

  /* Scrollbar personalizada */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--corFundoSecundaria);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--corBordaPrimaria);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--corPrimaria);
  }
`;

const FullFormattedContent = ({ content }) => {
  // Se não há conteúdo, retorna mensagem
  if (!content) {
    return (
      <FullContentContainer>
        <em>Nenhum conteúdo disponível</em>
      </FullContentContainer>
    );
  }

  return (
    <FullContentContainer 
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default FullFormattedContent;