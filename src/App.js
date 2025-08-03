import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignOutAlt,
  faClock,
  faHeart,
  faSync,
  faFolder
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

  @media (max-width: 768px) {
    margin-left: 0;
    padding-top: 50px;
  }

  @media (max-width: 480px) {
    margin-left: 0;
    padding-top: 45px;
  }

  @media (max-width: 360px) {
    margin-left: 0;
    padding-top: 40px;
  }
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
  flex-wrap: wrap;
  gap: var(--espacamentoMedio);

  @media (max-width: 768px) {
    padding: var(--espacamentoPequeno);
    height: auto;
    min-height: 50px;
    flex-direction: row;
    gap: var(--espacamentoPequeno);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: var(--zIndexDropdown);
  }

  @media (max-width: 480px) {
    padding: 6px var(--espacamentoPequeno);
    min-height: 45px;
    gap: 6px;
  }

  @media (max-width: 360px) {
    padding: 4px var(--espacamentoPequeno);
    min-height: 40px;
    gap: 4px;
  }
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

  @media (max-width: 768px) {
    padding: 6px var(--espacamentoPequeno);
    gap: var(--espacamentoPequeno);
    font-size: var(--tamanhoFontePequena);
    flex: 1;
    min-width: 0;
  }

  @media (max-width: 480px) {
    padding: 4px var(--espacamentoPequeno);
    gap: 4px;
    font-size: 11px;
    flex-direction: row;
    align-items: center;
    text-align: left;
  }

  @media (max-width: 360px) {
    padding: 3px var(--espacamentoPequeno);
    gap: 3px;
    font-size: 10px;
  }
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

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: var(--tamanhoFontePequena);
    gap: 4px;
    min-height: 36px;
    min-width: 36px;
  }

  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 10px;
    gap: 3px;
    min-height: 32px;
    min-width: 32px;
  }

  @media (max-width: 360px) {
    padding: 3px 6px;
    font-size: 9px;
    gap: 2px;
    min-height: 28px;
    min-width: 28px;
  }
`;

const SyncButton = styled.button`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
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

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: var(--tamanhoFontePequena);
    gap: 4px;
    min-height: 36px;
    min-width: 36px;
  }

  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 10px;
    gap: 3px;
    min-height: 32px;
    min-width: 32px;
  }

  @media (max-width: 360px) {
    padding: 3px 6px;
    font-size: 9px;
    gap: 2px;
    min-height: 28px;
    min-width: 28px;
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

  @media (max-width: 768px) {
    font-size: var(--tamanhoFonteGrande);
    padding: var(--espacamentoPequeno);
  }

  @media (max-width: 480px) {
    font-size: var(--tamanhoFonteMedio);
    padding: var(--espacamentoPequeno);
  }
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

const StatusInfo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  background: var(--corFundoSecundaria);
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  border-radius: var(--bordaRaioMedia);
  border: 1px solid var(--corBordaPrimaria);
  font-size: var(--tamanhoFontePequena);
  color: var(--corTextoSecundaria);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 6px var(--espacamentoPequeno);
    font-size: var(--tamanhoFontePequena);
    gap: var(--espacamentoPequeno);
  }

  @media (max-width: 480px) {
    padding: 4px var(--espacamentoPequeno);
    font-size: 10px;
    gap: 4px;
    flex-direction: row;
    align-items: center;
    text-align: left;
  }

  @media (max-width: 360px) {
    padding: 3px var(--espacamentoPequeno);
    font-size: 9px;
    gap: 3px;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
`;

// Botão flutuante para arquivos
const FloatingButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 12px 35px rgba(139, 92, 246, 0.4);
    background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
  }
  
  &:active {
    transform: translateY(-1px) scale(1.02);
  }
  
  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 55px;
    height: 55px;
    font-size: 20px;
  }
`;

// Overlay do modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

// Modal principal
const ModalContent = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 20px;
  padding: 40px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  transform: ${props => props.isOpen ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(20px)'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #8b5cf6 0%, #7c3aed 50%, #6d28d9 100%);
    border-radius: 20px 20px 0 0;
  }
`;

// Título do modal
const ModalTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 20px 0;
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${props => props.isOpen ? 'slideInUp 0.6s ease-out' : 'none'};
  
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

// Botão de fechar
const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  color: #64748b;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(139, 92, 246, 0.1);
    color: #8b5cf6;
    transform: scale(1.1);
  }
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
    topicos,
    isOnline // Adicionar status de conectividade
  } = useNotasAPIContext();

  const [user, setUser] = useState(null);
  const [telaAtiva, setTelaAtiva] = useState('inicial');
  const [modalAberto, setModalAberto] = useState(false);
  const [modalLinkAberto, setModalLinkAberto] = useState(false);
  const [modalArquivosAberto, setModalArquivosAberto] = useState(false);
  const [itemAtual, setItemAtual] = useState(null);
  const [modoModal, setModoModal] = useState('editar');
  const [carregandoModal, setCarregandoModal] = useState(false);
  const [telaCheiaAberta, setTelaCheiaAberta] = useState(false);
  const [itemTelaCheia, setItemTelaCheia] = useState(null);
  const [fullscreenViewerAberto, setFullscreenViewerAberto] = useState(false);
  const [itemFullscreen, setItemFullscreen] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [logModalAberto, setLogModalAberto] = useState(false);
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

  const handleAbrirModalArquivos = () => {
    setModalArquivosAberto(true);
  };

  const handleFecharModalArquivos = () => {
    setModalArquivosAberto(false);
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
            onNovoLink={handleNovoLink}
            onEditarItem={handleEditarItem}
            onVisualizarItem={handleVisualizarItem}
            onTelaCheia={handleTelaCheia}
            forcarAtualizacao={forcarAtualizacao}
            isOnline={isOnline}
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
            <Logo>
              WRTmind
            </Logo>
            <SyncButton 
              onClick={sincronizarManual} 
              disabled={syncStatus === 'syncing'}
              title="Sincronizar dados"
            >
              <FontAwesomeIcon 
                icon={faSync} 
                spin={syncStatus === 'syncing'} 
              />
              {syncStatus === 'syncing' ? 'Sincronizando...' : 'Sincronizar'}
            </SyncButton>
            <StatusInfo>
              <StatusIndicator status={syncStatus} />
              <span>
                {syncStatus === 'online' ? 'Online' :
                 syncStatus === 'syncing' ? 'Sincronizando...' : 'Offline'}
              </span>
              {lastSync && (
                <span style={{ marginLeft: 'var(--espacamentoMedio)' }}>
                  <FontAwesomeIcon icon={faClock} />
                  Última sincronização: {lastSync.toLocaleTimeString()}
                </span>
              )}
            </StatusInfo>
            <UserInfo>
              <span>Olá, {user.nome}</span>
              <LogoutButton onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                Sair
              </LogoutButton>
            </UserInfo>
          </Header>

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

      {/* Botão flutuante para arquivos */}
      <FloatingButton onClick={handleAbrirModalArquivos} title="Arquivos da Luciana">
        <FontAwesomeIcon icon={faFolder} />
      </FloatingButton>

      {/* Modal de arquivos */}
      <ModalOverlay isOpen={modalArquivosAberto} onClick={handleFecharModalArquivos}>
        <ModalContent isOpen={modalArquivosAberto} onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={handleFecharModalArquivos}>
            ×
          </CloseButton>
          <ModalTitle isOpen={modalArquivosAberto}>
            ARQUIVOS DA LUCIANA
          </ModalTitle>
        </ModalContent>
      </ModalOverlay>
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
