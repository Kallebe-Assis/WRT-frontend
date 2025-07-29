import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faStickyNote, 
  faLink, 
  faSignOutAlt,
  faUser,
  faCog,
  faPlus,
  faSync,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';

import AuthScreenSimple from './components/AuthScreenSimple';
import { useDataManager } from './hooks/useDataManager';
import GlobalStyles from './styles/GlobalStyles';

const AppContainer = styled.div`
  min-height: 100vh;
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

const Header = styled.header`
  background: var(--corFundoSecundaria);
  border-bottom: 2px solid var(--corBordaPrimaria);
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--sombraLeve);
`;

const Logo = styled.h1`
  color: var(--corPrimaria);
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: var(--corTextoPrimaria);
  font-weight: 600;
`;

const LogoutButton = styled.button`
  background: var(--corErro);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: var(--corErroHover);
    transform: translateY(-1px);
  }
`;

const MainContent = styled.main`
  padding: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const StatCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: var(--sombraLeve);
  border: 1px solid var(--corBordaPrimaria);
`;

const StatTitle = styled.h3`
  color: var(--corTextoSecundaria);
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0 0 10px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const StatValue = styled.div`
  color: var(--corPrimaria);
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
`;

const StatIcon = styled.div`
  color: var(--corSecundaria);
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ContentSection = styled.section`
  background: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: var(--sombraLeve);
  border: 1px solid var(--corBordaPrimaria);
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  color: var(--corTextoPrimaria);
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  color: var(--corTextoSecundaria);
  font-size: 1.1rem;
`;

const ErrorMessage = styled.div`
  background: #ffebee;
  color: #c62828;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RetryButton = styled.button`
  background: var(--corPrimaria);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: var(--corSecundaria);
    transform: translateY(-1px);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px;
  color: var(--corTextoSecundaria);
`;

const ItemList = styled.div`
  display: grid;
  gap: 15px;
`;

const ItemCard = styled.div`
  background: var(--corFundoSecundaria);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: 8px;
  padding: 15px;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--corPrimaria);
    box-shadow: var(--sombraLeve);
  }
`;

const ItemTitle = styled.h4`
  color: var(--corTextoPrimaria);
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 5px 0;
`;

const ItemDescription = styled.p`
  color: var(--corTextoSecundaria);
  font-size: 0.9rem;
  margin: 0;
