import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getApiUrl, config } from '../config/environment.js';
import { 
  faDatabase, 
  faStickyNote, 
  faLink, 
  faUsers, 
  faTags, 
  faFolder,
  faRefresh,
  faDownload,
  faChartBar,
  faCrown,
  faPercentage,
  faBug,
  faTerminal,
  faNetworkWired,
  faTimes,
  faSync,
  faTrashAlt,
  faEye,
  faEyeSlash,
  faFilter,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import ApiTest from './ApiTest';

const AdminContainer = styled.div`
  padding: var(--espacamentoGrande);
  max-width: 1200px;
  margin: 0 auto;
`;

const AdminHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoGrande);
  padding: var(--espacamentoGrande);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: var(--bordaRaioGrande);
  color: white;
  box-shadow: var(--sombraMedia);
`;

const AdminTitle = styled.h1`
  margin: 0;
  font-size: var(--tamanhoFonteTitulo);
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`;

const AdminBadge = styled.span`
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: var(--tamanhoFontePequena);
  font-weight: bold;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--espacamentoGrande);
  margin-bottom: var(--espacamentoGrande);
`;

const StatCard = styled.div`
  background: var(--corFundoSecundaria);
  border-radius: var(--bordaRaioGrande);
  padding: var(--espacamentoGrande);
  box-shadow: var(--sombraLeve);
  border-left: 4px solid ${props => props.color || 'var(--corPrimaria)'};
`;

const StatHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoMedio);
`;

const StatIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${props => props.color || 'var(--corPrimaria)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
`;

const StatTitle = styled.h3`
  margin: 0;
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${props => props.color || 'var(--corPrimaria)'};
  margin-bottom: var(--espacamentoPequeno);
`;

const StatSubtitle = styled.div`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  margin-bottom: var(--espacamentoMedio);
`;

const StatDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--espacamentoMedio);
`;

const StatDetail = styled.div`
  text-align: center;
  padding: var(--espacamentoMedio);
  background: var(--corFundoPrimaria);
  border-radius: var(--bordaRaioMedia);
`;

const DetailValue = styled.div`
  font-size: var(--tamanhoFonteTitulo);
  font-weight: bold;
  color: var(--corTextoPrimaria);
`;

const DetailLabel = styled.div`
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoSecundaria);
  margin-top: 4px;
`;

const ControlsBar = styled.div`
  display: flex;
  gap: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoGrande);
  flex-wrap: wrap;
`;

const ControlButton = styled.button`
  background: ${props => props.variant === 'success' ? '#28a745' : 
                     props.variant === 'warning' ? '#ffc107' : 'var(--corPrimaria)'};
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio);
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

const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--espacamentoExtraGrande);
  color: var(--corTextoSecundaria);
`;

const ErrorMessage = styled.div`
  background: var(--corErro);
  color: white;
  padding: var(--espacamentoMedio);
  border-radius: var(--bordaRaioMedia);
  margin-bottom: var(--espacamentoGrande);
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`;

const PercentualBar = styled.div`
  width: 100%;
  height: 8px;
  background: var(--corFundoPrimaria);
  border-radius: 4px;
  overflow: hidden;
  margin-top: var(--espacamentoPequeno);
`;

const PercentualFill = styled.div`
  height: 100%;
  background: ${props => props.color || 'var(--corPrimaria)'};
  width: ${props => props.percentual}%;
  transition: width 0.3s ease;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 2px;
  margin-bottom: var(--espacamentoGrande);
  border-bottom: 1px solid var(--corBordaPrimaria);
`;

const TabButton = styled.button`
  background: ${props => props.active ? 'var(--corPrimaria)' : 'var(--corFundoSecundaria)'};
  color: ${props => props.active ? 'white' : 'var(--corTextoPrimaria)'};
  border: none;
  border-radius: var(--bordaRaioMedia) var(--bordaRaioMedia) 0 0;
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  cursor: pointer;
  font-size: var(--tamanhoFonteMedia);
  font-weight: bold;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);

  &:hover {
    background: ${props => props.active ? 'var(--corPrimaria)' : 'var(--corFundoTerciaria)'};
  }
`;

const TabContent = styled.div`
  background: var(--corFundoPrimaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoGrande);
  min-height: 400px;
`;

const AccessDenied = styled.div`
  text-align: center;
  padding: var(--espacamentoExtraGrande);
  color: var(--corErro);
  font-size: var(--tamanhoFonteTitulo);
  font-weight: bold;
`;

const AdminPanel = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [activeTab, setActiveTab] = useState('stats');
  const [isAdmin, setIsAdmin] = useState(false);

  const carregarEstatisticas = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const user = localStorage.getItem('user');
      if (!user) {
        throw new Error('Usuário não autenticado');
      }
      
      const userData = JSON.parse(user);
      const apiUrl = `${getApiUrl()}/admin/stats`;
      console.log('🔧 ADMIN - Configuração:', {
        API_BASE_URL: config.API_BASE_URL,
        apiUrl: apiUrl,
        userData: userData
      });
      
      const response = await fetch(apiUrl, {
        headers: {
          'user-id': userData.id,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('Acesso negado. Apenas administradores podem acessar esta área.');
        }
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      setStats(data);
      setLastUpdate(new Date());
      
    } catch (error) {
      console.error('Erro ao carregar estatísticas admin:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const exportarEstatisticas = async () => {
    if (!stats) return;
    
    try {
      const data = {
        ...stats,
        exportadoEm: new Date().toISOString()
      };
      
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `wrtmind-admin-stats-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      alert('Estatísticas exportadas com sucesso!');
    } catch (error) {
      console.error('Erro ao exportar estatísticas:', error);
      alert('Erro ao exportar: ' + error.message);
    }
  };

  // Verificar se o usuário é admin
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      try {
        const userData = JSON.parse(user);
        const adminCheck = userData.id === 'eUF9zbjEuU0G9f7ntD4R';
        setIsAdmin(adminCheck);
        
        if (!adminCheck) {
          setError('Acesso negado. Apenas o administrador pode acessar esta área.');
          setLoading(false);
          return;
        }
      } catch (error) {
        setError('Erro ao verificar permissões de administrador.');
        setLoading(false);
        return;
      }
    } else {
      setError('Usuário não autenticado.');
      setLoading(false);
      return;
    }

    carregarEstatisticas();
  }, []);

  if (!isAdmin) {
    return (
      <AdminContainer>
        <AccessDenied>
          <FontAwesomeIcon icon={faCrown} size="3x" style={{ marginBottom: 'var(--espacamentoGrande)' }} />
          <div>Acesso Negado</div>
          <div style={{ fontSize: 'var(--tamanhoFonteMedia)', marginTop: 'var(--espacamentoMedio)' }}>
            Apenas o administrador pode acessar esta área.
          </div>
        </AccessDenied>
      </AdminContainer>
    );
  }

  if (loading) {
    return (
      <AdminContainer>
        <LoadingSpinner>
          <FontAwesomeIcon icon={faRefresh} spin />
          Carregando estatísticas administrativas...
        </LoadingSpinner>
      </AdminContainer>
    );
  }

  if (error) {
    return (
      <AdminContainer>
        <ErrorMessage>
          <FontAwesomeIcon icon={faCrown} />
          {error}
        </ErrorMessage>
        <ControlButton onClick={carregarEstatisticas}>
          <FontAwesomeIcon icon={faRefresh} />
          Tentar Novamente
        </ControlButton>
      </AdminContainer>
    );
  }

  if (!stats) {
    return (
      <AdminContainer>
        <ErrorMessage>
          Nenhuma estatística disponível.
        </ErrorMessage>
      </AdminContainer>
    );
  }

  return (
    <AdminContainer>
      <AdminHeader>
        <AdminTitle>
          <FontAwesomeIcon icon={faCrown} />
          Painel Administrativo
        </AdminTitle>
        <AdminBadge>Admin ID: {stats?.adminUserId || 'eUF9zbjEuU0G9f7ntD4R'}</AdminBadge>
      </AdminHeader>

      <TabContainer>
        <TabButton 
          active={activeTab === 'stats'} 
          onClick={() => setActiveTab('stats')}
        >
          <FontAwesomeIcon icon={faChartBar} />
          Estatísticas
        </TabButton>
        <TabButton 
          active={activeTab === 'debug'} 
          onClick={() => setActiveTab('debug')}
        >
          <FontAwesomeIcon icon={faBug} />
          Debug
        </TabButton>
        <TabButton 
          active={activeTab === 'logs'} 
          onClick={() => setActiveTab('logs')}
        >
          <FontAwesomeIcon icon={faTerminal} />
          Logs
        </TabButton>
        <TabButton 
          active={activeTab === 'api-test'} 
          onClick={() => setActiveTab('api-test')}
        >
          <FontAwesomeIcon icon={faNetworkWired} />
          Teste API
        </TabButton>
      </TabContainer>

      <TabContent>
        {activeTab === 'stats' && (
          <>
            <ControlsBar>
              <ControlButton onClick={carregarEstatisticas}>
                <FontAwesomeIcon icon={faRefresh} />
                Atualizar
              </ControlButton>
              <ControlButton variant="success" onClick={exportarEstatisticas}>
                <FontAwesomeIcon icon={faDownload} />
                Exportar
              </ControlButton>
              {lastUpdate && (
                <div style={{ 
                  color: 'var(--corTextoSecundaria)', 
                  fontSize: 'var(--tamanhoFontePequena)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--espacamentoPequeno)'
                }}>
                  <FontAwesomeIcon icon={faChartBar} />
                  Última atualização: {lastUpdate.toLocaleString('pt-BR')}
                </div>
              )}
            </ControlsBar>

            {stats && (
              <StatsGrid>
                {/* Estatísticas Gerais do Banco */}
                <StatCard color="#667eea">
                  <StatHeader>
                    <StatIcon color="#667eea">
                      <FontAwesomeIcon icon={faDatabase} />
                    </StatIcon>
                    <StatTitle>Banco de Dados</StatTitle>
                  </StatHeader>
                  <StatValue color="#667eea">{stats.database.totalNotas + stats.database.totalLinks}</StatValue>
                  <StatSubtitle>Total de registros no sistema</StatSubtitle>
                  <StatDetails>
                    <StatDetail>
                      <DetailValue>{stats.database.totalNotas}</DetailValue>
                      <DetailLabel>Notas</DetailLabel>
                    </StatDetail>
                    <StatDetail>
                      <DetailValue>{stats.database.totalLinks}</DetailValue>
                      <DetailLabel>Links</DetailLabel>
                    </StatDetail>
                    <StatDetail>
                      <DetailValue>{stats.database.totalCategorias}</DetailValue>
                      <DetailLabel>Categorias</DetailLabel>
                    </StatDetail>
                    <StatDetail>
                      <DetailValue>{stats.database.totalTopicos}</DetailValue>
                      <DetailLabel>Tópicos</DetailLabel>
                    </StatDetail>
                  </StatDetails>
                </StatCard>

                {/* Notas do Admin */}
                <StatCard color="#28a745">
                  <StatHeader>
                    <StatIcon color="#28a745">
                      <FontAwesomeIcon icon={faStickyNote} />
                    </StatIcon>
                    <StatTitle>Suas Notas</StatTitle>
                  </StatHeader>
                  <StatValue color="#28a745">{stats.admin.notas.total}</StatValue>
                  <StatSubtitle>
                    {stats.percentuais.notasAdmin}% do total do sistema
                    <PercentualBar>
                      <PercentualFill color="#28a745" percentual={parseFloat(stats.percentuais.notasAdmin)} />
                    </PercentualBar>
                  </StatSubtitle>
                  <StatDetails>
                    <StatDetail>
                      <DetailValue>{stats.admin.notas.ativas}</DetailValue>
                      <DetailLabel>Ativas</DetailLabel>
                    </StatDetail>
                    <StatDetail>
                      <DetailValue>{stats.admin.notas.favoritas}</DetailValue>
                      <DetailLabel>Favoritas</DetailLabel>
                    </StatDetail>
                    <StatDetail>
                      <DetailValue>{stats.admin.notas.fixadas}</DetailValue>
                      <DetailLabel>Fixadas</DetailLabel>
                    </StatDetail>
                    <StatDetail>
                      <DetailValue>{stats.admin.notas.inativas}</DetailValue>
                      <DetailLabel>Inativas</DetailLabel>
                    </StatDetail>
                  </StatDetails>
                </StatCard>

                {/* Links do Admin */}
                <StatCard color="#007bff">
                  <StatHeader>
                    <StatIcon color="#007bff">
                      <FontAwesomeIcon icon={faLink} />
                    </StatIcon>
                    <StatTitle>Seus Links</StatTitle>
                  </StatHeader>
                  <StatValue color="#007bff">{stats.admin.links.total}</StatValue>
                  <StatSubtitle>
                    {stats.percentuais.linksAdmin}% do total do sistema
                    <PercentualBar>
                      <PercentualFill color="#007bff" percentual={parseFloat(stats.percentuais.linksAdmin)} />
                    </PercentualBar>
                  </StatSubtitle>
                  <StatDetails>
                    <StatDetail>
                      <DetailValue>{stats.admin.links.ativos}</DetailValue>
                      <DetailLabel>Ativos</DetailLabel>
                    </StatDetail>
                    <StatDetail>
                      <DetailValue>{stats.admin.links.favoritos}</DetailValue>
                      <DetailLabel>Favoritos</DetailLabel>
                    </StatDetail>
                    <StatDetail>
                      <DetailValue>{stats.admin.links.inativos}</DetailValue>
                      <DetailLabel>Inativos</DetailLabel>
                    </StatDetail>
                    <StatDetail>
                      <DetailValue>-</DetailValue>
                      <DetailLabel>-</DetailLabel>
                    </StatDetail>
                  </StatDetails>
                </StatCard>

                {/* Categorias e Tópicos */}
                <StatCard color="#ffc107">
                  <StatHeader>
                    <StatIcon color="#ffc107">
                      <FontAwesomeIcon icon={faTags} />
                    </StatIcon>
                    <StatTitle>Organização</StatTitle>
                  </StatHeader>
                  <StatValue color="#ffc107">{stats.admin.categorias.total + stats.admin.topicos.total}</StatValue>
                  <StatSubtitle>Categorias e tópicos criados</StatSubtitle>
                  <StatDetails>
                    <StatDetail>
                      <DetailValue>{stats.admin.categorias.total}</DetailValue>
                      <DetailLabel>Categorias</DetailLabel>
                    </StatDetail>
                    <StatDetail>
                      <DetailValue>{stats.admin.topicos.total}</DetailValue>
                      <DetailLabel>Tópicos</DetailLabel>
                    </StatDetail>
                    <StatDetail>
                      <DetailValue>{stats.percentuais.categoriasAdmin}%</DetailValue>
                      <DetailLabel>% Categorias</DetailLabel>
                    </StatDetail>
                    <StatDetail>
                      <DetailValue>{stats.percentuais.topicosAdmin}%</DetailValue>
                      <DetailLabel>% Tópicos</DetailLabel>
                    </StatDetail>
                  </StatDetails>
                </StatCard>

                {/* Usuários */}
                <StatCard color="#dc3545">
                  <StatHeader>
                    <StatIcon color="#dc3545">
                      <FontAwesomeIcon icon={faUsers} />
                    </StatIcon>
                    <StatTitle>Usuários</StatTitle>
                  </StatHeader>
                  <StatValue color="#dc3545">{stats.database.totalUsuarios}</StatValue>
                  <StatSubtitle>Total de usuários registrados</StatSubtitle>
                  <StatDetails>
                    <StatDetail>
                      <DetailValue>{stats.database.totalUsuarios}</DetailValue>
                      <DetailLabel>Total</DetailLabel>
                    </StatDetail>
                    <StatDetail>
                      <DetailValue>1</DetailValue>
                      <DetailLabel>Admin</DetailLabel>
                    </StatDetail>
                    <StatDetail>
                      <DetailValue>{stats.database.totalUsuarios - 1}</DetailValue>
                      <DetailLabel>Usuários</DetailLabel>
                    </StatDetail>
                    <StatDetail>
                      <DetailValue>-</DetailValue>
                      <DetailLabel>-</DetailLabel>
                    </StatDetail>
                  </StatDetails>
                </StatCard>
              </StatsGrid>
            )}
          </>
        )}

        {activeTab === 'debug' && (
          <div>
            <h3>Ferramentas de Debug</h3>
            <p>Ferramentas para diagnosticar problemas e testar funcionalidades do sistema.</p>
            
            <div style={{ display: 'grid', gap: 'var(--espacamentoMedio)', marginTop: 'var(--espacamentoGrande)' }}>
              
              {/* Seção de Autenticação */}
              <div style={{ 
                background: 'var(--corFundoSecundaria)', 
                padding: 'var(--espacamentoMedio)', 
                borderRadius: 'var(--bordaRaioMedia)',
                border: '1px solid var(--corBordaPrimaria)'
              }}>
                <h4 style={{ 
                  color: 'var(--corTextoPrimaria)', 
                  margin: '0 0 var(--espacamentoMedio) 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--espacamentoPequeno)'
                }}>
                  <FontAwesomeIcon icon={faUser} />
                  Autenticação
                </h4>
                
                <div style={{ display: 'flex', gap: 'var(--espacamentoPequeno)', flexWrap: 'wrap' }}>
                  <button 
                    onClick={() => {
                      const user = localStorage.getItem('user');
                      if (user) {
                        console.log('🔍 === DEBUG AUTENTICAÇÃO ===');
                        console.log('Usuário logado:', JSON.parse(user));
                        console.log('🔍 === FIM DEBUG ===');
                        alert('Verifique o console para detalhes da autenticação');
                      } else {
                        alert('Nenhum usuário logado');
                      }
                    }}
                    style={{
                      background: 'var(--corPrimaria)',
                      color: 'white',
                      border: 'none',
                      borderRadius: 'var(--bordaRaioMedia)',
                      padding: 'var(--espacamentoPequeno) var(--espacamentoMedio)',
                      cursor: 'pointer',
                      fontSize: 'var(--tamanhoFontePequena)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--espacamentoPequeno)'
                    }}
                  >
                    <FontAwesomeIcon icon={faEye} />
                    Verificar Auth
                  </button>
                </div>
              </div>

              {/* Seção de Informações do Sistema */}
              <div style={{ 
                background: 'var(--corFundoSecundaria)', 
                padding: 'var(--espacamentoMedio)', 
                borderRadius: 'var(--bordaRaioMedia)',
                border: '1px solid var(--corBordaPrimaria)'
              }}>
                <h4 style={{ 
                  color: 'var(--corTextoPrimaria)', 
                  margin: '0 0 var(--espacamentoMedio) 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--espacamentoPequeno)'
                }}>
                  <FontAwesomeIcon icon={faDatabase} />
                  Informações do Sistema
                </h4>
                
                <div style={{ 
                  background: 'var(--corFundoPrimaria)', 
                  padding: 'var(--espacamentoMedio)', 
                  borderRadius: 'var(--bordaRaioMedia)',
                  fontSize: 'var(--tamanhoFontePequena)',
                  fontFamily: 'monospace'
                }}>
                  <div><strong>User Agent:</strong> {navigator.userAgent}</div>
                  <div><strong>Local Storage:</strong> {localStorage.getItem('user') ? 'Usuário logado' : 'Nenhum usuário'}</div>
                  <div><strong>API Base URL:</strong> {getApiUrl()}</div>
                  <div><strong>Timestamp:</strong> {new Date().toLocaleString()}</div>
                </div>
              </div>

              {/* Seção de Limpeza */}
              <div style={{ 
                background: 'var(--corFundoSecundaria)', 
                padding: 'var(--espacamentoMedio)', 
                borderRadius: 'var(--bordaRaioMedia)',
                border: '1px solid var(--corBordaPrimaria)'
              }}>
                <h4 style={{ 
                  color: 'var(--corTextoPrimaria)', 
                  margin: '0 0 var(--espacamentoMedio) 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--espacamentoPequeno)'
                }}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                  Limpeza
                </h4>
                
                <div style={{ display: 'flex', gap: 'var(--espacamentoPequeno)', flexWrap: 'wrap' }}>
                  <button 
                    onClick={() => {
                      if (window.confirm('Tem certeza que deseja limpar o console?')) {
                        console.clear();
                        alert('Console limpo!');
                      }
                    }}
                    style={{
                      background: '#6c757d',
                      color: 'white',
                      border: 'none',
                      borderRadius: 'var(--bordaRaioMedia)',
                      padding: 'var(--espacamentoPequeno) var(--espacamentoMedio)',
                      cursor: 'pointer',
                      fontSize: 'var(--tamanhoFontePequena)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--espacamentoPequeno)'
                    }}
                  >
                    <FontAwesomeIcon icon={faTerminal} />
                    Limpar Console
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'logs' && (
          <div>
            <h3>Logs do Sistema</h3>
            <p>Visualize logs detalhados das operações do Firebase e do sistema.</p>
            
            <div style={{ 
              display: 'flex', 
              gap: 'var(--espacamentoMedio)', 
              marginBottom: 'var(--espacamentoGrande)',
              flexWrap: 'wrap'
            }}>
              <button 
                onClick={() => {
                  // Implementar carregamento de logs
                  alert('Funcionalidade de logs será implementada em breve');
                }}
                style={{
                  background: 'var(--corPrimaria)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--bordaRaioMedia)',
                  padding: 'var(--espacamentoPequeno) var(--espacamentoMedio)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--espacamentoPequeno)'
                }}
              >
                <FontAwesomeIcon icon={faSync} />
                Carregar Logs
              </button>

              <button 
                onClick={() => {
                  // Implementar exportação de logs
                  alert('Funcionalidade de exportação será implementada em breve');
                }}
                style={{
                  background: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--bordaRaioMedia)',
                  padding: 'var(--espacamentoPequeno) var(--espacamentoMedio)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--espacamentoPequeno)'
                }}
              >
                <FontAwesomeIcon icon={faDownload} />
                Exportar Logs
              </button>
            </div>

            <div style={{ 
              background: 'var(--corFundoSecundaria)', 
              borderRadius: 'var(--bordaRaioMedia)',
              padding: 'var(--espacamentoGrande)',
              textAlign: 'center',
              color: 'var(--corTextoSecundaria)'
            }}>
              <FontAwesomeIcon icon={faTerminal} size="2x" style={{ marginBottom: 'var(--espacamentoMedio)' }} />
              <p>Funcionalidade de logs será implementada em breve.</p>
              <p>Esta aba permitirá visualizar logs detalhados das operações do sistema.</p>
            </div>
          </div>
        )}

        {activeTab === 'api-test' && (
          <ApiTest />
        )}
      </TabContent>
    </AdminContainer>
  );
};

export default AdminPanel; 