import React, { useEffect, useRef, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import { Highlight } from '@tiptap/extension-highlight';
import { Link } from '@tiptap/extension-link';
import { Image } from '@tiptap/extension-image';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';
import { TaskList } from '@tiptap/extension-task-list';
import { TaskItem } from '@tiptap/extension-task-item';
import { CodeBlock } from '@tiptap/extension-code-block';
import { FontFamily } from '@tiptap/extension-font-family';
import { FontSize } from '@tiptap/extension-font-size';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBold,
  faItalic,
  faUnderline,
  faStrikethrough,
  faListUl,
  faListOl,
  faQuoteLeft,
  faCode,
  faLink,
  faImage,
  faTable,
  faHeading,
  faParagraph,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faAlignJustify,
  faIndent,
  faOutdent,
  faUndo,
  faRedo,
  faCheckSquare,
  faSquare,
  faPalette,
  faFont,
  faTextHeight,
  faHighlighter,
  faEraser,
  faTrash,
  faPlus,
  faMinus
} from '@fortawesome/free-solid-svg-icons';

// Styled Components
const EditorContainer = styled.div`
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  background: var(--corFundoPrimaria);
  overflow: hidden;
  min-height: ${props => props.height === "auto" ? "400px" : props.height};
  max-height: ${props => props.height === "auto" ? "800px" : props.height};
  display: flex;
  flex-direction: column;
`;

const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 15px;
  background: var(--corFundoSecundaria);
  border-bottom: 1px solid var(--corBordaPrimaria);
  align-items: center;
`;

const ToolbarGroup = styled.div`
  display: flex;
  gap: 2px;
  padding: 5px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
