import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStickyNote,
  faSignOutAlt,
  faSync,
  faClock,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { NotasAPIProvider, useNotasAPIContext } from './context/NotasAPIContext';
import AuthScreen from './components/AuthScreen';
import TelaInicial from './components/TelaInicial';
import TelaNotas from './components/TelaNotas';
import TelaLinks from './components/TelaLinks';
import TelaLixeira from './components/TelaLixeira';
import Configuracoes from './components/Configuracoes';
import MenuLateral from './components/MenuLateral';
import ListaItens from './components/ListaItens';
import ModalItem from './components/ModalItem';
import ModalLink from './components/ModalLink';
import NotaTelaCheia from './components/NotaTelaCheia';
import FullscreenViewer from './components/FullscreenViewer';
import LogModal from './components/LogModal';
import GlobalStyles from './styles/GlobalStyles';
import { linksAPI } from './config/api';
import { exportarParaPDF } from './utils/exportacao';

const AppContainer = styled.div`
  min-height: 100vh;
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

const MainContent = styled.div`
  display: flex;
  min-height: 100vh;
`;

const ContentArea = styled.div`
  flex: 1;
  margin-left: ${props => props.menuRecolhido ? 'var(--larguraMenuRecolhido)' : 'var(--larguraMenu)'};
  transition: margin-left var(--transicaoMedia);
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background: linear-gradient(135deg, var(--corFundoSecundaria) 0%, var(--corFundoTerciaria) 100%);
  border-bottom: 2px solid var(--corBordaPrimaria);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--sombraMedia);
  height: 80px;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  color: var(--corTextoPrimaria);
  font-weight: 600;
  background: var(--corFundoSecundaria);
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  border-radius: var(--bordaRaioGrande);
  border: 1px solid var(--corBordaPrimaria);
