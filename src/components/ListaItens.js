import React, { useState, useMemo, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faSearch,
  faHeart,
  faFilter,
  faTimes,
  faList,
  faTh,
  faThLarge,
  faThList,
  faCaretDown,
  faStar,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import CardItem from './CardItem';
import { copiarParaClipboard } from '../utils/formatacao';
import NotasLoading from './NotasLoading';

// Animações
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  animation: ${spin} 1s linear infinite;
  color: var(--corPrimaria);
`;

const Container = styled.div`
  padding: ${props => props.tipo === 'nota' ? 'var(--espacamentoMedio)' : 'var(--espacamentoGrande)'};
  min-height: 100vh;
  animation: ${fadeInUp} 0.8s ease-out;

  @media (max-width: 768px) {
    padding: var(--espacamentoPequeno);
  }

  @media (max-width: 480px) {
    padding: var(--espacamentoPequeno);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.tipo === 'nota' ? 'var(--espacamentoMedio)' : 'var(--espacamentoGrande)'};
  flex-wrap: wrap;
  gap: var(--espacamentoMedio);
  animation: ${slideInLeft} 0.6s ease-out;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: var(--espacamentoPequeno);
    margin-bottom: var(--espacamentoMedio);
  }

  @media (max-width: 480px) {
    gap: var(--espacamentoPequeno);
    margin-bottom: var(--espacamentoMedio);
  }
`;

const TituloSecao = styled.h1`
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteTitulo);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  margin: 0;

  @media (max-width: 768px) {
    font-size: var(--tamanhoFonteExtraGrande);
    gap: var(--espacamentoPequeno);
  }

  @media (max-width: 480px) {
    font-size: var(--tamanhoFonteGrande);
  }
`;

const Contador = styled.span`
  background: var(--corPrimaria);
  color: var(--corTextoClara);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: var(--tamanhoFontePequena);
  font-weight: 600;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const ContainerBotoes = styled.div`
  display: flex;
  gap: var(--espacamentoMedio);
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    gap: var(--espacamentoPequeno);
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media (max-width: 480px) {
    gap: var(--espacamentoPequeno);
    flex-direction: column;
    width: 100%;
    align-items: stretch;
  }
`;

const ContainerBusca = styled.div`
  position: relative;
  min-width: 250px;

  @media (max-width: 768px) {
    min-width: 200px;
  }

  @media (max-width: 480px) {
    min-width: 100%;
  }
`;

const InputBusca = styled.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  font-size: var(--tamanhoFonteMedia);
  transition: all var(--transicaoRapida);

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: var(--corTextoSecundaria);
  }

  @media (max-width: 768px) {
    padding: 10px 10px 10px 35px;
    font-size: var(--tamanhoFontePequena);
    min-height: 44px;
  }

  @media (max-width: 480px) {
    padding: 8px 8px 8px 30px;
    font-size: var(--tamanhoFontePequena);
    min-height: 44px;
  }
`;

const IconeBusca = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--corTextoTerciaria);
`;

const ContainerFiltros = styled.div`
  display: flex;
  gap: var(--espacamentoPequeno);
  align-items: center;
`;

const BotaoFiltro = styled.button`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  background: var(--corFundoSecundaria);
  color: var(--corTextoPrimaria);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  min-height: 44px;
  min-width: 80px;
  justify-content: center;
  position: relative;

  &:hover {
    background: var(--corFundoTerciaria);
    border-color: var(--corPrimaria);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &.ativo {
    background: var(--corPrimaria);
    color: var(--corTextoClara);
    border-color: var(--corPrimaria);
  }

  ${props => props.loading && `
    pointer-events: none;
    opacity: 0.7;
  `}

  @media (max-width: 768px) {
    padding: var(--espacamentoPequeno) var(--espacamentoMedio);
    font-size: var(--tamanhoFontePequena);
    min-width: 70px;
  }

  @media (max-width: 480px) {
    padding: var(--espacamentoPequeno);
    font-size: var(--tamanhoFontePequena);
    min-width: 60px;
  }
`;

