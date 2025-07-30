// Utilitário para exportação de notas em diferentes formatos

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from 'docx';

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

// Função para exportar nota para PDF
export const exportarParaPDF = async (nota) => {
  try {
    // Função para limpar HTML e extrair texto puro
    const limparHTML = (html) => {
      if (!html) return '';
      
      // Criar elemento temporário para extrair texto
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      
      // Extrair texto puro
      let texto = tempDiv.textContent || tempDiv.innerText || '';
      
      // Limpar espaços extras e quebras de linha
      texto = texto.replace(/\s+/g, ' ').trim();
      
      return texto;
    };

    // Limpar o conteúdo HTML
    const conteudoLimpo = limparHTML(nota.conteudo);
    const tituloLimpo = limparHTML(nota.titulo);

    // Criar um elemento temporário para renderizar o conteúdo
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.top = '0';
    tempDiv.style.width = '800px';
    tempDiv.style.padding = '20px';
    tempDiv.style.fontFamily = 'Arial, sans-serif';
    tempDiv.style.fontSize = '12px';
    tempDiv.style.lineHeight = '1.6';
    tempDiv.style.backgroundColor = 'white';
    tempDiv.style.color = 'black';
    
    // Adicionar conteúdo da nota (texto limpo)
    tempDiv.innerHTML = `
      <div style="margin-bottom: 20px;">
        <h1 style="color: #333; margin-bottom: 10px; font-size: 24px;">${tituloLimpo || 'Nota sem título'}</h1>
        <p style="color: #666; margin-bottom: 15px; font-size: 14px;">
          <strong>Categoria:</strong> ${nota.categoria || nota.topico || 'Sem categoria'} | 
          <strong>Data:</strong> ${new Date(nota.dataCriacao).toLocaleDateString('pt-BR')}
        </p>
      </div>
      <div style="margin-bottom: 20px; white-space: pre-wrap;">
        ${conteudoLimpo || 'Sem conteúdo'}
      </div>
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ccc; font-size: 10px; color: #999;">
        <p>Exportado do WRTmind em ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}</p>
      </div>
    `;
    
    document.body.appendChild(tempDiv);
    
    // Converter para canvas
    const canvas = await html2canvas(tempDiv, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff'
    });
    
    // Remover elemento temporário
    document.body.removeChild(tempDiv);
    
    // Criar PDF
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    
    let position = 0;
    
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
    
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    
    // Salvar PDF
    const fileName = `${tituloLimpo || 'nota'}_${new Date().getTime()}.pdf`;
    pdf.save(fileName);
    
    return { success: true, message: 'PDF exportado com sucesso!' };
  } catch (error) {
    console.error('Erro ao exportar para PDF:', error);
    return { success: false, message: 'Erro ao exportar para PDF: ' + error.message };
  }
};

// Função para exportar nota para DOCX
export const exportarParaDOCX = async (nota) => {
  try {
    // Função para limpar HTML e extrair texto puro
    const limparHTML = (html) => {
      if (!html) return '';
      
      // Criar elemento temporário para extrair texto
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      
      // Extrair texto puro
      let texto = tempDiv.textContent || tempDiv.innerText || '';
      
      // Limpar espaços extras e quebras de linha
      texto = texto.replace(/\s+/g, ' ').trim();
      
      return texto;
    };

    // Limpar o conteúdo HTML
    const conteudoLimpo = limparHTML(nota.conteudo);
    const tituloLimpo = limparHTML(nota.titulo);

    // Criar documento DOCX
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            text: tituloLimpo || 'Nota sem título',
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: {
              after: 200,
              before: 200
            }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Categoria: ${nota.categoria || nota.topico || 'Sem categoria'}`,
                bold: true
              })
            ],
            spacing: {
              after: 100
            }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Data: ${new Date(nota.dataCriacao).toLocaleDateString('pt-BR')}`,
                bold: true
              })
            ],
            spacing: {
              after: 200
            }
          }),
          new Paragraph({
            text: conteudoLimpo || 'Sem conteúdo',
            spacing: {
              after: 300
            }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Exportado do WRTmind em ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}`,
                size: 20,
                color: '666666'
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: {
              before: 400
            }
          })
        ]
      }]
    });
    
    // Gerar arquivo usando blob
    const blob = await Packer.toBlob(doc);
    
    // Criar URL e download
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${tituloLimpo || 'nota'}_${new Date().getTime()}.docx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    return { success: true, message: 'DOCX exportado com sucesso!' };
  } catch (error) {
    console.error('Erro ao exportar para DOCX:', error);
    return { success: false, message: 'Erro ao exportar para DOCX: ' + error.message };
  }
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