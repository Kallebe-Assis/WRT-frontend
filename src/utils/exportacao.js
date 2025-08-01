// Utilitário para exportação de notas em diferentes formatos

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, ImageRun, Table, TableRow, TableCell, BorderStyle, WidthType } from 'docx';

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

// Função para converter HTML para elementos do DOCX
const converterHTMLParaDOCX = (html) => {
  // Usar DOMParser se disponível, senão criar um elemento temporário
  let parser;
  let doc;
  
  try {
    parser = new DOMParser();
    doc = parser.parseFromString(html, 'text/html');
  } catch (error) {
    // Fallback: criar elemento temporário
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    doc = { body: tempDiv };
  }

  const elementos = [];

  const processarElemento = (elemento) => {
    const tagName = elemento.tagName ? elemento.tagName.toLowerCase() : '';
    const texto = elemento.textContent || '';
    const children = Array.from(elemento.children || []);

    switch (tagName) {
      case 'h1':
        return new Paragraph({
          text: texto,
          heading: HeadingLevel.HEADING_1,
          spacing: { after: 200, before: 200 }
        });
      case 'h2':
        return new Paragraph({
          text: texto,
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 200, before: 200 }
        });
      case 'h3':
        return new Paragraph({
          text: texto,
          heading: HeadingLevel.HEADING_3,
          spacing: { after: 200, before: 200 }
        });
      case 'p':
        if (children.length === 0) {
          return new Paragraph({
            text: texto,
            spacing: { after: 200 }
          });
        } else {
          const runs = [];
          processarFilhos(elemento, runs);
          return new Paragraph({
            children: runs,
            spacing: { after: 200 }
          });
        }
      case 'ul':
      case 'ol':
        const listItems = [];
        children.forEach((li, index) => {
          const listItem = new Paragraph({
            text: li.textContent,
            bullet: tagName === 'ul' ? { level: 0 } : { level: 0, type: 'number' },
            spacing: { after: 100 }
          });
          listItems.push(listItem);
        });
        return listItems;
      case 'blockquote':
        return new Paragraph({
          text: texto,
          spacing: { after: 200, before: 200 },
          indent: { left: 720 } // 0.5 inch
        });
      case 'table':
        return processarTabela(elemento);
      default:
        if (children.length > 0) {
          const runs = [];
          processarFilhos(elemento, runs);
          return new Paragraph({
            children: runs,
            spacing: { after: 200 }
          });
        } else {
          return new Paragraph({
            text: texto,
            spacing: { after: 200 }
          });
        }
    }
  };

  const processarFilhos = (elemento, runs) => {
    Array.from(elemento.childNodes || []).forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        if (node.textContent.trim()) {
          runs.push(new TextRun({ text: node.textContent }));
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const tagName = node.tagName ? node.tagName.toLowerCase() : '';
        const texto = node.textContent || '';
        
        switch (tagName) {
          case 'strong':
          case 'b':
            runs.push(new TextRun({ text: texto, bold: true }));
            break;
          case 'em':
          case 'i':
            runs.push(new TextRun({ text: texto, italics: true }));
            break;
          case 'u':
            runs.push(new TextRun({ text: texto, underline: {} }));
            break;
          case 's':
          case 'strike':
            runs.push(new TextRun({ text: texto, strike: {} }));
            break;
          case 'code':
            runs.push(new TextRun({ 
              text: texto, 
              font: 'Courier New',
              size: 20
            }));
            break;
          default:
            runs.push(new TextRun({ text: texto }));
        }
      }
    });
  };

  const processarTabela = (tableElement) => {
    const rows = Array.from(tableElement.querySelectorAll ? tableElement.querySelectorAll('tr') : []);
    const tableRows = rows.map(row => {
      const cells = Array.from(row.querySelectorAll ? row.querySelectorAll('td, th') : []);
      const tableCells = cells.map(cell => {
        const isHeader = cell.tagName ? cell.tagName.toLowerCase() === 'th' : false;
        return new TableCell({
          children: [new Paragraph({
            text: cell.textContent,
            ...(isHeader && { bold: true })
          })],
          borders: {
            top: { style: BorderStyle.SINGLE, size: 1 },
            bottom: { style: BorderStyle.SINGLE, size: 1 },
            left: { style: BorderStyle.SINGLE, size: 1 },
            right: { style: BorderStyle.SINGLE, size: 1 }
          }
        });
      });
      return new TableRow({ children: tableCells });
    });

    return new Table({
      rows: tableRows,
      width: { size: 100, type: WidthType.PERCENTAGE }
    });
  };

  // Processar todos os elementos do body
  const body = doc.body;
  const elementosProcessados = [];

  Array.from(body.childNodes || []).forEach(node => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const elemento = processarElemento(node);
      if (Array.isArray(elemento)) {
        elementosProcessados.push(...elemento);
      } else {
        elementosProcessados.push(elemento);
      }
    }
  });

  return elementosProcessados;
};

