import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faTrash,
  faExternalLinkAlt,
  faCopy,
  faExpand,
  faFileExport,
  faPrint,
  faStar,
  faFilePdf,
  faFileWord
} from '@fortawesome/free-solid-svg-icons';
import { formatarData } from '../utils/formatacao';
import { exportarParaPDF, exportarParaDOCX } from '../utils/exportacao';
import FullscreenButton from './FullscreenButton';
import { useNotasAPIContext } from '../context/NotasAPIContext';

const Card = styled.div`
  background: linear-gradient(135deg, var(--corFundoCard) 0%, var(--corFundoSecundaria) 100%);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioGrande);
  padding: ${props => props.tipo === 'link' ? '8px' : 'var(--espacamentoMedio)'};
  transition: all var(--transicaoMedia);
  cursor: pointer;
  position: relative;
  box-shadow: var(--sombraLeve);
  overflow: hidden;
  min-height: ${props => props.tipo === 'link' ? '130px' : 'auto'};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
    opacity: 0;
    transition: opacity var(--transicaoRapida);
  }
  
  &:hover {
    border-color: var(--corPrimaria);
    transform: translateY(-4px);
    box-shadow: var(--sombraForte);
    
    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: ${props => props.tipo === 'link' ? '6px' : 'var(--espacamentoPequeno)'};
    margin-bottom: var(--espacamentoPequeno);
    min-height: ${props => props.tipo === 'link' ? '110px' : 'auto'};
  }

  @media (max-width: 480px) {
    padding: ${props => props.tipo === 'link' ? '5px' : 'var(--espacamentoPequeno)'};
    border-radius: var(--bordaRaioMedia);
    min-height: ${props => props.tipo === 'link' ? '90px' : 'auto'};
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.tipo === 'link' ? '4px' : 'var(--espacamentoMedio)'};
`;

const CardTitle = styled.h3`
  font-size: ${props => props.tipo === 'link' ? '12px' : 'var(--tamanhoFonteGrande)'};
  font-weight: 600;
  color: var(--corTextoPrimaria);
  margin: 0;
  flex: 1;
  overflow: ${props => props.tipo === 'link' ? 'visible' : 'hidden'};
  text-overflow: ${props => props.tipo === 'link' ? 'clip' : 'ellipsis'};
  white-space: ${props => props.tipo === 'link' ? 'normal' : 'nowrap'};
  transition: all var(--transicaoRapida);
  max-width: 100%;
  line-height: 1.2;
  max-height: ${props => props.tipo === 'link' ? 'none' : '2.4em'};
  word-wrap: ${props => props.tipo === 'link' ? 'break-word' : 'normal'};
  text-align: ${props => props.tipo === 'link' ? 'center' : 'left'};
  
  ${Card}:hover & {
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
    word-wrap: break-word;
    max-height: none;
  }

  @media (max-width: 768px) {
    font-size: ${props => props.tipo === 'link' ? '11px' : 'var(--tamanhoFonteMedia)'};
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: ${props => props.tipo === 'link' ? '10px' : 'var(--tamanhoFontePequena)'};
    line-height: 1.4;
  }
`;

const CardActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  opacity: 0;
  transition: opacity var(--transicaoRapida);
  
  ${Card}:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    opacity: 1;
    gap: var(--espacamentoPequeno);
  }

  @media (max-width: 480px) {
    gap: var(--espacamentoPequeno);
    flex-wrap: wrap;
  }
`;

const CardActionButton = styled.button`
  background: linear-gradient(135deg, var(--corFundoTerciaria) 0%, var(--corFundoSecundaria) 100%);
  border: 1px solid var(--corBordaPrimaria);
  color: var(--corTextoSecundaria);
  cursor: pointer;
  padding: ${props => props.tipo === 'link' ? '2px' : '6px'};
  border-radius: var(--bordaRaioMedia);
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.tipo === 'link' ? '20px' : '32px'};
  height: ${props => props.tipo === 'link' ? '20px' : '32px'};
  font-size: ${props => props.tipo === 'link' ? '10px' : 'var(--tamanhoFonteMedia)'};
  
  &:hover {
    background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
    color: var(--corTextoClara);
    border-color: var(--corPrimaria);
    transform: scale(1.1);
    box-shadow: var(--sombraLeve);
  }

  @media (max-width: 768px) {
    width: ${props => props.tipo === 'link' ? '20px' : '36px'};
    height: ${props => props.tipo === 'link' ? '20px' : '36px'};
    padding: ${props => props.tipo === 'link' ? '2px' : '8px'};
    min-height: ${props => props.tipo === 'link' ? '20px' : '44px'};
    min-width: ${props => props.tipo === 'link' ? '20px' : '44px'};
    font-size: ${props => props.tipo === 'link' ? '8px' : 'var(--tamanhoFontePequena)'};
  }

  @media (max-width: 480px) {
    width: ${props => props.tipo === 'link' ? '18px' : '32px'};
    height: ${props => props.tipo === 'link' ? '18px' : '32px'};
    padding: ${props => props.tipo === 'link' ? '1px' : '6px'};
    min-height: ${props => props.tipo === 'link' ? '18px' : '32px'};
    min-width: ${props => props.tipo === 'link' ? '18px' : '32px'};
    font-size: ${props => props.tipo === 'link' ? '7px' : 'var(--tamanhoFontePequena)'};
  }
