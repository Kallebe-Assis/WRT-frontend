import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faCog, 
  faSearch, 
  faTimes,
  faBars,
  faHome,
  faStickyNote,
  faLink,
  faUser,
  faSignOutAlt,
  faSync,
  faCheckCircle,
  faExclamationCircle,
  faInfoCircle,
  faEye,
  faCrown,
  faHeart,
  faStar
} from '@fortawesome/free-solid-svg-icons';

import { NotasAPIProvider, useNotasAPIContext } from './context/NotasAPIContext';
import AuthScreen from './components/AuthScreen';
import TelaInicial from './components/TelaInicial';
import ListaItens from './components/ListaItens';
import ModalItem from './components/ModalItem';
import Configuracoes from './components/Configuracoes';
import LogModal from './components/LogModal';
import AdminPanel from './components/AdminPanel';
import TelaLixeira from './components/TelaLixeira';
import NotaTelaCheia from './components/NotaTelaCheia';
import EditorTextoAvancado from './components/EditorTextoAvancado';

import GlobalStyles from './styles/GlobalStyles';
import { syncAPI, linksAPI } from './config/api';
import { getApiUrl } from './config/environment.js';

const AppContainer = styled.div`
  min-height: 100vh;
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  padding-top: 80px; /* altura do header fixo */
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

const Header = styled.header`
  background: var(--corFundoSecundaria);
  border-bottom: 2px solid var(--corBordaPrimaria);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--sombraLeve);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  color: var(--corTextoPrimaria);
  font-weight: 600;
`;

const LogoutButton = styled.button`
  background: var(--corErro);
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
  gap: 6px;

  &:hover {
    background: var(--corErroHover);
    transform: translateY(-1px);
  }
`;

const Logo = styled.div`
  color: var(--corPrimaria);
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`;

const MenuLateral = styled.nav`
  position: fixed;
  left: 0;
  top: 80px;
  height: calc(100vh - 80px);
  background: var(--corFundoSecundaria);
  border-right: 2px solid var(--corBordaPrimaria);
  width: ${props => props.recolhido ? '60px' : '250px'};
  padding: ${props => props.recolhido ? 'var(--espacamentoMedio)' : 'var(--espacamentoGrande)'};
  display: flex;
  flex-direction: column;
  gap: var(--espacamentoMedio);
  box-shadow: var(--sombraLeve);
  z-index: var(--zIndexDropdown);
  overflow-y: auto;
  box-sizing: border-box;
  transition: all var(--transicaoMedia);
`;

const MenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  padding: ${props => props.recolhido ? 'var(--espacamentoMedio)' : 'var(--espacamentoMedio) var(--espacamentoGrande)'};
  background: ${props => props.ativo ? 'var(--corPrimaria)' : 'transparent'};
  color: ${props => props.ativo ? 'var(--corTextoClara)' : 'var(--corTextoPrimaria)'};
  border: none;
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  text-align: left;
  justify-content: ${props => props.recolhido ? 'center' : 'flex-start'};
  min-height: 48px;

  &:hover {
    background: ${props => props.ativo ? 'var(--corSecundaria)' : 'var(--corFundoTerciaria)'};
    transform: ${props => props.recolhido ? 'scale(1.05)' : 'translateX(4px)'};
  }

  span {
    opacity: ${props => props.recolhido ? 0 : 1};
    transition: opacity var(--transicaoRapida);
    white-space: nowrap;
    overflow: hidden;
  }
`;

const Layout = styled.div`
  display: flex;
  min-height: calc(100vh - 80px);
  width: 100%;
  box-sizing: border-box;
`;

const Conteudo = styled.main`
  flex: 1;
  margin-left: ${props => props.menuRecolhido ? '60px' : '250px'};
  overflow-y: auto;
  background: var(--corFundoPrimaria);
  min-height: calc(100vh - 80px);
  width: 100%;
  box-sizing: border-box;
  transition: margin-left var(--transicaoMedia);
`;

const StatusContainer = styled.div`
  background: var(--corFundoSecundaria);
  padding: var(--espacamentoMedio);
  margin: var(--espacamentoMedio);
  border-radius: var(--bordaRaioMedia);
  border: 1px solid var(--corBordaPrimaria);
  box-shadow: var(--sombraLeve);
`;

const StatusItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--espacamentoPequeno);
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const StatusLabel = styled.span`
  color: var(--corTextoSecundaria);
  font-weight: 600;
`;

const StatusValue = styled.span`
  color: var(--corTextoPrimaria);
  font-weight: 600;
`;

const StatusIconContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`;

const StatusIcon = styled.button`
  background: var(--corPrimaria);
  color: var(--corTextoClara);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: var(--tamanhoFonteMedia);
  box-shadow: var(--sombraLeve);
  transition: all var(--transicaoRapida);

  &:hover {
    background: var(--corSecundaria);
    transform: scale(1.1);
  }
