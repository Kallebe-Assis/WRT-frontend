import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, 
  faEdit, 
  faTrash, 
  faCopy, 
  faShare,
  faWhatsapp,
  faTelegram,
  faEnvelope,
  faDownload,
  faPrint,
  faBookmark,
  faBookmark as faBookmarkSolid,
  faHeart,
  faHeart as faHeartSolid,
  faExpand,
  faCompress,
  faFont,
  faPalette,
  faSearch,
  faUndo,
  faRedo,
  faSave,
  faEye,
  faEyeSlash,
  faCalendarAlt,
  faTag,
  faClock,
  faUser,
  faStar,
  faStar as faStarSolid,
  faShareAlt,
  faLink,
  faQrcode,
  faFileExport,
  faFileImport,
  faMagic,
  faRocket,
  faLightbulb,
  faBrain,
  faWandMagicSparkles
} from '@fortawesome/free-solid-svg-icons';
import { 
  faWhatsapp as faWhatsappBrand,
  faTelegram as faTelegramBrand,
  faTwitter,
  faFacebook,
  faLinkedin,
  faDiscord,
  faSlack
} from '@fortawesome/free-brands-svg-icons';
import { useNotasAPIContext } from '../context/NotasAPIContext';
import {
  formatarData,
  copiarParaClipboard
} from '../utils/formatacao';

// Animações
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

const slideIn = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 5px rgba(102, 126, 234, 0.3); }
  50% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.6); }
`;

// Styled Components
const FullScreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: ${fadeIn} 0.5s ease-out;
`;

const FullScreenContainer = styled.div`
  background: var(--corFundoTerciaria);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 1200px;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  animation: ${slideIn} 0.5s ease-out;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: ${float} 3s ease-in-out infinite;
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 10px;
  z-index: 1;
`;

const ActionButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  &.danger:hover {
    background: rgba(255, 59, 48, 0.8);
    animation: ${pulse} 0.6s ease-in-out;
  }

  &.primary:hover {
    background: rgba(52, 199, 89, 0.8);
    animation: ${glow} 1s ease-in-out infinite;
  }
`;

const Content = styled.div`
  padding: 30px;
  max-height: calc(90vh - 120px);
  overflow-y: auto;
  position: relative;
`;

const NoteContent = styled.div`
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--corTextoPrimaria);
  background: var(--corFundoSecundaria);
  padding: 30px;
  border-radius: 15px;
  border-left: 5px solid var(--corPrimaria);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--corPrimaria), var(--corSecundaria), var(--corPrimaria));
    background-size: 200% 100%;
    animation: gradient 3s ease infinite;
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const FloatingToolbar = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 10000;
`;

const FloatingButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  font-size: 1.2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.2) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s;
  }

  &:hover::before {
    transform: translateX(100%);
  }

  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    animation: ${pulse} 0.6s ease-in-out;
  }

  &.share {
    background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  }

  &.favorite {
    background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
  }

  &.export {
    background: linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%);
  }
`;

const ShareModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--corFundoTerciaria);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  z-index: 10001;
  animation: ${fadeIn} 0.3s ease-out;
  min-width: 400px;
`;

const ShareGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 15px;
  margin-top: 20px;
`;

const ShareButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 15px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: var(--corFundoSecundaria);
  color: var(--corTextoSecundaria);

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  &.whatsapp:hover {
    background: #25D366;
    color: white;
  }

  &.telegram:hover {
    background: #0088cc;
    color: white;
  }

  &.email:hover {
    background: #EA4335;
    color: white;
  }

  &.copy:hover {
    background: var(--corPrimaria);
    color: white;
  }
`;

const Metadata = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
  padding: 20px;
  background: var(--corFundoSecundaria);
  border-radius: 15px;
  border: 1px solid var(--corBordaPrimaria);
`;

const MetadataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--corTextoSecundaria);
  font-size: 0.9rem;

  svg {
    color: var(--corPrimaria);
  }
