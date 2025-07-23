import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, 
  faSync, 
  faTrashAlt, 
  faDownload,
  faEye,
  faEyeSlash,
  faFilter
} from '@fortawesome/free-solid-svg-icons';

const ModalOverlay = styled.div`
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
  padding: 20px;
`;

const ModalContent = styled.div`
  background: var(--corFundoTerciaria);
  border-radius: var(--bordaRaioGrande);
  width: 100%;
  max-width: 1200px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: var(--sombraForte);
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--espacamentoGrande);
  border-bottom: 1px solid var(--corBordaPrimaria);
`;

const ModalTitle = styled.h2`
  color: var(--corTextoPrimaria);
  margin: 0;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFonteTitulo);
  cursor: pointer;
  padding: var(--espacamentoPequeno);
  border-radius: var(--bordaRaioMedia);
  transition: all var(--transicaoRapida);

  &:hover {
    background: var(--corFundoSecundaria);
    color: var(--corTextoPrimaria);
  }
`;

const ModalBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ControlsBar = styled.div`
  display: flex;
  gap: var(--espacamentoMedio);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  border-bottom: 1px solid var(--corBordaPrimaria);
  background: var(--corFundoSecundaria);
  flex-wrap: wrap;
`;

const ControlButton = styled.button`
  background: ${props => props.variant === 'danger' ? '#dc3545' : 
                     props.variant === 'success' ? '#28a745' : 
                     props.variant === 'warning' ? '#ffc107' : 'var(--corPrimaria)'};
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  cursor: pointer;
  font-size: var(--tamanhoFontePequena);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  transition: all var(--transicaoRapida);

  &:hover {
    opacity: 0.8;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const FilterSelect = styled.select`
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFontePequena);
`;

const LogsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: var(--espacamentoGrande);
  background: var(--corFundoPrimaria);
`;

const LogEntry = styled.div`
  background: var(--corFundoSecundaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoMedio);
  border-left: 4px solid ${props => {
    switch (props.type) {
      case 'firebase': return '#ff6b35';
      case 'api': return '#007bff';
      case 'error': return '#dc3545';
      case 'info': return '#6c757d';
      case 'success': return '#28a745';
      default: return '#6c757d';
    }
  }};
`;

const LogHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoPequeno);
`;

const LogIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => {
    switch (props.type) {
      case 'firebase': return '#ff6b35';
      case 'api': return '#007bff';
      case 'error': return '#dc3545';
      case 'info': return '#6c757d';
      case 'success': return '#28a745';
      default: return '#6c757d';
    }
  }};
  color: white;
  font-size: 12px;
`;

const LogMessage = styled.div`
  font-weight: bold;
  color: var(--corTextoPrimaria);
  flex: 1;
`;

const LogTimestamp = styled.div`
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoSecundaria);
`;

const LogDetails = styled.div`
  background: var(--corFundoPrimaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio);
  margin-top: var(--espacamentoMedio);
  font-family: 'Courier New', monospace;
  font-size: var(--tamanhoFontePequena);
  white-space: pre-wrap;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid var(--corBordaPrimaria);
`;

const StatsBar = styled.div`
  display: flex;
  gap: var(--espacamentoGrande);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  background: var(--corFundoSecundaria);
  border-bottom: 1px solid var(--corBordaPrimaria);
`;

const StatItem = styled.div`
  text-align: center;
  
  .stat-number {
    font-size: var(--tamanhoFonteTitulo);
    font-weight: bold;
    color: var(--corPrimaria);
  }
  
  .stat-label {
    font-size: var(--tamanhoFontePequena);
    color: var(--corTextoSecundaria);
  }
`;

const LogModal = ({ isVisible, onClose, logs = [], stats = null, onRefresh, onClear, onExport, filter, onFilterChange }) => {
  const [autoScroll, setAutoScroll] = useState(true);
  const logsContainerRef = React.useRef(null);

  // Auto-scroll para o final quando novos logs chegarem
  useEffect(() => {
    if (autoScroll && logsContainerRef.current) {
      logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight;
    }
  }, [logs, autoScroll]);

  if (!isVisible) return null;

  const getEmoji = (type) => {
    switch (type) {
      case 'firebase': return '🔥';
      case 'api': return '🌐';
      case 'error': return '❌';
      case 'info': return 'ℹ️';
      case 'success': return '✅';
      default: return '📝';
    }
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString('pt-BR');
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>
            <FontAwesomeIcon icon={faEye} />
            Logs em Tempo Real
          </ModalTitle>
          <CloseButton onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          {/* Estatísticas */}
          {stats && (
            <StatsBar>
              <StatItem>
                <div className="stat-number">{stats.total}</div>
                <div className="stat-label">Total</div>
              </StatItem>
              <StatItem>
                <div className="stat-number" style={{ color: '#ff6b35' }}>{stats.firebase}</div>
                <div className="stat-label">Firebase</div>
              </StatItem>
              <StatItem>
                <div className="stat-number" style={{ color: '#007bff' }}>{stats.api}</div>
                <div className="stat-label">API</div>
              </StatItem>
              <StatItem>
                <div className="stat-number" style={{ color: '#dc3545' }}>{stats.error}</div>
                <div className="stat-label">Erros</div>
              </StatItem>
              <StatItem>
                <div className="stat-number" style={{ color: '#28a745' }}>{stats.info}</div>
                <div className="stat-label">Info</div>
              </StatItem>
            </StatsBar>
          )}

          {/* Controles */}
          <ControlsBar>
            <FilterSelect value={filter} onChange={(e) => onFilterChange(e.target.value)}>
              <option value="all">Todos os tipos</option>
              <option value="firebase">Firebase</option>
              <option value="api">API</option>
              <option value="error">Erros</option>
              <option value="info">Informações</option>
              <option value="success">Sucessos</option>
            </FilterSelect>

            <ControlButton onClick={onRefresh}>
              <FontAwesomeIcon icon={faSync} />
              Atualizar
            </ControlButton>

            <ControlButton variant="success" onClick={onExport}>
              <FontAwesomeIcon icon={faDownload} />
              Exportar
            </ControlButton>

            <ControlButton variant="danger" onClick={onClear}>
              <FontAwesomeIcon icon={faTrashAlt} />
              Limpar
            </ControlButton>

            <ControlButton 
              variant={autoScroll ? "success" : "warning"}
              onClick={() => setAutoScroll(!autoScroll)}
            >
              <FontAwesomeIcon icon={autoScroll ? faEye : faEyeSlash} />
              {autoScroll ? 'Auto-scroll ON' : 'Auto-scroll OFF'}
            </ControlButton>
          </ControlsBar>

          {/* Lista de Logs */}
          <LogsContainer ref={logsContainerRef}>
            {logs.length === 0 ? (
              <div style={{ 
                textAlign: 'center', 
                padding: 'var(--espacamentoExtraGrande)',
                color: 'var(--corTextoSecundaria)'
              }}>
                Nenhum log encontrado.
              </div>
            ) : (
              logs.map((log) => (
                <LogEntry key={log.id} type={log.type}>
                  <LogHeader>
                    <LogIcon type={log.type}>
                      {getEmoji(log.type)}
                    </LogIcon>
                    <LogMessage>{log.message}</LogMessage>
                    <LogTimestamp>{formatTimestamp(log.timestamp)}</LogTimestamp>
                  </LogHeader>
                  
                  {log.details && (
                    <LogDetails>
                      {typeof log.details === 'object' 
                        ? JSON.stringify(log.details, null, 2)
                        : log.details
                      }
                    </LogDetails>
                  )}
                </LogEntry>
              ))
            )}
          </LogsContainer>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default LogModal; 