`;

const StatusTooltip = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background: var(--corFundoTerciaria);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio);
  box-shadow: var(--sombraForte);
  min-width: 250px;
  z-index: 1001;
  opacity: ${props => props.visivel ? 1 : 0};
  visibility: ${props => props.visivel ? 'visible' : 'hidden'};
  transition: all var(--transicaoRapida);
  transform: ${props => props.visivel ? 'translateY(0)' : 'translateY(-10px)'};
`;

const TooltipTitle = styled.h4`
  color: var(--corTextoPrimaria);
  margin: 0 0 var(--espacamentoMedio) 0;
  font-size: var(--tamanhoFonteMedia);
  border-bottom: 1px solid var(--corBordaPrimaria);
  padding-bottom: var(--espacamentoPequeno);
`;

const TooltipItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--espacamentoPequeno);
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TooltipLabel = styled.span`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
`;

const TooltipValue = styled.span`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
`;

const NotasContainer = styled.div`
  background: var(--corFundoTerciaria);
  padding: var(--espacamentoMedio);
  margin: var(--espacamentoMedio);
  border-radius: var(--bordaRaioMedia);
  border: 1px solid var(--corBordaPrimaria);
  box-shadow: var(--sombraLeve);
`;

const NotasLista = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--espacamentoPequeno);
`;

const NotaItemCompacto = styled.div`
  background: var(--corFundoSecundaria);
  padding: var(--espacamentoMedio);
  border-radius: var(--bordaRaioMedia);
  border: 1px solid var(--corBordaPrimaria);
  cursor: pointer;
  transition: all var(--transicaoRapida);

  &:hover {
    background: var(--corFundoTerciaria);
    transform: translateX(4px);
    box-shadow: var(--sombraLeve);
  }
`;

const NotaTituloCompacto = styled.h4`
  color: var(--corTextoPrimaria);
  margin: 0;
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
`;

const NotaItem = styled.div`
  background: var(--corFundoSecundaria);
  padding: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoMedio);
  border-radius: var(--bordaRaioMedia);
  border: 1px solid var(--corBordaPrimaria);
  box-shadow: var(--sombraLeve);
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const NotaTitulo = styled.h3`
  color: var(--corTextoPrimaria);
  margin: 0 0 var(--espacamentoPequeno) 0;
  font-size: var(--tamanhoFonteMedia);
`;

const NotaTopico = styled.span`
  color: var(--corPrimaria);
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
  background: var(--corFundoTerciaria);
  padding: 2px 8px;
  border-radius: var(--bordaRaioPequena);
`;

const NotaConteudo = styled.p`
  color: var(--corTextoSecundaria);
  margin: var(--espacamentoPequeno) 0 0 0;
  font-size: var(--tamanhoFontePequena);
  line-height: 1.4;
`;

const SyncStatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 24px;
  position: relative;
  max-width: 300px;
  overflow: hidden;
`;

const SyncButton = styled.button`
  background: var(--corPrimaria);
  color: var(--corTextoClara);
  border: none;
  border-radius: var(--bordaRaioMedia);
  padding: 8px 16px;
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: var(--corSecundaria);
    transform: translateY(-1px);
  }

  &:disabled {
    background: var(--corTextoSecundaria);
    cursor: not-allowed;
    transform: none;
  }
`;

const SyncStatusIcon = styled.div`
  font-size: 1.5rem;
  color: ${props => {
    if (props.status === 'ok') return '#28a745';
    if (props.status === 'syncing') return '#ffc107';
    if (props.status === 'error') return '#dc3545';
    return 'var(--corTextoSecundaria)';
  }};
  cursor: pointer;
  transition: color 0.2s;
`;

const SyncTooltip = styled.div`
  position: absolute;
  top: 36px;
  left: 0;
  background: var(--corFundoTerciaria);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio);
  box-shadow: var(--sombraForte);
  min-width: 220px;
  z-index: 1001;
  opacity: ${props => props.visivel ? 1 : 0};
  visibility: ${props => props.visivel ? 'visible' : 'hidden'};
  transition: all var(--transicaoRapida);
  transform: ${props => props.visivel ? 'translateY(0)' : 'translateY(-10px)'};
