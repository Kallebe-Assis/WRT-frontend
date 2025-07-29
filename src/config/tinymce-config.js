// Configuração do TinyMCE
// Para obter uma chave API gratuita, visite: https://www.tiny.cloud/auth/signup/

export const TINYMCE_CONFIG = {
  // Chave API gratuita - substitua pela sua chave
  // Para desenvolvimento, você pode usar uma chave gratuita em: https://www.tiny.cloud/auth/signup/
  // Exemplo de chave gratuita (substitua pela sua):
  apiKey: 'your-free-api-key-here', // Obtenha em: https://www.tiny.cloud/auth/signup/
  
  // Configurações do editor
  height: 500,
  menubar: false,
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
    'visualchars'
  ],
  toolbar: [
    'undo redo | formatselect | bold italic underline strikethrough',
    'fontfamily fontsize | forecolor backcolor | alignleft aligncenter alignright alignjustify',
    'bullist numlist outdent indent | link image media | table emoticons charmap',
    'hr | removeformat | help | fullscreen'
  ],
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
    }
    h1 { font-size: 2em; }
    h2 { font-size: 1.5em; }
    h3 { font-size: 1.25em; }
    h4 { font-size: 1.1em; }
    h5 { font-size: 1em; }
    h6 { font-size: 0.9em; }
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
  `,
  branding: false,
  elementpath: false,
  resize: false,
  statusbar: false,
  browser_spellcheck: true,
  contextmenu: 'link image imagetools table configurepermanentpen',
  paste_data_images: true,
  automatic_uploads: false,
  file_picker_types: 'image',
  quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
  noneditable_noneditable_class: 'mceNonEditable',
  toolbar_mode: 'wrap',
  // Desabilitar propaganda do TinyMCE
  promotion: false,
  // Desabilitar onboarding
  onboarding: false,

  // Configurações adicionais para melhorar a interatividade
  auto_focus: true,
  auto_resize: false,
  inline: false,
  readonly: false,
  disabled: false
}; 