`;

const AppSimple = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const {
    links,
    notas,
    categorias,
    carregando,
    erro,
    carregarTodosDados,
    limparErro,
    isUserLoggedIn,
    limparDados,
    notasAtivas,
    linksAtivos
  } = useDataManager();

  // Verificar autenticação inicial
  useEffect(() => {
    const checkAuth = () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        try {
          const parsedUser = JSON.parse(userData);
          if (parsedUser && parsedUser.id) {
            setUser(parsedUser);
            setIsAuthenticated(true);
            console.log('✅ Usuário autenticado:', parsedUser);
          } else {
            console.log('❌ Dados do usuário inválidos');
            handleLogout();
          }
        } catch (error) {
          console.error('❌ Erro ao parsear dados do usuário:', error);
          handleLogout();
        }
      } else {
        console.log('❌ Nenhum usuário encontrado');
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  // Escutar eventos de login/logout
  useEffect(() => {
    const handleUserLogin = (event) => {
      console.log('👤 Evento de login recebido:', event.detail);
      setUser(event.detail);
      setIsAuthenticated(true);
    };

    const handleUserLogout = () => {
      console.log('🚪 Evento de logout recebido');
      handleLogout();
    };

    window.addEventListener('userLogin', handleUserLogin);
    window.addEventListener('userLogout', handleUserLogout);

    return () => {
      window.removeEventListener('userLogin', handleUserLogin);
      window.removeEventListener('userLogout', handleUserLogout);
    };
  }, []);

  const handleLogin = (userData) => {
    console.log('✅ Login realizado:', userData);
    setUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    console.log('🚪 Fazendo logout...');
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
    limparDados();
  };

  const handleRetry = async () => {
    console.log('🔄 Tentando carregar dados novamente...');
    limparErro();
    await carregarTodosDados();
  };

  // Se não estiver autenticado, mostrar tela de login
  if (!isAuthenticated) {
    return (
      <>
        <GlobalStyles />
        <AuthScreenSimple onLogin={handleLogin} />
      </>
    );
  }

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Header>
          <Logo>WRTmind</Logo>
          <UserInfo>
            <FontAwesomeIcon icon={faUser} />
            {user?.nome || user?.email || 'Usuário'}
            <LogoutButton onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              Sair
            </LogoutButton>
          </UserInfo>
        </Header>

        <MainContent>
          {/* Estatísticas */}
          <StatsGrid>
            <StatCard>
              <StatIcon>
                <FontAwesomeIcon icon={faStickyNote} />
              </StatIcon>
              <StatTitle>Notas</StatTitle>
              <StatValue>{notasAtivas.length}</StatValue>
            </StatCard>
            
            <StatCard>
              <StatIcon>
                <FontAwesomeIcon icon={faLink} />
              </StatIcon>
              <StatTitle>Links</StatTitle>
              <StatValue>{linksAtivos.length}</StatValue>
            </StatCard>
            
            <StatCard>
              <StatIcon>
                <FontAwesomeIcon icon={faCog} />
              </StatIcon>
              <StatTitle>Categorias</StatTitle>
              <StatValue>{Array.isArray(categorias) ? categorias.length : 0}</StatValue>
            </StatCard>
          </StatsGrid>

          {/* Mensagem de erro */}
          {erro && (
            <ErrorMessage>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <div>
                <strong>Erro:</strong> {erro}
                <RetryButton onClick={handleRetry}>
                  <FontAwesomeIcon icon={faSync} />
                  Tentar Novamente
                </RetryButton>
              </div>
            </ErrorMessage>
          )}

          {/* Loading */}
          {carregando && (
            <LoadingSpinner>
              <FontAwesomeIcon icon={faSync} spin />
              Carregando dados...
            </LoadingSpinner>
          )}

          {/* Conteúdo principal */}
          {!carregando && !erro && (
            <>
              {/* Notas */}
              <ContentSection>
                <SectionTitle>
                  <FontAwesomeIcon icon={faStickyNote} />
                  Notas ({notasAtivas.length})
                </SectionTitle>
                
                {notasAtivas.length === 0 ? (
                  <EmptyState>
                    <FontAwesomeIcon icon={faStickyNote} size="2x" />
                    <p>Nenhuma nota encontrada</p>
                  </EmptyState>
                ) : (
                  <ItemList>
                    {notasAtivas.slice(0, 5).map((nota) => (
                      <ItemCard key={nota.id}>
                        <ItemTitle>{nota.titulo}</ItemTitle>
                        <ItemDescription>
                          {nota.conteudo?.substring(0, 100)}...
                        </ItemDescription>
                      </ItemCard>
                    ))}
                  </ItemList>
                )}
              </ContentSection>

              {/* Links */}
              <ContentSection>
                <SectionTitle>
                  <FontAwesomeIcon icon={faLink} />
                  Links ({linksAtivos.length})
                </SectionTitle>
                
                {linksAtivos.length === 0 ? (
                  <EmptyState>
                    <FontAwesomeIcon icon={faLink} size="2x" />
                    <p>Nenhum link encontrado</p>
                  </EmptyState>
                ) : (
                  <ItemList>
                    {linksAtivos.slice(0, 5).map((link) => (
                      <ItemCard key={link.id}>
                        <ItemTitle>{link.titulo}</ItemTitle>
                        <ItemDescription>{link.url}</ItemDescription>
                      </ItemCard>
                    ))}
                  </ItemList>
                )}
              </ContentSection>
            </>
          )}
        </MainContent>
      </AppContainer>
    </>
  );
};

export default AppSimple; 