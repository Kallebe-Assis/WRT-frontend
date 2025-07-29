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
import ListaItens from './components/ListaItens';
import ModalItem from './components/ModalItem';
import ModalLink from './components/ModalLink';
import Configuracoes from './components/Configuracoes';
import LogModal from './components/LogModal';
import TelaLixeira from './components/TelaLixeira';
import NotaTelaCheia from './components/NotaTelaCheia';
import MenuLateral from './components/MenuLateral';

import GlobalStyles from './styles/GlobalStyles';
import { linksAPI } from './config/api';

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

const Logo = styled.div`
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

  &:hover {
    transform: scale(1.05);
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
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/sync/status`);
      if (response.ok) {
        const data = await response.json();
        setSyncStatus(data.status || 'online');
        setLastSync(data.lastSync ? new Date(data.lastSync) : null);
      } else {
        setSyncStatus('offline');
      }
    } catch (error) {
      console.error('Erro ao verificar status de sincronização:', error);
      setSyncStatus('offline');
    }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 30000); // Verificar a cada 30 segundos
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

  // Log para rastrear mudanças na telaAtiva
  // useEffect(() => {
  //   try {
  //     console.log('🔄 TelaAtiva mudou para:', telaAtiva);
  //     console.log('🔄 Stack trace da mudança:', new Error().stack);
  //   } catch (error) {
  //     console.error('❌ Erro no useEffect telaAtiva:', error);
  //   }
  // }, [telaAtiva]);

  // Função wrapper para setTelaAtiva com logs
  const setTelaAtivaComLog = (novaTela) => {
    console.log('🔄 Mudando tela de', telaAtiva, 'para', novaTela);
    setTelaAtiva(novaTela);
  };
  const [modalAberto, setModalAberto] = useState(false);
  const [itemAtual, setItemAtual] = useState(null);
  const [modoModal, setModoModal] = useState('editar'); // 'editar', 'visualizar', 'novo'
  const [telaCheiaAberta, setTelaCheiaAberta] = useState(false);
  const [itemTelaCheia, setItemTelaCheia] = useState(null);
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
    try {
      console.log('🔄 useEffect inicial executado');
      const userData = localStorage.getItem('user');
      if (userData) {
        try {
          const user = JSON.parse(userData);
          console.log('🔄 Usuário encontrado:', user);
          setUser(user);
          
          // Sempre iniciar na tela inicial após login
          console.log('🔄 Definindo tela inicial');
          setTelaAtiva('inicial');
          
          // Carregar dados imediatamente
          console.log('🔄 Carregando dados iniciais...');
          carregarDadosIniciais(user);
        } catch (error) {
          console.error('Erro ao carregar dados do usuário:', error);
          localStorage.removeItem('user');
          console.log('🔄 Definindo tela login por erro');
          setTelaAtiva('login');
        }
      } else {
        // Se não há usuário, sempre mostrar login
        console.log('🔄 Nenhum usuário encontrado, definindo tela login');
        setTelaAtiva('login');
      }
    } catch (error) {
      console.error('❌ Erro no useEffect inicial:', error);
    }
  }, []);

  // Função para carregar todos os dados iniciais
  const carregarDadosIniciais = async (userData) => {
    console.log('🔄 carregarDadosIniciais executado');
    if (!userData) return;
    
    try {
      console.log('📝 Carregando notas...');
      await carregarNotas();
      console.log('✅ Notas carregadas');
      
      console.log('🔗 Carregando links...');
      await carregarLinks();
      console.log('✅ Links carregados');
      
      console.log('🎉 Todos os dados carregados com sucesso!');
    } catch (error) {
      console.error('❌ Erro ao carregar dados iniciais:', error);
      console.error('❌ Error name:', error.name);
      console.error('❌ Error message:', error.message);
      console.error('❌ Error stack:', error.stack);
    }
  };

  // Carregar links quando usuário logar
  useEffect(() => {
    try {
      if (user && user.id && !carregandoLinks) {
        console.log('🔄 Carregando links...');
        carregarLinks();
      }
    } catch (error) {
      console.error('❌ Erro no useEffect carregarLinks:', error);
    }
  }, [user?.id]);

  const carregarLinks = async () => {
    try {
      console.log('🔄 carregarLinks executado');
      if (!user) return;
      
      setCarregandoLinks(true);
      try {
        console.log('🔄 Carregando links...');
        const response = await linksAPI.buscarTodos();
        console.log('🔗 Resposta da API de links:', response);
        
        // Verificar se a resposta tem 'links' ou 'data'
        const links = response.links || response.data || [];
        console.log('🔗 Links carregados:', links);
        console.log('🔗 Quantidade de links:', links.length);
        setLinks(links);
      } catch (error) {
        console.error('Erro ao carregar links:', error);
      } finally {
        setCarregandoLinks(false);
      }
    } catch (error) {
      console.error('❌ Erro no carregarLinks:', error);
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

  // Handlers principais
  const handleLogin = (userData) => {
    setUser(userData);
    setTelaAtiva('inicial');
    
    // Carregar dados imediatamente após login
    console.log('🔄 Login realizado, carregando dados...');
    carregarDadosIniciais(userData);
  };

  const handleLogout = () => {
    console.log('🚪 Logout iniciado');
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

  const handleExportarItem = (item) => {
    // Implementar exportação
    console.log('Exportar:', item);
  };

  const handleImprimirItem = (item) => {
    // Implementar impressão
    console.log('Imprimir:', item);
  };

  const handleTelaCheia = (item) => {
    setItemTelaCheia(item);
    setTelaCheiaAberta(true);
  };

  const handleFecharTelaCheia = () => {
    setTelaCheiaAberta(false);
    setItemTelaCheia(null);
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

  const handleSalvarItem = async (id, formData) => {
    try {
      // Determinar se é nota ou link baseado no tipo de dados
      const isLink = formData.url !== undefined;
      
      if (isLink) {
        // É um link
        if (id) {
          await editarNota(id, formData);
        } else {
          await adicionarNota(formData);
        }
      } else {
        // É uma nota
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
    }
  };

  const handleSalvarLink = async (formData) => {
    console.log('🔄 === INÍCIO DA EDIÇÃO DE LINK ===');
    console.log('🔄 TelaAtiva antes da edição:', telaAtiva);
    try {
      if (linkAtual) {
        // Editar link existente
        console.log('🔄 Editando link:', linkAtual.id);
        const response = await linksAPI.atualizar(linkAtual.id, formData);
        console.log('✅ Link atualizado:', response);
        
        // Atualizar lista local com os dados retornados ou com formData
        const dadosAtualizados = response.data || { ...linkAtual, ...formData };
        console.log('🔄 Atualizando lista local de links...');
        setLinks(prev => {
          console.log('🔄 Links anteriores:', prev.length);
          const novosLinks = prev.map(link => 
            link.id === linkAtual.id ? dadosAtualizados : link
          );
          console.log('🔄 Links atualizados:', novosLinks.length);
          return novosLinks;
        });
      } else {
        // Criar novo link
        console.log('🔄 Criando novo link');
        const response = await linksAPI.criar(formData);
        console.log('✅ Link criado:', response);
        
        // Adicionar à lista local
        const novoLink = response.data || response.link;
        if (novoLink) {
          setLinks(prev => [...prev, novoLink]);
        }
      }
      
      console.log('🔄 Fechando modal...');
      setModalLinkAberto(false);
      setLinkAtual(null);
      console.log('🔄 TelaAtiva após fechar modal:', telaAtiva);
      console.log('✅ === FIM DA EDIÇÃO DE LINK ===');
    } catch (error) {
      console.error('❌ Erro ao salvar link:', error);
      console.error('❌ Error name:', error.name);
      console.error('❌ Error message:', error.message);
      console.error('❌ Error stack:', error.stack);
      
      // Não mostrar alert se for um erro de rede
      if (error.name !== 'TypeError' || !error.message.includes('fetch')) {
        alert(`Erro ao salvar link: ${error.message}`);
      }
    }
  };

  const handleExcluirLink = async (linkId) => {
    try {
      if (window.confirm('Tem certeza que deseja excluir este link?')) {
        await linksAPI.deletar(linkId);
        console.log('✅ Link deletado:', linkId);
        
        // Remover da lista local
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
      // Confirmação de exclusão
      if (!window.confirm('Tem certeza que deseja excluir esta nota? Esta ação não pode ser desfeita.')) {
        return;
      }
      
      // TODO: Implementar exclusão de links
      // Por enquanto, apenas excluir notas
      await excluirNota(id);
      setModalAberto(false);
      setItemAtual(null);
    } catch (error) {
      console.error('Erro ao excluir item:', error);
      alert('Erro ao excluir nota');
    }
  };

  const handleFecharModal = () => {
    setModalAberto(false);
    setItemAtual(null);
  };

  const carregarLogsSistema = async () => {
    // Implementar carregamento de logs
    console.log('Carregando logs do sistema...');
  };

  const limparLogsSistema = async () => {
    // Implementar limpeza de logs
    console.log('Limpando logs do sistema...');
  };

  const exportarLogs = async () => {
    // Implementar exportação de logs
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
      console.log('🔄 Iniciando sincronização manual...');
      
      // Obter user-id do localStorage
      const userData = localStorage.getItem('user');
      if (!userData) {
        throw new Error('Usuário não autenticado');
      }
      
      const user = JSON.parse(userData);
      const userId = user.id;
      
      // Testar conectividade com o backend
      const testResponse = await fetch('https://wrt-back.vercel.app/api/links', {
        headers: {
          'user-id': userId
        }
      });
      
      if (!testResponse.ok) {
        throw new Error('Backend não está acessível');
      }
      
      // Forçar limpeza dos estados antes de recarregar
      console.log('🧹 Limpando estados atuais...');
      setLinks([]);
      
      // Recarregar dados do banco com delay para garantir limpeza
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Recarregar apenas notas (sem categorias e tópicos)
      console.log('📝 Recarregando apenas notas...');
      await carregarNotas();
      
      console.log('🔗 Recarregando links...');
      await carregarLinks();
      
      // Forçar re-renderização dos componentes
      console.log('🔄 Forçando re-renderização...');
      setForcarAtualizacao(prev => prev + 1);
      
      // Atualizar status
      setSyncStatus('online');
      setLastSync(new Date());
      console.log('✅ Sincronização manual concluída com sucesso');
      
      // Mostrar feedback visual
      console.log('📊 Dados atualizados:');
      console.log('- Notas:', notasAtivas?.length || 0);
      console.log('- Links:', links?.length || 0);
      
      // Notificação visual para o usuário
      const mensagem = `Sincronização concluída!\n\n📝 Notas: ${notasAtivas?.length || 0}\n🔗 Links: ${links?.length || 0}`;
      console.log('🎉 ' + mensagem);
      
    } catch (error) {
      console.error('❌ Erro na sincronização manual:', error);
      setSyncStatus('offline');
      alert('Erro na sincronização: ' + error.message);
    }
  };

  const renderizarConteudo = () => {
    console.log('🔍 Renderizando conteúdo - telaAtiva:', telaAtiva);
    console.log('📝 Notas ativas:', notasAtivas);
    console.log('📝 Total de notas:', notasAtivas?.length || 0);
    console.log('📝 Links:', links);
    console.log('📝 Total de links:', links?.length || 0);
    
    switch (telaAtiva) {
      case 'login':
        console.log('🔄 Renderizando tela de login');
        return <AuthScreen onLogin={handleLogin} />;

      case 'inicial':
        console.log('🔄 Renderizando tela inicial');
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
        console.log('🔄 Renderizando tela de notas');
        return (
          <TelaNotas
            notas={notasAtivas}
            carregando={carregando}
            onNovoItem={handleNovoItem}
            onEditarItem={handleEditarItem}
            onVisualizarItem={handleVisualizarItem}
            onExcluirItem={handleExcluirItem}
            onFavoritarItem={alternarFavorito}
            forcarAtualizacao={forcarAtualizacao}
          />
        );

      case 'links':
        console.log('🔄 Renderizando tela de links');
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
        console.log('🔄 Renderizando tela de favoritos');
        return (
          <ListaItens
            itens={notasAtivas.filter(nota => nota.favorito)}
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
        console.log('🔄 Renderizando tela de lixeira');
        return (
          <TelaLixeira
            notas={notasAtivas.filter(nota => !nota.ativo)}
            onRestaurar={(id) => console.log('Restaurar:', id)}
            onExcluirDefinitivamente={(id) => console.log('Excluir definitivamente:', id)}
          />
        );

      case 'configuracoes':
        console.log('🔄 Renderizando tela de configurações');
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
        console.log('🔄 Renderizando tela padrão (inicial)');
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
          onTelaChange={setTelaAtivaComLog}
          totalLinks={links.length}
        />
        <ContentArea menuRecolhido={menuRecolhido}>
          <Header>
            <Logo>
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
