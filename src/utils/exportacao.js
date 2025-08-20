// Utilitário para exportação de notas em diferentes formatos

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell, BorderStyle, WidthType } from 'docx';

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
  // Validar entrada
  if (!html || typeof html !== 'string') {
    return [new Paragraph({ text: 'Sem conteúdo' })];
  }

  // Sanitizar HTML
  const sanitizedHtml = html
    .replace(/<script[^>]*>.*?<\/script>/gi, '') // Remover scripts
    .replace(/<style[^>]*>.*?<\/style>/gi, '') // Remover estilos
    .replace(/<iframe[^>]*>.*?<\/iframe>/gi, '') // Remover iframes
    .replace(/<object[^>]*>.*?<\/object>/gi, '') // Remover objects
    .replace(/<embed[^>]*>/gi, '') // Remover embeds
    .replace(/<applet[^>]*>.*?<\/applet>/gi, '') // Remover applets
    .replace(/<form[^>]*>.*?<\/form>/gi, '') // Remover forms
    .replace(/<input[^>]*>/gi, '') // Remover inputs
    .replace(/<button[^>]*>.*?<\/button>/gi, '') // Remover buttons
    .replace(/<select[^>]*>.*?<\/select>/gi, '') // Remover selects
    .replace(/<textarea[^>]*>.*?<\/textarea>/gi, ''); // Remover textareas

  // Usar DOMParser se disponível, senão criar um elemento temporário
  let parser;
  let doc;
  
  try {
    parser = new DOMParser();
    doc = parser.parseFromString(sanitizedHtml, 'text/html');
  } catch (error) {
    console.warn('Erro ao usar DOMParser, usando fallback:', error);
    // Fallback: criar elemento temporário
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = sanitizedHtml;
    doc = { body: tempDiv };
  }



  const processarElemento = (elemento) => {
    if (!elemento) return null;
    
    const tagName = elemento.tagName ? elemento.tagName.toLowerCase() : '';
    const texto = (elemento.textContent || '').trim();
    const children = Array.from(elemento.children || []);

    // Se não há texto e não há filhos, pular
    if (!texto && children.length === 0) {
      return null;
    }

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
      case 'h4':
      case 'h5':
      case 'h6':
        return new Paragraph({
          text: texto,
          heading: HeadingLevel.HEADING_4,
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
          if (li.textContent && li.textContent.trim()) {
            const listItem = new Paragraph({
              text: li.textContent.trim(),
              bullet: tagName === 'ul' ? { level: 0 } : { level: 0, type: 'number' },
              spacing: { after: 100 }
            });
            listItems.push(listItem);
          }
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
      case 'div':
      case 'section':
      case 'article':
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
      case 'br':
        return new Paragraph({
          text: '',
          spacing: { after: 100 }
        });
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
    if (!elemento || !runs) return;
    
    Array.from(elemento.childNodes || []).forEach(node => {
      if (!node) return;
      
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent?.trim();
        if (text) {
          runs.push(new TextRun({ text }));
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const tagName = node.tagName ? node.tagName.toLowerCase() : '';
        const texto = (node.textContent || '').trim();
        
        if (!texto) return;
        
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
          case 'mark':
            runs.push(new TextRun({ 
              text: texto, 
              highlight: 'yellow'
            }));
            break;
          case 'sub':
            runs.push(new TextRun({ 
              text: texto, 
              subScript: true
            }));
            break;
          case 'sup':
            runs.push(new TextRun({ 
              text: texto, 
              superScript: true
            }));
            break;
          case 'span':
            // Processar atributos de estilo se existirem
            const style = node.getAttribute('style');
            if (style) {
              const isBold = style.includes('font-weight: bold') || style.includes('font-weight:bold');
              const isItalic = style.includes('font-style: italic') || style.includes('font-style:italic');
              const isUnderline = style.includes('text-decoration: underline') || style.includes('text-decoration:underline');
              
              runs.push(new TextRun({ 
                text: texto, 
                bold: isBold,
                italics: isItalic,
                underline: isUnderline ? {} : undefined
              }));
            } else {
              runs.push(new TextRun({ text: texto }));
            }
            break;
          default:
            runs.push(new TextRun({ text: texto }));
        }
      }
    });
  };

  const processarTabela = (tableElement) => {
    if (!tableElement) return null;
    
    try {
      const rows = Array.from(tableElement.querySelectorAll ? tableElement.querySelectorAll('tr') : []);
      
      if (rows.length === 0) return null;
      
      const tableRows = rows.map(row => {
        const cells = Array.from(row.querySelectorAll ? row.querySelectorAll('td, th') : []);
        
        if (cells.length === 0) return null;
        
        const tableCells = cells.map(cell => {
          const isHeader = cell.tagName ? cell.tagName.toLowerCase() === 'th' : false;
          const cellText = (cell.textContent || '').trim();
          
          return new TableCell({
            children: [new Paragraph({
              text: cellText || ' ',
              ...(isHeader && { bold: true })
            })],
            borders: {
              top: { style: BorderStyle.SINGLE, size: 1 },
              bottom: { style: BorderStyle.SINGLE, size: 1 },
              left: { style: BorderStyle.SINGLE, size: 1 },
              right: { style: BorderStyle.SINGLE, size: 1 }
            }
          });
        }).filter(cell => cell !== null);
        
        return new TableRow({ children: tableCells });
      }).filter(row => row !== null);
      
      if (tableRows.length === 0) return null;
      
      return new Table({
        rows: tableRows,
        width: { size: 100, type: WidthType.PERCENTAGE }
      });
    } catch (error) {
      console.warn('Erro ao processar tabela:', error);
      return null;
    }
  };

  // Processar todos os elementos do body
  const body = doc.body;
  const elementosProcessados = [];

  try {
    Array.from(body.childNodes || []).forEach(node => {
      if (node && node.nodeType === Node.ELEMENT_NODE) {
        const elemento = processarElemento(node);
        if (elemento) {
          if (Array.isArray(elemento)) {
            elementosProcessados.push(...elemento.filter(e => e !== null));
          } else {
            elementosProcessados.push(elemento);
          }
        }
      }
    });
  } catch (error) {
    console.warn('Erro ao processar elementos HTML:', error);
    // Retornar pelo menos um parágrafo com o texto
    const textContent = body.textContent || 'Sem conteúdo';
    elementosProcessados.push(new Paragraph({ text: textContent }));
  }

  // Se não há elementos processados, retornar um parágrafo padrão
  if (elementosProcessados.length === 0) {
    elementosProcessados.push(new Paragraph({ text: 'Sem conteúdo' }));
  }

  return elementosProcessados;
};

