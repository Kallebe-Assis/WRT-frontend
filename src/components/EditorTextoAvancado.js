import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBold, 
  faItalic, 
  faUnderline, 
  faStrikethrough,
  faListUl,
  faListOl,
  faQuoteLeft,
  faCode,
  faLink,
  faImage,
  faTable,
  faHeading,
  faParagraph,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faAlignJustify,
  faIndent,
  faOutdent,
  faUndo,
  faRedo,
  faSave,
  faMagic,
  faPalette,
  faFont,
  faTextHeight,
  faHighlighter,
  faEraser,
  faSearch,
  faReplace,
  faSpellCheck,
  faEye,
  faEyeSlash,
  faExpand,
  faCompress,
  faRocket,
  faLightbulb,
  faBrain,
  faWandMagicSparkles,
  faStar,
  faHeart,
  faBookmark,
  faShare,
  faCopy,
  faDownload,
  faUpload,
  faFileExport,
  faFileImport,
  faCog,
  faTimes,
  faCheck,
  faPlus,
  faMinus,
  faRandom,
  faShuffle,
  faRotate,
  faFlipHorizontal,
  faFlipVertical,
  faArrowsRotate,
  faCrown,
  faFire,
  faRainbow,
  faLanguage
} from '@fortawesome/free-solid-svg-icons';

// Animações
const slideDown = keyframes`
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 5px rgba(102, 126, 234, 0.3); }
  50% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.6); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`;

// Styled Components
const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--corFundoTerciaria);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-out;
`;

const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 15px;
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  border-bottom: 1px solid var(--corBordaPrimaria);
  animation: ${slideDown} 0.3s ease-out;
`;

const ToolbarGroup = styled.div`
  display: flex;
  gap: 2px;
  padding: 5px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
`;

const ToolbarButton = styled.button`
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;
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
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  &.special {
    background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
    animation: ${pulse} 2s ease-in-out infinite;
  }

  &.magic {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    animation: ${glow} 1.5s ease-in-out infinite;
  }

  &.ai {
    background: linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%);
    animation: ${float} 3s ease-in-out infinite;
  }
`;

const TextArea = styled.textarea`
  flex: 1;
  padding: 20px;
  border: none;
  outline: none;
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--corTextoPrimaria);
  background: var(--corFundoSecundaria);
  resize: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: all 0.3s ease;

  &:focus {
    background: var(--corFundoTerciaria);
    box-shadow: inset 0 0 0 2px var(--corPrimaria);
  }

  &::placeholder {
    color: var(--corTextoTerciaria);
    font-style: italic;
  }
`;

const FloatingPanel = styled.div`
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
`;

const FloatingButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  font-size: 1.1rem;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateX(-5px) scale(1.1);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    animation: ${pulse} 0.6s ease-in-out;
  }

  &.ai {
    background: linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%);
    animation: ${float} 3s ease-in-out infinite;
  }

  &.magic {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    animation: ${glow} 1.5s ease-in-out infinite;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: ${fadeIn} 0.3s ease-out;
`;

const ModalContent = styled.div`
  background: var(--corFundoTerciaria);
  border-radius: 15px;
  padding: 30px;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  animation: ${slideDown} 0.3s ease-out;
`;

const EditorTextoAvancado = ({ 
  conteudo, 
  onChange, 
  placeholder = "Digite sua nota aqui...",
  onSave,
  onClose 
}) => {
  const [text, setText] = useState(conteudo || '');
  const [selection, setSelection] = useState({ start: 0, end: 0 });
  const [showAIModal, setShowAIModal] = useState(false);
  const [showMagicModal, setShowMagicModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    setText(conteudo || '');
  }, [conteudo]);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    onChange(newText);
  };

  const handleSelectionChange = () => {
    if (textareaRef.current) {
      const { selectionStart, selectionEnd } = textareaRef.current;
      setSelection({ start: selectionStart, end: selectionEnd });
    }
  };

  const insertText = (textToInsert) => {
    const before = text.substring(0, selection.start);
    const after = text.substring(selection.end);
    const newText = before + textToInsert + after;
    setText(newText);
    onChange(newText);
    
    // Focar no textarea e posicionar cursor
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        const newPosition = selection.start + textToInsert.length;
        textareaRef.current.setSelectionRange(newPosition, newPosition);
      }
    }, 0);
  };

  const formatText = (format) => {
    const selectedText = text.substring(selection.start, selection.end);
    let formattedText = '';

    switch (format) {
      case 'bold':
        formattedText = `**${selectedText}**`;
        break;
      case 'italic':
        formattedText = `*${selectedText}*`;
        break;
      case 'underline':
        formattedText = `<u>${selectedText}</u>`;
        break;
      case 'strikethrough':
        formattedText = `~~${selectedText}~~`;
        break;
      case 'code':
        formattedText = `\`${selectedText}\``;
        break;
      case 'link':
        formattedText = `[${selectedText}](URL)`;
        break;
      case 'image':
        formattedText = `![${selectedText}](URL)`;
        break;
      case 'quote':
        formattedText = `> ${selectedText}`;
        break;
      case 'list-ul':
        formattedText = `- ${selectedText}`;
        break;
      case 'list-ol':
        formattedText = `1. ${selectedText}`;
        break;
      case 'heading':
        formattedText = `# ${selectedText}`;
        break;
      case 'table':
        formattedText = `| ${selectedText} | |\n| --- | --- |\n| | |`;
        break;
      default:
        formattedText = selectedText;
    }

    insertText(formattedText);
  };

  const applyAIFeature = (feature) => {
    const selectedText = text.substring(selection.start, selection.end);
    let enhancedText = '';

    switch (feature) {
      case 'improve':
        enhancedText = `✨ ${selectedText} ✨`;
        break;
      case 'summarize':
        enhancedText = `📝 Resumo: ${selectedText}`;
        break;
      case 'expand':
        enhancedText = `${selectedText}\n\n💡 Desenvolvimento adicional:\n- Ponto 1\n- Ponto 2\n- Ponto 3`;
        break;
      case 'translate':
        enhancedText = `🌍 Tradução: ${selectedText}`;
        break;
      case 'correct':
        enhancedText = `✅ ${selectedText}`;
        break;
      default:
        enhancedText = selectedText;
    }

    insertText(enhancedText);
    setShowAIModal(false);
  };

  const applyMagicFeature = (feature) => {
    const selectedText = text.substring(selection.start, selection.end);
    let magicalText = '';

    switch (feature) {
      case 'sparkle':
        magicalText = `✨ ${selectedText} ✨`;
        break;
      case 'fire':
        magicalText = `🔥 ${selectedText} 🔥`;
        break;
      case 'star':
        magicalText = `⭐ ${selectedText} ⭐`;
        break;
      case 'heart':
        magicalText = `💖 ${selectedText} 💖`;
        break;
      case 'crown':
        magicalText = `👑 ${selectedText} 👑`;
        break;
      case 'gem':
        magicalText = `💎 ${selectedText} 💎`;
        break;
      case 'rainbow':
        magicalText = `🌈 ${selectedText} 🌈`;
        break;
      case 'galaxy':
        magicalText = `🌌 ${selectedText} 🌌`;
        break;
      default:
        magicalText = selectedText;
    }

    insertText(magicalText);
    setShowMagicModal(false);
  };

  const handleSave = () => {
    if (onSave) {
      onSave(text);
    }
  };

  const handleAutoSave = () => {
    // Auto-save a cada 30 segundos
    setTimeout(() => {
      handleSave();
    }, 30000);
  };

  useEffect(() => {
    const interval = setInterval(handleAutoSave, 30000);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <>
      <EditorContainer>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarButton onClick={() => formatText('bold')} title="Negrito">
              <FontAwesomeIcon icon={faBold} />
            </ToolbarButton>
            <ToolbarButton onClick={() => formatText('italic')} title="Itálico">
              <FontAwesomeIcon icon={faItalic} />
            </ToolbarButton>
            <ToolbarButton onClick={() => formatText('underline')} title="Sublinhado">
              <FontAwesomeIcon icon={faUnderline} />
            </ToolbarButton>
            <ToolbarButton onClick={() => formatText('strikethrough')} title="Tachado">
              <FontAwesomeIcon icon={faStrikethrough} />
            </ToolbarButton>
          </ToolbarGroup>

          <ToolbarGroup>
            <ToolbarButton onClick={() => formatText('heading')} title="Título">
              <FontAwesomeIcon icon={faHeading} />
            </ToolbarButton>
            <ToolbarButton onClick={() => formatText('list-ul')} title="Lista não ordenada">
              <FontAwesomeIcon icon={faListUl} />
            </ToolbarButton>
            <ToolbarButton onClick={() => formatText('list-ol')} title="Lista ordenada">
              <FontAwesomeIcon icon={faListOl} />
            </ToolbarButton>
            <ToolbarButton onClick={() => formatText('quote')} title="Citação">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </ToolbarButton>
          </ToolbarGroup>

          <ToolbarGroup>
            <ToolbarButton onClick={() => formatText('code')} title="Código">
              <FontAwesomeIcon icon={faCode} />
            </ToolbarButton>
            <ToolbarButton onClick={() => formatText('link')} title="Link">
              <FontAwesomeIcon icon={faLink} />
            </ToolbarButton>
            <ToolbarButton onClick={() => formatText('image')} title="Imagem">
              <FontAwesomeIcon icon={faImage} />
            </ToolbarButton>
            <ToolbarButton onClick={() => formatText('table')} title="Tabela">
              <FontAwesomeIcon icon={faTable} />
            </ToolbarButton>
          </ToolbarGroup>

          <ToolbarGroup>
            <ToolbarButton onClick={() => setShowAIModal(true)} className="ai" title="IA - Melhorar texto">
              <FontAwesomeIcon icon={faBrain} />
              IA
            </ToolbarButton>
            <ToolbarButton onClick={() => setShowMagicModal(true)} className="magic" title="Mágica - Efeitos especiais">
              <FontAwesomeIcon icon={faWandMagicSparkles} />
              Mágica
            </ToolbarButton>
            <ToolbarButton onClick={handleSave} className="special" title="Salvar">
              <FontAwesomeIcon icon={faSave} />
              Salvar
            </ToolbarButton>
          </ToolbarGroup>
        </Toolbar>

        <TextArea
          ref={textareaRef}
          value={text}
          onChange={handleTextChange}
          onSelect={handleSelectionChange}
          placeholder={placeholder}
        />
      </EditorContainer>

      <FloatingPanel>
        <FloatingButton onClick={() => setShowAIModal(true)} className="ai" title="IA">
          <FontAwesomeIcon icon={faBrain} />
        </FloatingButton>
        <FloatingButton onClick={() => setShowMagicModal(true)} className="magic" title="Mágica">
          <FontAwesomeIcon icon={faWandMagicSparkles} />
        </FloatingButton>
        <FloatingButton onClick={handleSave} title="Salvar">
          <FontAwesomeIcon icon={faSave} />
        </FloatingButton>
      </FloatingPanel>

      {/* Modal IA */}
      {showAIModal && (
        <Modal onClick={() => setShowAIModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3>🤖 Recursos de IA</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginTop: '20px' }}>
              <ToolbarButton onClick={() => applyAIFeature('improve')}>
                <FontAwesomeIcon icon={faStar} />
                Melhorar
              </ToolbarButton>
              <ToolbarButton onClick={() => applyAIFeature('summarize')}>
                <FontAwesomeIcon icon={faFileExport} />
                Resumir
              </ToolbarButton>
              <ToolbarButton onClick={() => applyAIFeature('expand')}>
                <FontAwesomeIcon icon={faExpand} />
                Expandir
              </ToolbarButton>
              <ToolbarButton onClick={() => applyAIFeature('translate')}>
                <FontAwesomeIcon icon={faLanguage} />
                Traduzir
              </ToolbarButton>
              <ToolbarButton onClick={() => applyAIFeature('correct')}>
                <FontAwesomeIcon icon={faSpellCheck} />
                Corrigir
              </ToolbarButton>
            </div>
            <ToolbarButton onClick={() => setShowAIModal(false)} style={{ marginTop: '20px', width: '100%' }}>
              <FontAwesomeIcon icon={faTimes} />
              Fechar
            </ToolbarButton>
          </ModalContent>
        </Modal>
      )}

      {/* Modal Mágica */}
      {showMagicModal && (
        <Modal onClick={() => setShowMagicModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3>✨ Efeitos Mágicos</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '20px' }}>
              <ToolbarButton onClick={() => applyMagicFeature('sparkle')}>
                <FontAwesomeIcon icon={faStar} />
                Brilho
              </ToolbarButton>
              <ToolbarButton onClick={() => applyMagicFeature('fire')}>
                <FontAwesomeIcon icon={faFire} />
                Fogo
              </ToolbarButton>
              <ToolbarButton onClick={() => applyMagicFeature('star')}>
                <FontAwesomeIcon icon={faStar} />
                Estrela
              </ToolbarButton>
              <ToolbarButton onClick={() => applyMagicFeature('heart')}>
                <FontAwesomeIcon icon={faHeart} />
                Coração
              </ToolbarButton>
              <ToolbarButton onClick={() => applyMagicFeature('crown')}>
                <FontAwesomeIcon icon={faCrown} />
                Coroa
              </ToolbarButton>
              <ToolbarButton onClick={() => applyMagicFeature('gem')}>
                <FontAwesomeIcon icon={faStar} />
                Gema
              </ToolbarButton>
              <ToolbarButton onClick={() => applyMagicFeature('rainbow')}>
                <FontAwesomeIcon icon={faRainbow} />
                Arco-íris
              </ToolbarButton>
              <ToolbarButton onClick={() => applyMagicFeature('galaxy')}>
                <FontAwesomeIcon icon={faStar} />
                Galáxia
              </ToolbarButton>
            </div>
            <ToolbarButton onClick={() => setShowMagicModal(false)} style={{ marginTop: '20px', width: '100%' }}>
              <FontAwesomeIcon icon={faTimes} />
              Fechar
            </ToolbarButton>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default EditorTextoAvancado; 