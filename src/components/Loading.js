import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// Animações
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease-out;
  backdrop-filter: blur(10px);
`;

const LoadingContainer = styled.div`
  background: linear-gradient(135deg, var(--corFundoCard) 0%, var(--corFundoSecundaria) 100%);
  border: 2px solid var(--corPrimaria);
  border-radius: var(--bordaRaioGrande);
  padding: var(--espacamentoGrande);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--espacamentoMedio);
  box-shadow: var(--sombraForte);
  min-width: 200px;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const SpinnerContainer = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  animation: ${bounce} 2s ease-in-out infinite;
`;

const Spinner = styled.div`
  width: 100%;
  height: 100%;
  border: 4px solid var(--corFundoTerciaria);
  border-top: 4px solid var(--corPrimaria);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.h3`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteGrande);
  font-weight: 600;
  margin: 0;
  text-align: center;
  animation: ${pulse} 2s ease-in-out infinite 0.5s;
`;

const LoadingSubtext = styled.p`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFonteMedia);
  margin: 0;
  text-align: center;
  animation: ${fadeIn} 1s ease-out 0.5s both;
`;

const LoadingDots = styled.div`
  display: flex;
  gap: 8px;
  margin-top: var(--espacamentoPequeno);
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: var(--corPrimaria);
  border-radius: 50%;
  animation: ${pulse} 1.5s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

const Loading = ({ 
  mensagem = "Carregando...", 
  subMensagem = "Aguarde um momento",
  showDots = true 
}) => {
  return (
    <LoadingOverlay>
      <LoadingContainer>
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
        
        <LoadingText>{mensagem}</LoadingText>
        
        {subMensagem && (
          <LoadingSubtext>{subMensagem}</LoadingSubtext>
        )}
        
        {showDots && (
          <LoadingDots>
            <Dot delay={0} />
            <Dot delay={0.2} />
            <Dot delay={0.4} />
          </LoadingDots>
        )}
      </LoadingContainer>
    </LoadingOverlay>
  );
};

// Componente de loading inline para botões e elementos menores
const InlineLoading = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  color: var(--corPrimaria);
`;

const InlineSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid var(--corFundoTerciaria);
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const InlineLoadingComponent = ({ texto = "Carregando..." }) => {
  return (
    <InlineLoading>
      <InlineSpinner />
      <span>{texto}</span>
    </InlineLoading>
  );
};

// Componente de loading para cards e listas
const CardLoading = styled.div`
  background: linear-gradient(135deg, var(--corFundoCard) 0%, var(--corFundoSecundaria) 100%);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioGrande);
  padding: var(--espacamentoMedio);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const CardLoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid var(--corFundoTerciaria);
  border-top: 3px solid var(--corPrimaria);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: var(--espacamentoMedio);
`;

const CardLoadingText = styled.p`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFonteMedia);
  margin: 0;
  text-align: center;
`;

const CardLoadingComponent = ({ mensagem = "Carregando conteúdo..." }) => {
  return (
    <CardLoading>
      <CardLoadingSpinner />
      <CardLoadingText>{mensagem}</CardLoadingText>
    </CardLoading>
  );
};

// Componente de loading para tabelas
const TableLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--espacamentoGrande);
  background: var(--corFundoPrimaria);
  border-radius: var(--bordaRaioMedia);
  animation: ${fadeIn} 0.5s ease-out;
`;

const TableLoadingSpinner = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid var(--corFundoTerciaria);
  border-top: 2px solid var(--corPrimaria);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-right: var(--espacamentoPequeno);
`;

const TableLoadingText = styled.span`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFonteMedia);
`;

const TableLoadingComponent = ({ mensagem = "Carregando dados..." }) => {
  return (
    <TableLoading>
      <TableLoadingSpinner />
      <TableLoadingText>{mensagem}</TableLoadingText>
    </TableLoading>
  );
};

export default Loading;
export { InlineLoadingComponent, CardLoadingComponent, TableLoadingComponent }; 