// Botão de filtro de favoritos
const BotaoFavoritos = styled(BotaoFiltro)`
  &.ativo {
    background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
    color: #000;
    border-color: #FFD700;
  }
`;

const BotaoAcao = styled.button`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  padding: var(--espacamentoMedio) var(--espacamentoGrande);
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  color: var(--corTextoClara);
  border: none;
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transicaoRapida);
  min-height: 44px;
  white-space: nowrap;
  position: relative;

  &:hover {
    background: linear-gradient(135deg, var(--corSecundaria) 0%, var(--corPrimaria) 100%);
    transform: translateY(-2px);
    box-shadow: var(--sombraForte);
  }

  &:active {
    transform: translateY(0);
  }

  ${props => props.loading && `
    pointer-events: none;
    opacity: 0.7;
  `}

  @media (max-width: 768px) {
    padding: var(--espacamentoPequeno) var(--espacamentoMedio);
    font-size: var(--tamanhoFontePequena);
    min-height: 44px;
  }

  @media (max-width: 480px) {
    padding: var(--espacamentoPequeno);
    font-size: var(--tamanhoFontePequena);
    min-height: 44px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => {
    if (props.tipo === 'link') {
      return 'repeat(auto-fill, minmax(140px, 1fr))';
    }
    
    switch (props.visualizacao) {
      case 'lista':
        return '1fr';
      case 'grade2':
        return 'repeat(2, 1fr)';
      case 'grade4':
        return 'repeat(4, 1fr)';
      case 'grade6':
        return 'repeat(6, 1fr)';
      default:
        return 'repeat(auto-fill, minmax(300px, 1fr))';
    }
  }};
  gap: ${props => props.tipo === 'link' ? '8px' : 'var(--espacamentoGrande)'};
  margin-top: var(--espacamentoGrande);
  animation: ${fadeInUp} 1s ease-out 0.3s both;

  @media (max-width: 768px) {
    grid-template-columns: ${props => {
      if (props.tipo === 'link') {
        return 'repeat(auto-fill, minmax(120px, 1fr))';
      }
      
      switch (props.visualizacao) {
        case 'lista':
          return '1fr';
        case 'grade2':
          return 'repeat(2, 1fr)';
        case 'grade4':
          return 'repeat(2, 1fr)';
        case 'grade6':
          return 'repeat(3, 1fr)';
        default:
          return 'repeat(auto-fill, minmax(250px, 1fr))';
      }
    }};
    gap: ${props => props.tipo === 'link' ? '6px' : 'var(--espacamentoMedio)'};
    margin-top: var(--espacamentoMedio);
  }

  @media (max-width: 480px) {
    grid-template-columns: ${props => {
      if (props.tipo === 'link') {
        return 'repeat(auto-fill, minmax(100px, 1fr))';
      }
      
      switch (props.visualizacao) {
        case 'lista':
          return '1fr';
        case 'grade2':
        case 'grade4':
        case 'grade6':
          return '1fr';
        default:
          return '1fr';
      }
    }};
    gap: ${props => props.tipo === 'link' ? '4px' : 'var(--espacamentoPequeno)'};
    margin-top: var(--espacamentoPequeno);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: var(--espacamentoExtraGrande);
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFonteGrande);
  animation: ${fadeInUp} 1s ease-out;

  @media (max-width: 768px) {
    padding: var(--espacamentoGrande);
    font-size: var(--tamanhoFonteMedia);
  }

  @media (max-width: 480px) {
    padding: var(--espacamentoMedio);
    font-size: var(--tamanhoFontePequena);
  }
`;

const IconeVazio = styled.div`
  font-size: 4rem;
  color: var(--corTextoTerciaria);
  margin-bottom: var(--espacamentoMedio);
  animation: ${pulse} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const FiltroContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--espacamentoMedio);
  margin-bottom: var(--espacamentoMedio);
  flex-wrap: wrap;
  animation: ${slideInLeft} 0.8s ease-out 0.2s both;

  @media (max-width: 768px) {
    gap: var(--espacamentoPequeno);
    margin-bottom: var(--espacamentoPequeno);
  }
`;