// Função para exportar nota para PDF com formatação preservada
export const exportarParaPDF = async (nota) => {
  try {
    // Criar um elemento temporário para renderizar o conteúdo formatado
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.top = '0';
    tempDiv.style.width = '800px';
    tempDiv.style.padding = '40px';
    tempDiv.style.fontFamily = 'Arial, sans-serif';
    tempDiv.style.fontSize = '14px';
    tempDiv.style.lineHeight = '1.6';
    tempDiv.style.backgroundColor = 'white';
    tempDiv.style.color = 'black';
    tempDiv.style.border = '1px solid #ccc';
    tempDiv.style.borderRadius = '8px';
    
    // Adicionar conteúdo da nota com formatação preservada
    tempDiv.innerHTML = `
      <div style="margin-bottom: 30px;">
        <h1 style="color: #333; margin-bottom: 15px; font-size: 28px; font-weight: bold; border-bottom: 3px solid #007bff; padding-bottom: 10px;">
          ${nota.titulo || 'Nota sem título'}
        </h1>
        <div style="color: #666; margin-bottom: 20px; font-size: 14px;">
          <strong>Categoria:</strong> ${nota.categoria || nota.topico || 'Sem categoria'} | 
          <strong>Data:</strong> ${new Date(nota.dataCriacao).toLocaleDateString('pt-BR')}
        </div>
      </div>
      <div style="margin-bottom: 30px; line-height: 1.8;">
        ${nota.conteudo || 'Sem conteúdo'}
      </div>
      <div style="margin-top: 40px; padding-top: 20px; border-top: 2px solid #eee; font-size: 12px; color: #999;">
        <p style="text-align: center; margin: 0;">
          Exportado do WRTmind em ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}
        </p>
      </div>
    `;
    
    document.body.appendChild(tempDiv);
    
    // Converter para canvas com melhor qualidade
    const canvas = await html2canvas(tempDiv, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      width: 800,
      height: tempDiv.scrollHeight
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
    const fileName = `${nota.titulo?.replace(/[^a-z0-9]/gi, '_') || 'nota'}_${new Date().getTime()}.pdf`;
    pdf.save(fileName);
    
    return { success: true, message: 'PDF exportado com sucesso!' };
  } catch (error) {
    console.error('Erro ao exportar para PDF:', error);
    return { success: false, message: 'Erro ao exportar para PDF: ' + error.message };
  }
};

// Função para exportar nota para DOCX com formatação preservada
export const exportarParaDOCX = async (nota) => {
  try {
    // Converter HTML para elementos do DOCX
    const elementosConteudo = converterHTMLParaDOCX(nota.conteudo || '');

    // Criar documento DOCX
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            text: nota.titulo || 'Nota sem título',
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: {
              after: 400,
              before: 200
            }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Categoria: ${nota.categoria || nota.topico || 'Sem categoria'}`,
                bold: true,
                size: 24
              })
            ],
            spacing: {
              after: 200
            }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Data: ${new Date(nota.dataCriacao).toLocaleDateString('pt-BR')}`,
                bold: true,
                size: 24
              })
            ],
            spacing: {
              after: 400
            }
          }),
          ...elementosConteudo,
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
              before: 600
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
    link.download = `${nota.titulo?.replace(/[^a-z0-9]/gi, '_') || 'nota'}_${new Date().getTime()}.docx`;
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