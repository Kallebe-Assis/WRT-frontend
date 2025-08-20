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

  /* Lista não ordenada (com bolinhas) */
  ul {
    list-style-type: disc;
    margin: 0 0 12px 0;
    padding-left: 24px;
  }

  /* Lista ordenada (com números) */
  ol {
    list-style-type: decimal;
    margin: 0 0 12px 0;
    padding-left: 24px;
  }

  li {
    margin: 0 0 4px 0;
  }

  /* Lista de tarefas (checkboxes) */
  ul[data-type="taskList"] {
    list-style: none;
    padding: 0;
  }

  ul[data-type="taskList"] li {
    display: flex;
    align-items: flex-start;
    margin: 0.2em 0;
    padding: 0.2em 0;
  }

  ul[data-type="taskList"] li > label {
    flex: 0 0 auto;
    margin-right: 0.5em;
    user-select: none;
    display: flex;
    align-items: center;
  }

  ul[data-type="taskList"] li > div {
    flex: 1 1 auto;
  }

  ul[data-type="taskList"] li input[type="checkbox"] {
    margin: 0.25em 0.5em 0.25em 0;
    cursor: pointer;
    width: 16px;
    height: 16px;
  }

  /* Classes específicas do Tiptap */
  .task-list {
    list-style: none;
    padding: 0;
  }

  .task-list li,
  .task-item {
    display: flex;
    align-items: flex-start;
    margin: 0.2em 0;
    padding: 0.2em 0;
  }

  .task-list li > label,
  .task-item > label {
    flex: 0 0 auto;
    margin-right: 0.5em;
    user-select: none;
    display: flex;
    align-items: center;
  }

  .task-list li > div,
  .task-item > div {
    flex: 1 1 auto;
  }

  .task-list li input[type="checkbox"],
  .task-item input[type="checkbox"] {
    margin: 0.25em 0.5em 0.25em 0;
    cursor: pointer;
    width: 16px;
    height: 16px;
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