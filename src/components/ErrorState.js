import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faRedo } from '@fortawesome/free-solid-svg-icons';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--espacamentoExtraGrande);
  min-height: 400px;
  text-align: center;
`;

const ErrorIcon = styled.div`
  font-size: 3rem;
  color: #f44336;
  margin-bottom: var(--espacamentoGrande);
`;

const ErrorTitle = styled.h3`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 600;
  margin: 0 0 var(--espacamentoMedio) 0;
`;

const ErrorMessage = styled.p`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFonteMedia);
  margin: 0 0 var(--espacamentoGrande) 0;
  max-width: 500px;
  line-height: 1.5;
`;

const RetryButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  background: var(--corPrimaria);
  color: var(--corTextoClara);
  border: none;
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);

  &:hover {
    background: var(--corSecundaria);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ErrorState = ({ 
  titulo = 'Erro ao carregar dados', 
  mensagem = 'Ocorreu um erro ao carregar os dados. Verifique sua conexão e tente novamente.',
  onTentarNovamente,
  carregando = false
}) => {
  return (
    <ErrorContainer>
      <ErrorIcon>
        <FontAwesomeIcon icon={faExclamationTriangle} />
      </ErrorIcon>
      <ErrorTitle>{titulo}</ErrorTitle>
      <ErrorMessage>{mensagem}</ErrorMessage>
      {onTentarNovamente && (
        <RetryButton 
          onClick={onTentarNovamente}
          disabled={carregando}
        >
          <FontAwesomeIcon icon={faRedo} />
          {carregando ? 'Tentando...' : 'Tentar Novamente'}
        </RetryButton>
      )}
    </ErrorContainer>
  );
};

export default ErrorState; 