const BotaoLimparFiltro = styled.button`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  background: var(--corFundoTerciaria);
  color: var(--corTextoSecundaria);
  border: 1px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFontePequena);
  cursor: pointer;
  transition: all var(--transicaoRapida);

  &:hover {
    background: var(--corFundoSecundaria);
    color: var(--corTextoPrimaria);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: var(--espacamentoPequeno);
    font-size: var(--tamanhoFontePequena);
  }
`;

const ContadorFiltros = styled.span`
  color: var(--corTextoSecundaria);
  font-size: var(--tamanhoFontePequena);
  font-style: italic;
`;

// Componentes de dropdown existentes...
const DropdownCategoria = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownBotao = styled.button`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transicaoMedia);
  min-height: 44px;
  min-width: 180px;
  justify-content: space-between;

  &:hover {
    border-color: var(--corPrimaria);
    background: var(--corFundoSecundaria);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  @media (max-width: 768px) {
    padding: var(--espacamentoPequeno);
    font-size: var(--tamanhoFontePequena);
    min-width: 150px;
  }

  @media (max-width: 480px) {
    padding: var(--espacamentoPequeno);
    font-size: var(--tamanhoFontePequena);
    min-width: 120px;
  }
`;

const SetaDropdown = styled.div`
  transform: ${props => props.aberto ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform var(--transicaoRapida);
`;

