import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCog, 
  faDatabase, 
  faSync, 
  faTrash, 
  faShieldAlt,
  faTags,
  faPlus,
  faEdit,
  faTimes,
  faUsers,
  faChartBar,
  faRecycle,
  faCrown,
  faExclamationTriangle,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { categoriasAPI } from '../config/api';

const Container = styled.div`
  padding: var(--espacamentoGrande);
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeIn 0.5s ease-out;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: var(--espacamentoExtraGrande);
`;

const Titulo = styled.h1`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: var(--espacamentoMedio);
  animation: fadeIn 0.6s ease-out;
`;

const Subtitulo = styled.p`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFonteGrande);
  animation: fadeIn 0.7s ease-out;
`;

const TabContainer = styled.div`
  background: linear-gradient(135deg, var(--corFundoCard) 0%, var(--corFundoSecundaria) 100%);
  border-radius: var(--bordaRaioGrande);
  box-shadow: var(--sombraMedia);
  border: 2px solid var(--corBordaPrimaria);
  overflow: hidden;
`;

const TabNavigation = styled.div`
  display: flex;
  background: linear-gradient(90deg, var(--corFundoTerciaria) 0%, var(--corFundoSecundaria) 100%);
  border-bottom: 2px solid var(--corBordaPrimaria);
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TabButton = styled.button`
  background: ${props => props.active ? 
    'linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%)' : 
    'transparent'};
  color: ${props => props.active ? 'white' : 'var(--corTextoPrimaria)'};
  border: none;
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  font-weight: ${props => props.active ? '600' : '500'};
  font-size: var(--tamanhoFonteMedia);
  white-space: nowrap;
  position: relative;
  min-width: 140px;
  justify-content: center;
  
  &:hover {
    background: ${props => props.active ? 
      'linear-gradient(135deg, var(--corSecundaria) 0%, var(--corPrimaria) 100%)' : 
      'var(--corFundoHover)'};
    transform: ${props => props.active ? 'translateY(-1px)' : 'none'};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
    opacity: ${props => props.active ? 1 : 0};
    transition: opacity var(--transicaoRapida);
  }
`;

const TabContent = styled.div`
  padding: var(--espacamentoGrande);
  min-height: 500px;
  animation: fadeIn 0.3s ease-out;
`;

const TabPanel = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
`;

const Secao = styled.div`
  background: linear-gradient(135deg, var(--corFundoSecundaria) 0%, var(--corFundoCard) 100%);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoGrande);
  margin-bottom: var(--espacamentoGrande);
  border: 1px solid var(--corBordaPrimaria);
  box-shadow: var(--sombraLeve);
  transition: all var(--transicaoRapida);
  
  &:hover {
    box-shadow: var(--sombraMedia);
    transform: translateY(-2px);
  }
`;

const SecaoTitulo = styled.h2`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--espacamentoMedio);
  font-size: var(--tamanhoFonteExtraGrande);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
`;

const Botao = styled.button`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  color: white;
  border: none;
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  border-radius: var(--bordaRaioMedia);
  cursor: pointer;
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  box-shadow: var(--sombraLeve);

  &:hover {
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

const BotaoSecundario = styled(Botao)`
  background: linear-gradient(135deg, var(--corTextoSecundaria) 0%, var(--corTextoTerciaria) 100%);
  color: var(--corTextoPrimaria);
  border: 2px solid var(--corBordaPrimaria);
  
  &:hover {
    background: linear-gradient(135deg, var(--corTextoTerciaria) 0%, var(--corTextoSecundaria) 100%);
    border-color: var(--corPrimaria);
  }
`;

const BotaoPerigo = styled(Botao)`
  background: linear-gradient(135deg, var(--corErro) 0%, #d32f2f 100%);
  
  &:hover {
    background: linear-gradient(135deg, #d32f2f 0%, var(--corErro) 100%);
  }
`;

const StatusItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--espacamentoMedio);
  background: linear-gradient(135deg, var(--corFundoPrimaria) 0%, var(--corFundoSecundaria) 100%);
  border-radius: var(--bordaRaioMedia);
  margin-bottom: var(--espacamentoMedio);
  border: 1px solid var(--corBordaPrimaria);
  transition: all var(--transicaoRapida);
  
  &:hover {
    border-color: var(--corPrimaria);
    transform: translateX(4px);
  }
`;

const StatusInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--espacamentoPequeno);
`;

const StatusLabel = styled.span`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  font-weight: 500;
`;

const StatusValue = styled.span`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteGrande);
  font-weight: 600;
