import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const EditorContainer = styled.div`
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioGrande);
  background: var(--corFundoCard);
  overflow: hidden;
`;

const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 8px;
  background: var(--corFundoSecundaria);
  border-bottom: 1px solid var(--corBordaPrimaria);
`;

const ToolbarButton = styled.button`
  background: transparent;
  border: 1px solid var(--corBordaPrimaria);
  border-radius: 4px;
  padding: 4px 8px;
  color: var(--corTextoPrimaria);
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s ease;

  &:hover {
    background: var(--corPrimaria);
    color: var(--corTextoClara);
  }

  &.active {
    background: var(--corPrimaria);
    color: var(--corTextoClara);
  }
`;

const ToolbarSelect = styled.select`
  background: transparent;
  border: 1px solid var(--corBordaPrimaria);
  border-radius: 4px;
  padding: 4px 8px;
  color: var(--corTextoPrimaria);
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s ease;

  &:hover {
    background: var(--corPrimaria);
    color: var(--corTextoClara);
  }
`;

const EditorArea = styled.div`
  width: 100%;
  min-height: 400px;
  padding: 16px;
  border: none;
  outline: none;
  background: var(--corFundoCard);
  color: var(--corTextoPrimaria);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 14px;
  line-height: 1.6;
  overflow-y: auto;
  direction: ltr;
  text-align: left;
  word-wrap: break-word;
  white-space: pre-wrap;

  &:empty:before {
    content: attr(data-placeholder);
    color: var(--corTextoSecundaria);
    pointer-events: none;
  }

  &:focus {
    outline: none;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--corTextoPrimaria);
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    font-weight: bold;
  }

  h1 { font-size: 2em; }
  h2 { font-size: 1.5em; }
  h3 { font-size: 1.25em; }
  h4 { font-size: 1.1em; }
  h5 { font-size: 1em; }
  h6 { font-size: 0.9em; }

  p { margin: 0 0 1em 0; }

  ul, ol { 
    margin: 0 0 1em 1.5em; 
  }

  li { margin: 0.25em 0; }

  blockquote {
    border-left: 4px solid var(--corPrimaria);
    margin: 1em 0;
    padding: 0.5em 1em;
    background: var(--corFundoSecundaria);
    font-style: italic;
  }

  code {
    background: var(--corFundoSecundaria);
    padding: 2px 4px;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
  }

  pre {
    background: var(--corFundoSecundaria);
    padding: 1em;
    border-radius: 5px;
    overflow-x: auto;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  u {
    text-decoration: underline;
  }

  s {
    text-decoration: line-through;
  }
`;

const RichTextEditor = ({ value, onChange, placeholder = "Digite seu conteúdo aqui..." }) => {
  const editorRef = useRef(null);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrike, setIsStrike] = useState(false);
  const [internalValue, setInternalValue] = useState(value || '');

  // Inicializar o editor
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.focus();
      // Definir o conteúdo inicial apenas uma vez
      if (!editorRef.current.innerHTML) {
        editorRef.current.innerHTML = value || '';
      }
    }
  }, []);

  // Sincronizar com mudanças externas
  useEffect(() => {
    if (value !== internalValue) {
      setInternalValue(value || '');
      if (editorRef.current && value !== editorRef.current.innerHTML) {
        editorRef.current.innerHTML = value || '';
      }
    }
  }, [value, internalValue]);

  const execCommand = (command, value = null) => {
    if (editorRef.current) {
      editorRef.current.focus();
      const success = document.execCommand(command, false, value);
      updateToolbarState();
      return success;
    }
    return false;
  };

  const updateToolbarState = () => {
    if (editorRef.current) {
      setIsBold(document.queryCommandState('bold'));
      setIsItalic(document.queryCommandState('italic'));
      setIsUnderline(document.queryCommandState('underline'));
      setIsStrike(document.queryCommandState('strikeThrough'));
    }
  };

  const handleFormat = (format) => {
    switch (format) {
      case 'bold':
        execCommand('bold');
        break;
      case 'italic':
        execCommand('italic');
        break;
      case 'underline':
        execCommand('underline');
        break;
      case 'strike':
        execCommand('strikeThrough');
        break;
      case 'h1':
        execCommand('formatBlock', '<h1>');
        break;
      case 'h2':
        execCommand('formatBlock', '<h2>');
        break;
      case 'h3':
        execCommand('formatBlock', '<h3>');
        break;
      case 'p':
        execCommand('formatBlock', '<p>');
        break;
      case 'ul':
        execCommand('insertUnorderedList');
        break;
      case 'ol':
        execCommand('insertOrderedList');
        break;
      case 'quote':
        execCommand('formatBlock', '<blockquote>');
        break;
      case 'code':
        execCommand('formatBlock', '<pre>');
        break;
      case 'undo':
        execCommand('undo');
        break;
      case 'redo':
        execCommand('redo');
        break;
      case 'clear':
        execCommand('removeFormat');
        break;
      default:
        break;
    }
  };

  const handleColorChange = (type, color) => {
    if (type === 'text') {
      execCommand('foreColor', color);
    } else {
      execCommand('hiliteColor', color);
    }
  };

  const handleAlignment = (align) => {
    execCommand(`justify${align.charAt(0).toUpperCase() + align.slice(1)}`);
  };

  const handleEditorChange = () => {
    if (editorRef.current && onChange) {
      const content = editorRef.current.innerHTML;
      if (content !== internalValue) {
        setInternalValue(content);
        onChange(content);
      }
    }
  };

  const handleKeyDown = (e) => {
    // Atalhos de teclado
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 'b':
          e.preventDefault();
          handleFormat('bold');
          break;
        case 'i':
          e.preventDefault();
          handleFormat('italic');
          break;
        case 'u':
          e.preventDefault();
          handleFormat('underline');
          break;
        case 'z':
          e.preventDefault();
          if (e.shiftKey) {
            handleFormat('redo');
          } else {
            handleFormat('undo');
          }
          break;
        default:
          break;
      }
    }

    // Enter - permitir comportamento padrão
    if (e.key === 'Enter') {
      // Não fazer nada especial, deixar o comportamento padrão
    }
  };

  return (
    <EditorContainer>
      <Toolbar>
        {/* Formatação básica */}
        <ToolbarButton 
          onClick={() => handleFormat('bold')} 
          className={isBold ? 'active' : ''}
          title="Negrito (Ctrl+B)"
        >
          <strong>B</strong>
        </ToolbarButton>
        <ToolbarButton 
          onClick={() => handleFormat('italic')} 
          className={isItalic ? 'active' : ''}
          title="Itálico (Ctrl+I)"
        >
          <em>I</em>
        </ToolbarButton>
        <ToolbarButton 
          onClick={() => handleFormat('underline')} 
          className={isUnderline ? 'active' : ''}
          title="Sublinhado (Ctrl+U)"
        >
          <u>U</u>
        </ToolbarButton>
        <ToolbarButton 
          onClick={() => handleFormat('strike')} 
          className={isStrike ? 'active' : ''}
          title="Tachado"
        >
          <s>S</s>
        </ToolbarButton>

        <div style={{ width: '1px', background: 'var(--corBordaPrimaria)', margin: '0 8px' }} />

        {/* Títulos */}
        <ToolbarSelect onChange={(e) => handleFormat(e.target.value)} title="Títulos">
          <option value="p">Parágrafo</option>
          <option value="h1">Título 1</option>
          <option value="h2">Título 2</option>
          <option value="h3">Título 3</option>
        </ToolbarSelect>

        <div style={{ width: '1px', background: 'var(--corBordaPrimaria)', margin: '0 8px' }} />

        {/* Listas */}
        <ToolbarButton onClick={() => handleFormat('ul')} title="Lista não ordenada">
          •
        </ToolbarButton>
        <ToolbarButton onClick={() => handleFormat('ol')} title="Lista ordenada">
          1.
        </ToolbarButton>

        <div style={{ width: '1px', background: 'var(--corBordaPrimaria)', margin: '0 8px' }} />

        {/* Citações e código */}
        <ToolbarButton onClick={() => handleFormat('quote')} title="Citação">
          "
        </ToolbarButton>
        <ToolbarButton onClick={() => handleFormat('code')} title="Código">
          &lt;/&gt;
        </ToolbarButton>

        <div style={{ width: '1px', background: 'var(--corBordaPrimaria)', margin: '0 8px' }} />

        {/* Cores */}
        <ToolbarSelect onChange={(e) => handleColorChange('text', e.target.value)} title="Cor do texto">
          <option value="">Cor</option>
          <option value="#000000">Preto</option>
          <option value="#FF0000">Vermelho</option>
          <option value="#00FF00">Verde</option>
          <option value="#0000FF">Azul</option>
          <option value="#FFFF00">Amarelo</option>
          <option value="#FF00FF">Magenta</option>
          <option value="#00FFFF">Ciano</option>
        </ToolbarSelect>

        <ToolbarSelect onChange={(e) => handleColorChange('background', e.target.value)} title="Cor de fundo">
          <option value="">Fundo</option>
          <option value="#FFFF00">Amarelo</option>
          <option value="#00FFFF">Ciano</option>
          <option value="#FF00FF">Magenta</option>
          <option value="#00FF00">Verde</option>
          <option value="#FF0000">Vermelho</option>
          <option value="#0000FF">Azul</option>
        </ToolbarSelect>

        <div style={{ width: '1px', background: 'var(--corBordaPrimaria)', margin: '0 8px' }} />

        {/* Alinhamento */}
        <ToolbarButton onClick={() => handleAlignment('left')} title="Alinhar à esquerda">
          ⬅
        </ToolbarButton>
        <ToolbarButton onClick={() => handleAlignment('center')} title="Centralizar">
          ↔
        </ToolbarButton>
        <ToolbarButton onClick={() => handleAlignment('right')} title="Alinhar à direita">
          ➡
        </ToolbarButton>
        <ToolbarButton onClick={() => handleAlignment('justify')} title="Justificar">
          ⬌
        </ToolbarButton>

        <div style={{ width: '1px', background: 'var(--corBordaPrimaria)', margin: '0 8px' }} />

        {/* Utilitários */}
        <ToolbarButton onClick={() => handleFormat('undo')} title="Desfazer (Ctrl+Z)">
          ↶
        </ToolbarButton>
        <ToolbarButton onClick={() => handleFormat('redo')} title="Refazer (Ctrl+Shift+Z)">
          ↷
        </ToolbarButton>
        <ToolbarButton onClick={() => handleFormat('clear')} title="Limpar formatação">
          ✕
        </ToolbarButton>
      </Toolbar>
      
      <EditorArea
        ref={editorRef}
        contentEditable="true"
        data-placeholder={placeholder}
        onInput={handleEditorChange}
        onKeyDown={handleKeyDown}
        onMouseUp={updateToolbarState}
        onKeyUp={updateToolbarState}
        onBlur={handleEditorChange}
        suppressContentEditableWarning={true}
      />
    </EditorContainer>
  );
};

export default RichTextEditor; 