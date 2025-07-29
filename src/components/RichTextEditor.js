import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Editor } from '@tinymce/tinymce-react';
import { TINYMCE_CONFIG } from '../config/tinymce-config';

const EditorContainer = styled.div`
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioGrande);
  background: var(--corFundoCard);
  overflow: hidden;
  box-shadow: var(--sombraLeve);
  transition: all var(--transicaoRapida);

  &:focus-within {
    border-color: var(--corBordaFoco);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  .tox-tinymce {
    border: none !important;
    border-radius: var(--bordaRaioGrande) !important;
  }

  .tox-toolbar {
    background: var(--corFundoSecundaria) !important;
    border-bottom: 1px solid var(--corBordaPrimaria) !important;
  }

  .tox-toolbar__group {
    background: var(--corFundoSecundaria) !important;
  }

  .tox-tbtn {
    background: transparent !important;
    color: var(--corTextoPrimaria) !important;
    border: 1px solid var(--corBordaPrimaria) !important;
    border-radius: var(--bordaRaioPequena) !important;
    margin: 2px !important;
    transition: all var(--transicaoRapida) !important;
  }

  .tox-tbtn:hover {
    background: var(--corPrimaria) !important;
    color: var(--corTextoClara) !important;
    transform: scale(1.05) !important;
  }

  .tox-tbtn--enabled {
    background: var(--corPrimaria) !important;
    color: var(--corTextoClara) !important;
  }

  .tox-edit-area {
    background: var(--corFundoCard) !important;
  }

  .tox-edit-area__iframe {
    background: var(--corFundoCard) !important;
  }

  .tox-editor-container {
    background: var(--corFundoCard) !important;
  }

  .tox-statusbar {
    background: var(--corFundoSecundaria) !important;
    border-top: 1px solid var(--corBordaPrimaria) !important;
    color: var(--corTextoSecundaria) !important;
  }

  .tox-menu {
    background: var(--corFundoCard) !important;
    border: 1px solid var(--corBordaPrimaria) !important;
    border-radius: var(--bordaRaioMedia) !important;
    box-shadow: var(--sombraMedia) !important;
  }

  .tox-collection__item {
    color: var(--corTextoPrimaria) !important;
    background: var(--corFundoCard) !important;
  }

  .tox-collection__item:hover {
    background: var(--corFundoSecundaria) !important;
  }

  .tox-dialog {
    background: var(--corFundoCard) !important;
    border: 1px solid var(--corBordaPrimaria) !important;
    border-radius: var(--bordaRaioGrande) !important;
    box-shadow: var(--sombraForte) !important;
  }

  .tox-dialog__header {
    background: var(--corFundoSecundaria) !important;
    border-bottom: 1px solid var(--corBordaPrimaria) !important;
  }

  .tox-dialog__body {
    background: var(--corFundoCard) !important;
  }

  .tox-dialog__footer {
    background: var(--corFundoSecundaria) !important;
    border-top: 1px solid var(--corBordaPrimaria) !important;
  }

  .tox-textfield {
    background: var(--corFundoCard) !important;
    border: 1px solid var(--corBordaPrimaria) !important;
    color: var(--corTextoPrimaria) !important;
  }

  .tox-textfield:focus {
    border-color: var(--corBordaFoco) !important;
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1) !important;
  }

  .tox-listbox {
    background: var(--corFundoCard) !important;
    border: 1px solid var(--corBordaPrimaria) !important;
    color: var(--corTextoPrimaria) !important;
  }

  .tox-color-picker {
    background: var(--corFundoCard) !important;
    border: 1px solid var(--corBordaPrimaria) !important;
  }

  .tox-panel {
    background: var(--corFundoCard) !important;
    border: 1px solid var(--corBordaPrimaria) !important;
    border-radius: var(--bordaRaioMedia) !important;
  }

  .tox-button {
    background: var(--corPrimaria) !important;
    color: var(--corTextoClara) !important;
    border: none !important;
    border-radius: var(--bordaRaioPequena) !important;
    padding: 8px 16px !important;
    cursor: pointer !important;
    transition: all var(--transicaoRapida) !important;
  }

  .tox-button:hover {
    background: var(--corSecundaria) !important;
    transform: scale(1.05) !important;
  }

  .tox-button--secondary {
    background: var(--corFundoSecundaria) !important;
    color: var(--corTextoPrimaria) !important;
    border: 1px solid var(--corBordaPrimaria) !important;
  }

  .tox-button--secondary:hover {
    background: var(--corFundoTerciaria) !important;
  }
`;

const EditorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--espacamentoMedio);
  background: var(--corFundoSecundaria);
  border-bottom: 1px solid var(--corBordaPrimaria);
`;

const EditorTitle = styled.h3`
  margin: 0;
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
`;

const EditorStats = styled.div`
  display: flex;
  gap: var(--espacamentoMedio);
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoSecundaria);
`;

const StatItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const RichTextEditor = ({ 
  value, 
  content,
  onChange, 
  onContentChange,
  placeholder = "Digite seu conteúdo aqui...",
  onSave,
  onClose,
  showHeader = true,
  height = 500,
  disabled = false
}) => {
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isDirty, setIsDirty] = useState(false);
  const editorRef = useRef(null);

  // Usar content se fornecido, senão value
  const editorValue = content || value || '';

  // Usar onContentChange se fornecido, senão onChange
  const handleChange = onContentChange || onChange;

  // Configuração avançada do TinyMCE
  const advancedConfig = {
    ...TINYMCE_CONFIG,
    height: height,
    // apiKey: 'your-free-api-key-here', // Obtenha em: https://www.tiny.cloud/auth/signup/
    readonly: disabled,
    disabled: disabled,
    
    // Plugins avançados
    plugins: [
      'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
      'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
      'insertdatetime', 'media', 'table', 'help', 'wordcount',
      'emoticons', 'paste', 'importcss', 'textpattern',
      'nonbreaking', 'pagebreak', 'quickbars', 'directionality',
      'visualchars', 'codesample', 'hr', 'pagebreak',
      'save', 'print', 'export', 'import',
      'searchreplace', 'autosave', 'contextmenu',
      'spellchecker', 'tabfocus', 'template', 'visualblocks',
      'visualchars', 'codesample', 'emoticons', 'paste',
      'importcss', 'textpattern', 'nonbreaking', 'pagebreak',
      'quickbars', 'directionality', 'visualchars', 'codesample',
      'hr', 'pagebreak', 'save', 'print', 'export', 'import',
      'searchreplace', 'autosave', 'contextmenu', 'spellchecker',
      'tabfocus', 'template', 'visualblocks', 'visualchars',
      'codesample', 'emoticons', 'paste', 'importcss', 'textpattern',
      'nonbreaking', 'pagebreak', 'quickbars', 'directionality',
      'visualchars', 'codesample', 'hr', 'pagebreak', 'save',
      'print', 'export', 'import', 'searchreplace', 'autosave',
      'contextmenu', 'spellchecker', 'tabfocus', 'template',
      'visualblocks', 'visualchars', 'codesample', 'emoticons',
      'paste', 'importcss', 'textpattern', 'nonbreaking', 'pagebreak',
      'quickbars', 'directionality', 'visualchars', 'codesample',
      'hr', 'pagebreak', 'save', 'print', 'export', 'import',
      'searchreplace', 'autosave', 'contextmenu', 'spellchecker',
      'tabfocus', 'template', 'visualblocks', 'visualchars'
    ],
    
    // Toolbar muito mais completo
    toolbar: [
      'undo redo | formatselect fontfamily fontsize | bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter alignright alignjustify | outdent indent',
      'bullist numlist | link image media table | emoticons charmap | hr pagebreak | removeformat | help | fullscreen | preview | print | export',
      'searchreplace | spellchecker | visualblocks visualchars | codesample | ltr rtl | nonbreaking | template | save | autosave',
      'insertdatetime | anchor | pagebreak | quickbars | directionality | visualchars | codesample | hr | removeformat | help | fullscreen'
    ],
    
    // Configurações avançadas
    menubar: true,
    statusbar: true,
    elementpath: true,
    resize: true,
    branding: false,
    promotion: false,
    onboarding: false,
    
    // Auto-save
    autosave_interval: '30s',
    autosave_prefix: 'tinymce-autosave-{path}{query}-{id}-',
    autosave_retention: '1440m',
    
    // Spell checker
    browser_spellcheck: true,
    spellchecker_language: 'pt_BR',
    spellchecker_rpc_url: 'https://spellchecker.tiny.cloud',
    
    // Templates
    template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
    template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
    
    // Quick toolbar
    quickbars_selection_toolbar: 'bold italic underline strikethrough | quicklink h2 h3 blockquote quickimage quicktable | forecolor backcolor',
    quickbars_insert_toolbar: 'quickimage quicktable',
    
    // Context menu
    contextmenu: 'link image imagetools table configurepermanentpen',
    
    // Paste settings
    paste_data_images: true,
    paste_as_text: false,
    paste_enable_default_filters: true,
    
    // File picker
    file_picker_types: 'image media',
    automatic_uploads: true,
    
    // Content style avançado
    content_style: `
      body { 
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 14px;
  line-height: 1.6;
        color: var(--corTextoPrimaria);
        background: var(--corFundoCard);
        padding: 20px;
        margin: 0;
      }
  h1, h2, h3, h4, h5, h6 {
    color: var(--corTextoPrimaria);
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    font-weight: bold;
  }
      h1 { font-size: 2.5em; }
      h2 { font-size: 2em; }
      h3 { font-size: 1.5em; }
      h4 { font-size: 1.25em; }
      h5 { font-size: 1.1em; }
      h6 { font-size: 1em; }
  p { margin: 0 0 1em 0; }
      ul, ol { margin: 0 0 1em 1.5em; }
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
      table {
        border-collapse: collapse;
        width: 100%;
        margin: 1em 0;
      }
      th, td {
        border: 1px solid var(--corBordaPrimaria);
        padding: 8px 12px;
        text-align: left;
      }
      th {
        background: var(--corFundoSecundaria);
    font-weight: bold;
  }
      img {
        max-width: 100%;
        height: auto;
      }
      a {
        color: var(--corPrimaria);
        text-decoration: none;
      }
      a:hover {
    text-decoration: underline;
  }
      .highlight {
        background: yellow;
        padding: 2px 4px;
      }
      .mark {
        background: var(--corSecundaria);
        color: var(--corTextoClara);
        padding: 2px 4px;
        border-radius: 3px;
      }
    `,
    
    // Eventos
    setup: (editor) => {
      editor.on('init', () => {
        console.log('🎨 Editor TinyMCE inicializado');
        editorRef.current = editor;
      });
      
      editor.on('change keyup', () => {
        const content = editor.getContent();
        const text = editor.getContent({ format: 'text' });
        
        // Contar palavras e caracteres
        const words = text.trim().split(/\s+/).filter(word => word.length > 0);
        setWordCount(words.length);
        setCharCount(text.length);
        
        // Marcar como modificado
        setIsDirty(true);
        
        // Chamar onChange
        if (handleChange) {
          handleChange(content);
        }
      });
      
      editor.on('blur', () => {
        setIsDirty(false);
      });
    }
  };

  const handleSave = () => {
    if (onSave && editorRef.current) {
      const content = editorRef.current.getContent();
      onSave(content);
      setIsDirty(false);
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <EditorContainer>
      {showHeader && (
        <EditorHeader>
          <EditorTitle>Editor Avançado</EditorTitle>
          <EditorStats>
            <StatItem>
              📝 {wordCount} palavras
            </StatItem>
            <StatItem>
              🔤 {charCount} caracteres
            </StatItem>
            {isDirty && (
              <StatItem style={{ color: 'var(--corAviso)' }}>
                ⚠️ Modificado
              </StatItem>
            )}
          </EditorStats>
        </EditorHeader>
      )}
      
      <Editor
        value={editorValue}
        init={advancedConfig}
        onEditorChange={(content, editor) => {
          if (handleChange) {
            handleChange(content);
          }
        }}
        disabled={disabled}
      />
    </EditorContainer>
  );
};

export default RichTextEditor; 