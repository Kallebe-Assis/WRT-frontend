import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';

// Animações
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const slideIn = keyframes`
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 5px rgba(76, 175, 80, 0.3); }
  50% { box-shadow: 0 0 20px rgba(76, 175, 80, 0.6); }
`;

const FullscreenButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const FullscreenButtonStyled = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  background: var(--corFundoTerciaria);
  color: var(--corTextoSecundaria);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioPequena);
  font-size: var(--tamanhoFontePequena);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 32px;
  height: 32px;

  /* Efeito de brilho no hover */
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

  &:hover {
    transform: translateY(-1px) scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    background: var(--corFundoSecundaria);
    color: var(--corTextoPrimaria);
    border-color: var(--corPrimaria);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0) scale(0.95);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  }

  /* Estado de loading */
  ${props => props.loading && `
    pointer-events: none;
    opacity: 0.7;
    
    svg {
      animation: ${rotate} 1s linear infinite;
    }
  `}

  /* Estado de sucesso */
  ${props => props.success && `
    background: var(--corSucesso);
    color: white;
    animation: ${pulse} 0.6s ease-in-out;
  `}

  /* Estado de erro */
  ${props => props.error && `
    background: var(--corErro);
    color: white;
    animation: ${pulse} 0.6s ease-in-out;
  `}
`;

const ButtonIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  font-size: 12px;

  ${FullscreenButtonStyled}:hover & {
    transform: scale(1.1);
  }
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--corFundoCard);
  color: var(--corTextoPrimaria);
  padding: 4px 8px;
  border-radius: var(--bordaRaioPequena);
  font-size: 10px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-bottom: 3px solid var(--corFundoCard);
  }

  ${FullscreenButtonContainer}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(-3px);
  }
`;

const RippleEffect = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: scale(0);
  animation: ${pulse} 0.4s linear;
  pointer-events: none;
`;

const FullscreenButton = ({
  onClick,
  isFullscreen = false,
  loading = false,
  success = false,
  error = false,
  disabled = false,
  className,
  children
}) => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    if (disabled || loading) return;

    // Criar efeito ripple
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const ripple = {
      id: Date.now(),
      x,
      y,
      size
    };

    setRipples(prev => [...prev, ripple]);

    // Remover ripple após animação
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== ripple.id));
    }, 400);

    if (onClick) {
      onClick(e);
    }
  };

  const getIcon = () => {
    if (loading) return faExpand;
    return isFullscreen ? faCompress : faExpand;
  };

  const getText = () => {
    if (loading) return '';
    if (success) return '';
    if (error) return '';
    return '';
  };

  const getTooltip = () => {
    if (loading) return 'Aguarde...';
    if (success) return 'Operação realizada com sucesso!';
    if (error) return 'Ocorreu um erro';
    return isFullscreen ? 'Clique para sair da tela cheia' : 'Clique para entrar em tela cheia';
  };

  return (
    <FullscreenButtonContainer className={className}>
      <FullscreenButtonStyled
        onClick={handleClick}
        disabled={disabled || loading}
        loading={loading}
        success={success}
        error={error}
        aria-label={getTooltip()}
      >
        {ripples.map(ripple => (
          <RippleEffect
            key={ripple.id}
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size
            }}
          />
        ))}
        
        <ButtonIcon>
          <FontAwesomeIcon icon={getIcon()} />
        </ButtonIcon>
      </FullscreenButtonStyled>
      
      <Tooltip>
        {getTooltip()}
      </Tooltip>
    </FullscreenButtonContainer>
  );
};

export default FullscreenButton; 