const DropdownLista = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--corFundoPrimaria);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  box-shadow: var(--sombraForte);
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
  opacity: ${props => props.aberto ? 1 : 0};
  visibility: ${props => props.aberto ? 'visible' : 'hidden'};
  transform: ${props => props.aberto ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all var(--transicaoRapida);
`;

const DropdownItem = styled.div`
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  cursor: pointer;
  transition: background var(--transicaoRapida);
  background: ${props => props.selecionado ? 'var(--corPrimaria)' : 'transparent'};
  color: ${props => props.selecionado ? 'var(--corTextoClara)' : 'var(--corTextoPrimaria)'};

  &:hover {
    background: ${props => props.selecionado ? 'var(--corSecundaria)' : 'var(--corFundoSecundaria)'};
  }

  &:first-child {
    border-radius: var(--bordaRaioMedia) var(--bordaRaioMedia) 0 0;
  }

  &:last-child {
    border-radius: 0 0 var(--bordaRaioMedia) var(--bordaRaioMedia);
  }
`;

const VisualizacaoDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const BotaoVisualizacao = styled.button`
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  background: var(--corFundoPrimaria);
  color: var(--corTextoPrimaria);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transicaoMedia);
  min-height: 44px;
  min-width: 120px;
  justify-content: center;

  &:hover {
    border-color: var(--corPrimaria);
    background: var(--corFundoSecundaria);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  @media (max-width: 768px) {
    padding: var(--espacamentoPequeno);
    font-size: var(--tamanhoFontePequena);
    min-width: 100px;
  }

  @media (max-width: 480px) {
    padding: var(--espacamentoPequeno);
    font-size: var(--tamanhoFontePequena);
    min-width: 90px;
  }
`;

const DropdownVisualizacao = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: var(--corFundoPrimaria);
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  box-shadow: var(--sombraForte);
  z-index: 1000;
  min-width: 150px;
  opacity: ${props => props.ativo ? 1 : 0};
  visibility: ${props => props.ativo ? 'visible' : 'hidden'};
  transform: ${props => props.ativo ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all var(--transicaoRapida);
`;

const OpcaoVisualizacao = styled.div`
  padding: var(--espacamentoPequeno) var(--espacamentoMedio);
  cursor: pointer;
  transition: background var(--transicaoRapida);
  display: flex;
  align-items: center;
  gap: var(--espacamentoPequeno);

  &:hover {
    background: var(--corFundoSecundaria);
  }

  &.ativo {
    background: var(--corPrimaria);
    color: var(--corTextoClara);
  }

  &:first-child {
    border-radius: var(--bordaRaioMedia) var(--bordaRaioMedia) 0 0;
  }

  &:last-child {
    border-radius: 0 0 var(--bordaRaioMedia) var(--bordaRaioMedia);
  }
`;

const ListaItens = ({
  itens = [],
  tipo = 'nota',
  titulo = 'Itens',
  icone = faList,
  onNovo,
  onEditar,
  onExcluir,
  onVisualizar,
  onExportar,
  onImprimir,
  onTelaCheia,
  onFavoritar,
  categorias
}) => {
  const [termoBusca, setTermoBusca] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('todas');
  const [filtroFavoritos, setFiltroFavoritos] = useState(false);
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const [visualizacao, setVisualizacao] = useState('auto');
  const [dropdownVisualizacaoAberto, setDropdownVisualizacaoAberto] = useState(false);
  const [loadingStates, setLoadingStates] = useState({
    novo: false,
    buscar: false,
    filtrar: false
  });

  // Usar categorias passadas como prop ou extrair dos itens se não fornecidas
  const categoriasUnicas = useMemo(() => {
    console.log('🔍 Processando categorias no ListaItens:', { categorias, itens: itens?.length });
    
    // Se categorias foram passadas como prop, usar elas
    if (categorias && Array.isArray(categorias) && categorias.length > 0) {
      const categoriasProcessadas = categorias.map(cat => {
        if (typeof cat === 'object' && cat && cat.nome) {
          return cat.nome;
        }
        return cat;
      }).filter(Boolean);
      
      console.log('📦 Categorias processadas:', categoriasProcessadas);
      return categoriasProcessadas.sort();
    }
    
    // Caso contrário, extrair categorias únicas dos itens
    const categoriasExtraidas = itens
      .filter(item => item && typeof item === 'object') // Filtrar itens null/undefined
      .map(item => {
        // Verificar diferentes possíveis localizações da categoria
        const categoria = item.categoria || item.topico || null;
        if (!categoria) return null;
        
        // Extrair nome da categoria de diferentes formatos
        if (typeof categoria === 'object' && categoria) {
          return categoria.nome || categoria.titulo || categoria.id || null;
        } else {
          return categoria;
        }
      })
      .filter(Boolean);
    
    const resultado = [...new Set(categoriasExtraidas)].sort();
    console.log('📋 Categorias extraídas dos itens:', resultado);
    return resultado;
  }, [itens, categorias]);

  // Filtrar itens baseado nos filtros aplicados
  const itensFiltrados = useMemo(() => {
    console.log('🔍 Aplicando filtros:', { 
      categoriaFiltro, 
      termoBusca, 
      filtroFavoritos, 
      totalItens: itens?.length 
    });
    
    // Filtrar itens null/undefined primeiro
    let filtrados = itens.filter(item => item && typeof item === 'object');

    // Filtro por termo de busca
    if (termoBusca) {
      const termo = termoBusca.toLowerCase();
      filtrados = filtrados.filter(item => {
        const titulo = item.titulo?.toLowerCase() || '';
        const nome = item.nome?.toLowerCase() || '';
        const conteudo = item.conteudo?.toLowerCase() || '';
        const url = item.url?.toLowerCase() || '';
        return titulo.includes(termo) || nome.includes(termo) || conteudo.includes(termo) || url.includes(termo);
      });
      console.log('🔍 Após filtro de busca:', filtrados.length, 'itens');
    }

    // Filtro por categoria
    if (categoriaFiltro !== 'todas') {
      console.log('🔍 Aplicando filtro de categoria:', categoriaFiltro);
      filtrados = filtrados.filter(item => {
        // Verificar diferentes possíveis localizações da categoria
        const categoria = item.categoria || item.topico || null;
        if (!categoria) {
          console.log('❌ Item sem categoria:', item.titulo || item.nome);
          return false;
        }
        
        // Extrair nome da categoria de diferentes formatos
        let nomeCategoria;
        if (typeof categoria === 'object' && categoria) {
          nomeCategoria = categoria.nome || categoria.titulo || categoria.id || null;
        } else {
          nomeCategoria = categoria;
        }
        
        if (!nomeCategoria) {
          console.log('❌ Não foi possível extrair nome da categoria:', categoria);
          return false;
        }
        
        const match = nomeCategoria === categoriaFiltro;
        console.log('🔍 Comparando:', { 
          itemTitulo: item.titulo || item.nome, 
          categoriaOriginal: categoria,
          nomeCategoria, 
          categoriaFiltro, 
          match 
        });
        return match;
      });
      console.log('🔍 Após filtro de categoria:', filtrados.length, 'itens');
    }

    // Filtro por favoritos (apenas para notas)
    if (filtroFavoritos && tipo === 'nota') {
      filtrados = filtrados.filter(item => item.favorita === true);
      console.log('🔍 Após filtro de favoritos:', filtrados.length, 'itens');
    }

    console.log('✅ Filtros aplicados. Resultado final:', filtrados.length, 'itens');
    return filtrados;
  }, [itens, termoBusca, categoriaFiltro, filtroFavoritos, tipo]);

  const setLoading = (action, loading) => {
    setLoadingStates(prev => ({
      ...prev,
      [action]: loading
    }));
  };

  const limparFiltros = () => {
    setTermoBusca('');
    setCategoriaFiltro('todas');
    setFiltroFavoritos(false);
  };

  const toggleDropdownVisualizacao = () => {
    setDropdownVisualizacaoAberto(!dropdownVisualizacaoAberto);
  };

  const selecionarVisualizacao = (novaVisualizacao) => {
    setVisualizacao(novaVisualizacao);
    setDropdownVisualizacaoAberto(false);
  };

  const getIconeVisualizacao = () => {
    switch (visualizacao) {
      case 'lista':
        return faThList;
      case 'grade2':
        return faTh;
      case 'grade4':
      case 'grade6':
        return faThLarge;
      default:
        return faThLarge;
    }
  };

  const getTextoVisualizacao = () => {
    switch (visualizacao) {
      case 'lista':
        return 'Lista';
      case 'grade2':
        return '2 Colunas';
      case 'grade4':
        return '4 Colunas';
      case 'grade6':
        return '6 Colunas';
      default:
        return 'Auto';
    }
  };

  const temFiltrosAtivos = termoBusca || categoriaFiltro !== 'todas' || filtroFavoritos;

  const handleCopiar = async (item) => {
    try {
      const textoParaCopiar = tipo === 'nota' 
        ? `${item.titulo || 'Sem título'}\n\n${item.conteudo || ''}`
        : `${item.nome || item.titulo || 'Sem título'}\n${item.url || ''}`;
      
      await copiarParaClipboard(textoParaCopiar);
    } catch (error) {
      console.error('Erro ao copiar:', error);
    }
  };

  const handleClickLink = (link) => {
    window.open(link.url, '_blank');
  };

  const handleTelaCheia = (nota) => {
    if (onTelaCheia) {
      onTelaCheia(nota);
    }
  };

  const handleFavoritar = (id, favorita) => {
    if (onFavoritar) {
      onFavoritar(id, favorita);
    }
  };

  const handleNovo = async () => {
    if (onNovo) {
      setLoading('novo', true);
      try {
        await onNovo();
      } finally {
        setLoading('novo', false);
      }
    }
  };

  // Se for tipo 'link', renderizar grade de links
  if (tipo === 'link') {
    return (
      <Container tipo={tipo}>
        <Header tipo={tipo}>
          <TituloSecao>
            <FontAwesomeIcon icon={icone} />
            {titulo}
            <Contador>{itens.length}</Contador>
          </TituloSecao>

          <ContainerBotoes>
            <ContainerBusca>
              <IconeBusca>
                <FontAwesomeIcon icon={faSearch} />
              </IconeBusca>
              <InputBusca
                type="text"
                placeholder="Buscar links..."
                value={termoBusca}
                onChange={(e) => setTermoBusca(e.target.value)}
              />
            </ContainerBusca>

            <BotaoAcao onClick={handleNovo} loading={loadingStates.novo}>
              {loadingStates.novo ? (
                <LoadingSpinner>
                  <FontAwesomeIcon icon={faSpinner} />
                </LoadingSpinner>
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
              Novo Link
            </BotaoAcao>
          </ContainerBotoes>
        </Header>

        {itensFiltrados.length === 0 ? (
          <EmptyState>
            <IconeVazio>
              <FontAwesomeIcon icon={icone} />
            </IconeVazio>
            <h3>Nenhum link encontrado</h3>
            <p>Clique em "Novo Link" para começar a adicionar seus links favoritos.</p>
          </EmptyState>
        ) : (
          <GridContainer tipo={tipo} visualizacao={visualizacao}>
            {itensFiltrados.map((link) => (
              <CardItem
                key={link.id}
                item={link}
                tipo="link"
                onEditar={() => onEditar(link)}
                onExcluir={() => onExcluir(link.id)}
                onVisualizar={() => handleClickLink(link)}
                onCopiar={() => handleCopiar(link)}
                // Não passar onTelaCheia para links
              />
            ))}
          </GridContainer>
        )}
      </Container>
    );
  }

  // Renderizar lista de notas
  return (
    <Container tipo={tipo}>
      <Header tipo={tipo}>
        <TituloSecao>
          <FontAwesomeIcon icon={icone} />
          {titulo}
          <Contador>{itens.length}</Contador>
        </TituloSecao>

        <ContainerBotoes>
          <ContainerBusca>
            <IconeBusca>
              <FontAwesomeIcon icon={faSearch} />
            </IconeBusca>
            <InputBusca
              type="text"
              placeholder="Buscar notas..."
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
            />
          </ContainerBusca>

          {/* Filtro de favoritos */}
          <BotaoFavoritos
            className={filtroFavoritos ? 'ativo' : ''}
            onClick={() => setFiltroFavoritos(!filtroFavoritos)}
            title={filtroFavoritos ? "Mostrar todas as notas" : "Mostrar apenas favoritas"}
          >
            <FontAwesomeIcon icon={faStar} />
            Favoritas
          </BotaoFavoritos>

          {/* Filtro de categoria customizado */}
          <DropdownCategoria>
            <DropdownBotao
              onClick={() => setDropdownAberto((aberto) => !aberto)}
              tabIndex={0}
              onBlur={() => setTimeout(() => setDropdownAberto(false), 150)}
              aria-haspopup="listbox"
              aria-expanded={dropdownAberto}
            >
              <FontAwesomeIcon icon={faList} style={{ marginRight: 8 }} />
              {categoriaFiltro === 'todas' ? 'Todas as categorias' : categoriaFiltro}
              <SetaDropdown aberto={dropdownAberto}>
                <svg width="16" height="16" viewBox="0 0 16 16"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
              </SetaDropdown>
            </DropdownBotao>
            <DropdownLista aberto={dropdownAberto} tabIndex={-1} role="listbox">
              <DropdownItem
                selecionado={categoriaFiltro === 'todas'}
                onClick={() => { setCategoriaFiltro('todas'); setDropdownAberto(false); }}
                role="option"
                aria-selected={categoriaFiltro === 'todas'}
              >
                Todas as categorias
              </DropdownItem>
              {categoriasUnicas.map((categoria) => (
                <DropdownItem
                  key={categoria}
                  selecionado={categoriaFiltro === categoria}
                  onClick={() => { setCategoriaFiltro(categoria); setDropdownAberto(false); }}
                  role="option"
                  aria-selected={categoriaFiltro === categoria}
                >
                  {categoria}
                </DropdownItem>
              ))}
            </DropdownLista>
          </DropdownCategoria>

          {/* Botão de Visualização - Apenas para notas */}
          {tipo === 'nota' && (
            <VisualizacaoDropdown data-dropdown="visualizacao">
              <BotaoVisualizacao
                onClick={toggleDropdownVisualizacao}
                onBlur={() => setTimeout(() => setDropdownVisualizacaoAberto(false), 150)}
              >
                <FontAwesomeIcon icon={getIconeVisualizacao()} />
                {getTextoVisualizacao()}
                <FontAwesomeIcon icon={faCaretDown} />
              </BotaoVisualizacao>
              
              <DropdownVisualizacao ativo={dropdownVisualizacaoAberto}>
                <OpcaoVisualizacao
                  className={visualizacao === 'auto' ? 'ativo' : ''}
                  onClick={() => selecionarVisualizacao('auto')}
                >
                  <FontAwesomeIcon icon={faThLarge} />
                  Auto
                </OpcaoVisualizacao>
                
                <OpcaoVisualizacao
                  className={visualizacao === 'lista' ? 'ativo' : ''}
                  onClick={() => selecionarVisualizacao('lista')}
                >
                  <FontAwesomeIcon icon={faThList} />
                  Lista
                </OpcaoVisualizacao>
                
                <OpcaoVisualizacao
                  className={visualizacao === 'grade2' ? 'ativo' : ''}
                  onClick={() => selecionarVisualizacao('grade2')}
                >
                  <FontAwesomeIcon icon={faTh} />
                  2 Colunas
                </OpcaoVisualizacao>
                
                <OpcaoVisualizacao
                  className={visualizacao === 'grade4' ? 'ativo' : ''}
                  onClick={() => selecionarVisualizacao('grade4')}
                >
                  <FontAwesomeIcon icon={faThLarge} />
                  4 Colunas
                </OpcaoVisualizacao>
                
                <OpcaoVisualizacao
                  className={visualizacao === 'grade6' ? 'ativo' : ''}
                  onClick={() => selecionarVisualizacao('grade6')}
                >
                  <FontAwesomeIcon icon={faThLarge} />
                  6 Colunas
                </OpcaoVisualizacao>
              </DropdownVisualizacao>
            </VisualizacaoDropdown>
          )}

          <BotaoAcao onClick={handleNovo} loading={loadingStates.novo}>
            {loadingStates.novo ? (
              <LoadingSpinner>
                <FontAwesomeIcon icon={faSpinner} />
              </LoadingSpinner>
            ) : (
              <FontAwesomeIcon icon={faPlus} />
            )}
            Nova Nota
          </BotaoAcao>
        </ContainerBotoes>
      </Header>

      {/* Filtro por categoria/tópico */}
      {(categoriasUnicas.length > 0 || filtroFavoritos) && (
        <FiltroContainer>
          {temFiltrosAtivos && (
            <BotaoLimparFiltro onClick={limparFiltros}>
              <FontAwesomeIcon icon={faTimes} />
              Limpar Filtros
            </BotaoLimparFiltro>
          )}

          {temFiltrosAtivos && (
            <ContadorFiltros>
              {itensFiltrados.length} de {itens.length}
            </ContadorFiltros>
          )}
        </FiltroContainer>
      )}

      {itensFiltrados.length === 0 ? (
        <EmptyState>
          <IconeVazio>
            <FontAwesomeIcon icon={icone} />
          </IconeVazio>
          <h3>
            {temFiltrosAtivos 
              ? 'Nenhuma nota encontrada com os filtros aplicados' 
              : 'Nenhuma nota encontrada'
            }
          </h3>
          <p>
            {temFiltrosAtivos 
              ? 'Tente ajustar os filtros ou clique em "Limpar Filtros" para ver todas as notas.'
              : 'Clique em "Nova Nota" para começar a criar suas anotações.'
            }
          </p>
          {temFiltrosAtivos && (
            <BotaoLimparFiltro 
              onClick={limparFiltros}
              style={{ marginTop: 'var(--espacamentoMedio)' }}
            >
              <FontAwesomeIcon icon={faTimes} />
              Limpar Filtros
            </BotaoLimparFiltro>
          )}
        </EmptyState>
      ) : (
        <GridContainer tipo={tipo} visualizacao={visualizacao}>
          {itensFiltrados.map((nota) => (
            <CardItem
              key={nota.id}
              item={nota}
              tipo="nota"
              onEditar={() => onEditar(nota)}
              onExcluir={() => onExcluir(nota.id)}
              onVisualizar={() => onVisualizar(nota)}
              onCopiar={() => handleCopiar(nota)}
              onExportar={() => onExportar(nota)}
              onImprimir={() => onImprimir(nota)}
              onTelaCheia={() => handleTelaCheia(nota)}
              onFavoritar={handleFavoritar}
            />
          ))}
        </GridContainer>
      )}
    </Container>
  );
};

export default ListaItens; 