`;

const LogoutButton = styled.button`
  background: linear-gradient(135deg, var(--corErro) 0%, #d32f2f 100%);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  padding: 10px 18px;
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: var(--sombraLeve);

  &:hover {
    background: linear-gradient(135deg, var(--corErroHover) 0%, #b71c1c 100%);
    transform: translateY(-2px);
    box-shadow: var(--sombraMedia);
  }
`;

const Logo = styled.button`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  border-radius: var(--bordaRaioMedia);
  transition: all var(--transicaoRapida);
  border: none;
  cursor: pointer;
  background: transparent;

  &:hover {
    transform: scale(1.05);
    background: var(--corFundoHover);
    border-radius: var(--bordaRaioMedia);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const StatusBar = styled.div`
  background: linear-gradient(90deg, var(--corFundoTerciaria) 0%, var(--corFundoSecundaria) 100%);
  border-bottom: 1px solid var(--corBordaPrimaria);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoSecundaria);
  backdrop-filter: blur(5px);
`;

const StatusItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  background: var(--corFundoSecundaria);
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  border-radius: var(--bordaRaioMedia);
  border: 1px solid var(--corBordaPrimaria);
`;

const StatusIndicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props =>
    props.status === 'online' ? 'var(--corSucesso)' :
    props.status === 'syncing' ? 'var(--corAviso)' :
    'var(--corErro)'
  };
  box-shadow: 0 0 8px ${props =>
    props.status === 'online' ? 'rgba(76, 175, 80, 0.4)' :
    props.status === 'syncing' ? 'rgba(255, 152, 0, 0.4)' :
    'rgba(244, 67, 54, 0.4)'
  };
  animation: ${props => props.status === 'syncing' ? 'pulse 2s infinite' : 'none'};
`;

const SyncButton = styled.button`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  padding: 8px 16px;
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: var(--sombraLeve);

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, var(--corSecundaria) 0%, var(--corPrimaria) 100%);
    transform: translateY(-2px);
    box-shadow: var(--sombraMedia);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
`;

// Hook para gerenciar status de sincronização
function useSyncStatus() {
  const [syncStatus, setSyncStatus] = useState('online');
  const [lastSync, setLastSync] = useState(null);

  const fetchStatus = async () => {
    try {
      const response = await fetch('https://wrt-back.vercel.app/api/sync/status');
      if (response.ok) {
        const data = await response.json();
        setSyncStatus(data.status || 'online');
        setLastSync(data.lastSync ? new Date(data.lastSync) : null);
      } else {
        setSyncStatus('offline');
      }
    } catch (error) {
      setSyncStatus('offline');
    }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  return {
    syncStatus,
    setSyncStatus,
    lastSync,
    setLastSync
  };
}

// Componente principal da aplicação
const AppContent = () => {
  const {
    categorias,
    carregando,
    carregarNotas,
    adicionarNota,
    editarNota,
    excluirNota,
    alternarFavorito,
    notasAtivas,
    menuRecolhido,
    recarregarDados,
    topicos
  } = useNotasAPIContext();

  const [user, setUser] = useState(null);
  const [telaAtiva, setTelaAtiva] = useState('inicial');
  const [modalAberto, setModalAberto] = useState(false);
  const [itemAtual, setItemAtual] = useState(null);
  const [modoModal, setModoModal] = useState('editar');
  const [carregandoModal, setCarregandoModal] = useState(false);
  const [telaCheiaAberta, setTelaCheiaAberta] = useState(false);
  const [itemTelaCheia, setItemTelaCheia] = useState(null);
  const [fullscreenViewerAberto, setFullscreenViewerAberto] = useState(false);
  const [itemFullscreen, setItemFullscreen] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [logModalAberto, setLogModalAberto] = useState(false);
  const [modalLinkAberto, setModalLinkAberto] = useState(false);
  const [linkAtual, setLinkAtual] = useState(null);
  const [modoModalLink, setModoModalLink] = useState('criar');
  const [links, setLinks] = useState([]);
  const [carregandoLinks, setCarregandoLinks] = useState(false);
  const [forcarAtualizacao, setForcarAtualizacao] = useState(0);

  const { syncStatus, lastSync, setSyncStatus, setLastSync } = useSyncStatus();

  // Verificar usuário logado e carregar dados imediatamente
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setUser(user);
        setTelaAtiva('inicial');
        carregarDadosIniciais(user);
      } catch (error) {
        localStorage.removeItem('user');
        setTelaAtiva('login');
      }
    } else {
      setTelaAtiva('login');
    }
  }, []);

  // Função para carregar todos os dados iniciais
  const carregarDadosIniciais = async (userData) => {
    if (!userData) return;

    try {
      await carregarNotas();
      await carregarLinks();
    } catch (error) {
      console.error('Erro ao carregar dados iniciais:', error);
    }
  };

  // Carregar links quando usuário logar
  useEffect(() => {
    if (user && user.id && !carregandoLinks) {
      carregarLinks();
    }
  }, [user?.id]);

  const carregarLinks = async () => {
    try {
      if (!user) return;

      setCarregandoLinks(true);
      try {
        const response = await linksAPI.buscarTodos();
        const links = response.links || response.data || [];
        setLinks(links);
      } catch (error) {
        console.error('Erro ao carregar links:', error);
      } finally {
        setCarregandoLinks(false);
      }
    } catch (error) {
      console.error('Erro no carregarLinks:', error);
    }
  };

  // Handlers para eventos de notas
  const handleAbrirNota = (event) => {
    const nota = event.detail;
    setItemAtual(nota);
    setModoModal('visualizar');
    setModalAberto(true);
  };

  // Handlers para eventos de links
  const handleAbrirLink = (event) => {
    const link = event.detail;
    window.open(link.url, '_blank');
  };

  // Handlers para eventos de usuário
  const handleUserLogout = () => {
    setUser(null);
    setTelaAtiva('login');
  };

  // Adicionar listeners para eventos customizados
  useEffect(() => {
    window.addEventListener('abrirNota', handleAbrirNota);
    window.addEventListener('abrirLink', handleAbrirLink);
    window.addEventListener('userLogout', handleUserLogout);

    return () => {
      window.removeEventListener('abrirNota', handleAbrirNota);
      window.removeEventListener('abrirLink', handleAbrirLink);
      window.removeEventListener('userLogout', handleUserLogout);
    };
  }, []);

  // Listener para mudanças no estado de fullscreen
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  // Handlers principais
  const handleLogin = (userData) => {
    setUser(userData);
    setTelaAtiva('inicial');
    carregarDadosIniciais(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setTelaAtiva('login');
  };

  const handleNovoItem = () => {
    setItemAtual(null);
    setModoModal('editar');
    setModalAberto(true);
  };

  const handleNovoLink = () => {
    setLinkAtual(null);
    setModoModalLink('editar');
    setModalLinkAberto(true);
  };

  const handleEditarItem = (item) => {
    setItemAtual(item);
    setModoModal('editar');
    setModalAberto(true);
  };

  const handleEditarLink = (link) => {
    setLinkAtual(link);
    setModoModalLink('editar');
    setModalLinkAberto(true);
  };

  const handleVisualizarItem = (item) => {
    setItemAtual(item);
    setModoModal('visualizar');
    setModalAberto(true);
  };

  const handleExportarItem = async (item) => {
    try {
      const resultado = await exportarParaPDF(item);
      
      if (resultado.success) {
        console.log('Exportação realizada com sucesso');
      } else {
        console.error('Erro na exportação:', resultado.message);
        alert('Erro ao exportar: ' + resultado.message);
      }
    } catch (error) {
      console.error('Erro na exportação:', error);
      alert('Erro ao exportar: ' + error.message);
    }
  };

  const handleImprimirItem = (item) => {
    console.log('Imprimir:', item);
  };

  const handleTelaCheia = (item) => {
    setItemFullscreen(item);
    setFullscreenViewerAberto(true);
  };

  const handleFecharTelaCheia = () => {
    setTelaCheiaAberta(false);
    setItemTelaCheia(null);
  };

  const handleFecharFullscreenViewer = () => {
    setFullscreenViewerAberto(false);
    setItemFullscreen(null);
  };

  const handleEditarTelaCheia = () => {
    if (itemTelaCheia) {
      setItemAtual(itemTelaCheia);
      setModoModal('editar');
      setModalAberto(true);
      setTelaCheiaAberta(false);
    }
  };

  const handleExcluirTelaCheia = () => {
    if (itemTelaCheia) {
      handleExcluirItem(itemTelaCheia.id);
      setTelaCheiaAberta(false);
    }
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      // Entrar em tela cheia
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => {
        console.error('Erro ao entrar em tela cheia:', err);
      });
    } else {
      // Sair da tela cheia
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(err => {
        console.error('Erro ao sair da tela cheia:', err);
      });
    }
  };

  const handleSalvarItem = async (id, formData) => {
    try {
      setCarregandoModal(true);

      const isLink = formData.url !== undefined;

      if (isLink) {
        if (id) {
          await editarNota(id, formData);
        } else {
          await adicionarNota(formData);
        }
      } else {
        if (id) {
          await editarNota(id, formData);
        } else {
          await adicionarNota(formData);
        }
      }

      setModalAberto(false);
      setItemAtual(null);
    } catch (error) {
      console.error('Erro ao salvar item:', error);
      // Mostrar erro para o usuário
      let errorMessage = 'Erro ao salvar nota';
      
      if (error.message) {
        if (error.message.includes('Failed to fetch')) {
          errorMessage = 'Erro de conexão. Verifique sua internet e tente novamente.';
        } else if (error.message.includes('HTTP')) {
          errorMessage = `Erro do servidor: ${error.message}`;
        } else {
          errorMessage = error.message;
        }
      }
      
      alert(errorMessage);
    } finally {
      setCarregandoModal(false);
    }
  };

  const handleSalvarLink = async (formData) => {
    try {
      if (linkAtual) {
        const response = await linksAPI.atualizar(linkAtual.id, formData);
        const dadosAtualizados = response.data || { ...linkAtual, ...formData };
        setLinks(prev => {
          const novosLinks = prev.map(link =>
            link.id === linkAtual.id ? dadosAtualizados : link
          );
          return novosLinks;
        });
      } else {
        const response = await linksAPI.criar(formData);
        const novoLink = response.data || response.link;
        if (novoLink) {
          setLinks(prev => [...prev, novoLink]);
        }
      }

      setModalLinkAberto(false);
      setLinkAtual(null);
    } catch (error) {
      console.error('Erro ao salvar link:', error);
      if (error.name !== 'TypeError' || !error.message.includes('fetch')) {
        alert(`Erro ao salvar link: ${error.message}`);
      }
    }
  };

  const handleExcluirLink = async (linkId) => {
    try {
      if (window.confirm('Tem certeza que deseja excluir este link?')) {
        await linksAPI.deletar(linkId);
        setLinks(prev => prev.filter(link => link.id !== linkId));
        setModalLinkAberto(false);
        setLinkAtual(null);
      }
    } catch (error) {
      console.error('Erro ao excluir link:', error);
      alert('Erro ao excluir link');
    }
  };

  const handleExcluirItem = async (id) => {
    try {
      if (!window.confirm('Tem certeza que deseja excluir esta nota? Esta ação não pode ser desfeita.')) {
        return;
      }

      await excluirNota(id);
      setModalAberto(false);
      setItemAtual(null);
    } catch (error) {
      console.error('Erro ao excluir item:', error);
      
      // Mostrar erro para o usuário
      let errorMessage = 'Erro ao excluir nota';
      
      if (error.message) {
        if (error.message.includes('Failed to fetch')) {
          errorMessage = 'Erro de conexão. Verifique sua internet e tente novamente.';
        } else if (error.message.includes('HTTP')) {
          errorMessage = `Erro do servidor: ${error.message}`;
        } else {
          errorMessage = error.message;
        }
      }
      
      alert(errorMessage);
    }
  };

  const handleFecharModal = () => {
    setModalAberto(false);
    setItemAtual(null);
  };

  const carregarLogsSistema = async () => {
    console.log('Carregando logs do sistema...');
  };

  const limparLogsSistema = async () => {
    console.log('Limpando logs do sistema...');
  };

  const exportarLogs = async () => {
    console.log('Exportando logs...');
  };

  const abrirLogModal = async () => {
    setLogModalAberto(true);
  };

  const handleAbrirConfiguracoes = () => {
    setTelaAtiva('configuracoes');
  };

  const handleLogoClick = () => {
    setTelaAtiva('inicial');
  };

  const sincronizarManual = async () => {
    setSyncStatus('syncing');
    try {
      const userData = localStorage.getItem('user');
      if (!userData) {
        throw new Error('Usuário não autenticado');
      }

      const user = JSON.parse(userData);
      const userId = user.id;

      const testResponse = await fetch('https://wrt-back.vercel.app/api/links', {
        headers: {
          'user-id': userId
        }
      });

      if (!testResponse.ok) {
        throw new Error('Backend não está acessível');
      }

      setLinks([]);
      await new Promise(resolve => setTimeout(resolve, 100));
      await carregarNotas();
      await carregarLinks();
      setForcarAtualizacao(prev => prev + 1);

      setSyncStatus('online');
      setLastSync(new Date());

    } catch (error) {
      console.error('Erro na sincronização manual:', error);
      setSyncStatus('offline');
      alert('Erro na sincronização: ' + error.message);
    }
  };

  const renderizarConteudo = () => {
    switch (telaAtiva) {
      case 'login':
        return <AuthScreen onLogin={handleLogin} />;

      case 'inicial':
        return (
          <TelaInicial
            notas={notasAtivas}
            links={links}
            carregando={carregando}
            carregandoLinks={carregandoLinks}
            onNovoItem={handleNovoItem}
            onEditarItem={handleEditarItem}
            onVisualizarItem={handleVisualizarItem}
            onTelaCheia={handleTelaCheia}
            forcarAtualizacao={forcarAtualizacao}
          />
        );

      case 'notas':
        return (
          <TelaNotas
            notas={notasAtivas}
            carregando={carregando}
            onNovoItem={handleNovoItem}
            onEditarItem={handleEditarItem}
            onVisualizarItem={handleVisualizarItem}
            onExcluirItem={handleExcluirItem}
            onExportarItem={handleExportarItem}
            onImprimirItem={handleImprimirItem}
            onFavoritarItem={alternarFavorito}
            onTelaCheia={handleTelaCheia}
            forcarAtualizacao={forcarAtualizacao}
          />
        );

      case 'links':
        return (
          <TelaLinks
            links={links}
            carregando={carregandoLinks}
            onNovoItem={handleNovoLink}
            onEditarItem={handleEditarLink}
            onVisualizarItem={(link) => window.open(link.url, '_blank')}
            onExcluirItem={handleExcluirLink}
            onFavoritarItem={(linkId) => console.log('Favoritar link:', linkId)}
            forcarAtualizacao={forcarAtualizacao}
          />
        );

      case 'favoritos':
        return (
          <ListaItens
            itens={(notasAtivas || []).filter(nota => nota.favorito)}
            tipo="nota"
            titulo="Favoritos"
            icone={faHeart}
            carregando={carregando}
            onNovo={handleNovoItem}
            onEditar={handleEditarItem}
            onExcluir={handleExcluirItem}
            onVisualizar={handleVisualizarItem}
            onExportar={handleExportarItem}
            onImprimir={handleImprimirItem}
            onTelaCheia={handleTelaCheia}
            onFavoritar={alternarFavorito}
          />
        );

      case 'lixeira':
        return (
          <TelaLixeira
            notas={(notasAtivas || []).filter(nota => !nota.ativo)}
            onRestaurar={(id) => console.log('Restaurar:', id)}
            onExcluirDefinitivamente={(id) => console.log('Excluir definitivamente:', id)}
          />
        );

      case 'configuracoes':
        return (
          <Configuracoes
            onAbrirLogs={abrirLogModal}
            onAbrirAdmin={() => alert('Acesso negado. Apenas administradores podem acessar este painel.')}
            syncStatus={syncStatus}
            lastSync={lastSync}
            onSincronizar={sincronizarManual}
          />
        );

      default:
        return <TelaInicial />;
    }
  };

  // Se não há usuário logado, mostrar tela de login
  if (!user) {
    return (
      <AppContainer>
        <GlobalStyles />
        <AuthScreen onLogin={handleLogin} />
      </AppContainer>
    );
  }

  return (
    <AppContainer>
      <GlobalStyles />

      <MainContent>
        <MenuLateral
          onAbrirConfiguracoes={handleAbrirConfiguracoes}
          telaAtiva={telaAtiva}
          onTelaChange={setTelaAtiva}
          totalLinks={links.length}
        />
        <ContentArea menuRecolhido={menuRecolhido}>
          <Header>
            <Logo onClick={handleLogoClick}>
              <FontAwesomeIcon icon={faStickyNote} />
              WRTmind
            </Logo>
            <UserInfo>
              <span>Olá, {user.nome}</span>
              <LogoutButton onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                Sair
              </LogoutButton>
            </UserInfo>
          </Header>

          <StatusBar>
            <div style={{ display: 'flex', gap: 'var(--espacamentoGrande)' }}>
              <StatusItem>
                <StatusIndicator status={syncStatus} />
                <span>
                  {syncStatus === 'online' ? 'Online' :
                   syncStatus === 'syncing' ? 'Sincronizando...' : 'Offline'}
                </span>
              </StatusItem>
              {lastSync && (
                <StatusItem>
                  <FontAwesomeIcon icon={faClock} />
                  <span>Última sincronização: {lastSync.toLocaleTimeString()}</span>
                </StatusItem>
              )}
            </div>
            <SyncButton onClick={sincronizarManual} disabled={syncStatus === 'syncing'}>
              <FontAwesomeIcon icon={faSync} spin={syncStatus === 'syncing'} />
              Sincronizar
            </SyncButton>
          </StatusBar>

          <ContentWrapper>
            {renderizarConteudo()}
          </ContentWrapper>
        </ContentArea>
      </MainContent>

      {/* Modais */}
      <ModalItem
        isVisible={modalAberto}
        item={itemAtual}
        modo={modoModal}
        categorias={categorias}
        onSave={handleSalvarItem}
        onDelete={handleExcluirItem}
        onClose={handleFecharModal}
        carregando={carregandoModal}
      />

      <ModalLink
        isVisible={modalLinkAberto}
        link={linkAtual}
        modo={modoModalLink}
        onSave={handleSalvarLink}
        onDelete={handleExcluirLink}
        onClose={() => setModalLinkAberto(false)}
      />

      <NotaTelaCheia
        isVisible={telaCheiaAberta}
        nota={itemTelaCheia}
        onClose={handleFecharTelaCheia}
        onEdit={handleEditarTelaCheia}
        onDelete={handleExcluirTelaCheia}
        onToggleFullscreen={handleToggleFullscreen}
        isFullscreen={isFullscreen}
      />

      <FullscreenViewer
        item={itemFullscreen}
        isVisible={fullscreenViewerAberto}
        onClose={handleFecharFullscreenViewer}
      />

      <LogModal
        isVisible={logModalAberto}
        onClose={() => setLogModalAberto(false)}
        onCarregarLogs={carregarLogsSistema}
        onLimparLogs={limparLogsSistema}
        onExportarLogs={exportarLogs}
      />
    </AppContainer>
  );
};

const App = () => {
  return (
    <NotasAPIProvider>
      <AppContent />
    </NotasAPIProvider>
  );
};

export default App;
