import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faServer, 
  faUser, 
  faLink, 
  faStickyNote, 
  faTags, 
  faCheck, 
  faTimes, 
  faSpinner,
  faHeartbeat,
  faSignInAlt,
  faSignOutAlt,
  faTrash,
  faInfoCircle,
  faCog,
  faRocket
} from '@fortawesome/free-solid-svg-icons';
import { getApiUrl } from '../config/environment';

// Animações
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
  40%, 43% { transform: translate3d(0, -30px, 0); }
  70% { transform: translate3d(0, -15px, 0); }
  90% { transform: translate3d(0, -4px, 0); }
`;

// Componentes estilizados
const TestContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${fadeIn} 0.6s ease-out;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
  animation: ${slideIn} 0.8s ease-out;

  h1 {
    color: var(--corPrimaria);
    font-size: 2.5rem;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }

  p {
    color: var(--corTextoSecundaria);
    font-size: 1.1rem;
    margin: 10px 0 0 0;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
  animation: ${fadeIn} 0.8s ease-out 0.2s both;
`;

const InfoCard = styled.div`
  background: linear-gradient(135deg, var(--corFundoPrimaria) 0%, var(--corFundoSecundaria) 100%);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioGrande);
  padding: 20px;
  box-shadow: var(--sombraMedia);
  transition: all var(--transicaoMedia);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--sombraForte);
  }

  h3 {
    color: var(--corPrimaria);
    margin: 0 0 10px 0;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1rem;
  }

  p {
    color: var(--corTextoSecundaria);
    margin: 5px 0;
    font-size: 0.9rem;
    word-break: break-all;
  }
`;

const TestSection = styled.div`
  background: var(--corFundoPrimaria);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioGrande);
  padding: 25px;
  margin-bottom: 25px;
  box-shadow: var(--sombraMedia);
  animation: ${fadeIn} 0.8s ease-out 0.4s both;

  h3 {
    color: var(--corPrimaria);
    margin: 0 0 20px 0;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.3rem;
  }
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
`;

const TestButton = styled.button`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  padding: 15px 20px;
  font-size: var(--tamanhoFonteMedia);
  font-weight: bold;
  cursor: pointer;
  transition: all var(--transicaoMedia);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--sombraHover);
    animation: ${pulse} 0.6s ease-in-out;
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: var(--corTextoTerciaria);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  &.success {
    background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
  }

  &.error {
    background: linear-gradient(135deg, #dc3545 0%, #e74c3c 100%);
  }

  &.warning {
    background: linear-gradient(135deg, #ffc107 0%, #fd7e14 100%);
  }
`;

const ResultsContainer = styled.div`
  background: var(--corFundoSecundaria);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  padding: 20px;
  max-height: 500px;
  overflow-y: auto;
  animation: ${fadeIn} 0.8s ease-out 0.6s both;
`;

const ResultItem = styled.div`
  background: var(--corFundoPrimaria);
  border-left: 4px solid ${props => {
    switch (props.type) {
      case 'success': return '#28a745';
      case 'error': return '#dc3545';
      case 'warning': return '#ffc107';
      default: return '#17a2b8';
    }
  }};
  border-radius: var(--bordaRaioMedia);
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: var(--sombraPequena);
  transition: all var(--transicaoMedia);
  animation: ${slideIn} 0.5s ease-out;

  &:hover {
    transform: translateX(5px);
    box-shadow: var(--sombraMedia);
  }

  .result-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .result-title {
    font-weight: bold;
    color: var(--corTextoPrimaria);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .result-timestamp {
    color: var(--corTextoTerciaria);
    font-size: 0.8rem;
  }

  .result-content {
    background: var(--corFundoSecundaria);
    border-radius: var(--bordaRaioPequena);
    padding: 10px;
    font-family: 'Courier New', monospace;
    font-size: 0.85rem;
    color: var(--corTextoPrimaria);
    white-space: pre-wrap;
    word-break: break-word;
  }
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: ${spin} 1s ease-in-out infinite;
`;

const StatusIndicator = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 8px;
  border-radius: var(--bordaRaioPequena);
  font-size: 0.8rem;
  font-weight: bold;
  background: ${props => props.status === 'online' ? '#d4edda' : '#f8d7da'};
  color: ${props => props.status === 'online' ? '#155724' : '#721c24'};
  border: 1px solid ${props => props.status === 'online' ? '#c3e6cb' : '#f5c6cb'};
