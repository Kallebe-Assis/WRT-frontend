import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, 
  faPlus, 
  faEdit, 
  faTrash, 
  faCheck,
  faCog,
  faTags,
  faFolder,
  faSync,
  faEye,
  faTrashAlt,
  faPlay,
  faBug,
  faTerminal,
  faDatabase,
  faNetworkWired,
  faUser,
  faStickyNote,
  faLink,
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import { useNotasAPIContext } from '../context/NotasAPIContext';
import { syncAPI, linksAPI } from '../config/api';
import { debugAuth, testRequest } from '../utils/debug';

// Styled Components básicos
const SecaoConfiguracao = styled.div`
  background: var(--corFundoTerciaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoGrande);
  box-shadow: var(--sombraLeve);
`;

const SecaoTitulo = styled.h3`
  color: var(--corTextoPrimaria);
  margin-bottom: var(--espacamentoMedio);
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`;

const SecaoDescricao = styled.p`
  color: var(--corTextoSecundaria);
  margin-bottom: var(--espacamentoMedio);
  font-size: var(--tamanhoFonteMedia);
`;

const Configuracoes = ({ visivel, onFechar }) => {
  const { 
    categorias,
    adicionarCategoria, 
    removerCategoria, 
    editarCategoria,
    recarregarDados
  } = useNotasAPIContext();

  const [abaAtiva, setAbaAtiva] = useState('categorias');
  const [editandoCategoria, setEditandoCategoria] = useState(null);
  const [formCategoria, setFormCategoria] = useState({ nome: '', descricao: '', cor: '#667eea' });
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Estados para sincronização
  const [syncLogsVisible, setSyncLogsVisible] = useState(false);
  const [syncLogs, setSyncLogs] = useState([]);
  const [syncStatus, setSyncStatus] = useState(null);
  const [loadingSync, setLoadingSync] = useState(false);

  // Estados para logs do sistema
  const [systemLogs, setSystemLogs] = useState([]);
  const [logsStats, setLogsStats] = useState(null);
  const [loadingLogs, setLoadingLogs] = useState(false);
  const [logsFilter, setLogsFilter] = useState('all');

  // Função para converter HEX para RGB
  const hexToRgb = (hex) => {
    if (!hex) return 'rgb(102, 126, 234)';
    const cleanHex = hex.replace('#', '');
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  // Funções para sincronização
  const carregarLogsSincronizacao = async () => {
    try {
      setLoadingSync(true);
      const [logsResponse, statusResponse] = await Promise.all([
        syncAPI.buscarLogs(),
        syncAPI.buscarStatus()
      ]);
      setSyncLogs(logsResponse.logs || []);
      setSyncStatus(statusResponse);
    } catch (error) {
      console.error('Erro ao carregar logs de sincronização:', error);
    } finally {
      setLoadingSync(false);
    }
  };

  const abrirModalLogs = async () => {
    setSyncLogsVisible(true);
    await carregarLogsSincronizacao();
  };

  const fecharModalLogs = () => {
    setSyncLogsVisible(false);
  };

  const executarSincronizacaoManual = async () => {
    try {
      setLoadingSync(true);
      await syncAPI.sincronizarManual();
      await carregarLogsSincronizacao();
    } catch (error) {
      console.error('Erro ao executar sincronização manual:', error);
    } finally {
      setLoadingSync(false);
    }
  };

  const limparLogs = async () => {
    try {
      await syncAPI.limparLogs();
      await carregarLogsSincronizacao();
    } catch (error) {
      console.error('Erro ao limpar logs:', error);
    }
  };

  const formatarTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString('pt-BR');
  };

  const getIconeTipo = (tipo) => {
    switch (tipo) {
      case 'error': return faTimes;
      case 'success': return faCheck;
      case 'info': return faCog;
      default: return faCog;
    }
  };

  // Funções para logs do sistema
  const carregarLogsSistema = async () => {
    try {
      setLoadingLogs(true);
      const response = await fetch(`http://localhost:5000/api/logs?type=${logsFilter !== 'all' ? logsFilter : ''}`);
      const data = await response.json();
      setSystemLogs(data.logs || []);
      setLogsStats(data.stats);
    } catch (error) {
      console.error('Erro ao carregar logs do sistema:', error);
      alert('Erro ao carregar logs: ' + error.message);
    } finally {
      setLoadingLogs(false);
    }
  };

  const limparLogsSistema = async () => {
    if (window.confirm('Tem certeza que deseja limpar todos os logs do sistema?')) {
      try {
        await fetch('http://localhost:5000/api/logs', { method: 'DELETE' });
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
      const response = await fetch('http://localhost:5000/api/logs/export');
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

  // Carregar logs quando a aba de logs for ativada
  useEffect(() => {
    if (abaAtiva === 'logs' && visivel) {
      carregarLogsSistema();
    }
  }, [abaAtiva, logsFilter, visivel]);

  const handleAdicionarCategoria = async () => {
    if (formCategoria.nome.trim()) {
      try {
        const novaCategoria = {
          nome: formCategoria.nome.trim(),
          descricao: formCategoria.descricao.trim(),
          cor: formCategoria.cor || '#667eea'
        };
        await adicionarCategoria(novaCategoria);
        setFormCategoria({ nome: '', descricao: '', cor: '#667eea' });
        setMostrarFormulario(false);
      } catch (error) {
        console.error('Erro ao adicionar categoria:', error);
        alert('Erro ao adicionar categoria: ' + error.message);
      }
    }
  };

  const handleEditarCategoria = (index) => {
    const categoria = categorias[index];
    setEditandoCategoria(index);
    setFormCategoria({ 
      nome: categoria.nome, 
      descricao: categoria.descricao || '', 
      cor: categoria.cor || '#667eea' 
    });
    setMostrarFormulario(true);
  };

  const handleSalvarCategoria = async () => {
    if (formCategoria.nome.trim()) {
      try {
        const categoriaAtual = categorias[editandoCategoria];
        const dadosAtualizados = {
          nome: formCategoria.nome.trim(),
          descricao: formCategoria.descricao.trim(),
          cor: formCategoria.cor || '#667eea'
        };
        await editarCategoria(categoriaAtual.id, dadosAtualizados);
        setEditandoCategoria(null);
        setFormCategoria({ nome: '', descricao: '', cor: '#667eea' });
        setMostrarFormulario(false);
      } catch (error) {
        console.error('Erro ao salvar categoria:', error);
        alert('Erro ao salvar categoria: ' + error.message);
      }
    }
  };

  const handleCancelarCategoria = () => {
    setEditandoCategoria(null);
    setFormCategoria({ nome: '', descricao: '', cor: '#667eea' });
    setMostrarFormulario(false);
  };

  const handleRemoverCategoria = async (index) => {
    if (window.confirm('Tem certeza que deseja remover esta categoria?')) {
      try {
        const categoria = categorias[index];
        await removerCategoria(categoria.id);
      } catch (error) {
        console.error('Erro ao remover categoria:', error);
        alert('Erro ao remover categoria: ' + error.message);
      }
    }
  };

  // Se não estiver visível, não renderiza nada
  if (!visivel) return null;

  return (
    <div style={{ padding: 'var(--espacamentoGrande)' }}>
      <div style={{ 
        background: 'var(--corFundoTerciaria)', 
        borderRadius: 'var(--bordaRaioMedia)', 
        padding: 'var(--espacamentoGrande)',
        boxShadow: 'var(--sombraLeve)'
      }}>
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          marginBottom: 'var(--espacamentoGrande)',
          paddingBottom: 'var(--espacamentoMedio)',
          borderBottom: '1px solid var(--corBordaPrimaria)'
        }}>
          <h2 style={{ 
            color: 'var(--corTextoPrimaria)', 
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--espacamentoMedio)'
          }}>
            <FontAwesomeIcon icon={faCog} />
            Configurações
          </h2>
          {onFechar && (
            <button 
              onClick={onFechar}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--corTextoSecundaria)',
                fontSize: 'var(--tamanhoFonteTitulo)',
                cursor: 'pointer',
                padding: 'var(--espacamentoPequeno)',
                borderRadius: 'var(--bordaRaioMedia)',
                transition: 'all var(--transicaoRapida)'
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}
        </div>

        {/* Abas */}
        <div style={{ 
          display: 'flex',
          gap: 'var(--espacamentoPequeno)',
          marginBottom: 'var(--espacamentoMedio)',
          borderBottom: '1px solid var(--corBordaPrimaria)'
        }}>
          <button 
            onClick={() => setAbaAtiva('categorias')}
            style={{
              background: abaAtiva === 'categorias' ? 'var(--corPrimaria)' : 'var(--corFundoSecundaria)',
              color: abaAtiva === 'categorias' ? 'var(--corTextoClara)' : 'var(--corTextoPrimaria)',
              border: 'none',
              borderRadius: 'var(--bordaRaioMedia) var(--bordaRaioMedia) 0 0',
              padding: 'var(--espacamentoPequeno) var(--espacamentoMedio)',
              cursor: 'pointer',
              fontSize: 'var(--tamanhoFonteMedia)',
              fontWeight: 'bold',
              transition: 'all var(--transicaoRapida)'
            }}
          >
            <FontAwesomeIcon icon={faTags} />
            Categorias
          </button>
          <button 
            onClick={() => setAbaAtiva('sincronizacao')}
            style={{
              background: abaAtiva === 'sincronizacao' ? 'var(--corPrimaria)' : 'var(--corFundoSecundaria)',
              color: abaAtiva === 'sincronizacao' ? 'var(--corTextoClara)' : 'var(--corTextoPrimaria)',
              border: 'none',
              borderRadius: 'var(--bordaRaioMedia) var(--bordaRaioMedia) 0 0',
              padding: 'var(--espacamentoPequeno) var(--espacamentoMedio)',
              cursor: 'pointer',
              fontSize: 'var(--tamanhoFonteMedia)',
              fontWeight: 'bold',
              transition: 'all var(--transicaoRapida)'
            }}
          >
            <FontAwesomeIcon icon={faSync} />
            Sincronização
          </button>
          <button 
            onClick={() => setAbaAtiva('debug')}
            style={{
              background: abaAtiva === 'debug' ? 'var(--corPrimaria)' : 'var(--corFundoSecundaria)',
              color: abaAtiva === 'debug' ? 'var(--corTextoClara)' : 'var(--corTextoPrimaria)',
              border: 'none',
              borderRadius: 'var(--bordaRaioMedia) var(--bordaRaioMedia) 0 0',
              padding: 'var(--espacamentoPequeno) var(--espacamentoMedio)',
              cursor: 'pointer',
              fontSize: 'var(--tamanhoFonteMedia)',
              fontWeight: 'bold',
              transition: 'all var(--transicaoRapida)'
            }}
          >
            <FontAwesomeIcon icon={faBug} />
            Debug
          </button>
          <button 
            onClick={() => setAbaAtiva('logs')}
            style={{
              background: abaAtiva === 'logs' ? 'var(--corPrimaria)' : 'var(--corFundoSecundaria)',
              color: abaAtiva === 'logs' ? 'var(--corTextoClara)' : 'var(--corTextoPrimaria)',
              border: 'none',
              borderRadius: 'var(--bordaRaioMedia) var(--bordaRaioMedia) 0 0',
              padding: 'var(--espacamentoPequeno) var(--espacamentoMedio)',
              cursor: 'pointer',
              fontSize: 'var(--tamanhoFonteMedia)',
              fontWeight: 'bold',
              transition: 'all var(--transicaoRapida)'
            }}
          >
            <FontAwesomeIcon icon={faTerminal} />
            Logs
          </button>
        </div>

        {/* Conteúdo das abas */}
        {abaAtiva === 'categorias' && (
          <SecaoConfiguracao>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: 'var(--espacamentoGrande)'
            }}>
              <div>
                <SecaoTitulo>
                  <FontAwesomeIcon icon={faFolder} />
                  Gerenciar Categorias
                </SecaoTitulo>
                <SecaoDescricao>
                  Crie e gerencie categorias para organizar suas notas. As categorias ajudam a categorizar e encontrar suas notas mais facilmente.
                </SecaoDescricao>
              </div>
              <button
                onClick={() => setMostrarFormulario(!mostrarFormulario)}
                style={{
                  background: 'var(--corPrimaria)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--bordaRaioMedia)',
                  padding: 'var(--espacamentoMedio) var(--espacamentoGrande)',
                  cursor: 'pointer',
                  fontSize: 'var(--tamanhoFonteMedia)',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--espacamentoPequeno)',
                  transition: 'all var(--transicaoRapida)',
                  boxShadow: 'var(--sombraLeve)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--corSecundaria)';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = 'var(--sombraMedia)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'var(--corPrimaria)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'var(--sombraLeve)';
                }}
              >
                <FontAwesomeIcon icon={mostrarFormulario ? faTimes : faPlus} />
                {mostrarFormulario ? 'Cancelar' : 'Nova Categoria'}
              </button>
            </div>

            {/* Lista de categorias primeiro */}
            <div style={{ marginBottom: 'var(--espacamentoGrande)' }}>
              <h4 style={{ color: 'var(--corTextoPrimaria)', marginBottom: 'var(--espacamentoMedio)' }}>
                Categorias Existentes ({categorias ? categorias.length : 0})
              </h4>
              
              {!categorias || categorias.length === 0 ? (
                <p style={{ color: 'var(--corTextoSecundaria)', textAlign: 'center', padding: 'var(--espacamentoGrande)' }}>
                  Nenhuma categoria criada ainda. Crie sua primeira categoria clicando no botão "Nova Categoria"!
                </p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--espacamentoPequeno)' }}>
                  {categorias && categorias.map((categoria, index) => (
                    <div key={categoria.id || index} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: 'var(--espacamentoMedio)',
                      background: 'var(--corFundoTerciaria)',
                      borderRadius: 'var(--bordaRaioMedia)',
                      border: '1px solid var(--corBordaPrimaria)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--espacamentoMedio)', flex: 1 }}>
                        <div 
                          style={{ 
                            width: '32px', 
                            height: '32px', 
                            borderRadius: 'var(--bordaRaioMedia)', 
                            backgroundColor: categoria.cor || '#667eea',
                            border: '2px solid var(--corBordaPrimaria)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '10px',
                            fontWeight: 'bold',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                            cursor: 'pointer'
                          }}
                          title={`Cor: ${categoria.cor || '#667eea'}`}
                          onClick={() => {
                            navigator.clipboard.writeText(categoria.cor || '#667eea');
                            alert(`Cor ${categoria.cor || '#667eea'} copiada para a área de transferência!`);
                          }}
                        >
                          {categoria.cor ? categoria.cor.substring(1, 4) : '667'}
                        </div>
                        <div style={{ flex: 1 }}>
                          <span style={{ color: 'var(--corTextoPrimaria)', fontSize: 'var(--tamanhoFonteMedia)' }}>
                            {categoria.nome}
                          </span>
                          {categoria.descricao && (
                            <p style={{ color: 'var(--corTextoSecundaria)', fontSize: 'var(--tamanhoFontePequena)', margin: 'var(--espacamentoPequeno) 0 0 0' }}>
                              {categoria.descricao}
                            </p>
                          )}
                          <div style={{ 
                            fontSize: 'var(--tamanhoFontePequena)', 
                            color: 'var(--corTextoSecundaria)',
                            marginTop: '2px'
                          }}>
                            HEX: {categoria.cor || '#667eea'} | RGB: {hexToRgb(categoria.cor || '#667eea')}
                          </div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: 'var(--espacamentoPequeno)' }}>
                        <button
                          onClick={() => handleEditarCategoria(index)}
                          title="Editar categoria"
                          style={{
                            background: 'var(--corPrimaria)',
                            color: 'white',
                            border: 'none',
                            borderRadius: 'var(--bordaRaioMedia)',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all var(--transicaoRapida)'
                          }}
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button
                          onClick={() => handleRemoverCategoria(index)}
                          title="Remover categoria"
                          style={{
                            background: 'var(--corErro)',
                            color: 'white',
                            border: 'none',
                            borderRadius: 'var(--bordaRaioMedia)',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all var(--transicaoRapida)'
                          }}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Formulário para adicionar/editar categoria (condicional) */}
            {mostrarFormulario && (
              <form onSubmit={(e) => {
                e.preventDefault();
                if (editandoCategoria !== null) {
                  handleSalvarCategoria();
                } else {
                  handleAdicionarCategoria();
                }
              }} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--espacamentoMedio)' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ color: 'var(--corTextoPrimaria)', fontSize: 'var(--tamanhoFonteMedia)', marginBottom: 'var(--espacamentoPequeno)' }}>
                    Nome da Categoria *
                  </label>
                  <input
                    type="text"
                    value={formCategoria.nome}
                    onChange={(e) => setFormCategoria({ ...formCategoria, nome: e.target.value })}
                    placeholder="Ex: Trabalho, Pessoal, Projetos..."
                    maxLength={50}
                    required
                    style={{
                      padding: 'var(--espacamentoMedio)',
                      border: '2px solid var(--corBordaPrimaria)',
                      borderRadius: 'var(--bordaRaioMedia)',
                      fontSize: 'var(--tamanhoFonteMedia)',
                      background: 'var(--corFundoTerciaria)',
                      color: 'var(--corTextoPrimaria)'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ color: 'var(--corTextoPrimaria)', fontSize: 'var(--tamanhoFonteMedia)', marginBottom: 'var(--espacamentoPequeno)' }}>
                    Descrição
                  </label>
                  <input
                    type="text"
                    value={formCategoria.descricao}
                    onChange={(e) => setFormCategoria({ ...formCategoria, descricao: e.target.value })}
                    placeholder="Descrição opcional da categoria..."
                    maxLength={200}
                    style={{
                      padding: 'var(--espacamentoMedio)',
                      border: '2px solid var(--corBordaPrimaria)',
                      borderRadius: 'var(--bordaRaioMedia)',
                      fontSize: 'var(--tamanhoFonteMedia)',
                      background: 'var(--corFundoTerciaria)',
                      color: 'var(--corTextoPrimaria)'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ color: 'var(--corTextoPrimaria)', fontSize: 'var(--tamanhoFonteMedia)', marginBottom: 'var(--espacamentoPequeno)' }}>
                    Cor
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--espacamentoMedio)' }}>
                    <input
                      type="color"
                      value={formCategoria.cor || '#667eea'}
                      onChange={(e) => setFormCategoria({ ...formCategoria, cor: e.target.value })}
                      style={{ 
                        width: '100px', 
                        height: '40px',
                        backgroundColor: formCategoria.cor || '#667eea',
                        border: '2px solid var(--corBordaPrimaria)',
                        borderRadius: 'var(--bordaRaioMedia)',
                        cursor: 'pointer'
                      }}
                    />
                    <div 
                      style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: 'var(--bordaRaioMedia)', 
                        backgroundColor: formCategoria.cor || '#667eea',
                        border: '2px solid var(--corBordaPrimaria)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: 'var(--tamanhoFontePequena)',
                        fontWeight: 'bold',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                      }}
                      title={`Cor selecionada: ${formCategoria.cor || '#667eea'}`}
                    >
                      {formCategoria.cor || '#667eea'}
                    </div>
                  </div>
                  {/* Informações da cor */}
                  <div style={{ 
                    marginTop: 'var(--espacamentoPequeno)',
                    fontSize: 'var(--tamanhoFontePequena)',
                    color: 'var(--corTextoSecundaria)',
                    display: 'flex',
                    gap: 'var(--espacamentoMedio)'
                  }}>
                    <span>HEX: {formCategoria.cor || '#667eea'}</span>
                    <span>RGB: {hexToRgb(formCategoria.cor || '#667eea')}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 'var(--espacamentoMedio)', marginTop: 'var(--espacamentoMedio)' }}>
                  {editandoCategoria !== null ? (
                    <>
                      <button type="submit" style={{
                        background: 'var(--corSucesso)',
                        color: 'white',
                        border: 'none',
                        borderRadius: 'var(--bordaRaioMedia)',
                        padding: 'var(--espacamentoMedio)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--espacamentoMedio)',
                        cursor: 'pointer',
                        transition: 'all var(--transicaoRapida)',
                        fontSize: 'var(--tamanhoFonteMedia)'
                      }}>
                        <FontAwesomeIcon icon={faCheck} />
                        Salvar Alterações
                      </button>
                      <button type="button" onClick={handleCancelarCategoria} style={{
                        background: 'var(--corErro)',
                        color: 'white',
                        border: 'none',
                        borderRadius: 'var(--bordaRaioMedia)',
                        padding: 'var(--espacamentoMedio)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--espacamentoMedio)',
                        cursor: 'pointer',
                        transition: 'all var(--transicaoRapida)',
                        fontSize: 'var(--tamanhoFonteMedia)'
                      }}>
                        <FontAwesomeIcon icon={faTimes} />
                        Cancelar
                      </button>
                    </>
                  ) : (
                    <button type="submit" style={{
                      background: 'var(--corPrimaria)',
                      color: 'white',
                      border: 'none',
                      borderRadius: 'var(--bordaRaioMedia)',
                      padding: 'var(--espacamentoMedio)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--espacamentoMedio)',
                      cursor: 'pointer',
                      transition: 'all var(--transicaoRapida)',
                      fontSize: 'var(--tamanhoFonteMedia)'
                    }}>
                      <FontAwesomeIcon icon={faPlus} />
                      Adicionar Categoria
                    </button>
                  )}
                </div>
              </form>
            )}
          </SecaoConfiguracao>
        )}

        {abaAtiva === 'sincronizacao' && (
          <SecaoConfiguracao>
            <SecaoTitulo>
              <FontAwesomeIcon icon={faSync} />
              Sincronização com Firebase
            </SecaoTitulo>
            <SecaoDescricao>
              Gerencie a sincronização de dados entre dispositivos através do Firebase.
            </SecaoDescricao>
            
            <div style={{ display: 'flex', gap: 'var(--espacamentoMedio)', marginTop: 'var(--espacamentoMedio)' }}>
              <button 
                onClick={abrirModalLogs}
                style={{
                  background: 'var(--corPrimaria)',
                  color: 'var(--corTextoClara)',
                  border: 'none',
                  borderRadius: 'var(--bordaRaioMedia)',
                  padding: 'var(--espacamentoMedio)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--espacamentoMedio)',
                  cursor: 'pointer',
                  transition: 'all var(--transicaoRapida)',
                  fontSize: 'var(--tamanhoFonteMedia)'
                }}
              >
                <FontAwesomeIcon icon={faEye} />
                Ver Logs de Sincronização
              </button>
              <button 
                onClick={executarSincronizacaoManual} 
                disabled={loadingSync}
                style={{
                  background: 'var(--corPrimaria)',
                  color: 'var(--corTextoClara)',
                  border: 'none',
                  borderRadius: 'var(--bordaRaioMedia)',
                  padding: 'var(--espacamentoMedio)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--espacamentoMedio)',
                  cursor: loadingSync ? 'not-allowed' : 'pointer',
                  transition: 'all var(--transicaoRapida)',
                  fontSize: 'var(--tamanhoFonteMedia)',
                  opacity: loadingSync ? 0.5 : 1
                }}
              >
                <FontAwesomeIcon icon={faPlay} />
                {loadingSync ? 'Sincronizando...' : 'Sincronizar Agora'}
              </button>
            </div>
          </SecaoConfiguracao>
        )}

        {abaAtiva === 'debug' && (
          <SecaoConfiguracao>
            <SecaoTitulo>
              <FontAwesomeIcon icon={faBug} />
              Ferramentas de Debug
            </SecaoTitulo>
            <SecaoDescricao>
              Ferramentas para diagnosticar problemas e testar funcionalidades do sistema.
            </SecaoDescricao>

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
                    onClick={debugAuth}
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

              {/* Seção de Testes de API */}
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
                  <FontAwesomeIcon icon={faNetworkWired} />
                  Testes de API
                </h4>
                
                <div style={{ display: 'flex', gap: 'var(--espacamentoPequeno)', flexWrap: 'wrap' }}>
                  <button 
                    onClick={() => testRequest('/notas')}
                    style={{
                      background: '#28a745',
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
                    <FontAwesomeIcon icon={faStickyNote} />
                    Testar Notas
                  </button>
                  
                  <button 
                    onClick={() => testRequest('/links')}
                    style={{
                      background: '#007bff',
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
                    <FontAwesomeIcon icon={faLink} />
                    Testar Links
                  </button>
                  
                  <button 
                    onClick={() => testRequest('/categorias')}
                    style={{
                      background: '#6f42c1',
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
                    <FontAwesomeIcon icon={faTags} />
                    Testar Categorias
                  </button>
                  
                  <button 
                    onClick={() => testRequest('/sync/status')}
                    style={{
                      background: '#fd7e14',
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
                    <FontAwesomeIcon icon={faSync} />
                    Testar Sync
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
                  <div><strong>API Base URL:</strong> http://localhost:5000/api</div>
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
                      localStorage.clear();
                      alert('LocalStorage limpo! Recarregue a página.');
                    }}
                    style={{
                      background: '#dc3545',
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
                    <FontAwesomeIcon icon={faTrashAlt} />
                    Limpar LocalStorage
                  </button>
                  
                  <button 
                    onClick={() => {
                      console.clear();
                      alert('Console limpo!');
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
          </SecaoConfiguracao>
        )}

        {abaAtiva === 'logs' && (
          <SecaoConfiguracao>
            <SecaoTitulo>
              <FontAwesomeIcon icon={faTerminal} />
              Logs do Sistema
            </SecaoTitulo>
            <SecaoDescricao>
              Visualize logs detalhados das operações do Firebase e do sistema.
            </SecaoDescricao>

            {/* Estatísticas */}
            {logsStats && (
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: 'var(--espacamentoMedio)',
                marginBottom: 'var(--espacamentoGrande)'
              }}>
                <div style={{ 
                  background: 'var(--corFundoSecundaria)', 
                  padding: 'var(--espacamentoMedio)', 
                  borderRadius: 'var(--bordaRaioMedia)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: 'var(--tamanhoFonteTitulo)', fontWeight: 'bold', color: 'var(--corPrimaria)' }}>
                    {logsStats.total}
                  </div>
                  <div style={{ fontSize: 'var(--tamanhoFontePequena)', color: 'var(--corTextoSecundaria)' }}>
                    Total
                  </div>
                </div>
                <div style={{ 
                  background: 'var(--corFundoSecundaria)', 
                  padding: 'var(--espacamentoMedio)', 
                  borderRadius: 'var(--bordaRaioMedia)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: 'var(--tamanhoFonteTitulo)', fontWeight: 'bold', color: '#28a745' }}>
                    {logsStats.firebase}
                  </div>
                  <div style={{ fontSize: 'var(--tamanhoFontePequena)', color: 'var(--corTextoSecundaria)' }}>
                    Firebase
                  </div>
                </div>
                <div style={{ 
                  background: 'var(--corFundoSecundaria)', 
                  padding: 'var(--espacamentoMedio)', 
                  borderRadius: 'var(--bordaRaioMedia)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: 'var(--tamanhoFonteTitulo)', fontWeight: 'bold', color: '#007bff' }}>
                    {logsStats.api}
                  </div>
                  <div style={{ fontSize: 'var(--tamanhoFontePequena)', color: 'var(--corTextoSecundaria)' }}>
                    API
                  </div>
                </div>
                <div style={{ 
                  background: 'var(--corFundoSecundaria)', 
                  padding: 'var(--espacamentoMedio)', 
                  borderRadius: 'var(--bordaRaioMedia)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: 'var(--tamanhoFonteTitulo)', fontWeight: 'bold', color: '#dc3545' }}>
                    {logsStats.error}
                  </div>
                  <div style={{ fontSize: 'var(--tamanhoFontePequena)', color: 'var(--corTextoSecundaria)' }}>
                    Erros
                  </div>
                </div>
              </div>
            )}

            {/* Controles */}
            <div style={{ 
              display: 'flex', 
              gap: 'var(--espacamentoMedio)', 
              marginBottom: 'var(--espacamentoGrande)',
              flexWrap: 'wrap'
            }}>
              <select 
                value={logsFilter} 
                onChange={(e) => setLogsFilter(e.target.value)}
                style={{
                  padding: 'var(--espacamentoPequeno) var(--espacamentoMedio)',
                  border: '1px solid var(--corBordaPrimaria)',
                  borderRadius: 'var(--bordaRaioMedia)',
                  background: 'var(--corFundoPrimaria)',
                  color: 'var(--corTextoPrimaria)'
                }}
              >
                <option value="all">Todos os tipos</option>
                <option value="firebase">Firebase</option>
                <option value="api">API</option>
                <option value="error">Erros</option>
                <option value="info">Informações</option>
              </select>

              <button 
                onClick={carregarLogsSistema}
                disabled={loadingLogs}
                style={{
                  background: 'var(--corPrimaria)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--bordaRaioMedia)',
                  padding: 'var(--espacamentoPequeno) var(--espacamentoMedio)',
                  cursor: loadingLogs ? 'not-allowed' : 'pointer',
                  opacity: loadingLogs ? 0.5 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--espacamentoPequeno)'
                }}
              >
                <FontAwesomeIcon icon={faSync} />
                {loadingLogs ? 'Carregando...' : 'Atualizar'}
              </button>

              <button 
                onClick={exportarLogs}
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
                Exportar
              </button>

              <button 
                onClick={limparLogsSistema}
                style={{
                  background: '#dc3545',
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
                <FontAwesomeIcon icon={faTrashAlt} />
                Limpar
              </button>
            </div>

            {/* Lista de Logs */}
            <div style={{ 
              background: 'var(--corFundoSecundaria)', 
              borderRadius: 'var(--bordaRaioMedia)',
              maxHeight: '400px',
              overflowY: 'auto'
            }}>
              {loadingLogs ? (
                <div style={{ padding: 'var(--espacamentoGrande)', textAlign: 'center' }}>
                  Carregando logs...
                </div>
              ) : systemLogs.length === 0 ? (
                <div style={{ padding: 'var(--espacamentoGrande)', textAlign: 'center', color: 'var(--corTextoSecundaria)' }}>
                  Nenhum log encontrado.
                </div>
              ) : (
                systemLogs.map((log) => (
                  <div 
                    key={log.id}
                    style={{
                      padding: 'var(--espacamentoMedio)',
                      borderBottom: '1px solid var(--corBordaPrimaria)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--espacamentoMedio)'
                    }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: log.type === 'firebase' ? '#ff6b35' : 
                                 log.type === 'api' ? '#007bff' : 
                                 log.type === 'error' ? '#dc3545' : '#6c757d',
                      color: 'white',
                      fontSize: 'var(--tamanhoFontePequena)'
                    }}>
                      {log.type === 'firebase' ? '🔥' : 
                       log.type === 'api' ? '🌐' : 
                       log.type === 'error' ? '❌' : 'ℹ️'}
                    </div>
                    
                    <div style={{ flex: 1 }}>
                      <div style={{ 
                        fontWeight: 'bold', 
                        color: 'var(--corTextoPrimaria)',
                        marginBottom: 'var(--espacamentoPequeno)'
                      }}>
                        {log.message}
                      </div>
                      <div style={{ 
                        fontSize: 'var(--tamanhoFontePequena)', 
                        color: 'var(--corTextoSecundaria)',
                        marginBottom: 'var(--espacamentoPequeno)'
                      }}>
                        {formatarTimestamp(log.timestamp)} • {log.type.toUpperCase()}
                      </div>
                      {log.details && (
                        <div style={{
                          background: 'var(--corFundoPrimaria)',
                          padding: 'var(--espacamentoPequeno)',
                          borderRadius: 'var(--bordaRaioMedia)',
                          fontSize: 'var(--tamanhoFontePequena)',
                          fontFamily: 'monospace',
                          whiteSpace: 'pre-wrap',
                          maxHeight: '100px',
                          overflowY: 'auto'
                        }}>
                          {JSON.stringify(log.details, null, 2)}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </SecaoConfiguracao>
        )}
      </div>

      {/* Modal de Logs de Sincronização */}
      {syncLogsVisible && (
        <div 
          onClick={fecharModalLogs}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: 'var(--espacamentoMedio)'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--corFundoTerciaria)',
              borderRadius: 'var(--bordaRaioMedia)',
              padding: 'var(--espacamentoGrande)',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '80vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: 'var(--sombraForte)'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 'var(--espacamentoGrande)',
              paddingBottom: 'var(--espacamentoMedio)',
              borderBottom: '1px solid var(--corBordaPrimaria)'
            }}>
              <h3 style={{ 
                color: 'var(--corTextoPrimaria)', 
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--espacamentoMedio)'
              }}>
                <FontAwesomeIcon icon={faSync} />
                Logs de Sincronização
              </h3>
              <button 
                onClick={fecharModalLogs}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--corTextoSecundaria)',
                  fontSize: 'var(--tamanhoFonteTitulo)',
                  cursor: 'pointer',
                  padding: 'var(--espacamentoPequeno)',
                  borderRadius: 'var(--bordaRaioMedia)',
                  transition: 'all var(--transicaoRapida)'
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            {syncStatus && (
              <div style={{
                display: 'flex',
                gap: 'var(--espacamentoGrande)',
                marginBottom: 'var(--espacamentoMedio)',
                padding: 'var(--espacamentoMedio)',
                background: 'var(--corFundoSecundaria)',
                borderRadius: 'var(--bordaRaioMedia)'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--corTextoSecundaria)', fontSize: 'var(--tamanhoFontePequena)', marginBottom: 'var(--espacamentoPequeno)' }}>
                    Total de Logs
                  </div>
                  <div style={{ color: 'var(--corTextoPrimaria)', fontSize: 'var(--tamanhoFonteGrande)', fontWeight: 'bold' }}>
                    {syncStatus.stats?.total || 0}
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--corTextoSecundaria)', fontSize: 'var(--tamanhoFontePequena)', marginBottom: 'var(--espacamentoPequeno)' }}>
                    Sucessos
                  </div>
                  <div style={{ color: '#28a745', fontSize: 'var(--tamanhoFonteGrande)', fontWeight: 'bold' }}>
                    {syncStatus.stats?.success || 0}
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--corTextoSecundaria)', fontSize: 'var(--tamanhoFontePequena)', marginBottom: 'var(--espacamentoPequeno)' }}>
                    Erros
                  </div>
                  <div style={{ color: '#dc3545', fontSize: 'var(--tamanhoFonteGrande)', fontWeight: 'bold' }}>
                    {syncStatus.stats?.errors || 0}
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--corTextoSecundaria)', fontSize: 'var(--tamanhoFontePequena)', marginBottom: 'var(--espacamentoPequeno)' }}>
                    Informações
                  </div>
                  <div style={{ color: '#007bff', fontSize: 'var(--tamanhoFonteGrande)', fontWeight: 'bold' }}>
                    {syncStatus.stats?.info || 0}
                  </div>
                </div>
              </div>
            )}

            <div style={{ 
              display: 'flex', 
              gap: 'var(--espacamentoPequeno)', 
              marginBottom: 'var(--espacamentoMedio)'
            }}>
              <button 
                onClick={carregarLogsSincronizacao} 
                disabled={loadingSync}
                style={{
                  background: 'var(--corPrimaria)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--bordaRaioMedia)',
                  padding: 'var(--espacamentoPequeno) var(--espacamentoMedio)',
                  cursor: loadingSync ? 'not-allowed' : 'pointer',
                  opacity: loadingSync ? 0.5 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--espacamentoPequeno)'
                }}
              >
                <FontAwesomeIcon icon={faSync} />
                {loadingSync ? 'Carregando...' : 'Atualizar'}
              </button>
              <button 
                onClick={executarSincronizacaoManual} 
                disabled={loadingSync}
                style={{
                  background: 'var(--corPrimaria)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--bordaRaioMedia)',
                  padding: 'var(--espacamentoPequeno) var(--espacamentoMedio)',
                  cursor: loadingSync ? 'not-allowed' : 'pointer',
                  opacity: loadingSync ? 0.5 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--espacamentoPequeno)'
                }}
              >
                <FontAwesomeIcon icon={faPlay} />
                Sincronizar Agora
              </button>
              <button 
                onClick={limparLogs}
                style={{
                  background: 'var(--corErro)',
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
                <FontAwesomeIcon icon={faTrashAlt} />
                Limpar Logs
              </button>
            </div>

            <div style={{ 
              maxHeight: '400px',
              overflowY: 'auto',
              border: '1px solid var(--corBordaPrimaria)',
              borderRadius: 'var(--bordaRaioMedia)',
              background: 'var(--corFundoPrimaria)'
            }}>
              {loadingSync ? (
                <div style={{ padding: 'var(--espacamentoGrande)', textAlign: 'center' }}>
                  Carregando logs...
                </div>
              ) : syncLogs.length === 0 ? (
                <div style={{ padding: 'var(--espacamentoGrande)', textAlign: 'center', color: 'var(--corTextoSecundaria)' }}>
                  Nenhum log de sincronização encontrado.
                </div>
              ) : (
                syncLogs.map((log) => (
                  <div 
                    key={log.id}
                    style={{
                      padding: 'var(--espacamentoMedio)',
                      borderBottom: '1px solid var(--corBordaPrimaria)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--espacamentoMedio)',
                      background: log.type === 'error' ? 'rgba(220, 53, 69, 0.1)' : 
                               log.type === 'success' ? 'rgba(40, 167, 69, 0.1)' : 
                               'rgba(0, 123, 255, 0.1)',
                      borderLeft: `4px solid ${
                        log.type === 'error' ? '#dc3545' : 
                        log.type === 'success' ? '#28a745' : '#007bff'
                      }`
                    }}
                  >
                    <div style={{
                      color: log.type === 'error' ? '#dc3545' : 
                             log.type === 'success' ? '#28a745' : '#007bff',
                      fontSize: 'var(--tamanhoFonteMedia)',
                      marginTop: '2px'
                    }}>
                      <FontAwesomeIcon icon={getIconeTipo(log.type)} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ 
                        fontWeight: '500', 
                        color: 'var(--corTextoPrimaria)',
                        marginBottom: 'var(--espacamentoPequeno)'
                      }}>
                        {log.message}
                      </div>
                      <div style={{ 
                        fontSize: 'var(--tamanhoFontePequena)', 
                        color: 'var(--corTextoSecundaria)'
                      }}>
                        {formatarTimestamp(log.timestamp)}
                      </div>
                      {log.details && Object.keys(log.details).length > 0 && (
                        <div style={{
                          color: 'var(--corTextoSecundaria)',
                          fontSize: 'var(--tamanhoFontePequena)',
                          marginTop: 'var(--espacamentoPequeno)',
                          fontFamily: 'monospace',
                          background: 'var(--corFundoSecundaria)',
                          padding: 'var(--espacamentoPequeno)',
                          borderRadius: 'var(--bordaRaioPequena)',
                          whiteSpace: 'pre-wrap'
                        }}>
                          {JSON.stringify(log.details, null, 2)}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Configuracoes; 