`;

const CardContent = styled.div`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFonteMedia);
  line-height: 1.6;
  margin-bottom: ${props => props.tipo === 'link' ? '4px' : 'var(--espacamentoMedio)'};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${props => props.tipo === 'link' ? '1' : '3'};
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    font-size: var(--tamanhoFontePequena);
    line-height: 1.5;
    margin-bottom: ${props => props.tipo === 'link' ? '4px' : 'var(--espacamentoPequeno)'};
    -webkit-line-clamp: ${props => props.tipo === 'link' ? '1' : '2'};
  }

  @media (max-width: 480px) {
    font-size: var(--tamanhoFontePequena);
    line-height: 1.4;
    -webkit-line-clamp: ${props => props.tipo === 'link' ? '1' : '2'};
  }
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoTerciaria);
  padding-top: ${props => props.tipo === 'link' ? '4px' : 'var(--espacamentoMedio)'};
  border-top: 1px solid var(--corBordaPrimaria);
  gap: ${props => props.tipo === 'link' ? 'var(--espacamentoPequeno)' : 'var(--espacamentoMedio)'};
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding-top: var(--espacamentoPequeno);
    gap: var(--espacamentoPequeno);
    font-size: 10px;
    justify-content: ${props => props.tipo === 'link' ? 'center' : 'space-between'};
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: ${props => props.tipo === 'link' ? 'center' : 'flex-start'};
    gap: var(--espacamentoPequeno);
    text-align: center;
  }
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  flex: 1;
  min-width: 0;
  justify-content: ${props => props.tipo === 'link' ? 'center' : 'flex-start'};

  @media (max-width: 768px) {
    justify-content: ${props => props.tipo === 'link' ? 'center' : 'flex-start'};
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    justify-content: center;
    width: 100%;
  }
`;

const CardDate = styled.span`
  background: var(--corFundoTerciaria);
  padding: 4px 8px;
  border-radius: var(--bordaRaioPequena);
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoSecundaria);
`;

const FavoriteButton = styled.button`
  background: ${props => props.favorito ? 
    'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)' : 
    'linear-gradient(135deg, var(--corFundoTerciaria) 0%, var(--corFundoSecundaria) 100%)'};
  color: ${props => props.favorito ? 'white' : 'var(--corTextoSecundaria)'};
  border: 1px solid ${props => props.favorito ? '#ff6b6b' : 'var(--corBordaPrimaria)'};
  border-radius: var(--bordaRaioMedia);
  padding: 6px;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  
  &:hover {
    background: ${props => props.favorito ? 
      'linear-gradient(135deg, #ee5a52 0%, #ff6b6b 100%)' : 
      'linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%)'};
    color: white;
    border-color: ${props => props.favorito ? '#ee5a52' : 'var(--corPrimaria)'};
    transform: scale(1.1);
    box-shadow: var(--sombraLeve);
  }
`;

const CardTag = styled.span`
  background: ${props => props.cor || 'var(--corPrimaria)'};
  color: white;
  padding: ${props => props.tipo === 'link' ? '2px 6px' : '4px 12px'};
  border-radius: var(--bordaRaioPequena);
  font-size: ${props => props.tipo === 'link' ? '10px' : 'var(--tamanhoFontePequena)'};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: ${props => props.tipo === 'link' ? '80px' : '150px'};
  display: inline-block;
  text-align: center;

  @media (max-width: 768px) {
    max-width: ${props => props.tipo === 'link' ? '60px' : '120px'};
    font-size: ${props => props.tipo === 'link' ? '8px' : '10px'};
    padding: ${props => props.tipo === 'link' ? '1px 4px' : '2px 8px'};
  }

  @media (max-width: 480px) {
    max-width: ${props => props.tipo === 'link' ? '50px' : '100px'};
    font-size: ${props => props.tipo === 'link' ? '7px' : '9px'};
    padding: ${props => props.tipo === 'link' ? '1px 3px' : '2px 6px'};
  }
`;

const ExportDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const ExportButton = styled(CardActionButton)`
  position: relative;
