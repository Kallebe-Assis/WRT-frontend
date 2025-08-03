import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faTimes } from '@fortawesome/free-solid-svg-icons';

const AlertContainer = styled.div`
  background: ${props => {
    switch (props.tipo) {
      case 'erro':
        return 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)';
      case 'sucesso':
        return 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)';
      case 'aviso':
        return 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)';
      case 'info':
        return 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)';
      default:
        return 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)';
    }
  }};
  border: 2px solid ${props => {
    switch (props.tipo) {
      case 'erro':
        return 'var(--corErro)';
      case 'sucesso':
        return 'var(--corSucesso)';
      case 'aviso':
        return 'var(--corAviso)';
      case 'info':
        return 'var(--corInfo)';
      default:
        return 'var(--corErro)';
    }
  }};
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoMedio);
  display: flex;
  align-items: flex-start;
  gap: var(--espacamentoMedio);
  position: relative;
  box-shadow: var(--sombraLeve);

  @media (max-width: 768px) {
    padding: var(--espacamentoPequeno);
    margin-bottom: var(--espacamentoPequeno);
    gap: var(--espacamentoPequeno);
  }

  @media (max-width: 480px) {
    padding: var(--espacamentoPequeno);
    flex-direction: column;
    align-items: stretch;
    gap: var(--espacamentoPequeno);
  }
`;

const IconContainer = styled.div`
  color: ${props => {
    switch (props.tipo) {
      case 'erro':
        return 'var(--corErro)';
      case 'sucesso':
        return 'var(--corSucesso)';
      case 'aviso':
        return 'var(--corAviso)';
      case 'info':
        return 'var(--corInfo)';
      default:
        return 'var(--corErro)';
    }
  }};
  font-size: var(--tamanhoFonteGrande);
  flex-shrink: 0;
  margin-top: 2px;

  @media (max-width: 768px) {
    font-size: var(--tamanhoFonteMedia);
  }

  @media (max-width: 480px) {
    font-size: var(--tamanhoFontePequena);
    text-align: center;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  min-width: 0;
`;

const Title = styled.h4`
  color: ${props => {
    switch (props.tipo) {
      case 'erro':
        return 'var(--corErro)';
      case 'sucesso':
        return 'var(--corSucesso)';
      case 'aviso':
        return 'var(--corAviso)';
      case 'info':
        return 'var(--corInfo)';
      default:
        return 'var(--corErro)';
    }
  }};
  font-size: var(--tamanhoFonteGrande);
  font-weight: 600;
  margin: 0 0 var(--espacamentoPequeno) 0;

  @media (max-width: 768px) {
    font-size: var(--tamanhoFonteMedia);
  }

  @media (max-width: 480px) {
    font-size: var(--tamanhoFontePequena);
    text-align: center;
  }
`;

const Message = styled.p`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
  margin: 0;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: var(--tamanhoFontePequena);
  }

  @media (max-width: 480px) {
    font-size: var(--tamanhoFontePequena);
    text-align: center;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--corTextoSecundaria);
  cursor: pointer;
  padding: var(--espacamentoPequeno);
  border-radius: var(--bordaRaioPequena);
  transition: all var(--transicaoRapida);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    color: var(--corTextoPrimaria);
  }

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    min-height: 44px;
    min-width: 44px;
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
    align-self: center;
  }
`;

const ErrorAlert = ({ 
  tipo = 'erro', 
  titulo = 'Erro', 
  mensagem = 'Ocorreu um erro inesperado.', 
  onFechar,
  mostrar = true 
}) => {
  if (!mostrar) return null;

  return (
    <AlertContainer tipo={tipo}>
      <IconContainer tipo={tipo}>
        <FontAwesomeIcon icon={faExclamationTriangle} />
      </IconContainer>
      
      <ContentContainer>
        <Title tipo={tipo}>{titulo}</Title>
        <Message>{mensagem}</Message>
      </ContentContainer>
      
      {onFechar && (
        <CloseButton onClick={onFechar} title="Fechar">
          <FontAwesomeIcon icon={faTimes} />
        </CloseButton>
      )}
    </AlertContainer>
  );
};

export default ErrorAlert; 