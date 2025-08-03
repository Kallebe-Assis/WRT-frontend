import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--espacamentoExtraGrande);
  min-height: 400px;
  color: var(--corTextoSecundaria);

  @media (max-width: 768px) {
    padding: var(--espacamentoGrande);
    min-height: 300px;
  }

  @media (max-width: 480px) {
    padding: var(--espacamentoMedio);
    min-height: 250px;
  }
`;

const Spinner = styled.div`
  font-size: var(--tamanhoFonteExtraGrande);
  animation: ${spin} 1s linear infinite;
  margin-bottom: var(--espacamentoMedio);
  color: var(--corPrimaria);

  @media (max-width: 768px) {
    font-size: var(--tamanhoFonteGrande);
    margin-bottom: var(--espacamentoPequeno);
  }

  @media (max-width: 480px) {
    font-size: var(--tamanhoFonteMedia);
  }
`;

const LoadingText = styled.p`
  font-size: var(--tamanhoFonteMedia);
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: var(--tamanhoFontePequena);
  }

  @media (max-width: 480px) {
    font-size: var(--tamanhoFontePequena);
  }
`;

const NotasLoading = ({ mensagem = "Carregando..." }) => {
  return (
    <LoadingContainer>
      <Spinner>
        <FontAwesomeIcon icon={faSpinner} />
      </Spinner>
      <LoadingText>{mensagem}</LoadingText>
    </LoadingContainer>
  );
};

export default NotasLoading; 