`;

const DropdownMenu = styled.div`
  position: absolute;
  bottom: 100%;
  right: 0;
  background: var(--corFundoPrimaria);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  box-shadow: var(--sombraForte);
  z-index: 1000;
  min-width: 150px;
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(10px)'};
  transition: all var(--transicaoRapida);
  margin-bottom: 5px;
`;

const DropdownItem = styled.button`
  width: 100%;
  padding: 10px 15px;
  background: none;
  border: none;
  color: var(--corTextoSecundaria);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  transition: all var(--transicaoRapida);
  
  &:hover {
    background: var(--corFundoSecundaria);
    color: var(--corTextoPrimaria);
  }
  
  &:first-child {
    border-radius: var(--bordaRaioMedia) var(--bordaRaioMedia) 0 0;
  }
  
  &:last-child {
    border-radius: 0 0 var(--bordaRaioMedia) var(--bordaRaioMedia);
  }
`;

const CardItem = ({
  item,
  tipo,
  onEditar,
  onExcluir,
  onVisualizar,
  onCopiar,
  onExportar,
  onImprimir,
  onTelaCheia,
  onToggleFavorite,
  isFavorite,
  showActions = true
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const { categorias } = useNotasAPIContext();

  // Função para buscar a cor da categoria baseada no nome
  const getCategoriaCor = (categoriaNome) => {
    console.log('🔍 Buscando cor para:', categoriaNome, 'Tipo:', typeof categoriaNome);
    console.log('📝 Item completo:', item);
    console.log('📂 Categorias disponíveis:', categorias);
    
    if (!categoriaNome) return 'var(--corPrimaria)';
    
    // Se a categoria já é um objeto com cor, usar a cor diretamente
    if (typeof categoriaNome === 'object' && categoriaNome.cor) {
      return categoriaNome.cor;
    }
    
    // Se é uma string, buscar a cor no contexto de categorias
    if (typeof categoriaNome === 'string' && Array.isArray(categorias)) {
      const categoria = categorias.find(cat => {
        if (typeof cat === 'object' && cat.nome) {
          return cat.nome === categoriaNome;
        }
        if (typeof cat === 'object' && cat.id) {
          return cat.id === categoriaNome;
        }
        return false;
      });
      
      if (categoria && typeof categoria === 'object' && categoria.cor) {
        console.log(`✅ Cor encontrada: ${categoria.cor} para categoria: ${categoriaNome}`);
        return categoria.cor;
      }
    }
    
    console.log('❌ Usando cor padrão para categoria:', categoriaNome);
    return 'var(--corPrimaria)'; // Cor padrão
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showMenu && !event.target.closest('.export-dropdown')) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  useEffect(() => {
    // Forçar a atualização da cor da categoria quando as categorias mudarem
    // Isso garante que a cor seja atualizada mesmo que o componente não seja recarregado
    // ou se a categoria já foi carregada anteriormente.
    // A lógica de busca agora usa o contexto global, então não precisamos de um estado local
    // para armazenar a cor, mas podemos manter a função para reutilização.
  }, [categorias]);

  const handleClick = (e) => {
    e.stopPropagation();
    if (tipo === 'link') {
      window.open(item.url, '_blank');
    } else {
      onEditar(item);
    }
  };



  const handleEditar = (e) => {
    e.stopPropagation();
    onEditar(item);
  };

  const handleExcluir = (e) => {
    e.stopPropagation();
    if (window.confirm('Tem certeza que deseja excluir este item?')) {
      onExcluir(item.id);
    }
  };

  const handleCopiar = (e) => {
    e.stopPropagation();
    onCopiar(item);
  };

  const handleTelaCheia = (e) => {
    e.stopPropagation();
    onTelaCheia(item);
  };

  const handleImprimir = (e) => {
    e.stopPropagation();
    onImprimir(item);
  };

  const handleExportarPDF = async (e) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
    try {
      const resultado = await exportarParaPDF(item);
      if (!resultado.success) {
        alert(`Erro ao exportar PDF: ${resultado.message}`);
      }
    } catch (error) {
      console.error('Erro ao exportar PDF:', error);
      alert('Erro ao exportar PDF. Tente novamente.');
    }
  };

  const handleExportarDOCX = async (e) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
    try {
      const resultado = await exportarParaDOCX(item);
      if (!resultado.success) {
        alert(`Erro ao exportar DOCX: ${resultado.message}`);
      }
    } catch (error) {
      console.error('Erro ao exportar DOCX:', error);
      alert('Erro ao exportar DOCX. Tente novamente.');
    }
  };

  const getContent = () => {
    if (tipo === 'nota') {
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

      const conteudoLimpo = limparHTML(item.conteudo);
      return conteudoLimpo.length > 150 
        ? `${conteudoLimpo.substring(0, 150)}...`
        : conteudoLimpo;
    } else if (tipo === 'link') {
      // Para links, não mostrar a URL no conteúdo
      return '';
    }
    return '';
  };

  const getTitulo = () => {
    if (tipo === 'nota') {
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

      return limparHTML(item.titulo);
    } else {
      return item.nome;
    }
  };

  const getDate = () => {
    return item.dataCriacao || item.dataModificacao;
  };

  return (
    <Card onClick={handleClick} tipo={tipo}>
      <CardHeader tipo={tipo}>
        <CardTitle
          tipo={tipo}
        >
          {getTitulo()}
        </CardTitle>

      </CardHeader>
      
      {tipo === 'link' && item.imagemUrl && (
        <div style={{ 
          marginBottom: '4px', 
          textAlign: 'center',
          borderRadius: 'var(--bordaRaioMedia)',
          overflow: 'hidden',
          height: '60px',
          width: '100%',
          position: 'relative'
        }}>
          <img 
            src={item.imagemUrl} 
            alt={getTitulo()}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: 'var(--bordaRaioMedia)',
              backgroundColor: 'var(--corFundoSecundaria)'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}
      
      <CardContent tipo={tipo}>
        {getContent()}
      </CardContent>
      
      <CardFooter tipo={tipo}>
        <CardMeta tipo={tipo}>
          {tipo === 'nota' && item.topico && (
            <CardTag tipo={tipo} cor={item.cor}>{item.topico}</CardTag>
          )}
          {tipo === 'nota' && item.categoria && (
            <CardTag tipo={tipo} cor={getCategoriaCor(item.categoria)}>
              {typeof item.categoria === 'object' ? item.categoria.nome || 'Categoria' : item.categoria}
            </CardTag>
          )}
          {tipo === 'link' && item.categoria && (
            <CardTag tipo={tipo} cor={getCategoriaCor(item.categoria)}>
              {typeof item.categoria === 'object' ? item.categoria.nome || 'Categoria' : item.categoria}
            </CardTag>
          )}
        </CardMeta>
        
        <div style={{ 
          display: 'flex', 
          gap: tipo === 'link' ? '4px' : 'var(--espacamentoPequeno)', 
          flexShrink: 0,
          justifyContent: tipo === 'link' ? 'center' : 'flex-end',
          flexWrap: 'wrap'
        }}>
          <CardActionButton
            onClick={handleEditar}
            title="Editar"
            tipo={tipo}
          >
            <FontAwesomeIcon icon={faEdit} />
          </CardActionButton>
          
          <CardActionButton
            onClick={handleExcluir}
            title="Excluir"
            tipo={tipo}
          >
            <FontAwesomeIcon icon={faTrash} />
          </CardActionButton>
          
          {tipo === 'link' && (
            <CardActionButton
              onClick={(e) => {
                e.stopPropagation();
                window.open(item.url, '_blank');
              }}
              title="Abrir link"
              tipo={tipo}
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </CardActionButton>
          )}
          
          {tipo === 'nota' && (
            <>
              <CardActionButton
                onClick={handleCopiar}
                title="Copiar"
                tipo={tipo}
              >
                <FontAwesomeIcon icon={faCopy} />
              </CardActionButton>
              
              {tipo === 'nota' && typeof onTelaCheia === 'function' && (
                <FullscreenButton
                  onClick={handleTelaCheia}
                  isFullscreen={false}
                />
              )}
              
              {onExportar && (
                <ExportDropdown className="export-dropdown">
                  <ExportButton onClick={(e) => {
                    e.stopPropagation();
                    setShowMenu(!showMenu);
                  }} title="Exportar">
                    <FontAwesomeIcon icon={faFileExport} />
                  </ExportButton>
                  <DropdownMenu isOpen={showMenu}>
                    <DropdownItem onClick={(e) => {
                      setShowMenu(false);
                      handleExportarPDF(e);
                    }}>
                      <FontAwesomeIcon icon={faFilePdf} /> PDF
                    </DropdownItem>
                    <DropdownItem onClick={(e) => {
                      setShowMenu(false);
                      handleExportarDOCX(e);
                    }}>
                      <FontAwesomeIcon icon={faFileWord} /> DOCX
                    </DropdownItem>
                  </DropdownMenu>
                </ExportDropdown>
              )}
              
              {onImprimir && (
                <CardActionButton
                  onClick={handleImprimir}
                  title="Imprimir"
                  tipo={tipo}
                >
                  <FontAwesomeIcon icon={faPrint} />
                </CardActionButton>
              )}
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardItem; 