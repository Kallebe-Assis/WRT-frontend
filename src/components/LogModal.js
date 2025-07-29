import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faDownload,
  faTrash,
  faSync,
  faFileAlt
} from '@fortawesome/free-solid-svg-icons';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--espacamentoMedio);
`;

const ModalContent = styled.div`
  background: var(--corFundoCard);
  border-radius: var(--bordaRaioGrande);
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--espacamentoGrande);
  border-bottom: 1px solid var(--corBordaPrimaria);
`;

const ModalTitle = styled.h2`
  color: var(--corTextoPrimaria);
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`;

const BotaoFechar = styled.button`
  background: none;
  border: none;
  color: var(--corTextoSecundaria);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--bordaRaioPequena);

  &:hover {
    background: var(--corFundoHover);
    color: var(--corTextoPrimaria);
  }
`;

const ModalBody = styled.div`
  padding: var(--espacamentoGrande);
`;

const ContainerBotoes = styled.div`
  display: flex;
  gap: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoGrande);
  flex-wrap: wrap;
`;

const BotaoAcao = styled.button`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  background: var(--corPrimaria);
  color: white;
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

const BotaoSecundario = styled(BotaoAcao)`
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  border: 2px solid var(--corBordaPrimaria);

  &:hover {
    background: var(--corFundoTerciaria);
    border-color: var(--corPrimaria);
  }
`;

const BotaoPerigo = styled(BotaoAcao)`
  background: var(--corErro);
  color: white;

  &:hover {
    background: var(--corErroHover);
  }
`;

const LogsContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  background: var(--corFundoPrimaria);
`;

const LogItem = styled.div`
  padding: var(--espacamentoMedio);
  border-bottom: 1px solid var(--corBordaPrimaria);
  display: flex;
  align-items: flex-start;
  gap: var(--espacamentoMedio);
  background: ${props => props.tipo === 'error' ? 'rgba(220, 53, 69, 0.1)' : 
                       props.tipo === 'success' ? 'rgba(40, 167, 69, 0.1)' : 
                       'rgba(0, 123, 255, 0.1)'};
  border-left: 4px solid ${props => 
    props.tipo === 'error' ? '#dc3545' : 
    props.tipo === 'success' ? '#28a745' : '#007bff'
  };

  &:last-child {
    border-bottom: none;
  }
`;

const LogIcon = styled.div`
  color: ${props => 
    props.tipo === 'error' ? '#dc3545' : 
    props.tipo === 'success' ? '#28a745' : '#007bff'
  };
  font-size: var(--tamanhoFonteMedia);
  margin-top: 2px;
`;

const LogContent = styled.div`
  flex: 1;
`;

const LogMessage = styled.div`
  font-weight: 500;
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoPequeno);
`;

const LogTimestamp = styled.div`
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoSecundaria);
`;

const LogDetails = styled.div`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  margin-top: var(--espacamentoPequeno);
  font-family: monospace;
  background: var(--corFundoSecundaria);
  padding: var(--espacamentoPequeno);
  border-radius: var(--bordaRaioPequena);
  white-space: pre-wrap;
`;

const EstadoVazio = styled.div`
  text-align: center;
  padding: var(--espacamentoExtraGrande);
  color: var(--corTextoSecundaria);
`;

const LogModal = ({
  isVisible,
  onClose,
  onCarregarLogs,
  onLimparLogs,
  onExportarLogs
}) => {
  const [logs, setLogs] = useState([]);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    if (isVisible) {
      carregarLogs();
    }
  }, [isVisible]);

  const carregarLogs = async () => {
    setCarregando(true);
    try {
      const data = await onCarregarLogs();
      setLogs(data.logs || []);
    } catch (error) {
      console.error('Erro ao carregar logs:', error);
      setLogs([]);
    } finally {
      setCarregando(false);
    }
  };

  const handleLimparLogs = async () => {
    if (window.confirm('Tem certeza que deseja limpar todos os logs?')) {
      try {
        await onLimparLogs();
        await carregarLogs();
        alert('Logs limpos com sucesso!');
      } catch (error) {
        console.error('Erro ao limpar logs:', error);
        alert('Erro ao limpar logs: ' + error.message);
      }
    }
  };

  const handleExportarLogs = async () => {
    try {
      await onExportarLogs();
      alert('Logs exportados com sucesso!');
    } catch (error) {
      console.error('Erro ao exportar logs:', error);
      alert('Erro ao exportar logs: ' + error.message);
    }
  };

  const formatarTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString('pt-BR');
  };

  const getIconeTipo = (tipo) => {
    switch (tipo) {
      case 'error': return '❌';
      case 'success': return '✅';
      case 'info': return 'ℹ️';
      default: return '📝';
    }
  };

  if (!isVisible) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>
            <FontAwesomeIcon icon={faFileAlt} />
            Logs do Sistema
          </ModalTitle>
          <BotaoFechar onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </BotaoFechar>
        </ModalHeader>

        <ModalBody>
          <ContainerBotoes>
            <BotaoSecundario onClick={carregarLogs} disabled={carregando}>
              <FontAwesomeIcon icon={faSync} spin={carregando} />
              {carregando ? 'Carregando...' : 'Atualizar'}
            </BotaoSecundario>

            <BotaoAcao onClick={handleExportarLogs}>
              <FontAwesomeIcon icon={faDownload} />
              Exportar
            </BotaoAcao>

            <BotaoPerigo onClick={handleLimparLogs}>
              <FontAwesomeIcon icon={faTrash} />
              Limpar Logs
            </BotaoPerigo>
          </ContainerBotoes>

          <LogsContainer>
            {carregando ? (
              <EstadoVazio>
                <FontAwesomeIcon icon={faSync} spin style={{ fontSize: '2rem', marginBottom: '1rem' }} />
                <p>Carregando logs...</p>
              </EstadoVazio>
            ) : logs.length === 0 ? (
              <EstadoVazio>
                <FontAwesomeIcon icon={faFileAlt} style={{ fontSize: '2rem', marginBottom: '1rem' }} />
                <p>Nenhum log encontrado.</p>
              </EstadoVazio>
            ) : (
              logs.map((log) => (
                <LogItem key={log.id} tipo={log.type}>
                  <LogIcon tipo={log.type}>
                    {getIconeTipo(log.type)}
                  </LogIcon>
                  <LogContent>
                    <LogMessage>{log.message}</LogMessage>
                    <LogTimestamp>{formatarTimestamp(log.timestamp)}</LogTimestamp>
                    {log.details && Object.keys(log.details).length > 0 && (
                      <LogDetails>
                        {JSON.stringify(log.details, null, 2)}
                      </LogDetails>
                    )}
                  </LogContent>
                </LogItem>
              ))
            )}
          </LogsContainer>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default LogModal; 