`;

const StatusIndicator = styled.div`
  width: 12px;
  height: 12px;
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

const GridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoGrande);
`;

const Card = styled.div`
  background: linear-gradient(135deg, var(--corFundoCard) 0%, var(--corFundoSecundaria) 100%);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioGrande);
  padding: var(--espacamentoGrande);
  text-align: center;
  transition: all var(--transicaoMedia);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: var(--sombraLeve);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
    opacity: 0;
    transition: opacity var(--transicaoRapida);
  }
  
  &:hover {
    border-color: var(--corPrimaria);
    transform: translateY(-4px);
    box-shadow: var(--sombraForte);
    
    &::before {
      opacity: 1;
    }
  }
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  color: var(--corPrimaria);
  margin-bottom: var(--espacamentoMedio);
  transition: all var(--transicaoMedia);
  
  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const CardTitulo = styled.h3`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteGrande);
  font-weight: 600;
  margin-bottom: var(--espacamentoMedio);
`;

const CardValor = styled.div`
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 700;
  color: var(--corPrimaria);
  margin-bottom: var(--espacamentoPequeno);
`;

const CardDescricao = styled.div`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ListaCategorias = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--espacamentoMedio);
`;

const CategoriaItem = styled.div`
  background: linear-gradient(135deg, var(--corFundoCard) 0%, var(--corFundoSecundaria) 100%);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedio);
  padding: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoMedio);
  cursor: pointer;
  transition: all var(--transicaoRapida);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--sombraMedia);
    border-color: var(--corPrimaria);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.cor || '#667eea'};
    opacity: 0.8;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 20px 20px 0;
    border-color: transparent ${props => props.cor || '#667eea'} transparent transparent;
    opacity: 0.3;
  }
`;

const CategoriaNome = styled.h3`
  margin: 0 0 var(--espacamentoPequeno) 0;
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
`;

const CategoriaMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--espacamentoMedio);
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  
  .color-info {
    display: flex;
    align-items: center;
    gap: var(--espacamentoMedio);
  }
  
  .actions {
    display: flex;
    align-items: center;
    gap: var(--espacamentoPequeno);
  }
  
  svg {
    cursor: pointer;
    padding: 6px;
    border-radius: var(--bordaRaioPequeno);
    transition: all var(--transicaoRapida);
    
    &:hover {
      background: var(--corFundoHover);
      color: var(--corPrimaria);
    }
  }
`;

const ColorPreview = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoMedio);
`;

const ColorSwatch = styled.div`
  width: 40px;
  height: 40px;
  border-radius: var(--bordaRaioMedio);
  background: ${props => props.cor};
  border: 2px solid var(--corBordaPrimaria);
  box-shadow: var(--sombraPequena);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
  }
`;

const ColorCode = styled.span`
  font-family: 'Courier New', monospace;
  font-weight: 600;
  color: var(--corTextoPrimaria);
  background: linear-gradient(135deg, var(--corFundoSecundaria) 0%, var(--corFundoTerciaria) 100%);
  padding: 6px 12px;
  border-radius: var(--bordaRaioPequeno);
  font-size: var(--tamanhoFontePequena);
  border: 1px solid var(--corBordaPrimaria);
  box-shadow: var(--sombraPequena);
  letter-spacing: 0.5px;
`;

const ColorInput = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  padding: var(--espacamentoPequeno);
  background: var(--corFundoSecundaria);
  border-radius: var(--bordaRaioMedio);
  border: 1px solid var(--corBordaPrimaria);
  
  input[type="color"] {
    width: 50px;
    height: 40px;
    border: none;
    border-radius: var(--bordaRaioMedio);
    cursor: pointer;
    background: none;
    box-shadow: var(--sombraPequena);
    
    &::-webkit-color-swatch-wrapper {
      padding: 0;
    }
    
    &::-webkit-color-swatch {
      border: 2px solid var(--corBordaPrimaria);
      border-radius: var(--bordaRaioMedio);
    }
    
    &:hover {
      transform: scale(1.05);
      transition: transform var(--transicaoRapida);
    }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: var(--espacamentoExtraGrande);
  color: var(--corTextoSecundaria);
`;

const EmptyIcon = styled.div`
  font-size: 4rem;
  color: var(--corTextoTerciaria);
  margin-bottom: var(--espacamentoGrande);
  opacity: 0.5;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--corFundoModal);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--zIndexModal);
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease-out;
`;

const ModalContainer = styled.div`
  background: linear-gradient(135deg, var(--corFundoCard) 0%, var(--corFundoSecundaria) 100%);
  border-radius: var(--bordaRaioGrande);
  padding: var(--espacamentoGrande);
  width: 90%;
  max-width: 500px;
  box-shadow: var(--sombraForte);
  border: 2px solid var(--corBordaPrimaria);
  animation: scaleIn 0.3s ease-out;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--espacamentoGrande);
  padding-bottom: var(--espacamentoMedio);
  border-bottom: 2px solid var(--corBordaPrimaria);