`;

const ToolbarButton = styled.button`
  background: ${props => props.active ? 'var(--corPrimaria)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.active ? 'white' : 'var(--corTextoPrimaria)'};
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background: ${props => props.active ? 'var(--corSecundaria)' : 'rgba(255, 255, 255, 0.2)'};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Select = styled.select`
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: 4px;
  padding: 6px 8px;
  font-size: 0.9rem;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
  }
`;

const ColorInput = styled.input`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: transparent;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: 4px;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  min-height: 350px;

  /* Estilos para listas do Tiptap */
  .ProseMirror {
    outline: none;
    font-family: inherit;
    font-size: inherit;
    line-height: 1.6;
  }

  /* Lista não ordenada (com bolinhas) */
  .ProseMirror ul {
    list-style-type: disc;
    padding-left: 1.5em;
    margin: 0.5em 0;
  }

  .ProseMirror ul li {
    margin: 0.2em 0;
  }

  /* Lista ordenada (com números) */
  .ProseMirror ol {
    list-style-type: decimal;
    padding-left: 1.5em;
    margin: 0.5em 0;
  }

  .ProseMirror ol li {
    margin: 0.2em 0;
  }

  /* Lista de tarefas (checkboxes) */
  .ProseMirror ul[data-type="taskList"],
  .ProseMirror .task-list {
    list-style: none;
    padding: 0;
  }

  .ProseMirror ul[data-type="taskList"] li,
  .ProseMirror .task-list li,
  .ProseMirror .task-item {
    display: flex;
    align-items: flex-start;
    margin: 0.2em 0;
    padding: 0.2em 0;
  }

  .ProseMirror ul[data-type="taskList"] li > label,
  .ProseMirror .task-list li > label,
  .ProseMirror .task-item > label {
    flex: 0 0 auto;
    margin-right: 0.5em;
    user-select: none;
    display: flex;
    align-items: center;
  }

  .ProseMirror ul[data-type="taskList"] li > div,
  .ProseMirror .task-list li > div,
  .ProseMirror .task-item > div {
    flex: 1 1 auto;
  }

  .ProseMirror ul[data-type="taskList"] li input[type="checkbox"],
  .ProseMirror .task-list li input[type="checkbox"],
  .ProseMirror .task-item input[type="checkbox"] {
    margin: 0.25em 0.5em 0.25em 0;
    cursor: pointer;
    width: 16px;
    height: 16px;
  }

  /* Citações */
  .ProseMirror blockquote {
    border-left: 3px solid var(--corPrimaria);
    margin: 1em 0;
    padding-left: 1em;
    font-style: italic;
    color: var(--corTextoSecundaria);
  }

  /* Código inline */
  .ProseMirror code {
    background: var(--corFundoTerciaria);
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
  }

  /* Bloco de código */
  .ProseMirror pre {
    background: var(--corFundoTerciaria);
    padding: 1em;
    border-radius: 6px;
    overflow-x: auto;
    margin: 1em 0;
  }

  .ProseMirror pre code {
    background: none;
    padding: 0;
    border-radius: 0;
  }

  /* Tabelas */
  .ProseMirror table {
    border-collapse: collapse;
    margin: 1em 0;
    width: 100%;
  }

  .ProseMirror table td,
  .ProseMirror table th {
    border: 1px solid var(--corBordaPrimaria);
    padding: 0.5em;
    text-align: left;
  }

  .ProseMirror table th {
    background: var(--corFundoSecundaria);
    font-weight: bold;
  }

  /* Links */
  .ProseMirror a {
    color: var(--corPrimaria);
    text-decoration: underline;
  }

  .ProseMirror a:hover {
    color: var(--corSecundaria);
  }

  /* Imagens */
  .ProseMirror img {
    max-width: 100%;
    height: auto;
    border-radius: 6px;
  }

  .ProseMirror {
    outline: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: var(--corTextoPrimaria);
    background: var(--corFundoPrimaria);
    min-height: 350px;

    h1, h2, h3, h4, h5, h6 {
      color: var(--corTextoPrimaria);
      margin-top: 16px;
      margin-bottom: 8px;
      font-weight: 600;
    }

    h1 { font-size: 2em; }
    h2 { font-size: 1.5em; }
    h3 { font-size: 1.17em; }
    h4 { font-size: 1em; }
    h5 { font-size: 0.83em; }
    h6 { font-size: 0.67em; }

    p {
      margin: 0 0 12px 0;
    }

    a {
      color: var(--corPrimaria);
      text-decoration: underline;
    }

    a:hover {
      color: var(--corSecundaria);
    }

    ul, ol {
      margin: 0 0 12px 0;
      padding-left: 24px;
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

    .task-list {
      list-style: none;
      padding: 0;
    }

    .task-list-item {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 4px 0;
      padding: 4px 0;
    }

    .task-list-item input[type="checkbox"] {
      margin: 0;
      cursor: pointer;
    }

    .task-list-item.done > div {
      text-decoration: line-through;
      color: var(--corTextoSecundaria);
      opacity: 0.7;
    }

    .is-editor-empty:first-child::before {
      content: attr(data-placeholder);
      float: left;
      color: var(--corTextoTerciaria);
      pointer-events: none;
      height: 0;
      font-style: italic;
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: 4px;
    }

    .highlight {
      background: yellow;
      padding: 2px 4px;
      border-radius: 2px;
    }
  }
`;

const TiptapEditor = ({ 
  value, 
  onChange, 
  placeholder = "Digite o conteúdo...", 
  height = "auto",
  disabled = false 
}) => {
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [showImageInput, setShowImageInput] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [textColor, setTextColorState] = useState('#000000');
  const [highlightColor, setHighlightColorState] = useState('#ffff00');

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      Placeholder.configure({
        placeholder: placeholder,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Underline,
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'custom-link',
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'custom-image',
        },
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      TaskList.configure({
        HTMLAttributes: {
          class: 'task-list',
        },
      }),
      TaskItem.configure({
        nested: true,
        HTMLAttributes: {
          class: 'task-item',
        },
      }),
      CodeBlock,
      FontFamily.configure({
        types: ['textStyle'],
      }),
      FontSize.configure({
        types: ['textStyle'],
      }),
    ],
    content: value,
    editable: !disabled,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '');
    }
  }, [value, editor]);

  if (!editor) {
    return null;
  }

  const addLink = () => {
    if (linkUrl) {
      editor.chain().focus().extendMarkRange('link').setLink({ href: linkUrl }).run();
      setLinkUrl('');
      setShowLinkInput(false);
    }
  };

  const addImage = () => {
    if (imageUrl) {
      editor.chain().focus().setImage({ src: imageUrl }).run();
      setImageUrl('');
      setShowImageInput(false);
    }
  };

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    if (url === null) {
      return;
    }

    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  const addTable = () => {
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  };

  const deleteTable = () => {
    editor.chain().focus().deleteTable().run();
  };

  const addColumnBefore = () => {
    editor.chain().focus().addColumnBefore().run();
  };

  const addColumnAfter = () => {
    editor.chain().focus().addColumnAfter().run();
  };

  const deleteColumn = () => {
    editor.chain().focus().deleteColumn().run();
  };

  const addRowBefore = () => {
    editor.chain().focus().addRowBefore().run();
  };

  const addRowAfter = () => {
    editor.chain().focus().addRowAfter().run();
  };

  const deleteRow = () => {
    editor.chain().focus().deleteRow().run();
  };

  const toggleTaskList = () => {
    editor.chain().focus().toggleTaskList().run();
  };

  const toggleTaskItem = () => {
    editor.chain().focus().toggleTaskItem().run();
  };

  const setTextColor = (color) => {
    editor.chain().focus().setColor(color).run();
  };

  const setHighlightColor = (color) => {
    editor.chain().focus().toggleHighlight({ color }).run();
  };

  const setFontFamily = (fontFamily) => {
    editor.chain().focus().setFontFamily(fontFamily).run();
  };

  const setFontSize = (fontSize) => {
    editor.chain().focus().setFontSize(fontSize).run();
  };

  return (
    <EditorContainer height={height}>
      <Toolbar>
        <ToolbarGroup>
          <ToolbarButton
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            title="Desfazer"
          >
            <FontAwesomeIcon icon={faUndo} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            title="Refazer"
          >
            <FontAwesomeIcon icon={faRedo} />
          </ToolbarButton>
        </ToolbarGroup>

        <ToolbarGroup>
          <Select
            value={editor.getAttributes('textStyle').fontFamily || ''}
            onChange={(e) => setFontFamily(e.target.value)}
            title="Família da fonte"
          >
            <option value="">Padrão</option>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Georgia">Georgia</option>
            <option value="Verdana">Verdana</option>
            <option value="Helvetica">Helvetica</option>
          </Select>
        </ToolbarGroup>

        <ToolbarGroup>
          <Select
            value={editor.getAttributes('textStyle').fontSize || ''}
            onChange={(e) => setFontSize(e.target.value)}
            title="Tamanho da fonte"
          >
            <option value="">Padrão</option>
            <option value="8pt">8pt</option>
            <option value="10pt">10pt</option>
            <option value="12pt">12pt</option>
            <option value="14pt">14pt</option>
            <option value="16pt">16pt</option>
            <option value="18pt">18pt</option>
            <option value="24pt">24pt</option>
            <option value="36pt">36pt</option>
            <option value="48pt">48pt</option>
          </Select>
        </ToolbarGroup>

        <ToolbarGroup>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            active={editor.isActive('bold')}
            title="Negrito"
          >
            <FontAwesomeIcon icon={faBold} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            active={editor.isActive('italic')}
            title="Itálico"
          >
            <FontAwesomeIcon icon={faItalic} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            active={editor.isActive('underline')}
            title="Sublinhado"
          >
            <FontAwesomeIcon icon={faUnderline} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            active={editor.isActive('strike')}
            title="Tachado"
          >
            <FontAwesomeIcon icon={faStrikethrough} />
          </ToolbarButton>
        </ToolbarGroup>

        <ToolbarGroup>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            active={editor.isActive('heading', { level: 1 })}
            title="Título 1"
          >
            <FontAwesomeIcon icon={faHeading} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            active={editor.isActive('heading', { level: 2 })}
            title="Título 2"
          >
            H2
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().setParagraph().run()}
            active={editor.isActive('paragraph')}
            title="Parágrafo"
          >
            <FontAwesomeIcon icon={faParagraph} />
          </ToolbarButton>
        </ToolbarGroup>

        <ToolbarGroup>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            active={editor.isActive('bulletList')}
            title="Lista não ordenada"
          >
            <FontAwesomeIcon icon={faListUl} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            active={editor.isActive('orderedList')}
            title="Lista ordenada"
          >
            <FontAwesomeIcon icon={faListOl} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleTaskList().run()}
            active={editor.isActive('taskList')}
            title="Lista de tarefas"
          >
            <FontAwesomeIcon icon={faCheckSquare} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            active={editor.isActive('blockquote')}
            title="Citação"
          >
            <FontAwesomeIcon icon={faQuoteLeft} />
          </ToolbarButton>
        </ToolbarGroup>

        <ToolbarGroup>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            active={editor.isActive('codeBlock')}
            title="Bloco de código"
          >
            <FontAwesomeIcon icon={faCode} />
          </ToolbarButton>
          <ToolbarButton
            onClick={setLink}
            active={editor.isActive('link')}
            title="Link"
          >
            <FontAwesomeIcon icon={faLink} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => setShowImageInput(true)}
            title="Imagem"
          >
            <FontAwesomeIcon icon={faImage} />
          </ToolbarButton>
          <ToolbarButton
            onClick={addTable}
            title="Inserir tabela"
          >
            <FontAwesomeIcon icon={faTable} />
          </ToolbarButton>
        </ToolbarGroup>

        <ToolbarGroup>
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            active={editor.isActive({ textAlign: 'left' })}
            title="Alinhar à esquerda"
          >
            <FontAwesomeIcon icon={faAlignLeft} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            active={editor.isActive({ textAlign: 'center' })}
            title="Centralizar"
          >
            <FontAwesomeIcon icon={faAlignCenter} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            active={editor.isActive({ textAlign: 'right' })}
            title="Alinhar à direita"
          >
            <FontAwesomeIcon icon={faAlignRight} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
            active={editor.isActive({ textAlign: 'justify' })}
            title="Justificar"
          >
            <FontAwesomeIcon icon={faAlignJustify} />
          </ToolbarButton>
        </ToolbarGroup>

        <ToolbarGroup>
          <ColorInput
            type="color"
            value={textColor}
            onChange={(e) => {
              setTextColorState(e.target.value);
              setTextColor(e.target.value);
            }}
            title="Cor do texto"
          />
          <ColorInput
            type="color"
            value={highlightColor}
            onChange={(e) => {
              setHighlightColorState(e.target.value);
              setHighlightColor(e.target.value);
            }}
            title="Cor de destaque"
          />
        </ToolbarGroup>

        {editor.isActive('table') && (
          <ToolbarGroup>
            <ToolbarButton onClick={addColumnBefore} title="Adicionar coluna antes">
              <FontAwesomeIcon icon={faPlus} />
            </ToolbarButton>
            <ToolbarButton onClick={addColumnAfter} title="Adicionar coluna depois">
              <FontAwesomeIcon icon={faPlus} />
            </ToolbarButton>
            <ToolbarButton onClick={deleteColumn} title="Excluir coluna">
              <FontAwesomeIcon icon={faMinus} />
            </ToolbarButton>
            <ToolbarButton onClick={addRowBefore} title="Adicionar linha antes">
              <FontAwesomeIcon icon={faPlus} />
            </ToolbarButton>
            <ToolbarButton onClick={addRowAfter} title="Adicionar linha depois">
              <FontAwesomeIcon icon={faPlus} />
            </ToolbarButton>
            <ToolbarButton onClick={deleteRow} title="Excluir linha">
              <FontAwesomeIcon icon={faMinus} />
            </ToolbarButton>
            <ToolbarButton onClick={deleteTable} title="Excluir tabela">
              <FontAwesomeIcon icon={faTrash} />
            </ToolbarButton>
          </ToolbarGroup>
        )}
      </Toolbar>

      <ContentArea>
        <EditorContent editor={editor} />
      </ContentArea>

      {/* Modal para inserir imagem */}
      {showImageInput && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'var(--corFundoSecundaria)',
            padding: '20px',
            borderRadius: '8px',
            minWidth: '300px'
          }}>
            <h3>Inserir Imagem</h3>
            <input
              type="url"
              placeholder="URL da imagem"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                marginBottom: '10px',
                border: '1px solid var(--corBordaPrimaria)',
                borderRadius: '4px'
              }}
            />
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowImageInput(false)}
                style={{
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '4px',
                  background: 'var(--corErro)',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                Cancelar
              </button>
              <button
                onClick={addImage}
                style={{
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '4px',
                  background: 'var(--corPrimaria)',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                Inserir
              </button>
            </div>
          </div>
        </div>
      )}
    </EditorContainer>
  );
};

export default TiptapEditor;