`;

const ApiTest = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState('checking');

  const API_BASE_URL = 'https://wrt-back.vercel.app/api';

  // Verificar status da API ao carregar
  useEffect(() => {
    checkApiStatus();
  }, []);

  const checkApiStatus = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      setApiStatus(response.ok ? 'online' : 'offline');
    } catch (error) {
      setApiStatus('offline');
    }
  };

  const addResult = (title, data, type = 'info') => {
    const result = {
      id: Date.now(),
      timestamp: new Date().toLocaleString(),
      title,
      data,
      type
    };
    setResults(prev => [result, ...prev.slice(0, 19)]); // Manter apenas os últimos 20 resultados
  };

  const clearResults = () => {
    setResults([]);
  };

  const testLogin = async () => {
    setLoading(true);
    try {
      addResult('🔐 Teste de Login', 'Iniciando...', 'info');
      
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'teste@wrtmind.com',
          senha: '123456'
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        // Não salvar no localStorage para não afetar o usuário logado
        addResult('✅ Login Bem-sucedido (TESTE)', {
          ...data,
          observacao: 'Este é apenas um teste. Os dados do usuário logado não foram afetados.'
        }, 'success');
      } else {
        addResult('❌ Erro no Login', data, 'error');
      }
    } catch (error) {
      addResult('❌ Erro de Conexão', { error: error.message }, 'error');
    } finally {
      setLoading(false);
    }
  };

  const checkAuth = () => {
    const user = localStorage.getItem('user');
    if (user) {
      try {
        const userData = JSON.parse(user);
        addResult('✅ Usuário Autenticado', userData, 'success');
      } catch (error) {
        addResult('❌ Erro ao Parsear Usuário', { error: error.message }, 'error');
      }
    } else {
      addResult('❌ Nenhum Usuário Logado', {}, 'error');
    }
  };

  const clearAuth = () => {
    localStorage.removeItem('user');
    addResult('🧹 Auth Limpa', 'Dados do usuário removidos', 'info');
  };

  const testHealth = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      const data = await response.json();
      
      if (response.ok) {
        addResult('✅ Health Check', data, 'success');
        setApiStatus('online');
      } else {
        addResult('❌ Health Check Falhou', data, 'error');
        setApiStatus('offline');
      }
    } catch (error) {
      addResult('❌ Erro Health Check', { error: error.message }, 'error');
      setApiStatus('offline');
    } finally {
      setLoading(false);
    }
  };

  const testEndpoint = async (endpoint, name) => {
    setLoading(true);
    try {
      const user = localStorage.getItem('user');
      let userId = null;
      
      if (user) {
        const userData = JSON.parse(user);
        userId = userData.id;
      }

      const headers = {
        'Content-Type': 'application/json',
        ...(userId && { 'user-id': userId }),
      };

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'GET',
        headers
      });

      const data = await response.json();
      
      if (response.ok) {
        addResult(`✅ ${name}`, data, 'success');
      } else {
        addResult(`❌ Erro ${name}`, data, 'error');
      }
    } catch (error) {
      addResult(`❌ Erro ${name}`, { error: error.message }, 'error');
    } finally {
      setLoading(false);
    }
  };

  const getSystemInfo = () => {
    const info = {
      userAgent: navigator.userAgent,
      localStorage: localStorage.getItem('user') ? 'Usuário logado' : 'Nenhum usuário',
      apiUrl: API_BASE_URL,
      timestamp: new Date().toLocaleString(),
      apiStatus: apiStatus
    };
    addResult('📋 Informações do Sistema', info, 'info');
  };

  return (
    <TestContainer>
      <Header>
        <h1>
          <FontAwesomeIcon icon={faRocket} />
          Teste de API WRTmind
        </h1>
        <p>Ferramenta de diagnóstico e teste da API</p>
        <StatusIndicator status={apiStatus}>
          <FontAwesomeIcon icon={apiStatus === 'online' ? faCheck : faTimes} />
          {apiStatus === 'online' ? 'API Online' : 'API Offline'}
        </StatusIndicator>
      </Header>

      <InfoGrid>
        <InfoCard>
          <h3>
            <FontAwesomeIcon icon={faInfoCircle} />
            Informações do Sistema
          </h3>
          <p><strong>User Agent:</strong> {navigator.userAgent.substring(0, 50)}...</p>
          <p><strong>Local Storage:</strong> {localStorage.getItem('user') ? 'Usuário logado' : 'Nenhum usuário'}</p>
          <p><strong>API Base URL:</strong> {API_BASE_URL}</p>
          <p><strong>Status API:</strong> {apiStatus === 'online' ? '🟢 Online' : '🔴 Offline'}</p>
        </InfoCard>

        <InfoCard>
          <h3>
            <FontAwesomeIcon icon={faCog} />
            Configurações
          </h3>
          <p><strong>Ambiente:</strong> {process.env.NODE_ENV || 'development'}</p>
          <p><strong>Timestamp:</strong> {new Date().toLocaleString()}</p>
          <p><strong>Resultados:</strong> {results.length} testes realizados</p>
          <p><strong>Versão:</strong> 1.0.0</p>
        </InfoCard>
      </InfoGrid>

      <TestSection>
        <h3>
          <FontAwesomeIcon icon={faUser} />
          Teste de Autenticação
        </h3>
        <ButtonGrid>
          <TestButton onClick={testLogin} disabled={loading}>
            {loading ? <LoadingSpinner /> : <FontAwesomeIcon icon={faSignInAlt} />}
            Testar Login
          </TestButton>
          <TestButton onClick={checkAuth} disabled={loading}>
            <FontAwesomeIcon icon={faUser} />
            Verificar Auth
          </TestButton>
          <TestButton onClick={clearAuth} disabled={loading} className="warning">
            <FontAwesomeIcon icon={faSignOutAlt} />
            Limpar Auth
          </TestButton>
        </ButtonGrid>
      </TestSection>

      <TestSection>
        <h3>
          <FontAwesomeIcon icon={faServer} />
          Teste de API
        </h3>
        <ButtonGrid>
          <TestButton onClick={testHealth} disabled={loading}>
            {loading ? <LoadingSpinner /> : <FontAwesomeIcon icon={faHeartbeat} />}
            Health Check
          </TestButton>
          <TestButton onClick={() => testEndpoint('/links', 'Links')} disabled={loading}>
            <FontAwesomeIcon icon={faLink} />
            Testar Links
          </TestButton>
          <TestButton onClick={() => testEndpoint('/notas', 'Notas')} disabled={loading}>
            <FontAwesomeIcon icon={faStickyNote} />
            Testar Notas
          </TestButton>
          <TestButton onClick={() => testEndpoint('/categorias', 'Categorias')} disabled={loading}>
            <FontAwesomeIcon icon={faTags} />
            Testar Categorias
          </TestButton>
          <TestButton onClick={getSystemInfo} disabled={loading}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Info Sistema
          </TestButton>
          <TestButton onClick={clearResults} disabled={loading} className="error">
            <FontAwesomeIcon icon={faTrash} />
            Limpar Resultados
          </TestButton>
        </ButtonGrid>
      </TestSection>

      <TestSection>
        <h3>
          <FontAwesomeIcon icon={faCog} />
          Resultados dos Testes
        </h3>
        <ResultsContainer>
          {results.length === 0 ? (
            <div style={{ textAlign: 'center', color: 'var(--corTextoTerciaria)', padding: '40px' }}>
              <FontAwesomeIcon icon={faRocket} size="2x" style={{ marginBottom: '20px' }} />
              <p>Nenhum teste realizado ainda.</p>
              <p>Clique nos botões acima para começar os testes.</p>
            </div>
          ) : (
            results.map((result) => (
              <ResultItem key={result.id} type={result.type}>
                <div className="result-header">
                  <div className="result-title">
                    {result.title}
                  </div>
                  <div className="result-timestamp">
                    {result.timestamp}
                  </div>
                </div>
                <div className="result-content">
                  {JSON.stringify(result.data, null, 2)}
                </div>
              </ResultItem>
            ))
          )}
        </ResultsContainer>
      </TestSection>
    </TestContainer>
  );
};

export default ApiTest; 