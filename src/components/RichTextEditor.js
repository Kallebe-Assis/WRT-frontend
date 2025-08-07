import React, { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import styled from 'styled-components';

const EditorContainer = styled.div`
  .tox-tinymce {
    border: 2px solid var(--corBordaPrimaria);
    border-radius: var(--bordaRaioMedia);
    background: var(--corFundoPrimaria);
  }

  .tox .tox-toolbar {
    background: var(--corFundoSecundaria);
    border-bottom: 1px solid var(--corBordaPrimaria);
  }

  .tox .tox-tbtn {
    color: var(--corTextoPrimaria);
  }

  .tox .tox-tbtn:hover {
    background: var(--corFundoHover);
  }

  .tox .tox-edit-area {
    background: var(--corFundoPrimaria);
  }

  .tox .tox-edit-area__iframe {
    background: var(--corFundoPrimaria);
  }

  .tox .tox-edit-focus {
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  /* Estilos para garantir que os dropdowns funcionem */
  .tox .tox-menu {
    background: var(--corFundoSecundaria);
    border: 1px solid var(--corBordaPrimaria);
    border-radius: var(--bordaRaioMedia);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 9999 !important;
  }

  .tox .tox-collection__item {
    color: var(--corTextoPrimaria);
    background: var(--corFundoSecundaria);
  }

  .tox .tox-collection__item:hover {
    background: var(--corFundoHover);
  }

  .tox .tox-collection__item--active {
    background: var(--corPrimaria);
    color: white;
  }

  /* Garantir que os dropdowns não sejam cortados */
  .tox .tox-menu .tox-collection {
    max-height: 300px;
    overflow-y: auto;
  }

  /* Estilos para os botões de dropdown */
  .tox .tox-tbtn--select {
    position: relative;
  }

  .tox .tox-tbtn--select .tox-tbtn__select-chevron {
    color: var(--corTextoPrimaria);
  }

  /* Garantir que o container não corte os dropdowns */
  position: relative;
  z-index: 1;

  /* Permitir que os dropdowns apareçam fora do container */
  .tox .tox-menu {
    position: absolute !important;
    z-index: 10000 !important; /* Aumentar z-index para aparecer na frente do modal */
  }

  /* Estilos específicos para fontfamily e fontsize */
  .tox .tox-listbox {
    background: var(--corFundoSecundaria);
    border: 1px solid var(--corBordaPrimaria);
    color: var(--corTextoPrimaria);
  }

  .tox .tox-listbox__select {
    background: var(--corFundoSecundaria);
    color: var(--corTextoPrimaria);
  }

  .tox .tox-listbox__select:focus {
    border-color: var(--corPrimaria);
  }

  /* Garantir que os menus apareçam corretamente */
  .tox .tox-menu.tox-selected-menu {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
  }

  /* Estilos para o toolbar */
  .tox .tox-toolbar__group {
    position: relative;
  }

  /* Garantir que os dropdowns tenham espaço suficiente */
  .tox .tox-toolbar__primary {
    overflow: visible;
  }

  .tox .tox-toolbar__overflow {
    overflow: visible;
  }

  /* Garantir que todos os elementos do TinyMCE apareçam na frente */
  .tox-tinymce {
    z-index: 10001 !important;
  }

  .tox .tox-toolbar {
    z-index: 10002 !important;
  }

  .tox .tox-menu {
    z-index: 10003 !important;
  }
`;

const RichTextEditor = ({ value, onChange, disabled = false, placeholder = "Digite o conteúdo...", height = "auto" }) => {
  const editorRef = useRef(null);
  const [previousValue, setPreviousValue] = useState(value);
  const [isEditorReady, setIsEditorReady] = useState(false);

  const ajustarAltura = (editor) => {
    if (height === "auto" && editor) {
      try {
        console.log('Tentando ajustar altura do editor...');
        
        // Verificar se o editor está inicializado e tem o método getBody
        if (editor && typeof editor.getBody === 'function') {
          const body = editor.getBody();
          if (body) {
            console.log('Body encontrado, calculando altura...');
            const contentHeight = body.scrollHeight;
            const minHeight = 400;
            const maxHeight = 800;
            const newHeight = Math.max(minHeight, Math.min(contentHeight + 100, maxHeight));
            
            console.log(`Altura calculada: ${contentHeight}px, nova altura: ${newHeight}px`);
            
            // Usar a API correta do TinyMCE para redimensionar
            if (editor.theme && typeof editor.theme.resizeTo === 'function') {
              editor.theme.resizeTo(null, newHeight);
              console.log('Altura ajustada via theme.resizeTo');
            } else if (editor.getContainer) {
              // Fallback: ajustar via CSS
              const editorElement = editor.getContainer();
              if (editorElement) {
                editorElement.style.height = `${newHeight}px`;
                console.log('Altura ajustada via CSS');
              }
            }
            
            // Forçar reflow para garantir que o scroll funcione
            setTimeout(() => {
              if (body) {
                body.style.overflowY = 'auto';
                body.style.maxHeight = `${newHeight}px`;
              }
            }, 100);
          } else {
            console.log('Body não encontrado');
          }
        } else {
          console.log('Editor não inicializado ou sem método getBody');
        }
      } catch (error) {
        console.warn('Erro ao ajustar altura do editor:', error);
      }
    }
  };

  const handleEditorChange = (content, editor) => {
    if (!isEditorReady) {
      console.log('Editor ainda não está pronto, ignorando mudança');
      return;
    }
    
    onChange(content);
    
    // Ajustar altura após mudança de conteúdo
    setTimeout(() => {
      ajustarAltura(editor);
    }, 100);
    
    // Forçar ajuste de altura também quando o editor é usado pela primeira vez
    if (editor && height === "auto" && value) {
      setTimeout(() => {
        ajustarAltura(editor);
      }, 200);
    }
    
    // Forçar ajuste de altura quando o editor é usado pela primeira vez em uma nova nota
    if (editor && height === "auto" && value && content !== value) {
      console.log('Primeira interação com editor, forçando ajuste...');
      setTimeout(() => {
        ajustarAltura(editor);
      }, 300);
    }
  };

  const handleEditorInit = (editor) => {
    console.log('Editor inicializando...');
    editorRef.current = editor;
    setIsEditorReady(true);
    
    // Verificar se o editor está realmente funcional
    if (editor && typeof editor.getBody === 'function') {
      console.log('Editor inicializado com sucesso');
      
      // Forçar ajuste de altura sempre que o editor for inicializado
      const forcarAjuste = () => {
        if (editor && height === "auto") {
          console.log('Editor inicializado, forçando ajuste de altura...');
          ajustarAltura(editor);
        }
      };

      // Múltiplas tentativas para garantir que funcione
      setTimeout(forcarAjuste, 100);
      setTimeout(forcarAjuste, 300);
      setTimeout(forcarAjuste, 500);
      setTimeout(forcarAjuste, 1000);
    } else {
      console.error('Editor não foi inicializado corretamente');
    }
  };

  // Ajustar altura quando o valor mudar (incluindo quando a nota é aberta)
  useEffect(() => {
    if (editorRef.current && height === "auto" && isEditorReady) {
      console.log('Valor mudou, forçando ajuste de altura...');
      setTimeout(() => {
        ajustarAltura(editorRef.current);
      }, 100);
    }
  }, [value, height, isEditorReady]);

  // Ajustar altura quando o componente é montado com conteúdo
  useEffect(() => {
    if (height === "auto" && isEditorReady) {
      console.log('Componente montado, forçando ajuste de altura...');
      setTimeout(() => {
        if (editorRef.current) {
          ajustarAltura(editorRef.current);
        }
      }, 300);
    }
  }, [isEditorReady]); // Executar apenas quando o editor estiver pronto

  // Force height adjustment when value changes, including previous value check
  useEffect(() => {
    if (value !== previousValue && isEditorReady) {
      console.log('Valor mudou, forçando ajuste de altura...');
      setTimeout(() => {
        if (editorRef.current) {
          ajustarAltura(editorRef.current);
        }
      }, 100);
      setPreviousValue(value); // Update previous value
    }
  }, [value, previousValue, isEditorReady]);

  // Verificar se o editor está desabilitado
  if (disabled) {
    console.log('Editor está desabilitado');
  }

  return (
    <EditorContainer>
      <Editor
        apiKey='dovo08r35w45rtk3mu0yhvdctb2nb7oee5t944bj78bk79cz'
        value={value}
        onEditorChange={handleEditorChange}
        onInit={handleEditorInit}
        disabled={disabled}
        init={{
          height: height === "auto" ? 400 : height,
          menubar: false,
          autoresize_bottom_margin: 20,
          autoresize_overflow_padding: 20,
          // Desabilitar corretor ortográfico
          browser_spellcheck: false,
          spellchecker: false,
          // Configurações adicionais para evitar conflitos
          auto_focus: false,
          auto_focus_on_editor: false,
          // Garantir que o editor seja inicializado corretamente
          setup: (editor) => {
            // Configurações adicionais se necessário
            // Não usar listeners problemáticos
            
            // Ajustar altura quando o editor for inicializado
            editor.on('init', () => {
              console.log('Editor setup: inicializado');
              if (height === "auto") {
                console.log('Editor inicializado, ajustando altura...');
                setTimeout(() => {
                  ajustarAltura(editor);
                }, 300);
              }
            });
            
            // Ajustar altura quando o conteúdo for definido
            editor.on('SetContent', () => {
              if (height === "auto") {
                console.log('Conteúdo definido no editor, ajustando altura...');
                setTimeout(() => {
                  ajustarAltura(editor);
                }, 200);
              }
            });
            
            // Ajustar altura quando o editor ganhar foco
            editor.on('focus', () => {
              if (height === "auto") {
                console.log('Editor ganhou foco, ajustando altura...');
                setTimeout(() => {
                  ajustarAltura(editor);
                }, 100);
              }
            });

            // Ajustar altura quando o editor for clicado
            editor.on('click', () => {
              if (height === "auto") {
                console.log('Editor foi clicado, ajustando altura...');
                setTimeout(() => {
                  ajustarAltura(editor);
                }, 100);
              }
            });

            // Ajustar altura quando o usuário começar a digitar
            editor.on('keydown', () => {
              if (height === "auto") {
                console.log('Usuário começou a digitar, ajustando altura...');
                setTimeout(() => {
                  ajustarAltura(editor);
                }, 100);
              }
            });

            // Verificar se o editor está funcionando
            editor.on('load', () => {
              console.log('Editor carregado com sucesso');
            });

            // Capturar erros do editor
            editor.on('error', (error) => {
              console.error('Erro no editor TinyMCE:', error);
            });

            // Configurações específicas para dropdowns
            editor.on('init', () => {
              // Garantir que os menus apareçam corretamente
              const toolbar = editor.getContainer().querySelector('.tox-toolbar');
              if (toolbar) {
                toolbar.style.zIndex = '10002';
                toolbar.style.position = 'relative';
              }
              
              // Configurar posicionamento dos menus
              editor.on('OpenWindow', (e) => {
                if (e.window && e.window.getBody) {
                  const body = e.window.getBody();
                  if (body) {
                    body.style.zIndex = '10004';
                  }
                }
              });

              // Configurar z-index do container do editor
              const editorContainer = editor.getContainer();
              if (editorContainer) {
                editorContainer.style.zIndex = '10001';
              }

              // Configurar z-index dos menus quando aparecerem
              editor.on('ShowMenu', (e) => {
                if (e.menu && e.menu.getEl) {
                  const menuEl = e.menu.getEl();
                  if (menuEl) {
                    menuEl.style.zIndex = '10003';
                  }
                }
              });
            });
          },
          plugins: [
            // Core editing features
            'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
            // Premium features (included in free trial)
            'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
          ],
          toolbar: 'undo redo | fontfamily fontsize | bold italic underline strikethrough | forecolor backcolor | link image | table | codesample | align lineheight | numlist bullist indent outdent | checklist | removeformat',
          content_style: `
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              font-size: 14px;
              line-height: 1.6;
              color: var(--corTextoPrimaria);
              background: var(--corFundoPrimaria);
              padding: 16px;
              margin: 0;
              min-height: ${height === "auto" ? "400px" : "auto"};
              max-height: ${height === "auto" ? "800px" : "auto"};
              overflow-y: auto;
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
          placeholder: placeholder,
          branding: false,
          elementpath: false,
          resize: true,
          statusbar: false,
          // Desabilitar corretor ortográfico
          browser_spellcheck: false,
          spellchecker: false,
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
          tinycomments_mode: 'embedded',
          tinycomments_author: 'WRTmind User',
          mergetags_list: [
            { value: 'First.Name', title: 'First Name' },
            { value: 'Email', title: 'Email' },
          ],
          ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('AI Assistant not implemented')),
          // Configurações específicas para dropdowns
          fixed_toolbar_container: false,
          inline: false,
          menubar: false,
          // Configurações para garantir que os dropdowns funcionem
          selector: 'textarea',
          height: height === "auto" ? 400 : height,
          // Garantir que os menus apareçam fora do container
          body_class: 'tox-content-body',
          // Configurações de posicionamento
          relative_urls: false,
          remove_script_host: false,
          convert_urls: false,
          // Configurações específicas para dropdowns
          toolbar_mode: 'wrap',
          // Garantir que os menus apareçam corretamente
          menu: {
            file: { title: 'File', items: 'newdocument restoredraft | preview | export print | deleteallconversations' },
            edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace' },
            view: { title: 'View', items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments' },
            insert: { title: 'Insert', items: 'image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime' },
            format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | removeformat' },
            tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | a11ycheck code wordcount' },
            help: { title: 'Help', items: 'help' }
          }
        }}
      />
    </EditorContainer>
  );
};

export default RichTextEditor; 