`;

const Badge = styled.span`
  background: ${props => props.background || 'var(--corPrimaria)'};
  color: ${props => props.color || 'white'};
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const NotaTelaCheia = ({ nota, onFechar, onEditar, onExcluir }) => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const contentRef = useRef(null);

  const { adicionarNota, atualizarNota } = useNotasAPIContext();

  useEffect(() => {
    // Carregar estado de favorito e bookmark do localStorage
    const favorites = JSON.parse(localStorage.getItem('notasFavoritas') || '[]');
    const bookmarks = JSON.parse(localStorage.getItem('notasBookmarks') || '[]');
    
    setIsFavorite(favorites.includes(nota.id || nota._id));
    setIsBookmarked(bookmarks.includes(nota.id || nota._id));
  }, [nota]);

  const handleShare = async (platform) => {
    const texto = `${nota.titulo}\n\n${nota.conteudo}\n\nCompartilhado via WRTmind`;
    const url = window.location.href;

    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`);
        break;
      case 'telegram':
        window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(texto)}`);
        break;
      case 'email':
        window.open(`mailto:?subject=${encodeURIComponent(nota.titulo)}&body=${encodeURIComponent(texto)}`);
        break;
      case 'copy':
        await copiarParaClipboard(texto);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
      default:
        break;
    }
    setShowShareModal(false);
  };

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('notasFavoritas') || '[]');
    const notaId = nota.id || nota._id;
    
    if (isFavorite) {
      const newFavorites = favorites.filter(id => id !== notaId);
      localStorage.setItem('notasFavoritas', JSON.stringify(newFavorites));
    } else {
      favorites.push(notaId);
      localStorage.setItem('notasFavoritas', JSON.stringify(favorites));
    }
    
    setIsFavorite(!isFavorite);
  };

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('notasBookmarks') || '[]');
    const notaId = nota.id || nota._id;
    
    if (isBookmarked) {
      const newBookmarks = bookmarks.filter(id => id !== notaId);
      localStorage.setItem('notasBookmarks', JSON.stringify(newBookmarks));
    } else {
      bookmarks.push(notaId);
      localStorage.setItem('notasBookmarks', JSON.stringify(bookmarks));
    }
    
    setIsBookmarked(!isBookmarked);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>${nota.titulo}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; }
            h1 { color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; }
            .content { line-height: 1.6; margin-top: 20px; }
            .metadata { margin-top: 30px; padding: 15px; background: #f5f5f5; border-radius: 8px; }
          </style>
        </head>
        <body>
          <h1>${nota.titulo}</h1>
          <div class="content">${nota.conteudo}</div>
          <div class="metadata">
            <p><strong>Criado:</strong> ${formatarData(nota.dataCriacao)}</p>
            <p><strong>Modificado:</strong> ${formatarData(nota.dataModificacao)}</p>
            ${nota.topico ? `<p><strong>Tópico:</strong> ${nota.topico}</p>` : ''}
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const handleExport = () => {
    const data = {
      titulo: nota.titulo,
      conteudo: nota.conteudo,
      topico: nota.topico,
      dataCriacao: nota.dataCriacao,
      dataModificacao: nota.dataModificacao,
      exportadoEm: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${nota.titulo.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleFullscreen = () => {
    if (contentRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        contentRef.current.requestFullscreen();
      }
    }
  };

  if (!nota) return null;

  return (
    <>
      <FullScreenOverlay onClick={onFechar}>
        <FullScreenContainer onClick={(e) => e.stopPropagation()}>
          <Header>
            <Title>{nota.titulo}</Title>
            <HeaderActions>
              <ActionButton onClick={toggleBookmark} title="Adicionar aos favoritos">
                <FontAwesomeIcon icon={isBookmarked ? faBookmarkSolid : faBookmark} />
                {isBookmarked ? 'Favorito' : 'Favoritar'}
              </ActionButton>
              <ActionButton onClick={toggleFavorite} title="Marcar como importante">
                <FontAwesomeIcon icon={isFavorite ? faHeartSolid : faHeart} />
                {isFavorite ? 'Importante' : 'Importante'}
              </ActionButton>
              <ActionButton onClick={() => setShowShareModal(true)} title="Compartilhar">
                <FontAwesomeIcon icon={faShare} />
                Compartilhar
              </ActionButton>
              <ActionButton onClick={handlePrint} title="Imprimir">
                <FontAwesomeIcon icon={faPrint} />
                Imprimir
              </ActionButton>
              <ActionButton onClick={handleExport} title="Exportar">
                <FontAwesomeIcon icon={faDownload} />
                Exportar
              </ActionButton>
              <ActionButton onClick={onEditar} className="primary" title="Editar">
                <FontAwesomeIcon icon={faEdit} />
                Editar
              </ActionButton>
              <ActionButton onClick={onExcluir} className="danger" title="Excluir">
                <FontAwesomeIcon icon={faTrash} />
                Excluir
              </ActionButton>
              <ActionButton onClick={onFechar} title="Fechar">
                <FontAwesomeIcon icon={faTimes} />
                Fechar
              </ActionButton>
            </HeaderActions>
          </Header>

          <Content ref={contentRef}>
            <NoteContent dangerouslySetInnerHTML={{ __html: nota.conteudo }} />
            
            <Metadata>
              <MetadataItem>
                <FontAwesomeIcon icon={faCalendarAlt} />
                Criado: {formatarData(nota.dataCriacao)}
              </MetadataItem>
              <MetadataItem>
                <FontAwesomeIcon icon={faClock} />
                Modificado: {formatarData(nota.dataModificacao)}
              </MetadataItem>
              {nota.topico && (
                <MetadataItem>
                  <FontAwesomeIcon icon={faTag} />
                  <Badge background="var(--corSecundaria)">
                    {nota.topico}
                  </Badge>
                </MetadataItem>
              )}
              <MetadataItem>
                <FontAwesomeIcon icon={faUser} />
                Autor: WRTmind
              </MetadataItem>
              {isFavorite && (
                <MetadataItem>
                  <FontAwesomeIcon icon={faStarSolid} />
                  <Badge background="#FFD700" color="#333">
                    Importante
                  </Badge>
                </MetadataItem>
              )}
              {isBookmarked && (
                <MetadataItem>
                  <FontAwesomeIcon icon={faBookmarkSolid} />
                  <Badge background="#FF6B6B">
                    Favorito
                  </Badge>
                </MetadataItem>
              )}
            </Metadata>
          </Content>
        </FullScreenContainer>
      </FullScreenOverlay>

      <FloatingToolbar>
        <FloatingButton onClick={handleFullscreen} title="Tela cheia">
          <FontAwesomeIcon icon={faExpand} />
        </FloatingButton>
        <FloatingButton onClick={() => setShowShareModal(true)} className="share" title="Compartilhar">
          <FontAwesomeIcon icon={faShareAlt} />
        </FloatingButton>
        <FloatingButton onClick={toggleFavorite} className="favorite" title="Favorito">
          <FontAwesomeIcon icon={isFavorite ? faHeartSolid : faHeart} />
        </FloatingButton>
        <FloatingButton onClick={handleExport} className="export" title="Exportar">
          <FontAwesomeIcon icon={faFileExport} />
        </FloatingButton>
      </FloatingToolbar>

      {showShareModal && (
        <ShareModal onClick={(e) => e.stopPropagation()}>
          <h3>Compartilhar Nota</h3>
          <ShareGrid>
            <ShareButton onClick={() => handleShare('whatsapp')} className="whatsapp">
              <FontAwesomeIcon icon={faWhatsappBrand} size="lg" />
              <span>WhatsApp</span>
            </ShareButton>
            <ShareButton onClick={() => handleShare('telegram')} className="telegram">
              <FontAwesomeIcon icon={faTelegramBrand} size="lg" />
              <span>Telegram</span>
            </ShareButton>
            <ShareButton onClick={() => handleShare('email')} className="email">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
              <span>Email</span>
            </ShareButton>
            <ShareButton onClick={() => handleShare('copy')} className="copy">
              <FontAwesomeIcon icon={faCopy} size="lg" />
              <span>{copied ? 'Copiado!' : 'Copiar'}</span>
            </ShareButton>
          </ShareGrid>
          <ActionButton onClick={() => setShowShareModal(false)} style={{ marginTop: '20px', width: '100%' }}>
            <FontAwesomeIcon icon={faTimes} />
            Fechar
          </ActionButton>
        </ShareModal>
      )}
    </>
  );
};

export default NotaTelaCheia; 