// Função para exportar nota para PDF com formatação preservada
export const exportarParaPDF = async (nota) => {
  let tempDiv = null;
  
  try {
    // Validar dados da nota
    if (!nota) {
      throw new Error('Dados da nota não fornecidos');
    }

    // Sanitizar e preparar conteúdo
    const titulo = (nota.titulo || 'Nota sem título').replace(/[<>]/g, '');
    const categoria = (nota.categoria || nota.topico || 'Sem categoria').replace(/[<>]/g, '');
    const dataCriacao = nota.dataCriacao ? new Date(nota.dataCriacao) : new Date();
    const conteudo = nota.conteudo || 'Sem conteúdo';

    // Criar elemento temporário para renderizar o conteúdo formatado
    tempDiv = document.createElement('div');
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
    tempDiv.style.overflow = 'visible';
    tempDiv.style.boxSizing = 'border-box';
    tempDiv.style.height = 'auto';
    tempDiv.style.minHeight = '600px';
    tempDiv.style.display = 'block';
    tempDiv.style.visibility = 'visible';
    tempDiv.style.zIndex = '-9999'; // Garantir que fique atrás de tudo
    tempDiv.style.pointerEvents = 'none'; // Não interferir com interações
    
    // Adicionar conteúdo da nota com formatação preservada
    tempDiv.innerHTML = `
      <div style="margin-bottom: 30px;">
        <h1 style="color: #333; margin-bottom: 15px; font-size: 28px; font-weight: bold; border-bottom: 2px solid #007bff; padding-bottom: 10px; line-height: 1.2;">
          ${titulo}
        </h1>
        <div style="color: #666; margin-bottom: 20px; font-size: 14px; line-height: 1.4;">
          <strong>Categoria:</strong> ${categoria} | 
          <strong>Data:</strong> ${dataCriacao.toLocaleDateString('pt-BR')}
        </div>
      </div>
      <div style="margin-bottom: 30px; line-height: 1.8; word-wrap: break-word; overflow-wrap: break-word; text-align: justify;">
        ${conteudo}
      </div>
      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 11px; color: #888;">
        <p style="text-align: center; margin: 0; line-height: 1.4;">
          Exportado do WRTmind em ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}
        </p>
      </div>
    `;
    
    // Adicionar ao DOM de forma isolada
    document.body.appendChild(tempDiv);
    
    // Aguardar renderização completa com timeout maior
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Calcular altura real do conteúdo
    const computedHeight = Math.max(tempDiv.scrollHeight, tempDiv.offsetHeight, 800);
    console.log('Altura calculada do conteúdo:', computedHeight);
    
    // Converter para canvas com configurações otimizadas e isoladas
    const canvas = await html2canvas(tempDiv, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      width: 800,
      height: computedHeight,
      scrollX: 0,
      scrollY: 0,
      windowWidth: 800,
      windowHeight: computedHeight,
      foreignObjectRendering: false,
      removeContainer: false,
      ignoreElements: (element) => {
        return element.tagName === 'SCRIPT' || 
               element.tagName === 'STYLE' || 
               element.classList.contains('no-export') ||
       
               element.classList.contains('tox-edit-area') ||
               element.classList.contains('tox-edit-focus');
      }
    });
    
    // Verificar se o canvas foi criado corretamente
    if (!canvas || canvas.width === 0 || canvas.height === 0) {
      console.error('Canvas inválido:', canvas);
      throw new Error('Falha ao gerar imagem do conteúdo');
    }
    
    console.log('Canvas gerado com sucesso:', {
      width: canvas.width,
      height: canvas.height
    });
    
    // Criar PDF com configurações otimizadas e margens
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    // Definir margens (em mm)
    const marginTop = 20;
    const marginBottom = 30;
    const marginLeft = 20;
    const marginRight = 20;
    
    // Calcular área útil da página
    const pageWidth = 210; // Largura A4
    const pageHeight = 295; // Altura A4
    const usableWidth = pageWidth - marginLeft - marginRight;
    const usableHeight = pageHeight - marginTop - marginBottom;
    
    // Calcular dimensões da imagem respeitando margens
    const imgWidth = usableWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    // Se a altura da imagem for menor que a altura útil, adicionar apenas uma página
    if (imgHeight <= usableHeight) {
      pdf.addImage(canvas, 'PNG', marginLeft, marginTop, imgWidth, imgHeight);
      console.log('PDF com uma página, altura da imagem:', imgHeight, 'mm');
    } else {
      // Se a altura da imagem for maior que a altura útil, dividir em múltiplas páginas
      let heightLeft = imgHeight;
      let currentPage = 0;
      
      while (heightLeft > 0) {
        if (currentPage > 0) {
          pdf.addPage();
        }
        
        const pageHeight = Math.min(usableHeight, heightLeft);
        const sourceY = imgHeight - heightLeft;
        const sourceHeight = pageHeight;
        
        // Converter coordenadas de mm para pixels do canvas
        const canvasHeight = canvas.height;
        const sourceYPixels = Math.round((sourceY / imgHeight) * canvasHeight);
        const sourceHeightPixels = Math.round((sourceHeight / imgHeight) * canvasHeight);
        
        pdf.addImage(
          canvas, 
          'PNG', 
          marginLeft, 
          marginTop, 
          imgWidth, 
          pageHeight,
          undefined,
          undefined,
          0,
          sourceYPixels,
          sourceHeightPixels
        );
        
        heightLeft -= usableHeight;
        currentPage++;
      }
      
      console.log(`PDF com ${currentPage} páginas, altura total: ${imgHeight}mm`);
    }
    
    // Gerar nome do arquivo seguro
    const safeTitle = titulo.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_').substring(0, 50);
    const timestamp = new Date().getTime();
    const fileName = `${safeTitle || 'nota'}_${timestamp}.pdf`;
    
    // Salvar PDF
    pdf.save(fileName);
    
    console.log('PDF exportado com sucesso:', fileName);
    return { success: true, message: 'PDF exportado com sucesso!' };
    
  } catch (error) {
    console.error('Erro detalhado ao exportar para PDF:', error);
    
    // Tentar método alternativo se o html2canvas falhar
    try {
      console.log('Tentando método alternativo de exportação...');
      
      // Criar PDF simples com texto e margens
      const pdf = new jsPDF('p', 'mm', 'a4');
      const titulo = nota.titulo || 'Nota sem título';
      const conteudo = nota.conteudo || 'Sem conteúdo';
      
      // Definir margens
      const marginTop = 20;
      const marginBottom = 30;
      const marginLeft = 20;
      const marginRight = 20;
      
      // Calcular área útil
      const pageWidth = 210;
      const pageHeight = 295;
      const usableWidth = pageWidth - marginLeft - marginRight;
      const usableHeight = pageHeight - marginTop - marginBottom;
      
      // Configurar fonte para título
      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'bold');
      
      // Quebrar título em linhas se necessário
      const titleLines = pdf.splitTextToSize(titulo, usableWidth);
      let y = marginTop + 10;
      
      // Adicionar título
      titleLines.forEach(line => {
        pdf.text(line, marginLeft, y);
        y += 8;
      });
      
      // Configurar fonte para conteúdo
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      
      // Quebrar texto em linhas
      const lineHeight = 7;
      y += 10; // Espaço após título
      
      // Remover tags HTML do conteúdo
      const textoLimpo = conteudo.replace(/<[^>]*>/g, '');
      const words = textoLimpo.split(' ');
      let line = '';
      
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + ' ';
        const testWidth = pdf.getTextWidth(testLine);
        
        if (testWidth > usableWidth && i > 0) {
          pdf.text(line, marginLeft, y);
          line = words[i] + ' ';
          y += lineHeight;
          
          // Nova página se necessário
          if (y > usableHeight + marginTop) {
            pdf.addPage();
            y = marginTop + 10;
          }
        } else {
          line = testLine;
        }
      }
      
      // Adicionar última linha
      if (line) {
        pdf.text(line, marginLeft, y);
      }
      
      // Salvar PDF
      const safeTitle = titulo.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_').substring(0, 50);
      const timestamp = new Date().getTime();
      const fileName = `${safeTitle || 'nota'}_${timestamp}.pdf`;
      
      pdf.save(fileName);
      
      console.log('PDF exportado com método alternativo:', fileName);
      return { success: true, message: 'PDF exportado com sucesso (método alternativo)!' };
      
    } catch (fallbackError) {
      console.error('Erro no método alternativo:', fallbackError);
      return { 
        success: false, 
        message: 'Erro ao exportar para PDF. Tente novamente ou use outro formato de exportação.' 
      };
    }
  } finally {
    // Garantir que o elemento temporário seja removido
    if (tempDiv && tempDiv.parentNode) {
      try {
        document.body.removeChild(tempDiv);
        console.log('Elemento temporário removido com sucesso');
      } catch (removeError) {
        console.warn('Erro ao remover elemento temporário:', removeError);
      }
    }
  }
};