`;

const ModalTitle = styled.h2`
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 700;
  margin: 0;
`;

const CloseButton = styled.button`
  background: linear-gradient(135deg, var(--corErro) 0%, #d32f2f 100%);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  box-shadow: var(--sombraLeve);

  &:hover {
    background: linear-gradient(135deg, #d32f2f 0%, var(--corErro) 100%);
    transform: scale(1.1);
    box-shadow: var(--sombraMedia);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--espacamentoMedio);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--espacamentoPequeno);
`;

const Label = styled.label`
  color: var(--corTextoPrimaria);
  font-weight: 600;
  font-size: var(--tamanhoFonteMedia);
`;

const Input = styled.input`
  padding: var(--espacamentoMedio);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  transition: all var(--transicaoRapida);
  
  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: var(--espacamentoMedio);
  margin-top: var(--espacamentoGrande);
  padding-top: var(--espacamentoMedio);
  border-top: 1px solid var(--corBordaPrimaria);
`;

const SaveButton = styled.button`
  background: linear-gradient(135deg, var(--corSucesso) 0%, #45a049 100%);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  box-shadow: var(--sombraLeve);
  flex: 1;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #45a049 0%, var(--corSucesso) 100%);
    transform: translateY(-2px);
    box-shadow: var(--sombraMedia);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const CancelButton = styled.button`
  background: linear-gradient(135deg, var(--corTextoSecundaria) 0%, var(--corTextoTerciaria) 100%);
  color: var(--corTextoPrimaria);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  box-shadow: var(--sombraLeve);

  &:hover {
    background: linear-gradient(135deg, var(--corTextoTerciaria) 0%, var(--corTextoSecundaria) 100%);
    border-color: var(--corPrimaria);
    transform: translateY(-2px);
    box-shadow: var(--sombraMedia);
  }
`;

const Configuracoes = ({ 
  onAbrirLogs, 
  onAbrirAdmin, 
  syncStatus, 
  lastSync, 
  onSincronizar 
}) => {
  const [categorias, setCategorias] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);
  const [categoriaEditando, setCategoriaEditando] = useState(null);
  const [formData, setFormData] = useState({ nome: '', cor: '#667eea' });
  const [abaAtiva, setAbaAtiva] = useState('categorias');

  useEffect(() => {
    carregarCategorias();
  }, []);

  // Carregar categorias
  const carregarCategorias = async () => {
    try {
      const response = await categoriasAPI.listar();
      setCategorias(response.categorias || []);
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
    }
  };

  const abrirModal = (categoria = null) => {
    if (categoria) {
      setCategoriaEditando(categoria);
      setFormData({ nome: categoria.nome, cor: categoria.cor });
    } else {
      setCategoriaEditando(null);
      setFormData({ nome: '', cor: '#667eea' });
    }
    setModalAberto(true);
  };

  const salvarCategoria = async () => {
    if (!formData.nome.trim()) {
      alert('Nome da categoria é obrigatório');
      return;
    }

    try {
      if (categoriaEditando) {
        await categoriasAPI.atualizar(categoriaEditando.id, formData);
        
        // Forçar sincronização após editar categoria
        if (onSincronizar) {
          await onSincronizar();
        }
        
        // Aguardar um pouco e recarregar categorias
        setTimeout(async () => {
          await carregarCategorias();
          // Forçar atualização do contexto se disponível
          if (window.notasContext && window.notasContext.carregarCategorias) {
            await window.notasContext.carregarCategorias(true);
          }
        }, 1000);
      } else {
        await categoriasAPI.criar(formData);
        
        // Forçar sincronização completa
        if (onSincronizar) {
          await onSincronizar();
        }
        
        // Aguardar um pouco e recarregar categorias
        setTimeout(async () => {
          await carregarCategorias();
          // Forçar atualização do contexto se disponível
          if (window.notasContext && window.notasContext.carregarCategorias) {
            await window.notasContext.carregarCategorias(true);
          }
        }, 1000);
      }
      
      setModalAberto(false);
      carregarCategorias();
    } catch (error) {
      console.error('Erro ao salvar categoria:', error);
      alert('Erro ao salvar categoria');
    }
  };

  const excluirCategoria = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir esta categoria?')) {
      return;
    }

    try {
      await categoriasAPI.deletar(id);
      
      // Forçar sincronização após deletar categoria
      if (onSincronizar) {
        await onSincronizar();
      }
      
      // Aguardar um pouco e recarregar categorias
      setTimeout(async () => {
        await carregarCategorias();
        // Forçar atualização do contexto se disponível
        if (window.notasContext && window.notasContext.carregarCategorias) {
          await window.notasContext.carregarCategorias(true);
        }
      }, 1000);
      
      carregarCategorias();
    } catch (error) {
      console.error('Erro ao excluir categoria:', error);
      alert('Erro ao excluir categoria');
    }
  };

  const abas = [
    {
      id: 'categorias',
      titulo: 'Categorias',
      icone: faTags,
      descricao: 'Gerencie suas categorias de organização'
    },
    {
      id: 'admin',
      titulo: 'Painel Admin',
      icone: faCrown,
      descricao: 'Painel administrativo do sistema'
    },
    {
      id: 'lixeira',
      titulo: 'Lixeira',
      icone: faRecycle,
      descricao: 'Itens excluídos e restauração'
    },
    {
      id: 'sincronizacao',
      titulo: 'Sincronização',
      icone: faSync,
      descricao: 'Configurações de sincronização'
    },
    {
      id: 'sistema',
      titulo: 'Sistema',
      icone: faCog,
      descricao: 'Configurações do sistema'
    }
  ];

  const renderizarConteudoAba = () => {
    switch (abaAtiva) {
      case 'categorias':
        return (
          <Secao>
            <SecaoTitulo>
              <FontAwesomeIcon icon={faTags} />
              Gerenciar Categorias
            </SecaoTitulo>
            
            <Botao onClick={() => abrirModal()}>
              <FontAwesomeIcon icon={faPlus} />
              Nova Categoria
            </Botao>

            {carregando ? (
              <p>Carregando categorias...</p>
            ) : Array.isArray(categorias) && categorias.map((categoria) => {
              if (!categoria || typeof categoria !== 'object' || !categoria.id || !categoria.nome || !categoria.cor) {
                console.error('❌ Categoria inválida:', categoria);
                return null;
              }
              return (
                <CategoriaItem key={categoria.id} onClick={() => abrirModal(categoria)} cor={categoria.cor}>
                  <CategoriaNome>{categoria.nome}</CategoriaNome>
                  <CategoriaMeta>
                    <div className="color-info">
                      <ColorSwatch cor={categoria.cor} />
                      <ColorCode>{categoria.cor}</ColorCode>
                    </div>
                    <div className="actions">
                      <FontAwesomeIcon 
                        icon={faEdit} 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          abrirModal(categoria); 
                        }} 
                      />
                      <FontAwesomeIcon 
                        icon={faTrash} 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          excluirCategoria(categoria.id); 
                        }} 
                      />
                    </div>
                  </CategoriaMeta>
                </CategoriaItem>
              );
            })}
            )}
          </Secao>
        );

      case 'admin':
        return (
          <>
            <Secao>
              <SecaoTitulo>
                <FontAwesomeIcon icon={faCrown} />
                Painel Administrativo
              </SecaoTitulo>
              
              <GridCards>
                <Card>
                  <CardIcon>
                    <FontAwesomeIcon icon={faUsers} />
                  </CardIcon>
                  <CardTitulo>Usuários</CardTitulo>
                  <CardValor>0</CardValor>
                  <CardDescricao>Total de Usuários</CardDescricao>
                </Card>
                
                <Card>
                  <CardIcon>
                    <FontAwesomeIcon icon={faDatabase} />
                  </CardIcon>
                  <CardTitulo>Dados</CardTitulo>
                  <CardValor>0</CardValor>
                  <CardDescricao>Total de Registros</CardDescricao>
                </Card>
                
                <Card>
                  <CardIcon>
                    <FontAwesomeIcon icon={faChartBar} />
                  </CardIcon>
                  <CardTitulo>Estatísticas</CardTitulo>
                  <CardValor>0%</CardValor>
                  <CardDescricao>Taxa de Sucesso</CardDescricao>
                </Card>
              </GridCards>
              
              <Botao onClick={onAbrirAdmin}>
                <FontAwesomeIcon icon={faShieldAlt} />
                Acessar Painel Admin
              </Botao>
            </Secao>
          </>
        );

      case 'lixeira':
        return (
          <Secao>
            <SecaoTitulo>
              <FontAwesomeIcon icon={faRecycle} />
              Lixeira
            </SecaoTitulo>
            
            <EmptyState>
              <EmptyIcon><FontAwesomeIcon icon={faRecycle} /></EmptyIcon>
              <p>Nenhum item na lixeira</p>
              <p>Itens excluídos aparecerão aqui para restauração</p>
            </EmptyState>
          </Secao>
        );

      case 'sincronizacao':
        return (
          <Secao>
            <SecaoTitulo>
              <FontAwesomeIcon icon={faSync} />
              Sincronização
            </SecaoTitulo>
            
            <StatusItem>
              <StatusInfo>
                <StatusLabel>Status</StatusLabel>
                <StatusValue>
                  {syncStatus === 'online' ? 'Online' : 'Offline'}
                </StatusValue>
              </StatusInfo>
              <StatusIndicator status={syncStatus} />
            </StatusItem>

            <StatusItem>
              <StatusInfo>
                <StatusLabel>Última Sincronização</StatusLabel>
                <StatusValue>
                  {lastSync ? new Date(lastSync).toLocaleString('pt-BR') : 'Nunca'}
                </StatusValue>
              </StatusInfo>
            </StatusItem>

            <Botao onClick={onSincronizar} disabled={syncStatus !== 'online'}>
              <FontAwesomeIcon icon={faSync} />
              Sincronizar Manualmente
            </Botao>
          </Secao>
        );

      case 'sistema':
        return (
          <>
            <Secao>
              <SecaoTitulo>
                <FontAwesomeIcon icon={faCog} />
                Sistema
              </SecaoTitulo>
              
              <BotaoSecundario onClick={onAbrirLogs}>
                <FontAwesomeIcon icon={faDatabase} />
                Ver Logs do Sistema
              </BotaoSecundario>
            </Secao>

            <Secao>
              <SecaoTitulo>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                Alertas
              </SecaoTitulo>
              
              <EmptyState>
                <EmptyIcon><FontAwesomeIcon icon={faCheckCircle} /></EmptyIcon>
                <p>Nenhum alerta ativo</p>
                <p>Sistema funcionando normalmente</p>
              </EmptyState>
            </Secao>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Container>
      <Header>
        <Titulo>Configurações</Titulo>
        <Subtitulo>Personalize e configure suas opções de sistema.</Subtitulo>
      </Header>

      <TabContainer>
        <TabNavigation>
          {abas.map(aba => (
            <TabButton 
              key={aba.id}
              active={abaAtiva === aba.id}
              onClick={() => setAbaAtiva(aba.id)}
              title={aba.descricao}
            >
              <FontAwesomeIcon icon={aba.icone} />
              {aba.titulo}
            </TabButton>
          ))}
        </TabNavigation>

        <TabContent>
          {renderizarConteudoAba()}
        </TabContent>
      </TabContainer>

      {/* Modal de Categoria */}
      {modalAberto && (
        <ModalOverlay onClick={() => setModalAberto(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>
                {categoriaEditando ? 'Editar Categoria' : 'Nova Categoria'}
              </ModalTitle>
              <CloseButton onClick={() => setModalAberto(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </CloseButton>
            </ModalHeader>
            
            <Form onSubmit={(e) => { e.preventDefault(); salvarCategoria(); }}>
              <FormGroup>
                <Label>Nome</Label>
                <Input
                  type="text"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  placeholder="Digite o nome da categoria"
                />
              </FormGroup>

              <FormGroup>
                <Label>Cor</Label>
                <ColorInput>
                  <input
                    type="color"
                    value={formData.cor}
                    onChange={(e) => setFormData({ ...formData, cor: e.target.value })}
                  />
                  <ColorSwatch cor={formData.cor} />
                  <ColorCode>{formData.cor}</ColorCode>
                </ColorInput>
              </FormGroup>

              {formData.nome.trim() && (
                <FormGroup>
                  <Label>Preview</Label>
                  <CategoriaItem cor={formData.cor} style={{ cursor: 'default', margin: 0 }}>
                    <CategoriaNome>{formData.nome}</CategoriaNome>
                    <CategoriaMeta>
                      <div className="color-info">
                        <ColorSwatch cor={formData.cor} />
                        <ColorCode>{formData.cor}</ColorCode>
                      </div>
                    </CategoriaMeta>
                  </CategoriaItem>
                </FormGroup>
              )}

              <ButtonGroup>
                <CancelButton type="button" onClick={() => setModalAberto(false)}>
                  Cancelar
                </CancelButton>
                <SaveButton type="submit">
                  Salvar
                </SaveButton>
              </ButtonGroup>
            </Form>
          </ModalContainer>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Configuracoes; 