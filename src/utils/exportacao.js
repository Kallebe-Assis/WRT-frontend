// Utilitário para exportação de notas em diferentes formatos

// Função para exportar como texto simples
export const exportarComoTexto = (item) => {
  const conteudo = `${item.titulo}\n\n${item.conteudo.replace(/<[^>]*>/g, '')}`;
  const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${item.titulo.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Função para exportar como JSON
export const exportarComoJSON = (item) => {
  const dados = {
    titulo: item.titulo,
    conteudo: item.conteudo,
    categoria: item.categoria,
    dataCriacao: item.dataCriacao,
    dataModificacao: item.dataModificacao,
    favorito: item.favorito
  };
  
  const blob = new Blob([JSON.stringify(dados, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${item.titulo.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Função para exportar como HTML
export const exportarComoHTML = (item) => {
  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${item.titulo}</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            margin: 40px; 
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 { 
            color: #333; 
            border-bottom: 2px solid #007bff;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        .content { 
            margin-bottom: 30px;
            white-space: pre-wrap;
        }
        .metadata {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            font-size: 14px;
            color: #666;
        }
        .metadata span {
            display: block;
            margin-bottom: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>${item.titulo}</h1>
        <div class="content">${item.conteudo}</div>
        <div class="metadata">
            <span><strong>Categoria:</strong> ${typeof item.categoria === 'object' ? item.categoria.nome || 'Não definida' : item.categoria || 'Não definida'}</span>
            <span><strong>Criado em:</strong> ${new Date(item.dataCriacao).toLocaleDateString('pt-BR')}</span>
            <span><strong>Modificado em:</strong> ${new Date(item.dataModificacao).toLocaleDateString('pt-BR')}</span>
            <span><strong>Exportado em:</strong> ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}</span>
        </div>
    </div>
</body>
</html>`;

  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${item.titulo.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Função para exportar como CSV (para múltiplas notas)
export const exportarComoCSV = (itens) => {
  const headers = ['Título', 'Conteúdo', 'Categoria', 'Data Criação', 'Data Modificação'];
  const csvContent = [
    headers.join(','),
    ...itens.map(item => [
      `"${item.titulo.replace(/"/g, '""')}"`,
      `"${item.conteudo.replace(/"/g, '""').replace(/<[^>]*>/g, '')}"`,
      `"${typeof item.categoria === 'object' ? item.categoria.nome || '' : item.categoria || ''}"`,
      `"${new Date(item.dataCriacao).toLocaleDateString('pt-BR')}"`,
      `"${new Date(item.dataModificacao).toLocaleDateString('pt-BR')}"`
    ].join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `notas_exportadas_${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Função para imprimir nota
export const imprimirNota = (item) => {
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>${item.titulo}</title>
        <style>
          @media print {
            body { margin: 0; padding: 20px; }
            .no-print { display: none; }
          }
          body { 
            font-family: Arial, sans-serif; 
            margin: 20px; 
            line-height: 1.6;
            color: #333;
          }
          h1 { 
            color: #333; 
            border-bottom: 2px solid #007bff;
            padding-bottom: 10px;
            margin-bottom: 20px;
          }
          .content { 
            margin-bottom: 30px;
          }
          .metadata {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            font-size: 14px;
            color: #666;
          }
          .metadata span {
            display: block;
            margin-bottom: 5px;
          }
          .print-button {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 10px 20px;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <button class="print-button no-print" onclick="window.print()">🖨️ Imprimir</button>
        <h1>${item.titulo}</h1>
        <div class="content">${item.conteudo}</div>
        <div class="metadata">
          <span><strong>Categoria:</strong> ${typeof item.categoria === 'object' ? item.categoria.nome || 'Não definida' : item.categoria || 'Não definida'}</span>
          <span><strong>Criado em:</strong> ${new Date(item.dataCriacao).toLocaleDateString('pt-BR')}</span>
          <span><strong>Modificado em:</strong> ${new Date(item.dataModificacao).toLocaleDateString('pt-BR')}</span>
          <span><strong>Impresso em:</strong> ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}</span>
        </div>
      </body>
    </html>
  `);
  printWindow.document.close();
};

// Função principal de exportação com múltiplas opções
export const exportarNota = (item, formato = 'texto') => {
  switch (formato.toLowerCase()) {
    case 'texto':
    case 'txt':
      exportarComoTexto(item);
      break;
    case 'json':
      exportarComoJSON(item);
      break;
    case 'html':
      exportarComoHTML(item);
      break;
    default:
      exportarComoTexto(item);
  }
};

// Função para mostrar modal de opções de exportação
export const mostrarOpcoesExportacao = (item, onExportar) => {
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
  `;

  const content = document.createElement('div');
  content.style.cssText = `
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    max-width: 400px;
    width: 90%;
  `;

  content.innerHTML = `
    <h3 style="margin: 0 0 20px 0; color: #333;">Exportar Nota</h3>
    <p style="margin: 0 0 20px 0; color: #666;">Escolha o formato de exportação:</p>
    
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <button onclick="this.parentElement.parentElement.parentElement.remove(); window.exportarNota('${item.id}', 'texto')" 
              style="padding: 12px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer; text-align: left;">
        📄 Texto (.txt)
      </button>
      <button onclick="this.parentElement.parentElement.parentElement.remove(); window.exportarNota('${item.id}', 'json')" 
              style="padding: 12px; background: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer; text-align: left;">
        📊 JSON (.json)
      </button>
      <button onclick="this.parentElement.parentElement.parentElement.remove(); window.exportarNota('${item.id}', 'html')" 
              style="padding: 12px; background: #ffc107; color: #333; border: none; border-radius: 5px; cursor: pointer; text-align: left;">
        🌐 HTML (.html)
      </button>
      <button onclick="this.parentElement.parentElement.parentElement.remove(); window.imprimirNota('${item.id}')" 
              style="padding: 12px; background: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer; text-align: left;">
        🖨️ Imprimir
      </button>
    </div>
    
    <button onclick="this.parentElement.parentElement.remove()" 
            style="margin-top: 20px; padding: 8px 16px; background: #dc3545; color: white; border: none; border-radius: 5px; cursor: pointer; width: 100%;">
      Cancelar
    </button>
  `;

  modal.appendChild(content);
  document.body.appendChild(modal);

  // Adicionar funções ao window temporariamente
  window.exportarNota = (itemId, formato) => {
    const itemData = item; // Usar o item passado como parâmetro
    exportarNota(itemData, formato);
  };
  
  window.imprimirNota = (itemId) => {
    const itemData = item; // Usar o item passado como parâmetro
    imprimirNota(itemData);
  };

  // Fechar modal ao clicar fora
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
}; 