// Função para exportar nota para DOCX com formatação preservada
export const exportarParaDOCX = async (nota) => {
  try {
    // Validar dados da nota
    if (!nota) {
      throw new Error('Dados da nota não fornecidos');
    }

    // Sanitizar dados
    const titulo = (nota.titulo || 'Nota sem título').replace(/[<>]/g, '');
    const categoria = (nota.categoria || nota.topico || 'Sem categoria').replace(/[<>]/g, '');
    const dataCriacao = nota.dataCriacao ? new Date(nota.dataCriacao) : new Date();
    const conteudo = nota.conteudo || 'Sem conteúdo';

    // Converter HTML para elementos do DOCX
    const elementosConteudo = converterHTMLParaDOCX(conteudo);

    // Criar documento DOCX
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            text: titulo,
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
                text: `Categoria: ${categoria}`,
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
                text: `Data: ${dataCriacao.toLocaleDateString('pt-BR')}`,
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
    
    // Gerar nome do arquivo seguro
    const safeTitle = titulo.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_').substring(0, 50);
    const timestamp = new Date().getTime();
    const fileName = `${safeTitle || 'nota'}_${timestamp}.docx`;
    
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    console.log('DOCX exportado com sucesso:', fileName);
    return { success: true, message: 'DOCX exportado com sucesso!' };
  } catch (error) {
    console.error('Erro detalhado ao exportar para DOCX:', error);
    
    // Tentar método alternativo se falhar
    try {
      console.log('Tentando método alternativo de exportação DOCX...');
      
      // Criar documento DOCX simples
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
              text: nota.conteudo || 'Sem conteúdo',
              spacing: {
                after: 200
              }
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Exportado do WRTmind em ${new Date().toLocaleDateString('pt-BR')}`,
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
      
      // Gerar arquivo
      const blob = await Packer.toBlob(doc);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      
      const safeTitle = (nota.titulo || 'nota').replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_').substring(0, 50);
      const timestamp = new Date().getTime();
      const fileName = `${safeTitle}_${timestamp}.docx`;
      
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      console.log('DOCX exportado com método alternativo:', fileName);
      return { success: true, message: 'DOCX exportado com sucesso (método alternativo)!' };
      
    } catch (fallbackError) {
      console.error('Erro no método alternativo DOCX:', fallbackError);
      return { 
        success: false, 
        message: 'Erro ao exportar para DOCX. Tente novamente ou use outro formato de exportação.' 
      };
    }
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