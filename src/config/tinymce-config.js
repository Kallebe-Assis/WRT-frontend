// Configuração centralizada do TinyMCE - APENAS PLUGINS GRATUITOS
export const TINYMCE_CONFIG = {
  height: 450,
  menubar: false,
  plugins: [
    // APENAS PLUGINS GRATUITOS
    'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount'
  ],
  toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | forecolor backcolor | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
  content_style: `
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      line-height: 1.6;
      color: var(--corTextoPrimaria);
      background: var(--corFundoPrimaria);
      padding: 16px;
      margin: 0;
    }
    h1, h2, h3, h4, h5, h6 {
      color: var(--corTextoPrimaria);
      margin-top: 16px;
      margin-bottom: 8px;
    }
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
  `,
  placeholder: "Digite o conteúdo...",
  branding: false,
  elementpath: false,
  resize: true,
  statusbar: false,
  browser_spellcheck: true,
  contextmenu: true,
  paste_data_images: true,
  image_advtab: true,
  link_list: [],
  image_list: [],
  table_default_styles: {
    width: '100%'
  },
  table_default_attributes: {
    border: '1'
  },
  fontsize_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt',
  font_family_formats: 'Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats',
  color_map: [
    '#000000', 'Black',
    '#434343', 'Grey 1',
    '#666666', 'Grey 2',
    '#999999', 'Grey 3',
    '#b7b7b7', 'Grey 4',
    '#cccccc', 'Grey 5',
    '#d9d9d9', 'Grey 6',
    '#efefef', 'Grey 7',
    '#f3f3f3', 'Grey 8',
    '#ffffff', 'White',
    '#980000', 'Red',
    '#ff0000', 'Red 2',
    '#ff9900', 'Orange',
    '#ffff00', 'Yellow',
    '#00ff00', 'Green',
    '#00ffff', 'Cyan',
    '#4a86e8', 'Blue',
    '#0000ff', 'Blue 2',
    '#9900ff', 'Purple',
    '#ff00ff', 'Magenta',
    '#e6b8af', 'Pink',
    '#f4cccc', 'Pink 2',
    '#fce5cd', 'Pink 3',
    '#fff2cc', 'Pink 4',
    '#d9ead3', 'Pink 5',
    '#d0e0e3', 'Pink 6',
    '#c9daf8', 'Pink 7',
    '#cfe2f3', 'Pink 8',
    '#d9d2e9', 'Pink 9',
    '#ead1dc', 'Pink 10',
    '#dd7e6b', 'Pink 11',
    '#ea9999', 'Pink 12',
    '#f9cb9c', 'Pink 13',
    '#ffe599', 'Pink 14',
    '#b6d7a8', 'Pink 15',
    '#a2c4c9', 'Pink 16',
    '#a4c2f4', 'Pink 17',
    '#b4a7d6', 'Pink 18',
    '#d5a6bd', 'Pink 19',
    '#cc4125', 'Pink 20',
    '#e06666', 'Pink 21',
    '#f6b26b', 'Pink 22',
    '#ffd966', 'Pink 23',
    '#93c47d', 'Pink 24',
    '#76a5af', 'Pink 25',
    '#6d9eeb', 'Pink 26',
    '#8e7cc3', 'Pink 27',
    '#c27ba0', 'Pink 28',
    '#a61c00', 'Pink 29',
    '#cc0000', 'Pink 30',
    '#e69138', 'Pink 31',
    '#f1c232', 'Pink 32',
    '#6aa84f', 'Pink 33',
    '#45818e', 'Pink 34',
    '#3c78d8', 'Pink 35',
    '#674ea7', 'Pink 36',
    '#a64d79', 'Pink 37'
  ],
  setup: (editor) => {
    // Configurações adicionais se necessário
    editor.on('init', () => {
      // Editor inicializado
    });
  }
}; 