`;

function useSyncStatus() {
  const [status, setStatus] = useState('syncing'); // 'ok', 'syncing', 'error'
  const [lastSync, setLastSync] = useState(null);
  const [stats, setStats] = useState(null);
  const [tooltip, setTooltip] = useState(false);
  const [syncing, setSyncing] = useState(false);

  const fetchStatus = async () => {
    try {
      // Não alterar status para 'syncing' imediatamente
      // Primeiro verificar o estado atual
      
      // Verificar pendências de links
      const pendencias = await linksAPI.verificarPendencias();
      
      // Buscar informações de sincronização para o tooltip
      let syncInfo = null;
      let lastDatabaseChange = null;
      try {
        const res = await syncAPI.buscarStatus();
        syncInfo = res;
        setLastSync(res.lastSync);
        if (res.stats) {
          setStats(prev => ({ ...prev, ...res.stats }));
        }
        
        // Buscar última alteração confirmada no banco
        try {
          const dbChangeRes = await syncAPI.buscarUltimaAlteracaoBanco();
          if (dbChangeRes.success && dbChangeRes.lastDatabaseChange) {
            lastDatabaseChange = dbChangeRes.lastDatabaseChange;
            console.log('🗄️ Última alteração no banco:', lastDatabaseChange);
          }
        } catch (error) {
          console.log('⚠️ Não foi possível buscar última alteração no banco:', error.message);
        }
      } catch (e) {
        console.log('⚠️ Não foi possível buscar status de sincronização:', e.message);
      }
      
      // Lógica melhorada para determinar o status
      if (pendencias.temPendencias) {
        // Se há pendências, mostrar como sincronizando
        setStatus('syncing');
        setStats({ pendentes: pendencias.quantidade });
        console.log('🔄 Status: Sincronizando (pendências detectadas)');
      } else {
        // Se não há pendências, verificar se houve erros recentes
        if (syncInfo && syncInfo.stats && syncInfo.stats.errors > 0) {
          // Se há erros recentes, mostrar como erro
          setStatus('error');
          console.log('❌ Status: Erro (erros detectados na sincronização)');
        } else if (lastDatabaseChange) {
          // Se há confirmação de alteração no banco, mostrar como verificado
          setStatus('ok');
          setStats({ pendentes: 0 });
          console.log('✅ Status: Verificado (alteração confirmada no banco)');
          console.log(`🗄️ Última alteração: ${lastDatabaseChange.message} em ${lastDatabaseChange.timestamp}`);
        } else {
          // Se não há pendências, erros ou alterações confirmadas, mostrar como sincronizado
          setStatus('ok');
          setStats({ pendentes: 0 });
          console.log('✅ Status: Sincronizado (sem pendências e sem erros)');
        }
      }
      
    } catch (e) {
      console.error('❌ Erro ao verificar status:', e);
      setStatus('error');
    }
  };

  const sincronizarManual = async () => {
    if (syncing) return; // Evitar múltiplas sincronizações simultâneas
    
    try {
      console.log('🔄 Iniciando sincronização manual...');
      setSyncing(true);
      setStatus('syncing');
      
      // Primeiro, sincronizar links
      const resultado = await linksAPI.sincronizarManual();
      console.log('✅ Sincronização de links concluída:', resultado);
      
      // Aguardar um pouco antes de verificar pendências
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('syncing');
      
      // Verificar se há pendências após a sincronização
      try {
        const pendencias = await syncAPI.buscarPendencias();
        console.log('📊 Pendências após sincronização:', pendencias);
      } catch (error) {
        console.log('⚠️ Erro ao verificar pendências pós-sync:', error.message);
      }
      
      // Recarregar todos os dados do usuário logado
      console.log('🔄 Recarregando dados do usuário...');
      
      // Recarregar notas
      if (window.notasContext && window.notasContext.carregarNotas) {
        await window.notasContext.carregarNotas();
      }
      
      // Recarregar categorias
      if (window.notasContext && window.notasContext.carregarCategorias) {
        await window.notasContext.carregarCategorias();
      }
      
      // Recarregar tópicos
      if (window.notasContext && window.notasContext.carregarTopicos) {
        await window.notasContext.carregarTopicos();
      }
      
      console.log('✅ Recarregamento de dados concluído');
      setStatus('ok');
      
    } catch (error) {
      console.error('❌ Erro na sincronização manual:', error);
      setStatus('error');
      
      // Mesmo com erro, tentar recarregar os dados
      try {
        console.log('🔄 Tentando recarregar dados mesmo com erro...');
        
        if (window.notasContext && window.notasContext.carregarNotas) {
          await window.notasContext.carregarNotas();
        }
        
        if (window.notasContext && window.notasContext.carregarCategorias) {
          await window.notasContext.carregarCategorias();
        }
        
        if (window.notasContext && window.notasContext.carregarTopicos) {
          await window.notasContext.carregarTopicos();
        }
        
        console.log('✅ Recarregamento de dados concluído mesmo com erro');
      } catch (reloadError) {
        console.error('❌ Erro ao recarregar dados:', reloadError);
      }
    } finally {
      setSyncing(false);
    }
  };

  useEffect(() => {
    // Só fazer requisições se o usuário estiver logado
    const user = localStorage.getItem('user');
    if (user) {
      try {
        const userData = JSON.parse(user);
        if (userData.id) {
          fetchStatus();
          const interval = setInterval(fetchStatus, 30000); // Verificar a cada 30 segundos
          return () => clearInterval(interval);
        }
      } catch (error) {
        console.log('⚠️ Usuário não logado ou dados inválidos, pulando verificações de status');
      }
    } else {
      console.log('⚠️ Usuário não logado, pulando verificações de status');
    }
  }, []);

  return { 
    status, 
    lastSync, 
    stats, 
    tooltip, 
    setTooltip, 
    syncing,
    sincronizarManual 
  };
}

const AppContent = () => {
  const { 
    notas, 
    categorias, 
    carregando, 
    erro,
    adicionarNota,
    editarNota,
    excluirNota,
    // buscarFavoritas, // DESABILITADO
    // alternarFavorito // DESABILITADO
  } = useNotasAPIContext();
  
  const [user, setUser] = useState(null);
  const [telaAtiva, setTelaAtiva] = useState('inicial');
  const [modalVisivel, setModalVisivel] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [itemEditando, setItemEditando] = useState(null);
  const [tooltipVisivel, setTooltipVisivel] = useState(false);
  const [logModalVisible, setLogModalVisible] = useState(false);
  const [systemLogs, setSystemLogs] = useState([]);
  const [logsStats, setLogsStats] = useState(null);
  const [logsFilter, setLogsFilter] = useState('all');
  const [menuRecolhido, setMenuRecolhido] = useState(false);
  const [telaCheiaVisivel, setTelaCheiaVisivel] = useState(false);
  const [notaTelaCheia, setNotaTelaCheia] = useState(null);
  // const [notasFavoritas, setNotasFavoritas] = useState([]); // DESABILITADO
  // const [contadorFavoritos, setContadorFavoritos] = useState(0); // DESABILITADO
  const sync = useSyncStatus();

  // Verificar se há usuário logado no localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  // Carregar contador de favoritos (DESABILITADO)
  // useEffect(() => {
  //   const carregarContadorFavoritos = async () => {
  //     try {
  //       // Verificar se o usuário está logado
  //       const user = localStorage.getItem('user');
  //       if (!user) {
  //         console.log('⚠️ Usuário não logado, pulando carregamento de favoritos');
  //         setContadorFavoritos(0);
  //         return;
  //       }

  //       // Verificar se os dados do usuário são válidos
  //       let userData;
  //       try {
  //         userData = JSON.parse(user);
  //         if (!userData.id) {
  //           console.log('⚠️ Dados do usuário inválidos, pulando carregamento de favoritos');
  //           setContadorFavoritos(0);
  //           return;
  //       } catch (error) {
  //         console.log('⚠️ Erro ao parsear dados do usuário, pulando carregamento de favoritos');
  //         setContadorFavoritos(0);
  //         return;
  //       }

  //       const favoritas = await buscarFavoritas();
  //       setContadorFavoritos(favoritas.length);
  //     } catch (error) {
  //       console.error('Erro ao carregar contador de favoritos:', error);
  //       setContadorFavoritos(0);
  //     }
  //   };

  //   if (user) {
  //     carregarContadorFavoritos();
  //   } else {
  //     setContadorFavoritos(0);
  //   }
  // }, [user, buscarFavoritas]); // Remover 'notas' da dependência para evitar loop

  // Listener para abrir nota da tela inicial
  useEffect(() => {
    const handleAbrirNota = (event) => {
      const { nota } = event.detail;
      if (nota) {
        handleEditarItem(nota);
      }
    };

    window.addEventListener('abrirNota', handleAbrirNota);

    return () => {
      window.removeEventListener('abrirNota', handleAbrirNota);
    };
  }, []);

  // Listener para favoritos alterados (DESABILITADO)
  // useEffect(() => {
  //   const handleFavoritosAlterados = async () => {
  //     await atualizarContadorFavoritos();
  //   };

  //   window.addEventListener('favoritosAlterados', handleFavoritosAlterados);

  //   return () => {
  //     window.removeEventListener('favoritosAlterados', handleFavoritosAlterados);
  //   };
  // }, []);

  // Listener para logout
  useEffect(() => {
    const handleUserLogout = () => {
      console.log('🚪 Evento de logout detectado no App');
      setUser(null);
      // setContadorFavoritos(0); // DESABILITADO
    };

    window.addEventListener('userLogout', handleUserLogout);

    return () => {
      window.removeEventListener('userLogout', handleUserLogout);
    };
  }, []);

  // Função para atualizar contador de favoritos (DESABILITADO)
  // const atualizarContadorFavoritos = async () => {
  //   try {
  //     const favoritas = await buscarFavoritas();
  //     setContadorFavoritos(favoritas.length);
  //   } catch (error) {
  //     console.error('Erro ao atualizar contador de favoritos:', error);
  //   }
  // };

  // Função para alternar favorito com atualização do contador (DESABILITADO)
  // const handleAlternarFavorito = async (id) => {
  //   try {
  //     await alternarFavorito(id);
  //     await atualizarContadorFavoritos();
  //   } catch (error) {
  //     console.error('Erro ao alternar favorito:', error);
  //   }
  // };

  const handleLogin = (userData) => {
    console.log('👤 Executando login...', userData);
    setUser(userData);
    // Verificar se é admin
    setIsAdmin(userData.id === 'eUF9zbjEuU0G9f7ntD4R');
    
    // Disparar evento customizado para notificar o login
    window.dispatchEvent(new CustomEvent('userLogin', { detail: userData }));
  };

  const handleLogout = () => {
    console.log('🚪 Executando logout...');
    setUser(null);
    localStorage.removeItem('user');
    
    // Disparar evento customizado para notificar o logout
    window.dispatchEvent(new CustomEvent('userLogout'));
  };

  const handleNovoItem = () => {
    setItemEditando(null);
    setModalVisivel(true);
  };

  const handleEditarItem = (item) => {
    setItemEditando(item);
    setModalVisivel(true);
  };

  const handleVisualizarItem = (item) => {
    setItemEditando(item);
    setModalVisivel(true);
  };

  const handleExportarItem = (item) => {
    import('./utils/exportacao').then(({ mostrarOpcoesExportacao }) => {
      mostrarOpcoesExportacao(item);
    });
  };

  const handleImprimirItem = (item) => {
    import('./utils/exportacao').then(({ imprimirNota }) => {
      imprimirNota(item);
    });
  };

  const handleTelaCheia = (item) => {
    setNotaTelaCheia(item);
    setTelaCheiaVisivel(true);
  };

  const handleFecharTelaCheia = () => {
    setTelaCheiaVisivel(false);
    setNotaTelaCheia(null);
  };

  const handleEditarTelaCheia = () => {
    if (notaTelaCheia) {
      setTelaCheiaVisivel(false);
      setNotaTelaCheia(null);
      handleEditarItem(notaTelaCheia);
    }
  };

  const handleExcluirTelaCheia = () => {
    if (notaTelaCheia) {
      const confirmacao = window.confirm(
        `Tem certeza que deseja excluir a nota "${notaTelaCheia.titulo}"?\n\nEsta ação não pode ser desfeita.`
      );
      
      if (confirmacao) {
        excluirNota(notaTelaCheia.id || notaTelaCheia._id);
        setTelaCheiaVisivel(false);
        setNotaTelaCheia(null);
      }
    }
  };

  const handleSalvarItem = async (id, formData) => {
    try {
      console.log('📝 App.js - handleSalvarItem chamado com:', { id, formData });
      
      if (id) {
        // Atualizar nota existente
        console.log('📝 Atualizando nota com ID:', id);
        await editarNota(id, formData);
      } else {
        // Criar nova nota
        console.log('📝 Criando nova nota com dados:', formData);
        await adicionarNota(formData);
      }
      setModalVisivel(false);
      setItemEditando(null);
    } catch (error) {
      console.error('Erro ao salvar nota:', error);
      alert('Erro ao salvar nota. Tente novamente.');
    }
  };

  const handleExcluirItem = async () => {
    if (itemEditando) {
      try {
        // Usar id ou _id, dependendo do que estiver disponível
        const notaId = itemEditando.id || itemEditando._id;
        await excluirNota(notaId);
        setModalVisivel(false);
        setItemEditando(null);
      } catch (error) {
        console.error('Erro ao excluir nota:', error);
        alert('Erro ao excluir nota. Tente novamente.');
      }
    }
  };

  const handleFecharModal = () => {
    setModalVisivel(false);
    setItemEditando(null);
  };

  // Funções para logs do sistema
  const carregarLogsSistema = async () => {
    try {
      const response = await fetch(`${getApiUrl('/logs')}?type=${logsFilter !== 'all' ? logsFilter : ''}`);
      const data = await response.json();
      setSystemLogs(data.logs || []);
      setLogsStats(data.stats);
    } catch (error) {
      console.error('Erro ao carregar logs do sistema:', error);
    }
  };

  const limparLogsSistema = async () => {
    if (window.confirm('Tem certeza que deseja limpar todos os logs do sistema?')) {
      try {
        await fetch(getApiUrl('/logs'), { method: 'DELETE' });
        await carregarLogsSistema();
        alert('Logs do sistema limpos com sucesso!');
      } catch (error) {
        console.error('Erro ao limpar logs do sistema:', error);
        alert('Erro ao limpar logs: ' + error.message);
      }
    }
  };

  const exportarLogs = async () => {
    try {
      const response = await fetch(getApiUrl('/logs/export'));
      const data = await response.json();
      
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `wrtmind-logs-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      alert('Logs exportados com sucesso!');
    } catch (error) {
      console.error('Erro ao exportar logs:', error);
      alert('Erro ao exportar logs: ' + error.message);
    }
  };

  const abrirLogModal = async () => {
    setLogModalVisible(true);
    await carregarLogsSistema();
  };

  // Atualizar logs automaticamente quando o modal estiver aberto
  useEffect(() => {
    if (logModalVisible) {
      const interval = setInterval(carregarLogsSistema, 2000); // Atualizar a cada 2 segundos
      return () => clearInterval(interval);
    }
  }, [logModalVisible, logsFilter]);

  // const handleFavoritos = async () => {
  //   try {
  //     const favoritas = await buscarFavoritas();
  //     setNotasFavoritas(favoritas);
  //     setTelaAtiva('favoritos');
  //   } catch (error) {
  //     console.error('Erro ao carregar favoritos:', error);
  //   }
  // };

  const renderizarConteudo = () => {
    switch (telaAtiva) {
      case 'inicial':
        return <TelaInicial />;
      case 'notas':
        return (
          <>
            {/* Ícone de Status no canto da tela */}
            <StatusIconContainer>
              <StatusIcon
                onMouseEnter={() => setTooltipVisivel(true)}
                onMouseLeave={() => setTooltipVisivel(false)}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
              </StatusIcon>
              <StatusTooltip visivel={tooltipVisivel}>
                <TooltipTitle>Status da Aplicação</TooltipTitle>
                <TooltipItem>
                  <TooltipLabel>Carregando:</TooltipLabel>
                  <TooltipValue>{carregando ? 'Sim' : 'Não'}</TooltipValue>
                </TooltipItem>
                <TooltipItem>
                  <TooltipLabel>Notas carregadas:</TooltipLabel>
                  <TooltipValue>{notas.length}</TooltipValue>
                </TooltipItem>
                <TooltipItem>
                  <TooltipLabel>Categorias carregadas:</TooltipLabel>
                  <TooltipValue>{categorias ? categorias.length : 0}</TooltipValue>
                </TooltipItem>
                <TooltipItem>
                  <TooltipLabel>Erro:</TooltipLabel>
                  <TooltipValue>{erro || 'Nenhum'}</TooltipValue>
                </TooltipItem>
              </StatusTooltip>
            </StatusIconContainer>

            {/* Lista compacta de notas */}
            <NotasContainer>
              <h3>Notas Encontradas</h3>
              {notas.length > 0 ? (
                <NotasLista>
                  {notas.map(nota => (
                    <NotaItemCompacto 
                      key={nota.id || nota._id}
                      onClick={() => handleEditarItem(nota)}
                    >
                      <NotaTituloCompacto>{nota.titulo}</NotaTituloCompacto>
                    </NotaItemCompacto>
                  ))}
                </NotasLista>
              ) : (
                <p>Nenhuma nota encontrada.</p>
              )}
            </NotasContainer>

            <ListaItens
              itens={notas}
              tipo="nota"
              titulo="Notas"
              icone={faStickyNote}
              carregando={carregando}
              onNovo={handleNovoItem}
              onEditar={handleEditarItem}
              onExcluir={excluirNota}
              onVisualizar={handleVisualizarItem}
              onExportar={handleExportarItem}
              onImprimir={handleImprimirItem}
              onTelaCheia={handleTelaCheia}
              // onFavoritar={handleAlternarFavorito} // DESABILITADO
            />
          </>
        );
      // case 'favoritos': // DESABILITADO
      //   return (
      //     <>
      //       <StatusIconContainer>
      //         <StatusIcon
      //           onMouseEnter={() => setTooltipVisivel(true)}
      //           onMouseLeave={() => setTooltipVisivel(false)}
      //         >
      //           <FontAwesomeIcon icon={faInfoCircle} />
      //         </StatusIcon>
      //         <StatusTooltip visivel={tooltipVisivel}>
      //           <TooltipTitle>Status da Aplicação</TooltipTitle>
      //           <TooltipItem>
      //             <TooltipLabel>Carregando:</TooltipLabel>
      //             <TooltipValue>{carregando ? 'Sim' : 'Não'}</TooltipValue>
      //           </TooltipItem>
      //           <TooltipItem>
      //             <TooltipLabel>Favoritos carregados:</TooltipLabel>
      //             <TooltipValue>{notasFavoritas.length}</TooltipValue>
      //           </TooltipItem>
      //           <TooltipItem>
      //             <TooltipLabel>Erro:</TooltipLabel>
      //             <TooltipValue>{erro || 'Nenhum'}</TooltipValue>
      //           </TooltipItem>
      //         </StatusTooltip>
      //       </StatusIconContainer>

      //       <NotasContainer>
      //         <h3>Favoritos ({notasFavoritas.length})</h3>
      //         {notasFavoritas.length > 0 ? (
      //           <NotasLista>
      //             {notasFavoritas.map(nota => (
      //               <NotaItemCompacto 
      //                 key={nota.id || nota._id}
      //                 onClick={() => handleEditarItem(nota)}
      //               >
      //                 <NotaTituloCompacto>
      //                   <FontAwesomeIcon icon={faHeart} style={{ color: '#FF6B6B', marginRight: '8px' }} />
      //                   {nota.titulo}
      //                   </NotaTituloCompacto>
      //               </NotaItemCompacto>
      //             ))}
      //           </NotasLista>
      //         ) : (
      //           <p>Nenhum favorito encontrado.</p>
      //         )}
      //       </NotasContainer>

      //       <ListaItens
      //         itens={notasFavoritas}
      //         tipo="nota"
      //         titulo="Favoritos"
      //         icone={faHeart}
      //         carregando={carregando}
      //         onNovo={handleNovoItem}
      //         onEditar={handleEditarItem}
      //         onExcluir={excluirNota}
      //         onVisualizar={handleVisualizarItem}
      //         onExportar={handleExportarItem}
      //         onImprimir={handleImprimirItem}
      //         onTelaCheia={handleTelaCheia}
      //         onFavoritar={handleAlternarFavorito}
      //       />
      //     </>
      //   );
      case 'configuracoes':
        return <Configuracoes visivel={true} onFechar={() => setTelaAtiva('inicial')} />;
      case 'lixeira':
        return <TelaLixeira />;
      case 'admin':
        return <AdminPanel />;
      default:
        return <TelaInicial />;
    }
  };

  // Se não há usuário logado, mostrar tela de autenticação
  if (!user) {
    return <AuthScreen onLogin={handleLogin} />;
  }

  return (
    <AppContainer>
      <Header>
        <Logo>
          <FontAwesomeIcon icon={faStickyNote} />
          WRTmind
        </Logo>
        <UserInfo>
          <span>Olá, {user.nome}</span>
          <button 
            onClick={() => setMenuRecolhido(!menuRecolhido)}
            style={{
              background: 'var(--corFundoTerciaria)',
              color: 'var(--corTextoPrimaria)',
              border: '1px solid var(--corBordaPrimaria)',
              borderRadius: 'var(--bordaRaioMedia)',
              padding: '8px 12px',
              marginRight: '10px',
              cursor: 'pointer',
              fontSize: 'var(--tamanhoFontePequena)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all var(--transicaoRapida)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--corFundoSecundaria)';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'var(--corFundoTerciaria)';
              e.target.style.transform = 'scale(1)';
            }}
            title={menuRecolhido ? 'Expandir Menu' : 'Recolher Menu'}
          >
            <FontAwesomeIcon icon={menuRecolhido ? faBars : faTimes} />
          </button>

          <LogoutButton onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            Sair
          </LogoutButton>
        </UserInfo>
        <SyncStatusIndicator
          onMouseEnter={() => sync.setTooltip(true)}
          onMouseLeave={() => sync.setTooltip(false)}
        >
          <SyncButton 
            onClick={sync.sincronizarManual}
            disabled={sync.syncing}
          >
            <FontAwesomeIcon 
              icon={faSync} 
              spin={sync.syncing}
            />
            {sync.syncing ? 'Sincronizando...' : 'Sincronizar Agora'}
          </SyncButton>
          <SyncStatusIcon status={sync.status}>
            <FontAwesomeIcon
              icon={
                sync.status === 'ok' ? faCheckCircle :
                sync.status === 'syncing' ? faSync :
                faExclamationCircle
              }
              spin={sync.status === 'syncing'}
            />
          </SyncStatusIcon>
          <SyncTooltip visivel={sync.tooltip}>
            <div style={{ fontWeight: 'bold', marginBottom: 8 }}>
              {sync.status === 'ok' && '✅ Tudo sincronizado'}
              {sync.status === 'syncing' && '🔄 Sincronizando...'}
              {sync.status === 'error' && '❌ Erro de sincronização'}
            </div>
            {sync.stats && sync.stats.pendentes !== undefined && (
              <div style={{ fontSize: 13, marginBottom: 4 }}>
                {sync.status === 'syncing' ? (
                  <div>Pendências: <b style={{ color: '#ffc107' }}>{sync.stats.pendentes}</b></div>
                ) : (
                  <div>Pendências: <b style={{ color: '#28a745' }}>0</b></div>
                )}
              </div>
            )}
            {sync.lastSync && (
              <div style={{ fontSize: 13, marginBottom: 4 }}>
                Última sincronização:<br />
                <b>{new Date(sync.lastSync.timestamp).toLocaleString('pt-BR')}</b>
              </div>
            )}
            {sync.stats && sync.stats.databaseChanges !== undefined && sync.stats.databaseChanges > 0 && (
              <div style={{ fontSize: 13, marginBottom: 4 }}>
                <div style={{ color: '#28a745', fontWeight: 'bold' }}>
                  🗄️ Alterações no banco: <b>{sync.stats.databaseChanges}</b>
                </div>
              </div>
            )}
            {sync.stats && sync.stats.total !== undefined && (
              <div style={{ fontSize: 13 }}>
                <div>Total de logs: <b>{sync.stats.total}</b></div>
                <div>Sucessos: <b style={{ color: '#28a745' }}>{sync.stats.success}</b></div>
                <div>Erros: <b style={{ color: '#dc3545' }}>{sync.stats.errors}</b></div>
                <div>Info: <b style={{ color: '#007bff' }}>{sync.stats.info}</b></div>
              </div>
            )}
            <div style={{ fontSize: 11, marginTop: 8, color: '#666', fontStyle: 'italic' }}>
              Verificação automática: a cada 30s
            </div>
          </SyncTooltip>
        </SyncStatusIndicator>
      </Header>

      <Layout>
        <MenuLateral recolhido={menuRecolhido}>
          <MenuItem 
            ativo={telaAtiva === 'inicial'} 
            onClick={() => setTelaAtiva('inicial')}
            recolhido={menuRecolhido}
          >
            <FontAwesomeIcon icon={faStickyNote} />
            <span>Shortcuts</span>
          </MenuItem>
          <MenuItem 
            ativo={telaAtiva === 'notas'} 
            onClick={() => setTelaAtiva('notas')}
            recolhido={menuRecolhido}
          >
            <FontAwesomeIcon icon={faStickyNote} />
            <span>Notes</span>
          </MenuItem>
          {/* <MenuItem 
            ativo={telaAtiva === 'favoritos'} 
            onClick={handleFavoritos}
            recolhido={menuRecolhido}
          >
            <FontAwesomeIcon icon={faHeart} />
            <span>Favorites</span>
            {contadorFavoritos > 0 && (
              <span style={{
                background: '#FF6B6B',
                color: 'white',
                fontSize: '0.75rem',
                padding: '2px 6px',
                borderRadius: '10px',
                marginLeft: 'auto',
                minWidth: '20px',
                textAlign: 'center'
              }}>
                {contadorFavoritos}
              </span>
            )}
          </MenuItem> */}
          <MenuItem 
            ativo={telaAtiva === 'configuracoes'} 
            onClick={() => setTelaAtiva('configuracoes')}
            recolhido={menuRecolhido}
          >
            <FontAwesomeIcon icon={faCog} />
            <span>Configurations</span>
          </MenuItem>
          {isAdmin && (
            <MenuItem 
              ativo={telaAtiva === 'admin'} 
              onClick={() => setTelaAtiva('admin')}
              recolhido={menuRecolhido}
            >
              <FontAwesomeIcon icon={faCrown} />
              <span>Admin</span>
            </MenuItem>
          )}
        </MenuLateral>

        <Conteudo menuRecolhido={menuRecolhido}>
          {renderizarConteudo()}
        </Conteudo>
      </Layout>

      <ModalItem
        visivel={modalVisivel}
        tipo="nota"
        item={itemEditando}
        onSalvar={handleSalvarItem}
        onExcluir={handleExcluirItem}
        onFechar={handleFecharModal}
        carregando={carregando}
      />

      {/* Modal de Logs */}
      <LogModal
        isVisible={logModalVisible}
        onClose={() => setLogModalVisible(false)}
        logs={systemLogs}
        stats={logsStats}
        onRefresh={carregarLogsSistema}
        onClear={limparLogsSistema}
        onExport={exportarLogs}
        filter={logsFilter}
        onFilterChange={setLogsFilter}
      />

      {/* Tela Cheia da Nota */}
      {telaCheiaVisivel && notaTelaCheia && (
        <NotaTelaCheia
          nota={notaTelaCheia}
          onFechar={handleFecharTelaCheia}
          onEditar={handleEditarTelaCheia}
          onExcluir={handleExcluirTelaCheia}
        />
      )}
    </AppContainer>
  );
};

const App = () => {
  return (
    <>
      <GlobalStyles />
      <NotasAPIProvider>
        <AppContent />
      </NotasAPIProvider>
    </>
  );
};

export default App;
